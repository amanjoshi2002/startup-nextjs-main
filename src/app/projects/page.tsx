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
  
  // Projects array remains the same as in your original code
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
    },
    {
      id: 4,
      title: 'Interior Designer Landing Page',
      category: 'Landing',
      image: '/images/projects/interior-designer.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'A modern and responsive landing page for interior designers.',
      stats: { users: '5K+', rating: 4.5 },
      link: 'https://interior-hazel.vercel.app/'
    },
    {
      id: 5,
      title: 'WaterSport Landing Page',
      category: 'Landing',
      image: '/images/projects/watersport.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'A vibrant landing page for water sports enthusiasts.',
      stats: { users: '7K+', rating: 4.6 },
      link: 'https://water-blue.vercel.app/'
    },
    {
      id: 6,
      title: 'Computer Service Landing Page',
      category: 'Landing',
      image: '/images/projects/computer-service.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'A professional landing page for computer repair services.',
      stats: { users: '8K+', rating: 4.7 },
      link: 'https://ts-final-website.vercel.app/'
    },
    {
      id: 7,
      title: 'E-Commerce Page',
      category: 'web',
      image: '/images/projects/ecommerce.jpg',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
      description: 'A fully functional e-commerce platform with modern design.',
      stats: { users: '15K+', rating: 4.8 },
      link: 'https://printify-nextjs.vercel.app/'
    },
    {
      id: 8,
      title: 'Printing Landing Page',
      category: 'Landing',
      image: '/images/projects/printing.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'A landing page for a printing service business.',
      stats: { users: '6K+', rating: 4.4 },
      link: 'https://www.damodarprintzone.in/'
    },
    {
      id: 9,
      title: 'Tour and Travel Landing Page',
      category: 'Landing',
      image: '/images/projects/tour-travel.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'A travel agency landing page with a clean and inviting design.',
      stats: { users: '9K+', rating: 4.6 },
      link: 'https://www.atmaramtourandtravels.in/'
    },
    {
      id: 10,
      title: 'Shop Website',
      category: 'web',
      image: '/images/projects/shop.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'An online store for military gear and accessories.',
      stats: { users: '12K+', rating: 4.7 },
      link: 'https://www.goamilitarystore.in/'
    },
    {
      id: 11,
      title: 'Rent a Car Landing Page',
      category: 'Landing',
      image: '/images/projects/rent-car.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'A sleek landing page for a car rental service.',
      stats: { users: '10K+', rating: 4.5 },
      link: 'https://rent-a-car-lilac-chi.vercel.app/'
    },
    {
      id: 12,
      title: 'Portfolio Landing Page',
      category: 'Landing',
      image: '/images/projects/portfolio.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'A professional portfolio website for showcasing work.',
      stats: { users: '20K+', rating: 4.9 },
      link: 'https://www.nextcraftsolution.site/'
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
      <section className="py-12 md:py-24 bg-secondary-50 dark:bg-secondary-900" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Our Portfolio
            </h2>
            <p className="text-base md:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Showcasing our best work and innovative solutions
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'bg-white text-secondary-600 hover:bg-primary-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
                    <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedProject(project)}
                        className="bg-white text-primary-600 px-4 py-2 rounded-lg flex items-center gap-2 dark:text-black"
                      >
                        View Details
                        <ExternalLink className="h-4 w-4" />
                      </motion.button>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        Visit Website
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 text-primary-600 mb-2">
                      {getCategoryIcon(project.category)}
                      <span className="text-sm font-medium capitalize">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-secondary-600 dark:text-secondary-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 md:px-3 md:py-1 bg-secondary-50 text-secondary-600 dark:bg-secondary-700 dark:text-secondary-200 rounded-full text-xs md:text-sm"
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

          {/* Project Details Modal */}
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

                  <div className="p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm md:text-base text-secondary-600 dark:text-white mb-6">
                      {selectedProject.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
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
                              className="px-2 py-1 md:px-3 md:py-1 bg-secondary-50 text-secondary-600 dark:bg-secondary-700 dark:text-secondary-200 rounded-full text-xs md:text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary-600 text-black dark:text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Visit Project
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="inline-flex items-center gap-2 bg-secondary-200 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200 px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-secondary-300 dark:hover:bg-secondary-600 transition-colors"
                      >
                        Close
                      </button>
                    </div>
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