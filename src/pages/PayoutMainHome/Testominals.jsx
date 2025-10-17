import React from "react";
import menlogo from "../../assets/menlogo.svg";

export default function SingleTestimonial() {
  const testimonial = {
    image: menlogo,
    text: `We are delighted to partner with UdyogPay to process payouts for our valuable delivery partners. 
           The integration of UdyogPay's Payouts solution has made payments to our drivers instantaneous 
           and highly convenient. With UdyogPay, we can now manage payouts at scale, reduce errors, 
           and provide a seamless experience for our entire workforce. The support and reliability offered 
           by UdyogPay have been exceptional, enabling us to focus on growing our business. 
           Additionally, the intuitive dashboard and detailed reporting tools have allowed our finance 
           team to track payments efficiently, reconcile accounts with ease, and ensure compliance 
           with internal policies. Overall, UdyogPay has transformed our payout process into a smooth, 
           reliable, and scalable operation, giving us confidence to expand our services to more partners.`,
    author: "Delivery Partner Company",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Heading Section */}
      <div className="max-w-4xl text-center mb-12">
        
        <h2
          className="text-3xl md:text-4xl font-bold text-[#5E5DAE]"
          style={{ lineHeight: 1.2 }}
        >
          TESTIMONIALS - Over 8,00,000 Indian businesses rely on us for seamless payments
        </h2>
      </div>

      {/* Testimonial Section */}
      <div className="flex flex-col md:flex-row items-start max-w-6xl w-full space-y-6 md:space-y-0 md:space-x-10">
        {/* Image Section */}
        <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 text-left">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            {testimonial.text}
          </p>
          <p className="text-sm font-semibold text-gray-900">
            {testimonial.author}
          </p>
        </div>
      </div>
    </div>
  );
}
