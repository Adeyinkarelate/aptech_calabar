// Contact.jsx - Professional version with EmailJS integration
import { useState } from "react";
import { IntroBanner } from "../partials/pageBanners";
import { SiWhatsapp } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import Rosa from "react-on-scroll-animation";
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({ 
    full_name: "", 
    email: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error("Email service not configured properly");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.full_name,
        from_email: formData.email,
        message: formData.message,
        to_email: "aptechcalabar2022@gmail.com",
        reply_to: formData.email
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormData({ full_name: "", email: "", message: "" });
      
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: <HiMail className="h-7 w-7 text-gray-500" />,
      title: "Email us",
      description: "Email us for general queries, including scholarship and job opportunities.",
      contact: "aptechcalabar2022@gmail.com",
      href: "mailto:aptechcalabar2022@gmail.com",
      delay: 0
    },
    {
      icon: <FiPhone className="h-7 w-7 text-gray-500" />,
      title: "Call us",
      description: "Call us to make your enquiry. We are always happy to help.",
      contact: "07080220301  09162180037",
      href: "tel:+2347080220301",
      delay: 300
    },
    {
      icon: <SiWhatsapp className="h-7 w-7 text-gray-500" />,
      title: "Link up with us",
      description: "Connect with us on social media platforms.",
      social: true,
      delay: 700
    }
  ];

  return (
    <div className="min-h-screen">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      
      {/* Intro Banner */}
      <IntroBanner
        bannerTitle="Contact"
        bannerTitleYellow="Us"
        bannerText="Reach out to us and make enquiries through any of the following means..."
      />

      {/* Contact Information Section */}
      <section className="container mx-auto mt-28 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card, index) => (
            <Rosa key={index} animation="fade-up" delay={card.delay} once>
              <div className="relative block rounded-lg bg-white p-8 text-center shadow-sm transition-all hover:shadow-md">
                <div className="text-gray-600">
                  <div className="mx-auto w-fit rounded-lg bg-gray-100 p-3">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {card.description}
                  </p>
                  
                  {card.social ? (
                    <div className="mt-4 flex justify-center space-x-4">
                      <a 
                        href="/contact" 
                        className="text-orange-500 hover:text-red-600 transition-colors"
                        aria-label="Twitter"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://wa.me/2347080220301" 
                        className="text-orange-500 hover:text-red-600 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <SiWhatsapp className="w-6 h-6" />
                      </a>
                    </div>
                  ) : (
                    <a
                      href={card.href}
                      className="mt-3 block text-sm font-bold text-red-600 transition-all hover:underline break-words"
                    >
                      {card.contact}
                    </a>
                  )}
                </div>
              </div>
            </Rosa>
          ))}
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="mt-28">
        <div className=" px-4">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {/* Map */}
            <div className="h-[500px] lg:h-full">
              <iframe 
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.6975818162746!2d8.329011623594319!3d4.98981938479194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106787945f81d313%3A0xe7f166cefa1c397f!2s15a%20Murtala%20Mohammed%20Hwy%2C%20Ikot%20Ekan%20Edem!5e0!3m2!1sen!2sng!4v1651066496121!5m2!1sen!2sng"
                className="h-full w-full rounded-xl shadow-sm"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
                  <CgProfile className="text-gray-400 text-xl mr-3 flex-shrink-0" />
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Full Name"
                    required
                    value={formData.full_name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Field */}
                <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
                  <HiMail className="text-gray-400 text-xl mr-3 flex-shrink-0" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message Field */}
                <div className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
                  <textarea
                    name="message"
                    placeholder="Leave a message..."
                    rows="6"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-4 rounded-xl text-sm font-semibold shadow-md transition-all duration-200 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message 
                      <MdSend className="ml-2 text-lg" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20"></div>
    </div>
  );
}