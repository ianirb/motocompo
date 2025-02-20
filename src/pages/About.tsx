import { Award, Users, Lightbulb } from 'lucide-react';

export function About() {
  const milestones = [
    {
      year: '2023',
      title: 'Founded',
      description: 'Established with a vision to revolutionize AI for businesses.'
    },
    {
      year: '2024',
      title: 'First Partnership',
      description: 'Successfully launched our first equity partnership program.'
    },
    {
      year: '2024',
      title: 'Expansion',
      description: 'Expanded services to include comprehensive AI solutions.'
    },
    {
      year: '2025',
      title: 'Global Reach',
      description: 'Our goal this year is to extend our partnerships across multiple countries.'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every AI solution we deliver.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We believe in growing together with our clients.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of AI technology.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F4ED]">
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Irby AI Solutions is dedicated to transforming businesses through innovative AI solutions and strategic partnerships.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-8">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-[#FF6F00]" />
                  <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>

          {/* Timeline Section */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF]"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                      <span className="text-2xl font-bold text-[#FF6F00]">{milestone.year}</span>
                      <h3 className="text-xl font-bold mt-2">{milestone.title}</h3>
                      <p className="text-gray-700 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF6F00] rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}