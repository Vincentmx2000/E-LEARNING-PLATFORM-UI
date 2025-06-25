import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  PlayIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  ChartBarIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Complete React Development",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 12500,
      duration: "40 hours",
      price: "$89",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "Web Development",
      level: "Intermediate"
    },
    {
      id: 2,
      title: "Data Science with Python",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 8900,
      duration: "60 hours",
      price: "$129",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Data Science",
      level: "Beginner"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Emma Rodriguez",
      rating: 4.9,
      students: 15200,
      duration: "35 hours",
      price: "$99",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      category: "Design",
      level: "All Levels"
    }
  ];

  const stats = [
    { icon: UserGroupIcon, value: "50K+", label: "Active Students" },
    { icon: AcademicCapIcon, value: "500+", label: "Expert Instructors" },
    { icon: ChartBarIcon, value: "1000+", label: "Courses Available" },
    { icon: LightBulbIcon, value: "95%", label: "Success Rate" }
  ];

  const categories = [
    { name: "Web Development", courses: 120, color: "from-blue-500 to-cyan-500" },
    { name: "Data Science", courses: 85, color: "from-purple-500 to-pink-500" },
    { name: "Design", courses: 95, color: "from-orange-500 to-red-500" },
    { name: "Mobile Development", courses: 70, color: "from-green-500 to-teal-500" },
    { name: "Business", courses: 110, color: "from-indigo-500 to-purple-500" },
    { name: "Marketing", courses: 65, color: "from-pink-500 to-rose-500" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow-lg">
                Learn Without
                <span className="block text-yellow-300">Limits</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-100 text-shadow">
                Discover thousands of courses from expert instructors and advance your career with hands-on learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="btn-neumorphic bg-white text-gray-800 hover:bg-yellow-300 hover:text-gray-900 inline-flex items-center justify-center"
                >
                  Start Learning
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <button className="btn-neumorphic bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 inline-flex items-center justify-center">
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-8 animate-float">
                <div className="bg-white rounded-lg p-6 shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <AcademicCapIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Course Progress</h3>
                      <p className="text-sm text-gray-600">React Development</p>
                    </div>
                  </div>
                  <div className="progress-bar h-3 mb-2">
                    <div className="progress-fill" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600">75% Complete</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover our most popular courses, carefully selected by our expert instructors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card hover-card group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                      {course.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    by {course.instructor}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <UserGroupIcon className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">
                      {course.price}
                    </span>
                    <Link
                      to={`/course/${course.id}`}
                      className="btn-neumorphic !py-2 !px-4 text-sm"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="btn-neumorphic inline-flex items-center"
            >
              View All Courses
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Find the perfect course in your area of interest
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card hover-card text-center p-6 cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <AcademicCapIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.courses} courses
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
