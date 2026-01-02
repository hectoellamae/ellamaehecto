import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Send, Mail, MessageSquare } from 'lucide-react';
import { getProfile } from '../../data/index';

export default function ContactPage() {
  const profile = getProfile();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/maqykkoe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        setError('Something went wrong. Please try again or email me directly.');
        setIsSubmitting(false);
      }
    } catch {
      setError('Network error. Please try again or email me directly at hectoellamae@gmail.com');
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl mb-6">Get in Touch</h1>
          <p className="text-xl text-gold-dark max-w-2xl mx-auto">
            Ready to discuss how I can help optimize your operations? Send me a message and I'll get back to you
            within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-6 bg-card rounded-xl border border-gold-light/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gold-highlight/10 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-gold-medium" />
                </div>
                <h3 className="text-xl">Email</h3>
              </div>
              <a
                href="mailto:hectoellamae@gmail.com"
                className="text-gold-dark hover:text-gold-deepest transition-colors"
              >
                hectoellamae@gmail.com
              </a>
            </div>

            <div className="p-6 bg-card rounded-xl border border-gold-light/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gold-highlight/10 rounded-lg flex items-center justify-center">
                  <MessageSquare size={20} className="text-gold-medium" />
                </div>
                <h3 className="text-xl">Response Time</h3>
              </div>
              <p className="text-gold-dark">
                I typically respond to inquiries within 24 hours during business days (Philippines time zone).
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gold-darker/10 to-gold-light/10 rounded-xl border border-gold-light/30">
              <h3 className="text-xl mb-3">Good Fit For</h3>
              <ul className="space-y-2 text-gold-dark">
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Remote-first operations consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Workflow optimization projects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Customer support system design</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Contract/project-based engagements</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gold-darker">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input-background border border-gold-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-medium text-gold-deepest"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gold-darker">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input-background border border-gold-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-medium text-gold-deepest"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 text-gold-darker">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input-background border border-gold-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-medium text-gold-deepest"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gold-darker">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input-background border border-gold-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-medium text-gold-deepest resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Honeypot field (hidden from users) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gold-medium hover:bg-gold-dark text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-sm text-gold-medium text-center">
                This form is protected by a honeypot anti-spam system.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
