import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  PlayIcon,
  ClockIcon,
  CheckCircleIcon,
  ChartBarIcon,
  TrophyIcon,
  FireIcon,
  BookmarkIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const MyLearning = () => {
  const [activeTab, setActiveTab] = useState('in-progress');

  // Mock user data
  const userData = {
    name: "Vincent",
    totalCourses: 8,
    completedCourses: 3,
    totalHours: 127,
    streak: 15,
    achievements: [
      { id: 1, name: "Fast Learner", icon: FireIcon, description: "Completed 3 courses", date: "Dec 2023" },
      { id: 2, name: "Consistent", icon: ChartBarIcon, description: "15 day streak", date: "Dec 2023" },
      { id: 3, name: "React Master", icon: AcademicCapIcon, description: "Completed React course", date: "Nov 2023" }
    ]
  };

  // Mock courses data
  const courses = {
    inProgress: [
      {
        id: 1,
        title: "Complete React Development",
        progress: 75,
        lastAccessed: "2 hours ago",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
        totalLessons: 48,
        completedLessons: 36,
        nextLesson: "Advanced State Management",
        timeLeft: "10 hours"
      },
      {
        id: 2,
        title: "Data Science with Python",
        progress: 45,
        lastAccessed: "1 day ago",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
        totalLessons: 56,
        completedLessons: 25,
        nextLesson: "Data Visualization",
        timeLeft: "15 hours"
      }
    ],
    completed: [
      {
        id: 3,
        title: "JavaScript Fundamentals",
        completedDate: "Nov 15, 2023",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
        certificate: true
      },
      {
        id: 4,
        title: "HTML & CSS Masterclass",
        completedDate: "Oct 28, 2023",
        image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=300&h=200&fit=crop",
        certificate: true
      },
      {
        id: 5,
        title: "Git Version Control",
        completedDate: "Oct 10, 2023",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=300&h=200&fit=crop",
        certificate: true
      }
    ],
    saved: [
      {
        id: 6,
        title: "Node.js Backend Development",
        instructor: "Mike Wilson",
        duration: "35 hours",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
        price: "$89"
      },
      {
        id: 7,
        title: "Docker for Developers",
        instructor: "Sarah Chen",
        duration: "28 hours",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=300&h=200&fit=crop",
        price: "$79"
      }
    ]
  };

  const tabs = [
    { id: 'in-progress', name: 'In Progress', count: courses.inProgress.length },
    { id: 'completed', name: 'Completed', count: courses.completed.length },
    { id: 'saved', name: 'Saved', count: courses.saved.length }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {/* Total Courses */}
          <div className="glass-card p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <BookmarkIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Courses
                </h3>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {userData.totalCourses}
                </p>
              </div>
            </div>
          </div>

          {/* Completed Courses */}
          <div className="glass-card p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <CheckCircleIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Completed
                </h3>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {userData.completedCourses}
                </p>
              </div>
            </div>
          </div>

          {/* Learning Hours */}
          <div className="glass-card p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <ClockIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Hours
                </h3>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {userData.totalHours}
                </p>
              </div>
            </div>
          </div>

          {/* Learning Streak */}
          <div className="glass-card p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <FireIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Day Streak
                </h3>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {userData.streak}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Recent Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userData.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {achievement.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {achievement.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Courses Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.name}
                  <span className="ml-2 text-xs text-gray-400 dark:text-gray-500">
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Course Lists */}
        <div className="space-y-6">
          {/* In Progress Courses */}
          {activeTab === 'in-progress' && (
            <div className="grid grid-cols-1 gap-6">
              {courses.inProgress.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card hover-card p-6"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-64 flex-shrink-0">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {course.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {course.lastAccessed}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="progress-bar h-2">
                          <div 
                            className="progress-fill"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="text-gray-600 dark:text-gray-400">
                          <span>Completed Lessons:</span>
                          <span className="ml-1 font-medium text-gray-900 dark:text-white">
                            {course.completedLessons}/{course.totalLessons}
                          </span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span>Time Left:</span>
                          <span className="ml-1 font-medium text-gray-900 dark:text-white">
                            {course.timeLeft}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <span>Next Lesson:</span>
                          <span className="ml-1 font-medium text-gray-900 dark:text-white">
                            {course.nextLesson}
                          </span>
                        </div>
                        <Link
                          to={`/course/${course.id}`}
                          className="btn-neumorphic inline-flex items-center !py-2"
                        >
                          <PlayIcon className="h-4 w-4 mr-2" />
                          Continue Learning
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Completed Courses */}
          {activeTab === 'completed' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.completed.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card hover-card"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    {course.certificate && (
                      <div className="absolute top-4 right-4">
                        <TrophyIcon className="h-6 w-6 text-yellow-400" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Completed on {course.completedDate}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link
                        to={`/course/${course.id}`}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        Review Course
                      </Link>
                      {course.certificate && (
                        <button className="btn-neumorphic !py-2 !px-4 text-sm">
                          View Certificate
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Saved Courses */}
          {activeTab === 'saved' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.saved.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card hover-card"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <button className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-600">
                      <BookmarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {course.instructor}
                    </p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary-600">
                        {course.price}
                      </span>
                      <Link
                        to={`/course/${course.id}`}
                        className="btn-neumorphic !py-2 !px-4 text-sm"
                      >
                        Start Learning
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLearning;
