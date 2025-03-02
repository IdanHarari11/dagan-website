import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, sectionId }) => {
  return (
    <div className="text-center mb-12" id={sectionId}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm text-gray-900 dark:text-white uppercase tracking-wider font-medium"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-2 text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle; 