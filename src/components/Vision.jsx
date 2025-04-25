import { vision } from "../data/data";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section id="vision" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Vision</h2>
        <div className="md:max-w-[70%]  mx-auto text-center">
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            We envision a future where our innovative solutions empower businesses to thrive in a rapidly evolving digital world. We are committed to delivering exceptional service, leveraging cutting-edge technology, and fostering long-term partnerships that create meaningful impact. Our vision is to lead with integrity, creativity, and a relentless pursuit of excellence in every project we undertake.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {vision.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-4">
                  {/* Add icons or images here if needed */}
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
