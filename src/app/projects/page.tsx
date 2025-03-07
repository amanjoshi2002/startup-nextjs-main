'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Monitor, Smartphone, X } from 'lucide-react';
import Image from 'next/image';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
      id: 4,
      title: 'Interior Designer Landing Page',
      category: 'Landing',
      image: '/images/projects/interor.png',
      technologies: ['Nextjs' ,'tailwind'],
      description: 'A modern and responsive landing page for interior designers.',
      stats: { users: '5K+', rating: 4.5 },
      link: 'https://interior-hazel.vercel.app/'

    },
    {
      id: 5,
      title: 'WaterSport Landing Page',
      category: 'Landing',
      image: '/images/projects/watersport.jpg',
      technologies: ['Nextjs' ,'tailwind'],
      description: 'A vibrant landing page for water sports enthusiasts.',
      stats: { users: '7K+', rating: 4.6 },
      link: 'https://water-blue.vercel.app/'

    },
    {
      id: 6,
      title: 'Computer Service Landing Page',
      category: 'Landing',
      image: '/images/projects/computer.png',
      technologies: ['Nextjs' ,'tailwind'],
      description: 'A professional landing page for computer repair services.',
      stats: { users: '8K+', rating: 4.7 },
      link: 'https://ts-final-website.vercel.app/'

    },
    {
      id: 7,
      title: 'Printing website',
      category: 'web',
      image: '/images/projects/ecommerce.png',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
      description: 'A fully functional e-commerce platform with modern design.',
      stats: { users: '15K+', rating: 4.8 },
      link: 'https://printify-nextjs.vercel.app/'
    },
    {
      id: 8,
      title: 'Printing Landing Page',
      category: 'Landing',
      image: '/images/projects/printing.png',
      technologies: ['Nextjs' ,'tailwind'],
      description: 'A landing page for a printing service business.',
      stats: { users: '6K+', rating: 4.4 },
      link: 'https://www.damodarprintzone.in/'

    },
    {
      id: 9,
      title: 'Tour and Travel Landing Page',
      category: 'Landing',
      image: '/images/projects/tour-travel.png',
      technologies: ['Nextjs','tailwind'],
      description: 'A travel agency landing page with a clean and inviting design.',
      stats: { users: '9K+', rating: 4.6 },
      link: 'https://www.atmaramtourandtravels.in/'
    },
    {
      id: 10,
      title: 'Shop Website',
      category: 'web',
      image: '/images/projects/shop.png',
      technologies: ['Nextjs','tailwind',"mongodb"],
      description: 'An online store for military gear and accessories.',
      stats: { users: '12K+', rating: 4.7 },
      link: 'https://www.goamilitarystore.in/'

    },
    {
      id: 11,
      title: 'Rent a Car Landing Page',
      category: 'Landing',
      image: '/images/projects/rent-car.png',
      technologies: ['Nextjs','tailwind'],
      description: 'A sleek landing page for a car rental service.',
      stats: { users: '10K+', rating: 4.5 },
      link: 'https://rent-a-car-lilac-chi.vercel.app/'
    },
    {
      id: 12,
      title: 'Portfolio Landing Page',
      category: 'Landing',
      image: '/images/projects/portfolio.png',
      technologies: ['Nextjs,tailwind'],
      description: 'A professional portfolio website for showcasing work.',
      stats: { users: '20K+', rating: 4.9 },
      link: 'https://www.nextcraftsolution.site/'
    },
    {
      id: 13,
      title: 'Dine and Restaurants Landing Page',
      category: 'Landing',
      image: '/images/projects/DINE.png',
      technologies: ['Nextjs,tailwind'],
      description: 'A Dine and Restaurant page showing their services offered ',
      stats: { users: '20K+', rating: 4.9 },
      link: 'https://resturant-and-dine.vercel.app/'
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
      <section className="py-8 md:py-12 bg-secondary-50 dark:bg-secondary-900" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Our Portfolio
            </h2>
            <p className="text-base md:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Showcasing our best work and innovative solutions
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4">
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
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filteredProjects.map((project: Project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <CardContainer className="inter-var">
                    <CardBody className=" bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {project.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                      >
                        {project.description}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <div className="relative w-full h-[200px] sm:h-[250px]">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain rounded-xl group-hover/card:shadow-xl"
                          />
                        </div>
                      </CardItem>
                      <div className="flex justify-between items-center mt-8">
                        <CardItem
                          translateZ={20}
                          as="button"
                          onClick={() => setSelectedProject(project)}
                          className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          View Details →
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as="a"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700"
                        >
                          Visit Site
                        </CardItem>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech: string, index: number) => (
                          <CardItem
                            key={index}
                            translateZ={30}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs"
                          >
                            {tech}
                          </CardItem>
                        ))}
                      </div>
                    </CardBody>
                  </CardContainer>
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
                  className="bg-white dark:bg-secondary-900 rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative h-[400px] bg-white dark:bg-secondary-900">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-contain"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 bg-white/90 dark:bg-secondary-800 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-secondary-700 transition-colors"
                    >
                      <X className="h-5 w-5 text-secondary-600 dark:text-secondary-200" />
                    </button>
                  </div>

                  <div className="p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm md:text-base text-secondary-600 dark:text-secondary-300 mb-6">
                      {selectedProject.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-2 py-1 md:px-3 md:py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 rounded-full text-xs md:text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Visit Project
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="inline-flex items-center gap-2 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
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