import { motion } from "framer-motion";
import { Form, Link } from "react-router-dom"; // Use react-router-dom Link
import { PhoneIcon, Clock, Search, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
import Commitment from "./Commitment";
import Services from "./Services";
// import Section4 from "./section4";
import HowItWorks from "./how_it_works";
import Plan from "./Plan";

export default function Index() {
  return (
    <div className=" bg-gradient-to-br from-[#E6FFF9] via-[#F0FFF9] to-[#E6FFF9]">
      <header className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-teal-700 hover:text-teal-800 transition-colors"
        >
          2nd Innings
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/plans"
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            Plans
          </Link>
          <Link
            to="/services"
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            Our Services
          </Link>
          <Link
            to="/blog"
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            Blog
          </Link>
           <Link
            to="/login"
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            Login
          </Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-800 leading-tight">
              2nd Innings: Care for Your Loved Ones,{" "}
              <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
                Even When Miles Apart
              </span>
            </h1>
            <p className="text-xl text-teal-600">
              Premium healthcare services for seniors in Bihar, available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#25D366] hover:bg-[#20BD5A] px-4 py-2 rounded  text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <a className="flex" href="https://wa.me/your-whatsapp-number">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Get Started on WhatsApp
                </a>
              </button>
              <button className="bg-white flex px-4 py-2 rounded text-teal-600 font-semibold transition-all duration-300 hover:bg-teal-50 border border-teal-200 shadow-md">
                <Search className="w-5 h-5 mr-2" />
                Explore Services
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg p-6 shadow-xl border border-teal-100 space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="bg-teal-500 rounded-full p-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-teal-800 font-semibold text-lg">
                    24/7 Care Available
                  </h3>
                  <p className="text-teal-600">Always there when you need us</p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                >
                  Learn more about our services
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl overflow-hidden shadow-2xl">
              <motion.div
                className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg px-6 py-4 shadow-lg"
            >
              <h3 className="text-teal-800 font-semibold text-lg">
                Trusted by 10,000+ families
              </h3>
              <p className="text-teal-600">Across Bihar and beyond</p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Commitment />
      <Services />
      {/* <Section4 /> */}
      <HowItWorks />
      <Plan />
      <section className="bg-gradient-to-b from-teal-900 to-teal-800 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Ensure Their Well-being?
            </h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Take the first step towards peace of mind for you and your loved
              ones.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="bg-[#F5A623] hover:bg-[#E09612] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Schedule a Free Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
