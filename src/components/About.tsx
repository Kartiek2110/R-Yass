import { motion, useInView } from 'framer-motion';
import { CheckCircle, TrendingUp, Award, Users, Target, Zap, Globe, BarChart3 } from 'lucide-react';
import { useRef } from 'react';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    { 
      icon: TrendingUp, 
      number: '300+', 
      label: 'Successful Campaigns',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Users, 
      number: '150+', 
      label: 'Happy Clients',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Globe, 
      number: '25+', 
      label: 'Countries Served',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Award, 
      number: '5+', 
      label: 'Industry Awards',
      color: 'from-orange-500 to-red-500'
    },
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every campaign is optimized for maximum ROI and measurable results.',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Quick turnaround times without compromising on quality.',
      gradient: 'from-yellow-500 to-orange-400'
    },
    {
      icon: BarChart3,
      title: 'Data-Focused',
      description: 'Every decision is backed by comprehensive analytics and insights.',
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      icon: Users,
      title: 'Client-First',
      description: 'Your success is our success. We grow together.',
      gradient: 'from-green-500 to-emerald-400'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-200/20 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6"
            variants={itemVariants}
          >
            <Award className="h-4 w-4" />
            <span className="text-sm font-semibold">About R-YASS Digital Co.</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Transforming Businesses with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We're not just another digital marketing agency. We're your growth partners, 
            combining cutting-edge strategies with proven results to dominate your digital space.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Story & Mission
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to democratize digital marketing success, R-YASS Digital Co. 
                  has been at the forefront of the digital revolution, helping businesses of all sizes 
                  achieve unprecedented growth.
                </p>
                <p>
                  Our team of certified experts combines creativity with data-driven strategies to 
                  deliver campaigns that don't just look good – they perform exceptionally.
                </p>
              </div>
            </motion.div>

            {/* Key Differentiators */}
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                'Certified Google & Meta Partners',
                'Average 2.5x ROI for our clients',
                '24/7 dedicated account management',
                'Real-time performance tracking',
                'Custom strategies for every business'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <motion.button
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More About Us</span>
                <motion.div
                  className="w-5 h-5"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Achievement Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4 sm:gap-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl`} />
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`inline-flex w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r ${achievement.color} items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  
                  <motion.div
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {achievement.number}
                  </motion.div>
                  
                  <div className="text-gray-600 font-medium text-sm lg:text-base">
                    {achievement.label}
                  </div>
                  
                  {/* Floating Badge for First Card */}
                  {index === 0 && (
                    <motion.div
                      className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                      initial={{ scale: 0, rotate: -10 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                      transition={{ delay: 1.2, type: "spring" }}
                    >
                      Top Rated
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that drive everything we do and deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="group text-center"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative mx-auto w-16 h-16 lg:w-20 lg:h-20 mb-6">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-lg`} />
                  
                  {/* Icon Container */}
                  <div className={`relative w-full h-full bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 