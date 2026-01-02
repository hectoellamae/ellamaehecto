import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Briefcase, Users, TrendingUp, MapPin, Clock } from 'lucide-react';
import { getProfile, getHeroMetrics, getSupportMetrics, getOperationsMetrics } from '../../data/index';

export default function HomePage() {
  const profile = getProfile();
  const heroMetrics = getHeroMetrics();
  const supportMetrics = getSupportMetrics();
  const operationsMetrics = getOperationsMetrics();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="px-4 py-2 bg-gold-highlight/10 text-gold-medium rounded-full text-sm border border-gold-highlight/20">
                {profile.title}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl mb-6"
            >
              Transforming Complex Operations Into{' '}
              <span className="relative inline-block">
                <span className="text-gold-medium">Streamlined Excellence</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gold-highlight/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gold-dark mb-6 max-w-2xl"
            >
              {profile.experience} experience optimizing workflows, leading customer experience initiatives, and turning operational chaos into measurable results.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8 text-gold-medium/70 text-sm">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{profile.available}</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                to="/work"
                className="group px-6 py-3 bg-gold-medium hover:bg-gold-dark text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2"
              >
                <span>View Case Studies</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-gold-medium text-gold-medium hover:bg-gold-medium hover:text-white rounded-lg transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-40 right-10 w-64 h-64 bg-gold-highlight/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Hero Metrics Strip */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {heroMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 bg-card rounded-xl border border-gold-light/30 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-3xl mb-2 text-gold-medium">{metric.value}</h3>
                <p className="text-gold-dark text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Operations Coordination */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <h2 className="text-2xl sm:text-3xl mb-4">Operations Coordination</h2>
            <p className="text-gold-dark max-w-2xl">
              Systematic approach to complex coordination challenges across dispatch, support, and content operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              variants={fadeInUp}
              className="p-5 bg-card rounded-xl border border-gold-light/30"
            >
              <div className="w-10 h-10 bg-gold-highlight/10 rounded-lg flex items-center justify-center mb-3">
                <Briefcase size={20} className="text-gold-medium" />
              </div>
              <h3 className="text-xl mb-1">{operationsMetrics.jobsCoordinated}</h3>
              <p className="text-gold-dark text-sm">{operationsMetrics.jobsLabel}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-5 bg-card rounded-xl border border-gold-light/30"
            >
              <div className="w-10 h-10 bg-gold-highlight/10 rounded-lg flex items-center justify-center mb-3">
                <TrendingUp size={20} className="text-gold-medium" />
              </div>
              <h3 className="text-xl mb-1">{operationsMetrics.estimateTurnaround}</h3>
              <p className="text-gold-dark text-sm">{operationsMetrics.estimateLabel}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-5 bg-card rounded-xl border border-gold-light/30"
            >
              <div className="w-10 h-10 bg-gold-highlight/10 rounded-lg flex items-center justify-center mb-3">
                <Users size={20} className="text-gold-medium" />
              </div>
              <h3 className="text-xl mb-1">{supportMetrics.backlogReduction}</h3>
              <p className="text-gold-dark text-sm">{supportMetrics.backlogLabel}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-5 bg-card rounded-xl border border-gold-light/30"
            >
              <div className="w-10 h-10 bg-gold-highlight/10 rounded-lg flex items-center justify-center mb-3">
                <MapPin size={20} className="text-gold-medium" />
              </div>
              <h3 className="text-xl mb-1">{operationsMetrics.fleetSize}</h3>
              <p className="text-gold-dark text-sm">{operationsMetrics.fleetLabel}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Support Metrics */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <h2 className="text-2xl sm:text-3xl mb-4">Support Operations</h2>
            <p className="text-gold-dark max-w-2xl">
              High-volume support workflows with consistent quality and systematic documentation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              variants={fadeInUp}
              className="p-5 bg-card rounded-xl border border-gold-light/30"
            >
              <h3 className="text-xl mb-1">{supportMetrics.ticketsDaily}</h3>
              <p className="text-gold-dark text-sm">{supportMetrics.ticketsLabel}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-5 bg-card rounded-xl border border-gold-light/30"
            >
              <h3 className="text-xl mb-1">{supportMetrics.contactsDaily}</h3>
              <p className="text-gold-dark text-sm">{supportMetrics.contactsLabel}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-5 bg-card rounded-xl border border-gold-light/30"
            >
              <h3 className="text-xl mb-1">100%</h3>
              <p className="text-gold-dark text-sm">on-time delivery</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-gold-darker/10 to-gold-light/10 rounded-2xl border border-gold-light/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-lg text-gold-dark mb-8">
            Let's discuss how structured workflows and customer-centric processes can transform your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gold-medium hover:bg-gold-dark text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
