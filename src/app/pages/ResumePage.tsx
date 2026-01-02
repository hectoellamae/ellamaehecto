import { motion } from 'motion/react';
import { MapPin, Mail, Linkedin, Phone } from 'lucide-react';
import { getAllExperience, getSkills, getProfile } from '../../data/index';

export default function ResumePage() {
  const experience = getAllExperience();
  const skills = getSkills();
  const profile = getProfile();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-12">
          <h1 className="text-4xl sm:text-5xl mb-4">Resume</h1>
          <p className="text-xl text-gold-dark">
            {profile.title} | {profile.experience} Experience
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 p-6 bg-card rounded-xl border border-gold-light/30"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:hectoellamae@gmail.com"
              className="flex items-center space-x-2 text-gold-dark hover:text-gold-deepest transition-colors"
            >
              <Mail size={18} />
              <span>hectoellamae@gmail.com</span>
            </a>
            <a
              href="tel:+639213466032"
              className="flex items-center space-x-2 text-gold-dark hover:text-gold-deepest transition-colors"
            >
              <Phone size={18} />
              <span>+63 921 346 6032</span>
            </a>
            <a
              href="https://linkedin.com/in/ellamae-hecto/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gold-dark hover:text-gold-deepest transition-colors"
            >
              <Linkedin size={18} />
              <span>linkedin.com/in/ellamae-hecto</span>
            </a>
            <div className="flex items-center space-x-2 text-gold-dark">
              <MapPin size={18} />
              <span>{profile.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl mb-4">Professional Summary</h2>
          <p className="text-gold-dark leading-relaxed">
            Results-driven operations specialist with {profile.experience} experience in BPO, remote-first environments, and
            cross-functional coordination. Proven track record in workflow optimization, backlog management, and
            customer experience excellence. Skilled in leveraging CRM and operational tools to drive measurable outcomes.
            Remote work expertise with strong self-direction and asynchronous communication capabilities.
          </p>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl mb-6">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-card rounded-xl border border-gold-light/30"
              >
                <div className="mb-4">
                  <h3 className="text-xl text-gold-deepest mb-1">{job.title}</h3>
                  <p className="text-gold-dark mb-1">{job.company}</p>
                  <div className="flex flex-wrap items-center gap-x-4 text-sm text-gold-medium">
                    <span>{job.dateRange}</span>
                    <span>•</span>
                    <span className="capitalize">{job.type}</span>
                  </div>
                </div>
                <p className="text-gold-dark mb-4">{job.summary}</p>
                <ul className="space-y-2 mb-4">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gold-dark">
                      <span className="mr-2 text-gold-highlight">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gold-highlight/10 text-gold-medium rounded text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl mb-6">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card rounded-xl border border-gold-light/30">
              <h3 className="text-xl text-gold-darker mb-4">Operations & Process</h3>
              <ul className="space-y-2">
                {skills.operations.map((skill, i) => (
                  <li key={i} className="flex items-start text-gold-dark">
                    <span className="mr-2 text-gold-highlight">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-card rounded-xl border border-gold-light/30">
              <h3 className="text-xl text-gold-darker mb-4">Support & Triage</h3>
              <ul className="space-y-2">
                {skills.support.map((skill, i) => (
                  <li key={i} className="flex items-start text-gold-dark">
                    <span className="mr-2 text-gold-highlight">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-card rounded-xl border border-gold-light/30">
              <h3 className="text-xl text-gold-darker mb-4">Dispatch & Coordination</h3>
              <ul className="space-y-2">
                {skills.dispatch.map((skill, i) => (
                  <li key={i} className="flex items-start text-gold-dark">
                    <span className="mr-2 text-gold-highlight">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-card rounded-xl border border-gold-light/30">
              <h3 className="text-xl text-gold-darker mb-4">Web & Content Ops</h3>
              <ul className="space-y-2">
                {skills.webOps.map((skill, i) => (
                  <li key={i} className="flex items-start text-gold-dark">
                    <span className="mr-2 text-gold-highlight">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl mb-4">Education</h2>
          <div className="p-6 bg-card rounded-xl border border-gold-light/30">
            <h3 className="text-xl text-gold-deepest mb-2">Bachelor of Science in Information Technology</h3>
            <p className="text-gold-dark">Graduate</p>
            <p className="text-gold-dark mt-2">Foundation in web design and web operations</p>
          </div>
        </motion.section>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 bg-gradient-to-br from-gold-darker/10 to-gold-light/10 rounded-xl border border-gold-light/30 text-center"
        >
          <p className="text-gold-darker">
            <span className="text-gold-deepest">Availability:</span> {profile.available}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
