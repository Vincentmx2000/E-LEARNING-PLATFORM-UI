import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { 
  PlayIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BookOpenIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  AcademicCapIcon,
  ShareIcon,
  HeartIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModule, setExpandedModule] = useState(0);
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Mock course data - in real app, this would come from API
  const course = {
    id: parseInt(id),
    title: "Complete React Development",
    instructor: "Sarah Johnson",
    instructorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 4.9,
    reviewCount: 2847,
    students: 12500,
    duration: "40 hours",
    lessons: 156,
    price: "$89",
    originalPrice: "$129",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Sample video
    category: "Web Development",
    level: "Intermediate",
    language: "English",
    lastUpdated: "November 2023",
    description: "Master React from basics to advanced concepts with hands-on projects and real-world applications. This comprehensive course covers everything you need to know to become a proficient React developer.",
    whatYouWillLearn: [
      "Build modern React applications from scratch",
      "Master React Hooks and functional components",
      "State management with Redux and Context API",
      "React Router for navigation",
      "Testing React applications",
      "Performance optimization techniques",
      "Deploy React apps to production",
      "Work with APIs and handle async operations"
    ],
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with ES6+ features",
      "A computer with internet connection",
      "Code editor (VS Code recommended)"
    ],
    modules: [
      {
        title: "Getting Started with React",
        duration: "2h 30m",
        lessons: [
          { title: "Introduction to React", duration: "15:30", type: "video", completed: true },
          { title: "Setting up Development Environment", duration: "20:45", type: "video", completed: true },
          { title: "Your First React Component", duration: "18:20", type: "video", completed: false },
          { title: "JSX Fundamentals", duration: "25:15", type: "video", completed: false },
          { title: "Practice Exercise", duration: "30:00", type: "exercise", completed: false }
        ]
      },
      {
        title: "Components and Props",
        duration: "3h 15m",
        lessons: [
          { title: "Understanding Components", duration: "22:30", type: "video", completed: false },
          { title: "Props and Data Flow", duration: "28:45", type: "video", completed: false },
          { title: "Component Composition", duration: "35:20", type: "video", completed: false },
          { title: "Conditional Rendering", duration: "19:15", type: "video", completed: false },
          { title: "Lists and Keys", duration: "24:30", type: "video", completed: false },
          { title: "Building a Todo App", duration: "45:00", type: "project", completed: false }
        ]
      },
      {
        title: "State and Event Handling",
        duration: "4h 20m",
        lessons: [
          { title: "Introduction to State", duration: "20:30", type: "video", completed: false },
          { title: "useState Hook", duration: "32:45", type: "video", completed: false },
          { title: "Event Handling", duration: "25:20", type: "video", completed: false },
          { title: "Forms in React", duration: "38:15", type: "video", completed: false },
          { title: "State Management Patterns", duration: "29:30", type: "video", completed: false },
          { title: "Interactive Dashboard Project", duration: "54:00", type: "project", completed: false }
        ]
      }
    ]
  };

  const relatedCourses = [
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "John Smith",
      rating: 4.7,
      price: "$79",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      title: "React Native Development",
      instructor: "Lisa Wang",
      rating: 4.6,
      price: "$109",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop"
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'curriculum', name: 'Curriculum' },
    { id: 'instructor', name: 'Instructor' },
    { id: 'reviews', name: 'Reviews' }
  ];

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? -1 : index);
  };

  const getLessonIcon = (type) => {
    switch (type) {
      case 'video': return VideoCameraIcon;
      case 'exercise': return BookOpenIcon;
      case 'project': return AcademicCapIcon;
      default: return DocumentTextIcon;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/courses"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Courses
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden mb-8"
            >
              <div className="aspect-video">
                <ReactPlayer
                  url={course.videoUrl}
                  width="100%"
                  height="100%"
                  controls
                  light={course.image}
                  playIcon={
                    <div className="flex items-center justify-center w-20 h-20 bg-primary-600 rounded-full">
                      <PlayIcon className="h-8 w-8 text-white ml-1" />
                    </div>
                  }
                />
              </div>
            </motion.div>

            {/* Course Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full">
                  {course.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors">
                    <HeartIcon className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
                    <ShareIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {course.title}
              </h1>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium text-gray-900 dark:text-white">
                    {course.rating}
                  </span>
                  <span className="ml-1 text-gray-600 dark:text-gray-400">
                    ({course.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <UserGroupIcon className="h-5 w-5 mr-1" />
                  {course.students.toLocaleString()} students
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <ClockIcon className="h-5 w-5 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <BookOpenIcon className="h-5 w-5 mr-1" />
                  {course.lessons} lessons
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                          : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        What you'll learn
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.whatYouWillLearn.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Requirements
                      </h3>
                      <ul className="space-y-2">
                        {course.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700 dark:text-gray-300">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="space-y-4">
                    {course.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                        <button
                          onClick={() => toggleModule(moduleIndex)}
                          className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {module.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {module.lessons.length} lessons • {module.duration}
                            </p>
                          </div>
                          {expandedModule === moduleIndex ? (
                            <ChevronUpIcon className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                        
                        {expandedModule === moduleIndex && (
                          <div className="px-4 pb-3">
                            {module.lessons.map((lesson, lessonIndex) => {
                              const IconComponent = getLessonIcon(lesson.type);
                              return (
                                <div key={lessonIndex} className="flex items-center py-2 border-t border-gray-100 dark:border-gray-700">
                                  <IconComponent className="h-4 w-4 text-gray-400 mr-3" />
                                  <span className={`flex-1 text-sm ${
                                    lesson.completed 
                                      ? 'text-gray-500 dark:text-gray-400 line-through' 
                                      : 'text-gray-700 dark:text-gray-300'
                                  }`}>
                                    {lesson.title}
                                  </span>
                                  <span className="text-sm text-gray-500 dark:text-gray-400 mr-3">
                                    {lesson.duration}
                                  </span>
                                  {lesson.completed && (
                                    <CheckIcon className="h-4 w-4 text-green-500" />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'instructor' && (
                  <div className="flex items-start space-x-4">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {course.instructor}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Senior React Developer & Instructor
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Sarah is a passionate developer with over 8 years of experience in web development. 
                        She has worked with companies like Google and Facebook, and has taught thousands of 
                        students how to master React and modern web development.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="text-center py-8">
                    <p className="text-gray-600 dark:text-gray-400">
                      Reviews section coming soon...
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Purchase Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 mb-6 sticky top-24"
            >
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-bold text-primary-600">
                    {course.price}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    {course.originalPrice}
                  </span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                  31% off • Limited time offer
                </p>
              </div>

              <button
                onClick={() => setIsEnrolled(true)}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mb-4 ${
                  isEnrolled
                    ? 'bg-green-600 text-white cursor-default'
                    : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 hover:scale-105'
                }`}
                disabled={isEnrolled}
              >
                {isEnrolled ? (
                  <span className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 mr-2" />
                    Enrolled
                  </span>
                ) : (
                  'Enroll Now'
                )}
              </button>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                30-day money-back guarantee
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Level:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Lessons:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{course.lessons}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Language:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{course.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Last Updated:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{course.lastUpdated}</span>
                </div>
              </div>
            </motion.div>

            {/* Related Courses */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Related Courses
              </h3>
              <div className="space-y-4">
                {relatedCourses.map((relatedCourse) => (
                  <Link
                    key={relatedCourse.id}
                    to={`/course/${relatedCourse.id}`}
                    className="block hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                  >
                    <div className="flex space-x-3">
                      <img
                        src={relatedCourse.image}
                        alt={relatedCourse.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {relatedCourse.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {relatedCourse.instructor}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center">
                            <StarIcon className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="ml-1 text-xs text-gray-600 dark:text-gray-400">
                              {relatedCourse.rating}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-primary-600">
                            {relatedCourse.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
