'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Monitor, Smartphone, X } from 'lucide-react';
import Image from 'next/image';
import Breadcrumb from '@/components/Common/Breadcrumb';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  technologies: string[];
  description: string;
  stats: {
    users: string;
    rating: number;
  };
  link: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'Landing', label: 'Landing Pages' },
    { id: 'saas', label: 'SaaS' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Enterprise SaaS Platform',
      category: 'Landing',
      image: '/images/blog/blog-details-01.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      description: 'Enterprise-grade SaaS solution for workflow automation and team collaboration.',
      stats: { users: '10K+', rating: 4.8 },
      link: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'MongoDB', 'AWS'],
      description: 'Modern e-commerce solution with AI-powered recommendations.',
      stats: { users: '50K+', rating: 4.9 },
      link: '#'
    },
    {
      id: 3,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      description: 'Comprehensive healthcare management mobile application.',
      stats: { users: '25K+', rating: 4.7 },
      link: '#'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'saas':
        return <Code className="h-5 w-5" />;
      case 'web':
        return <Monitor className="h-5 w-5" />;
      case 'mobile':
        return <Smartphone className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <>
      <Breadcrumb
        pageName="Projects"
        description="Here are our projects. We specialize in building high-performance, scalable websites and web applications. From startups to enterprises, we craft digital solutions that drive results and elevate your online presence."
      />
      <section className="py-24 bg-secondary-50 dark:bg-secondary-900" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Showcasing our best work and innovative solutions
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'bg-white text-secondary-600 hover:bg-primary-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project: Project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:text-white dark:bg-black bg-secondary-800 rounded-2xl shadow-soft overflow-hidden group"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedProject(project)}
                        className="bg-white text-primary-600 px-4 py-2 rounded-lg flex items-center gap-2 dark:text-black"
                      >
                        View Details
                        <ExternalLink className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary-600 mb-2">
                      {getCategoryIcon(project.category)}
                      <span className="text-sm font-medium capitalize">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-secondary-50 text-secondary-600 dark:bg-secondary-700 dark:text-secondary-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-secondary-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white dark:bg-black rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 bg-white/90 dark:bg-secondary-700/90 p-2 rounded-full"
                    >
                      <X className="h-5 w-5 text-secondary-600 dark:text-secondary-200" />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-white mb-6">
                      {selectedProject.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-secondary-900 dark:text-white  mb-2">
                          Statistics
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-secondary-600 dark:text-white">Active Users:</span>
                            <span className="font-medium">{selectedProject.stats.users}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-secondary-600 dark:text-secondary-300">User Rating:</span>
                            <span className="font-medium">{selectedProject.stats.rating}/5.0</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-secondary-50 text-secondary-600 dark:bg-secondary-700 dark:text-secondary-200 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary-600 text-black dark:text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Visit Project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Portfolio;