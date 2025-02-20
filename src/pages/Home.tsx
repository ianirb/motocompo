import { Bot, Brain, Zap, ArrowRight, Cpu, Users, Workflow, Target, CheckCircle, FileText, Route, PenTool as Tool, Clock, Shield, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { TestimonialSlider } from '../components/TestimonialSlider';

export default function Home() {
  const benefits = [
    {
      title: "Convert More Leads",
      description: "AI-powered lead qualification and nurturing that works 24/7 to convert prospects into customers.",
      icon: Target,
      color: "#FF6F00"
    },
    {
      title: "Automate Customer Interactions",
      description: "Smart chatbots and automated responses that handle inquiries instantly, any time of day.",
      icon: Users,
      color: "#FF3B30"
    },
    {
      title: "Streamline Operations",
      description: "Intelligent workflow automation that reduces manual tasks and eliminates bottlenecks.",
      icon: Workflow,
      color: "#8C1AFF"
    },
    {
      title: "Scale Without Extra Overhead",
      description: "Grow your business efficiently with AI systems that scale automatically with your needs.",
      icon: Cpu,
      color: "#FF6F00"
    }
  ];

  const auditFeatures = [
    {
      title: "Business Systems Analysis",
      description: "Complete review of your current business processes and systems",
      icon: FileText,
      color: "#FF6F00"
    },
    {
      title: "AI Integration Roadmap",
      description: "Step-by-step plan for implementing AI in your business",
      icon: Route,
      color: "#FF3B30"
    },
    {
      title: "Recommended AI Tools & Strategies",
      description: "Curated selection of AI solutions for your specific needs",
      icon: Tool,
      color: "#8C1AFF"
    },
    {
      title: "Findings Report + Proposal",
      description: "Detailed report with actionable recommendations",
      icon: CheckCircle,
      color: "#FF6F00"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F00]/5 via-[#FF3B30]/5 to-[#8C1AFF]/5" />
          
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48 L6 48 L6 12' stroke='%23FF6F00' stroke-opacity='0.1' fill='none' stroke-width='0.5'/%3E%3Cpath d='M18 48 L18 36 L42 36 L42 12' stroke='%23FF3B30' stroke-opacity='0.1' fill='none' stroke-width='0.5'/%3E%3Cpath d='M30 48 L30 24 L54 24' stroke='%238C1AFF' stroke-opacity='0.1' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />

          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: 'radial-gradient(circle, #FF6F00 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">AI-Powered Business</span>
                <span className="block">Automation:</span>
                <span className="block mt-2 bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] text-transparent bg-clip-text animate-gradient">
                  Work Less,
                </span>
                <span className="block bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] text-transparent bg-clip-text animate-gradient">
                  Earn More,
                </span>
                <span className="block bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] text-transparent bg-clip-text animate-gradient">
                  Never Miss a Lead
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                AI automation is no longer the future—it's the competitive edge your business needs right now. Let us show you exactly where AI can increase leads, streamline workflows, and boost revenue.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 items-stretch max-w-4xl mx-auto">
                <div className="flex-1 flex flex-col items-center">
                  <span className="text-gray-600 mb-2">Ready to Automate?</span>
                  <Link to="/contact" className="w-full">
                    <Button 
                      variant="primary"
                      className="w-full h-[60px] group relative overflow-hidden bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#FF6F00]"
                    >
                      <span className="flex items-center justify-center gap-2 px-6">
                        <span className="whitespace-nowrap">Supercharge Your Business with AI</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                      </span>
                    </Button>
                  </Link>
                </div>

                <div className="flex-1 flex flex-col items-center">
                  <span className="text-gray-600 mb-2">Not Sure Where to Start?</span>
                  <a href="https://form.typeform.com/to/xhYsGnhQ" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button 
                      variant="secondary"
                      className="w-full h-[60px] group relative overflow-hidden bg-white border-2 border-[#8C1AFF] text-[#8C1AFF] hover:bg-[#8C1AFF] hover:text-white"
                    >
                      <span className="flex items-center justify-center gap-2 px-6">
                        <span className="whitespace-nowrap">Get an AI Exploration Audit</span>
                        <span className="whitespace-nowrap text-sm">($99)</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                      </span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Stats Section - Updated to be horizontal */}
              <div className="pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-[#FF6F00]/10 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-[#FF6F00]" />
                    </div>
                    <div>
                      <div className="font-bold">100+</div>
                      <div className="text-sm text-gray-600">Businesses Automated</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-[#FF3B30]/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-[#FF3B30]" />
                    </div>
                    <div>
                      <div className="font-bold">40%</div>
                      <div className="text-sm text-gray-600">Avg. Efficiency Boost</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-[#8C1AFF]/10 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-[#8C1AFF]" />
                    </div>
                    <div>
                      <div className="font-bold">24/7</div>
                      <div className="text-sm text-gray-600">AI-Powered Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-[#FF6F00]/20 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-[#FF3B30]/20 animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-[#8C1AFF]/20 animate-[spin_10s_linear_infinite]" />
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <Brain className="w-24 h-24 text-[#8C1AFF]" />
                    <div className="absolute inset-0 blur-xl bg-[#8C1AFF]/20 animate-pulse" />
                  </div>
                </div>

                <div className="absolute inset-0">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6F00] to-[#FF3B30]"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: 0.1,
                        animation: `float ${5 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-24 bg-white/50">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: 'radial-gradient(circle, #8C1AFF 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Custom AI Solutions Tailored to Your Business Needs
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              AI-driven systems that automate lead generation, outreach, and workflow automation.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Decorative gradient line */}
                  <div 
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] transform origin-left transition-transform duration-300 group-hover:scale-x-100"
                    style={{ transform: 'scaleX(0)' }}
                  />

                  {/* Icon */}
                  <div className="mb-4 relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF6F00]/10 to-[#FF3B30]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6" style={{ color: benefit.color }} />
                    </div>
                    <div 
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ backgroundColor: benefit.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link to="/contact">
              <Button 
                variant="primary"
                className="text-lg px-8 py-4"
              >
                <span className="flex items-center justify-center">
                  Supercharge Your Business with AI
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F00]/5 via-[#FF3B30]/5 to-[#8C1AFF]/5" />
          
          {/* Circuit board pattern background */}
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48 L6 48 L6 12' stroke='%23FF6F00' stroke-opacity='0.1' fill='none' stroke-width='0.5'/%3E%3Cpath d='M18 48 L18 36 L42 36 L42 12' stroke='%23FF3B30' stroke-opacity='0.1' fill='none' stroke-width='0.5'/%3E%3Cpath d='M30 48 L30 24 L54 24' stroke='%238C1AFF' stroke-opacity='0.1' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
              {/* Gradient border */}
              <div className="absolute inset-0 p-1 bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] rounded-2xl">
                <div className="h-full w-full bg-white rounded-xl" />
              </div>

              <div className="relative p-8">
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {auditFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6F00]/10 to-[#FF3B30]/10 flex items-center justify-center">
                            <Icon className="w-5 h-5" style={{ color: feature.color }} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button with Price */}
                <div className="text-center">
                  <a href="https://form.typeform.com/to/xhYsGnhQ" target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="secondary"
                      className="text-lg px-8 py-4 w-full sm:w-auto"
                    >
                      <span className="flex items-center justify-center">
                        Get the AI Exploration Audit
                        <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded">$99 one-time</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Building Section */}
      <div className="relative py-24 bg-white/50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: 'radial-gradient(circle, #FF6F00 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              No Long-Term Contracts.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] animate-gradient-text">
                No Guesswork. Just Results.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: FileText, text: "No Long-Term Contracts", color: "#FF6F00" },
                { icon: Target, text: "$99 AI Audit Credit", color: "#FF3B30" },
                { icon: Bot, text: "Custom AI Solutions", color: "#8C1AFF" },
                { icon: Workflow, text: "Full Implementation", color: "#FF6F00" },
                { icon: HeartHandshake, text: "Ongoing Support", color: "#FF3B30" },
                { icon: Shield, text: "ROI Guarantee", color: "#8C1AFF" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <p className="text-center text-sm font-semibold relative z-10">{item.text}</p>
                  
                  {/* Hover gradient border - adjusted opacity */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-r from-[#FF6F00]/30 via-[#FF3B30]/30 to-[#8C1AFF]/30" />
                  </div>
                </div>
              ))}
            </div>

            {/* ROI Guarantee Card */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
                {/* Gradient border */}
                <div className="absolute inset-0 p-1 bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] rounded-2xl">
                  <div className="h-full w-full bg-white rounded-xl" />
                </div>

                <div className="relative p-8">
                  <div className="mb-6">
                    <Shield className="w-16 h-16 text-[#FF6F00] mb-4" />
                    <h3 className="text-2xl font-bold mb-4">60-Day ROI Guarantee</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      <span className="font-bold">
                        If your AI automation system doesn't generate profitable ROI within 60 days, we'll continue optimizing it for FREE until it does.
                      </span>
                    </p>
                  </div>

                  <Link to="/contact">
                    <Button 
                      variant="primary"
                      className="text-lg px-8 py-4 w-full"
                    >
                      <span className="flex items-center justify-center">
                        Supercharge Your Business with AI
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>

                  {/* Trust indicators */}
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4 text-[#FF3B30]" />
                      <span>60-Day Guarantee</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <HeartHandshake className="w-4 h-4 text-[#8C1AFF]" />
                      <span>Free Optimization</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#FF6F00]/10 to-[#FF3B30]/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#FF3B30]/10 to-[#8C1AFF]/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Slider */}
      <TestimonialSlider />
    </>
  );
}