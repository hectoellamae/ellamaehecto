import { motion } from 'motion/react';
import { Settings, Users, FileText, TrendingUp, MessageSquare, Target } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Settings,
      title: 'Operations Workflow Design',
      description:
        'Audit existing processes, identify bottlenecks, and design streamlined workflows that reduce friction and improve throughput.',
      capabilities: [
        'Process mapping and documentation',
        'Bottleneck identification and resolution',
        'Standard operating procedure creation',
        'Quality assurance framework development',
      ],
    },
    {
      icon: Users,
      title: 'Customer Support Operations',
      description:
        'Build and optimize customer support systems that balance efficiency with quality, from ticket triage to resolution workflows.',
      capabilities: [
        'Ticket triage system design',
        'Response template libraries',
        'Escalation path optimization',
        'Team training and knowledge base development',
      ],
    },
    {
      icon: FileText,
      title: 'Backlog Management & Clearance',
      description:
        'Tactical strategies for clearing accumulated backlogs while establishing preventive measures to avoid future buildup.',
      capabilities: [
        'Backlog composition analysis',
        'Prioritization frameworks',
        'Sprint planning and execution',
        'Quality maintenance protocols',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Dispatch & Coordination Systems',
      description:
        'Design and implement dispatch workflows for service-based operations, from scheduling to completion tracking.',
      capabilities: [
        'Resource allocation optimization',
        'Scheduling conflict prevention',
        'Customer communication sequences',
        'Post-service follow-up automation',
      ],
    },
    {
      icon: MessageSquare,
      title: 'CRM & Tool Implementation Support',
      description:
        'Configure and optimize existing tools (Zendesk, Salesforce, Supermove, etc.) to match operational needs and team workflows.',
      capabilities: [
        'CRM configuration and customization',
        'Workflow automation setup',
        'Team training and adoption support',
        'Integration planning',
      ],
    },
    {
      icon: Target,
      title: 'Remote Operations Consulting',
      description:
        'Guide remote-first teams in establishing effective asynchronous workflows, communication protocols, and accountability structures.',
      capabilities: [
        'Remote workflow design',
        'Async communication frameworks',
        'Documentation standards',
        'Performance tracking systems',
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl mb-6">Services</h1>
          <p className="text-xl text-gold-dark max-w-3xl mx-auto">
            Operational consulting and implementation support for remote-first teams seeking structured, scalable workflows.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-card rounded-xl border-2 border-gold-light/30 shadow-md hover:shadow-xl hover:border-gold-medium/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gold-highlight/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-highlight/20 transition-colors">
                <service.icon size={28} className="text-gold-medium" />
              </div>

              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-gold-dark mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-2">
                <p className="text-sm text-gold-darker uppercase tracking-wide">Key Capabilities:</p>
                <ul className="space-y-2">
                  {service.capabilities.map((capability, i) => (
                    <li key={i} className="flex items-start text-sm text-gold-dark">
                      <span className="mr-2 text-gold-highlight">•</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Approach Section */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-3xl mb-8 text-center">How I Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-gold-darker/5 to-gold-light/5 rounded-xl border border-gold-light/30">
              <div className="w-10 h-10 bg-gold-medium text-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">1</span>
              </div>
              <h3 className="text-xl mb-3">Understand</h3>
              <p className="text-gold-dark">
                Deep-dive into your current state: processes, pain points, tools, team dynamics, and desired outcomes.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gold-darker/5 to-gold-light/5 rounded-xl border border-gold-light/30">
              <div className="w-10 h-10 bg-gold-medium text-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">2</span>
              </div>
              <h3 className="text-xl mb-3">Design</h3>
              <p className="text-gold-dark">
                Create tailored workflows, documentation, and systems that fit your team's reality—not generic templates.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gold-darker/5 to-gold-light/5 rounded-xl border border-gold-light/30">
              <div className="w-10 h-10 bg-gold-medium text-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">3</span>
              </div>
              <h3 className="text-xl mb-3">Implement</h3>
              <p className="text-gold-dark">
                Support adoption through training, refinement, and measurement—ensuring solutions stick beyond initial rollout.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Ideal Fit */}
        <motion.div
          {...fadeInUp}
          className="p-8 bg-gradient-to-br from-gold-darker/10 to-gold-light/10 rounded-2xl border border-gold-light/30"
        >
          <h2 className="text-3xl mb-6">Ideal Fit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-gold-darker mb-4">You're likely a good fit if you:</h3>
              <ul className="space-y-3 text-gold-dark">
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">✓</span>
                  <span>Operate remotely or have distributed teams</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">✓</span>
                  <span>Need structure but lack time to build it</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">✓</span>
                  <span>Value documentation and repeatable processes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">✓</span>
                  <span>Want outcomes, not just activity</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-gold-darker mb-4">Common scenarios I help solve:</h3>
              <ul className="space-y-3 text-gold-dark">
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">→</span>
                  <span>"Our support backlog keeps growing"</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">→</span>
                  <span>"We have tools but they're not integrated"</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">→</span>
                  <span>"Quality is inconsistent across the team"</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gold-highlight">→</span>
                  <span>"Everything depends on one person knowing how it works"</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
