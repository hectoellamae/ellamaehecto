// Data layer integration for React portfolio
// Imports JSON data and provides utility functions

import metricsData from './metrics.json';
import experienceData from './experience.json';
import caseStudiesData from './case-studies.json';

// Re-export for convenience
export { metricsData, experienceData, caseStudiesData };

// Profile helpers
export const getProfile = () => metricsData.profile;

export const getHeroMetrics = () => metricsData.heroMetrics;

export const getOperationsMetrics = () => metricsData.operations;

export const getSupportMetrics = () => metricsData.support;

export const getWebOpsMetrics = () => metricsData.webOps;

// Experience helpers
export const getAllExperience = () => experienceData.experience;

export const getExperienceById = (id) => 
  experienceData.experience.find(exp => exp.id === id);

export const getExperienceSorted = (sortOrder = 'desc') => {
  const sorted = [...experienceData.experience];
  return sorted.sort((a, b) => {
    const dateA = new Date(a.dateRange.split('–')[0].trim());
    const dateB = new Date(b.dateRange.split('–')[0].trim());
    return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
  });
};

export const getExperienceByCompany = (company) =>
  experienceData.experience.filter(exp => exp.company.toLowerCase().includes(company.toLowerCase()));

export const getSkills = () => experienceData.skills;

// Case studies helpers
export const getAllCaseStudies = () => caseStudiesData.caseStudies;

export const getCaseStudyById = (id) =>
  caseStudiesData.caseStudies.find(study => study.id === id);

export const getCaseStudyBySlug = (slug) =>
  caseStudiesData.caseStudies.find(study => study.id === slug);

export const getFeaturedCaseStudies = (limit = 3) =>
  caseStudiesData.caseStudies.slice(0, limit);

export const getCaseStudiesByTool = (tool) =>
  caseStudiesData.caseStudies.filter(study =>
    study.tools.some(t => t.toLowerCase().includes(tool.toLowerCase()))
  );

// Navigation items
export const getNavItems = () => [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

// Social links
export const getSocialLinks = () => [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/ellamae-hecto/', icon: 'linkedin' },
  { email: 'hectoellamae@gmail.com', icon: 'email' },
];

// Site metadata
export const getSiteMetadata = () => ({
  title: 'Ella Mae Hecto — Operations, Dispatch, Support & Web Ops',
  description: 'Philippines-based remote Operations & Support professional with a designer\'s eye—dispatch coordination, fintech support workflows, and clean web/content updates.',
  url: 'https://ellamaehecto.com',
});
