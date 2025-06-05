import { motion } from 'framer-motion';
import { Facebook, Search, MousePointer, TrendingUp, CheckCircle } from 'lucide-react';
import type { Service } from '../types';

const Services = () => {
  const services: Service[] = [
    {
      id: 'meta-ads',
      title: 'Meta Ads (Facebook & Instagram)',
      description: 'We specialize in creating eye-catching, scroll-stopping ad campaigns tailored specifically for Facebook and Instagram. The platforms where your target audience spends most of their time.',
      icon: 'Facebook',
      features: [
        'Strategic targeting to reach the right people at the right time',
        'Campaigns optimized for real outcomes: leads, sales, or app installs',
        'Continuous monitoring, testing, and fine-tuning for improved performance',
        'Engaging creatives and compelling copy that resonates with users'
      ]
    },
    {
      id: 'google-ads',
      title: 'Google Ads (Search, Display & YouTube)',
      description: 'When potential customers are actively searching for products or services, Google Ads ensure your brand appears front and center. Whether it\'s on Google Search, YouTube, or across the web.',
      icon: 'Search',
      features: [
        'Ads across Google Search, YouTube, and Google Display Network',
        'Highly effective for eCommerce, local services, and online platforms',
        'Immediate visibility with trackable and measurable ROI',
        'Customized ad strategies based on business goals and customer behavior'
      ]
    },
    {
      id: 'ppc',
      title: 'PPC (Pay-Per-Click)',
      description: 'Pay-Per-Click advertising is all about efficiency—you only pay when someone interacts with your ad. We turn every click into an opportunity using smart, data-driven strategies.',
      icon: 'MousePointer',
      features: [
        'Rigorous A/B testing to find what performs best',
        'Strong focus on turning clicks into leads or sales',
        'Smart budget allocation and ROI-focused strategies',
        'Blending creative storytelling with sharp analytics'
      ]
    },
    {
      id: 'seo',
      title: 'SEO (Search Engine Optimization)',
      description: 'SEO is a long-term investment in your brand\'s visibility. We help your website rank higher on Google through both technical fixes and engaging content strategies.',
      icon: 'TrendingUp',
      features: [
        'Technical optimization: site speed, mobile-friendliness, crawlability',
        'Keyword research and implementation that attracts the right visitors',
        'Content strategies that position you as an authority in your niche',
        'Build domain trust and long-lasting search presence'
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      Facebook,
      Search,
      MousePointer,
      TrendingUp
    };
    return icons[iconName as keyof typeof icons] || Facebook;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Digital Marketing
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Specializations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We dominate the digital landscape with proven strategies across multiple platforms. 
            Here's how we help businesses like yours achieve breakthrough results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            
            return (
              <motion.div
                key={service.id}
                className="service-card group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group inline-flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Learn More About {service.title.split(' ')[0]}
                    <motion.span
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started with R-YASS Digital
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 