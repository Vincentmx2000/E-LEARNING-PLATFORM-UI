import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Web Development', 'Data Science', 'Design', 'Mobile Development', 'Business', 'Marketing'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const durations = ['All', '0-10 hours', '10-30 hours', '30+ hours'];

  const allCourses = [
    {
      id: 1,
      title: "Complete React Development",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 12500,
      duration: "40 hours",
      price: "$89",
      originalPrice: "$129",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "Web Development",
      level: "Intermediate",
      description: "Master React from basics to advanced concepts with hands-on projects and real-world applications."
    },
    {
      id: 2,
      title: "Data Science with Python",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 8900,
      duration: "60 hours",
      price: "$129",
      originalPrice: "$199",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Data Science",
      level: "Beginner",
      description: "Learn data analysis, visualization, and machine learning with Python from scratch."
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Emma Rodriguez",
      rating: 4.9,
      students: 15200,
      duration: "35 hours",
      price: "$99",
      originalPrice: "$149",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      category: "Design",
      level: "All Levels",
      description: "Create stunning user interfaces and experiences with modern design principles."
    },
    {
      id: 4,
      title: "Advanced JavaScript",
      instructor: "John Smith",
      rating: 4.7,
      students: 9800,
      duration: "25 hours",
      price: "$79",
      originalPrice: "$119",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      category: "Web Development",
      level: "Advanced",
      description: "Deep dive into JavaScript concepts, ES6+, async programming, and modern frameworks."
    },
    {
      id: 5,
      title: "Mobile App Development with React Native",
      instructor: "Lisa Wang",
      rating: 4.6,
      students: 7200,
      duration: "45 hours",
      price: "$109",
      originalPrice: "$159",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      category: "Mobile Development",
      level: "Intermediate",
      description: "Build cross-platform mobile apps using React Native and modern development practices."
    },
    {
      id: 6,
      title: "Digital Marketing Strategy",
      instructor: "Mark Thompson",
      rating: 4.5,
      students: 11300,
      duration: "20 hours",
      price: "$69",
      originalPrice: "$99",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Marketing",
      level: "Beginner",
      description: "Learn effective digital marketing strategies to grow your business online."
    }
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel || course.level === 'All Levels';
    
    let matchesDuration = true;
    if (selectedDuration !== 'All') {
      const hours = parseInt(course.duration);
      if (selectedDuration === '0-10 hours') matchesDuration = hours <= 10;
      else if (selectedDuration === '10-30 hours') matchesDuration = hours > 10 && hours <= 30;
      else if (selectedDuration === '30+ hours') matchesDuration = hours > 30;
    }

    return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
  });

  const CourseCard = ({ course, isListView = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`glass-card hover-card group cursor-pointer ${
        isListView ? 'flex flex-col md:flex-row' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${
        isListView ? 'md:w-80 md:flex-shrink-0' : ''
      } rounded-t-2xl ${isListView ? 'md:rounded-l-2xl md:rounded-tr-none' : ''}`}>
        <img
          src={course.image}
          alt={course.title}
          className={`${isListView ? 'w-full md:w-80 h-48' : 'w-full h-48'} object-cover group-hover:scale-110 transition-transform duration-300`}
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
      
      <div className={`p-6 ${isListView ? 'flex-1' : ''}`}>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          by {course.instructor}
        </p>
        {isListView && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {course.description}
          </p>
        )}
        
        <div className={`flex items-center ${isListView ? 'justify-start space-x-6' : 'justify-between'} mb-4`}>
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
        
        <div className={`flex items-center ${isListView ? 'justify-between' : 'justify-between'}`}>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">
              {course.price}
            </span>
            <span className="text-lg text-gray-500 line-through">
              {course.originalPrice}
            </span>
          </div>
          <Link
            to={`/course/${course.id}`}
            className="btn-neumorphic !py-2 !px-4 text-sm"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            All Courses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover {allCourses.length} courses to advance your skills
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Squares2X2Icon className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-colors ${
                  viewMode === 'list'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <ListBulletIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-neumorphic inline-flex items-center lg:hidden"
            >
              <FunnelIcon className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Duration
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {durations.map(duration => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredCourses.length} of {allCourses.length} courses
          </p>
        </motion.div>

        {/* Courses Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
        }`}>
          {filteredCourses.map((course, index) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              isListView={viewMode === 'list'}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <AdjustmentsHorizontalIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No courses found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedLevel('All');
                setSelectedDuration('All');
              }}
              className="btn-neumorphic"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Courses;
