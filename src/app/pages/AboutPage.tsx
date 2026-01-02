import { motion } from 'motion/react';
import { Award, Target, Zap } from 'lucide-react';
import { getProfile } from '../../data/index';

export default function AboutPage() {
  const profile = getProfile();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl mb-6">About Me</h1>
          <p className="text-xl text-gold-dark">
            Operations specialist who turns complexity into clarity and chaos into measurable outcomes.
          </p>
        </motion.div>

        {/* Main Story */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="prose prose-lg max-w-none mb-16 space-y-6 text-gold-darker"
        >
          <p>
            I'm {profile.name}, a {profile.location}-based operations and customer experience professional with over {profile.experience}
            of experience transforming complex workflows into streamlined, repeatable systems. My work bridges the gap
            between frontline customer needs and operational efficiency.
          </p>

          <p>
            My career began in frontline BPO roles, where I learned that behind every ticket, call, or dispute is a
            person seeking clarity and resolution. This foundation shaped how I approach operations: with precision,
            empathy, and a relentless focus on outcomes.
          </p>

          <p>
            From clearing a 1,500-case backlog in 15 days to coordinating multi-truck dispatch operations, I specialize
            in high-stakes environments where precision matters. I thrive in remote-first settings, having successfully
            managed operations across time zones and cultures.
          </p>

          <p>
            My approach combines structured process design with adaptability. I believe in documentation that actually
            gets used, workflows that make sense to the people executing them, and metrics that drive real improvement.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl mb-8">What Drives My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-xl border border-gold-light/30">
              <div className="w-12 h-12 bg-gold-highlight/10 rounded-lg flex items-center justify-center mb-4">
                <Award size={24} className="text-gold-medium" />
              </div>
              <h3 className="text-xl mb-3">Excellence in Execution</h3>
              <p className="text-gold-dark">
                Quality isn't a goal—it's a baseline. Every process, every interaction, every deliverable
                reflects commitment to precision.
              </p>
            </div>

            <div className="p-6 bg-card rounded-xl border border-gold-light/30">
              <div className="w-12 h-12 bg-gold-highlight/10 rounded-lg flex items-center justify-center mb-4">
                <Target size={24} className="text-gold-medium" />
              </div>
              <h3 className="text-xl mb-3">Outcome-Focused</h3>
              <p className="text-gold-dark">
                Metrics matter, but only when they connect to real impact. I focus on results that move the
                needle for customers and business alike.
              </p>
            </div>

            <div className="p-6 bg-card rounded-xl border border-gold-light/30">
              <div className="w-12 h-12 bg-gold-highlight/10 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-gold-medium" />
              </div>
              <h3 className="text-xl mb-3">Adaptable Systems</h3>
              <p className="text-gold-dark">
                Rigid processes break under pressure. I build workflows that scale, adapt, and remain
                effective even when circumstances change.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl mb-8">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl text-gold-darker">Operations & Process Design</h3>
              <ul className="space-y-2 text-gold-dark">
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Workflow optimization and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Backlog management and clearance strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Multi-channel dispatch coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>CRM system management and optimization</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-gold-darker">Customer Experience & Support</h3>
              <ul className="space-y-2 text-gold-dark">
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>High-volume ticket triage and resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Disputes and chargebacks operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Quality assurance and coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Cross-functional team coordination</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-gold-darker">Tools & Platforms</h3>
              <ul className="space-y-2 text-gold-dark">
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Zendesk, Salesforce, Supermove, OnCue</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>QuickBooks, Google Workspace</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Slack, team collaboration tools</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Data analysis and reporting</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-gold-darker">Work Style</h3>
              <ul className="space-y-2 text-gold-dark">
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Remote-first operations expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Asynchronous communication</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Self-directed with strong accountability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">•</span>
                  <span>Flexible across time zones</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
