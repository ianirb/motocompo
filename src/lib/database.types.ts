export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          status: string
          subscription_source: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          status?: string
          subscription_source: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          status?: string
          subscription_source?: string
          created_at?: string
        }
      }
    }
  }
}