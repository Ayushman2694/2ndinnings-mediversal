import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Commitment() {
  return (
    <section className="bg-teal-900 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block bg-teal-700 p-4 rounded-full mb-6"
          >
            <Heart className="h-12 w-12 text-teal-100" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Commitment
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
            We provide personalized care for your parents, keeping you connected
            at every step.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Personalized Care",
              description: "Tailored services to meet individual needs",
            },
            {
              title: "Constant Communication",
              description: "Regular updates on your loved one's well-being",
            },
            {
              title: "Peace of Mind",
              description: "Professional care you can trust, 24/7",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="bg-teal-700/50 p-6 rounded-lg text-center hover:bg-teal-700/70 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-teal-100">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
