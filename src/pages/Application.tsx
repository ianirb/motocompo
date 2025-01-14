import React from 'react';

export function Application() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Equity Partnership Application</h1>
          <p className="text-xl text-gray-700">
            Complete the form below to begin your AI transformation journey.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdgoJOxqvgvrARhdvMI_gMwWV4AduvNrzEzU8eH-DNLq4MK6g/viewform?embedded=true"
            className="w-full min-h-[800px] border-0"
            title="Equity Partnership Application Form"
          >
            Loading application form...
          </iframe>
        </div>
      </div>
    </div>
  );
}