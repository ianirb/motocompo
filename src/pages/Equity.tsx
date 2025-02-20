import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Rocket, Target, HandshakeIcon, FileText, Cog, Zap, HeartHandshake, ChevronDown } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: 'Initial Assessment',
    description: 'We evaluate your business potential and AI implementation opportunities.',
    color: '#FF6F00'
  },
  {
    icon: Rocket,
    title: 'Growth Strategy',
    description: 'Develop a customized AI strategy to accelerate your business growth.',
    color: '#FF3B30'
  },
  {
    icon: HandshakeIcon,
    title: 'Partnership',
    description: 'Form a strategic partnership with shared risk and reward.',
    color: '#8C1AFF'
  }
];

const workflow = [
  {
    icon: FileText,
    title: 'Application',
    description: 'Submit your business details and goals',
    color: '#FF6F00'
  },
  {
    icon: Cog,
    title: 'Assessment',
    description: 'We analyze your AI implementation potential',
    color: '#FF3B30'
  },
  {
    icon: Zap,
    title: 'Strategy',
    description: 'Develop custom AI solutions and growth plan',
    color: '#8C1AFF'
  },
  {
    icon: HeartHandshake,
    title: 'Partnership',
    description: 'Finalize terms and begin implementation',
    color: '#FF6F00'
  }
];

const faqs = [
  {
    question: "What percentage of equity do you typically take?",
    answer: "Our equity partnerships are customized based on the scope of AI implementation and potential value creation. We typically structure deals between 5-20% equity, determined through mutual discussion and agreement."
  },
  {
    question: "How long does the partnership process take?",
    answer: "The timeline varies by project complexity, but typically takes 2-4 weeks from application to partnership agreement, followed by 4-8 weeks for initial AI system implementation."
  },
  {
    question: "What types of businesses do you partner with?",
    answer: "We partner with growth-oriented businesses across various sectors that can benefit from AI automation. Ideal partners have established operations and clear scaling opportunities through AI implementation."
  },
  {
    question: "What happens after the partnership is formed?",
    answer: "We become active partners in your growth, providing ongoing AI system optimization, technical support, and strategic guidance to ensure long-term success."
  },
  {
    question: "Can I buy out the equity stake later?",
    answer: "Yes, our agreements typically include buy-out provisions that can be exercised after certain milestones or time periods, with terms negotiated during the initial partnership formation."
  }
];

export function Equity() {
  return (
    <div className="py-24">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute transform rotate-12 bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] h-96 w-full opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Equity Partnership</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Join forces with Irby AI Solutions and accelerate your growth through our innovative equity partnership program.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdgoJOxqvgvrARhdvMI_gMwWV4AduvNrzEzU8eH-DNLq4MK6g/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="primary"
                className="text-lg px-8 py-4 transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  boxShadow: '0 0 20px rgba(255,111,0,0.2)'
                }}
              >
                Apply Now
              </Button>
            </a>
          </div>

          {/* Steps Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-[#F8F4ED] rounded-lg border-[3px] transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 overflow-hidden"
                  style={{ borderColor: step.color }}
                >
                  {/* Motocompo-inspired diagonal stripes */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 -rotate-45 transform origin-top-right opacity-10"
                    style={{ 
                      background: `repeating-linear-gradient(45deg, ${step.color}, ${step.color} 2px, transparent 2px, transparent 8px)`
                    }}
                  ></div>

                  {/* Scanline texture */}
                  <div className="absolute inset-0 opacity-5">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div 
                        key={i}
                        className="h-px w-full"
                        style={{ 
                          background: `rgba(0,0,0,0.1)`,
                          marginTop: `${i * 4}px`
                        }}
                      ></div>
                    ))}
                  </div>

                  <div className="relative p-6 h-full flex flex-col">
                    {/* Icon with glow effect */}
                    <div className="mb-4 relative">
                      <Icon 
                        className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 relative z-10" 
                        style={{ color: step.color }}
                      />
                      <div 
                        className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{ backgroundColor: step.color }}
                      ></div>
                    </div>

                    {/* Content */}
                    <h3 
                      className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                      style={{ 
                        backgroundImage: `linear-gradient(to right, ${step.color}, ${step.color})` 
                      }}
                    >
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* How Does it Work Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-16">How Does it Work?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-[#F8F4ED] rounded-lg border-[3px] transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 overflow-hidden"
                    style={{ borderColor: step.color }}
                  >
                    {/* Motocompo-inspired diagonal stripes */}
                    <div 
                      className="absolute top-0 right-0 w-24 h-24 -rotate-45 transform origin-top-right opacity-10"
                      style={{ 
                        background: `repeating-linear-gradient(45deg, ${step.color}, ${step.color} 2px, transparent 2px, transparent 8px)`
                      }}
                    ></div>

                    {/* Scanline texture */}
                    <div className="absolute inset-0 opacity-5">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div 
                          key={i}
                          className="h-px w-full"
                          style={{ 
                            background: `rgba(0,0,0,0.1)`,
                            marginTop: `${i * 4}px`
                          }}
                        ></div>
                      ))}
                    </div>

                    <div className="relative p-6">
                      {/* Step Number */}
                      <div 
                        className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: step.color }}
                      >
                        {index + 1}
                      </div>

                      {/* Icon with glow effect */}
                      <div className="mb-4 relative">
                        <Icon 
                          className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 relative z-10" 
                          style={{ color: step.color }}
                        />
                        <div 
                          className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{ backgroundColor: step.color }}
                        ></div>
                      </div>

                      {/* Content */}
                      <h3 
                        className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                        style={{ 
                          backgroundImage: `linear-gradient(to right, ${step.color}, ${step.color})` 
                        }}
                      >
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-700 text-sm">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-[#F8F4ED] rounded-lg border-[3px] border-[#FF6F00] overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-bold pr-8">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdgoJOxqvgvrARhdvMI_gMwWV4AduvNrzEzU8eH-DNLq4MK6g/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="primary"
                className="text-lg px-8 py-4 transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  boxShadow: '0 0 20px rgba(255,111,0,0.2)'
                }}
              >
                Apply Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}