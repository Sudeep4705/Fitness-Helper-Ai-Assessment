
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-20 py-24">
      
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          ABOUT FITNESS HELPER
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Fitness Helper is an AI-powered personal fitness assistant designed
          to help you train smarter, eat better, and stay consistent —
          without complexity.
        </p>
      </motion.div>

      {/* SECTIONS */}
      <div className="max-w-6xl mx-auto mt-32 space-y-32">

        {/* SECTION 1 */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <h2 className="text-3xl font-semibold">
            WHY FITNESS HELPER?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Most fitness apps overwhelm users with generic plans.
            Fitness Helper uses artificial intelligence to generate
            personalized workout routines and diet plans based on your
            body, goals, and lifestyle — not templates.
          </p>
        </motion.div>

        {/* SECTION 2 */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <p className="text-gray-600 leading-relaxed text-lg order-2 md:order-1">
            Whether you're a beginner or experienced, Fitness Helper adapts
            to your level. From home workouts to gym training, vegetarian
            diets to keto — everything is tailored for you.
          </p>
          <h2 className="text-3xl font-semibold order-1 md:order-2">
            HOW IT WORKS
          </h2>
        </motion.div>

        {/* SECTION 3 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-6">
            BUILT FOR SIMPLICITY
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            No subscriptions. No complicated dashboards.
            Just enter your details, generate your AI-powered plan,
            and focus on becoming stronger every day.
          </p>
        </motion.div>

      </div>

      {/* FOOTER NOTE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-40 text-gray-500 text-sm"
      >
        © 2025 FITNESS HELPER. ALL RIGHTS RESERVED.
      </motion.div>
    </div>
  );
}
