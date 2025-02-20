import { createClient } from '@supabase/supabase-js';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { Database } from '../src/lib/database.types';

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { email } = req.body;

    // Validate email format
    if (!email || !isValidEmail(email)) {
      console.log(`Invalid email format: ${email}`);
      res.status(400).json({ error: 'Invalid email format' });
      return;
    }

    // Check if email already exists
    const { data: existingSubscriber, error: queryError } = await supabase
      .from('newsletter_subscribers')
      .select('id')
      .eq('email', email)
      .single();

    if (queryError && queryError.code !== 'PGRST116') {
      console.error('Error checking existing subscriber:', queryError);
      res.status(500).json({ error: 'Failed to check subscription status' });
      return;
    }

    if (existingSubscriber) {
      console.log(`Email already subscribed: ${email}`);
      res.status(409).json({ error: 'Email already subscribed' });
      return;
    }

    // Insert new subscriber
    const { error: insertError } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email,
          subscription_source: 'website',
          status: 'active'
        }
      ]);

    if (insertError) {
      console.error('Error inserting subscriber:', insertError);
      res.status(500).json({ error: 'Failed to subscribe' });
      return;
    }

    console.log(`Successfully subscribed: ${email}`);
    res.status(201).json({ message: 'Successfully subscribed' });

  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}