import { motion } from "framer-motion";
import { ClipboardList, PhoneCall, Home, Video } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Personalized Health Plans",
      icon: ClipboardList,
      description: "Tailored care plans designed for individual needs",
    },
    {
      title: "24/7 Medical Support",
      icon: PhoneCall,
      description: "Round-the-clock assistance from our medical professionals",
    },
    {
      title: "Home Visits",
      icon: Home,
      description: "Regular check-ups and care in the comfort of home",
    },
    {
      title: "Telehealth Consultations",
      icon: Video,
      description: "Remote consultations with experienced healthcare providers",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-teal-800 to-teal-900  py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Comprehensive care solutions tailored to your loved ones' needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-teal-700/30 backdrop-blur-sm rounded-lg p-6 flex items-start space-x-4 hover:bg-teal-700/50 transition-colors duration-300"
            >
              <div className="bg-teal-500/20 rounded-full p-3">
                <service.icon className="h-6 w-6 text-teal-100" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-teal-100">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
