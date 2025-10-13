import { useState, useEffect } from 'react';
import { CheckCircle, Zap, Code, Clock } from 'lucide-react';

export default function UdyogpayHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Fast Onboarding – Start accepting payments instantly"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "All-in-One Suite – Access every UdyogPay tool"
    },
    {
      icon: <Code className="w-5 h-5" />,
      text: "Developer-Friendly APIs – Build and integrate with ease"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Round-the-Clock Support – We've got your back 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div 
          className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 h-2"></div>
          
          <div className="p-8 md:p-12">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
              style={{ fontSize: "30px", lineHeight: 1.1 }}>
                Supercharge your business with Udyogpay
              </span>
             
            </h1>

           <p
  className={`text-sm font-bold text-gray-700 mb-10 transition-all duration-700 delay-300 ${
    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
  }`}
>
  Get Started Today and Offer Your Customers a Smarter
</p>


            <div className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-500 cursor-pointer ${
                    hoveredIndex === index 
                      ? 'bg-gradient-to-r from-orange-50 to-purple-50 shadow-lg transform scale-105' 
                      : 'bg-transparent'
                  } ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className={`flex-shrink-0 transition-all duration-300 ${
                    hoveredIndex === index 
                      ? 'text-orange-600 transform rotate-12 scale-110' 
                      : 'text-gray-600'
                  }`}>
                    {feature.icon}
                  </div>
                  <p className={`text-gray-800 font-medium transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-gray-900' : ''
                  }`}>
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <button 
              className={`group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <span className="relative z-10 flex items-center">
                Sign up Now
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            
          </div>
        </div>
      </div>
    </div>
  );
}