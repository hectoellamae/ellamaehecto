import { motion } from 'motion/react';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { getAllCaseStudies, getCaseStudyById } from '../../data/index';

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl mb-6">Case Studies</h1>
          <p className="text-xl text-gold-dark max-w-3xl">
            Detailed narratives of operational challenges solved, workflows redesigned, and measurable outcomes achieved.
            All data is self-reported or calculated from available records.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study) => (
            <motion.article
              key={study.id}
              {...fadeInUp}
              className="bg-card rounded-2xl border-2 border-gold-light/40 shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div className="p-8 bg-gradient-to-br from-gold-darker/5 to-gold-light/5 border-b border-gold-light/30">
                <h2 className="text-2xl sm:text-3xl mb-4">{study.title}</h2>
                <div className="space-y-2 text-gold-dark">
                  <p>
                    <span className="text-gold-darker">Role:</span> {study.role}
                  </p>
                  <p>
                    <span className="text-gold-darker">Company:</span> {study.company}
                  </p>
                  <p>
                    <span className="text-gold-darker">Duration:</span> {study.duration}
                  </p>
                  <p>
                    <span className="text-gold-darker">Outcome:</span> {study.outcome}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gold-highlight/10 text-gold-medium rounded-full text-sm border border-gold-highlight/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Description */}
                <div>
                  <p className="text-gold-dark leading-relaxed text-lg">{study.description}</p>
                </div>

                {/* Problem */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <AlertCircle size={20} className="text-gold-medium" />
                    <h3 className="text-xl text-gold-darker">Problem</h3>
                  </div>
                  <p className="text-gold-dark leading-relaxed">{study.problem}</p>
                </div>

                {/* Actions */}
                <div>
                  <h3 className="text-xl text-gold-darker mb-3">What Was Done</h3>
                  <ol className="space-y-3">
                    {study.actions.map((action, i) => (
                      <li key={i} className="flex items-start text-gold-dark">
                        <span className="mr-3 mt-1 text-gold-medium min-w-[24px]">{i + 1}.</span>
                        <span className="leading-relaxed">{action}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Results */}
                <div className="p-6 bg-gold-highlight/5 rounded-xl border border-gold-highlight/20">
                  <h3 className="text-xl text-gold-darker mb-4">Results</h3>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start text-gold-dark">
                        <CheckCircle size={18} className="mr-2 mt-1 text-gold-medium flex-shrink-0" />
                        <span className="leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reflection */}
                <div className="pt-6 border-t border-gold-light/30">
                  <h3 className="text-xl text-gold-darker mb-3 italic">Reflection</h3>
                  <p className="text-gold-dark leading-relaxed italic">{study.improvement}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          {...fadeInUp}
          className="mt-12 p-6 bg-gold-highlight/5 rounded-xl border border-gold-highlight/20"
        >
          <p className="text-sm text-gold-dark">
            <span className="text-gold-darker">Data Attribution:</span> All quantitative metrics are self-reported (recall-based)
            or calculated from available records. Original performance documentation was not retained due to BPO security policies.
            Employer names are disclosed; end-client names are withheld per NDA requirements.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
