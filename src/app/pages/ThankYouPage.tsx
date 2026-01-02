import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, ArrowLeft, Mail } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mx-auto w-24 h-24 bg-gold-highlight/10 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle size={48} className="text-gold-medium" />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-4xl sm:text-5xl mb-6">Message Received!</h1>
          <p className="text-xl text-gold-dark mb-8">
            Thank you for reaching out. I've received your message and will get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 bg-card rounded-xl border border-gold-light/30 mb-8"
        >
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Mail size={20} className="text-gold-medium" />
            <h2 className="text-xl">What's Next?</h2>
          </div>
          <p className="text-gold-dark">
            I'll review your message and respond directly to{' '}
            <span className="text-gold-darker">the email you provided</span>. If you don't hear from me within
            24 hours, please check your spam folder or reach out directly at{' '}
            <a
              href="mailto:hectoellamae@gmail.com"
              className="text-gold-medium hover:text-gold-deepest transition-colors underline"
            >
              hectoellamae@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gold-medium text-gold-medium hover:bg-gold-medium hover:text-white rounded-lg transition-all duration-300"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gold-medium hover:bg-gold-dark text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>View Case Studies</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
