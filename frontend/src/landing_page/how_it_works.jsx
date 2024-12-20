import { motion } from "framer-motion";
import { Phone, Calendar, HeartHandshake } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Contact Us",
      description: "Reach out anytime. We're here for you 24/7.",
      icon: Phone,
      action: (
        <a
          href="tel:+918005551234"
          className="inline-block mt-2 text-2xl font-bold text-[#F5A623] hover:text-[#E09612] transition-colors duration-300"
        >
          +91 929-768-0077
        </a>
      ),
    },
    {
      title: "Free Consultation",
      description:
        "Schedule a no-obligation chat to discuss your loved one's needs.",
      icon: Calendar,
      action: (
        <a href="https://calendly.com/mediversal-info" className="mt-2 text-teal-100 border border-teal-100 hover:bg-teal-700/50 px-6 py-2 rounded-full font-medium transition-all duration-300">
          Book Consultation
        </a>
      ),
    },
    {
      title: "Begin Personalized Care",
      description:
        "We'll create a tailored care plan and start providing compassionate support.",
      icon: HeartHandshake,
      action: (
        <div className="mt-2 flex items-center space-x-2 text-teal-100">
          <span className="text-[#F5A623] font-semibold">
            Average start time:
          </span>
          <span>Within 48 hours</span>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-teal-800 to-teal-900 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Three simple steps to start caring for your loved ones
          </p>
        </motion.div>

        <div className="space-y-12 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-teal-700 flex items-center justify-center text-3xl font-bold text-white">
                {index + 1}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-white mb-2 flex items-center">
                  <step.icon className="w-6 h-6 mr-2 text-[#F5A623]" />
                  {step.title}
                </h3>
                <p className="text-teal-100 text-lg mb-2">{step.description}</p>
                {step.action}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="https://calendly.com/mediversal-info" className="bg-[#F5A623] hover:bg-[#E09612] text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Start Your Care Journey Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
