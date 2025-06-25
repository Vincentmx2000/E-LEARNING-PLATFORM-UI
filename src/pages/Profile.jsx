import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserIcon,
  CameraIcon,
  PencilIcon,
  TrophyIcon,
  StarIcon,
  FireIcon,
  AcademicCapIcon,
  ClockIcon,
  BookOpenIcon,
  ChartBarIcon,
  CogIcon,
  BellIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    title: "Full Stack Developer",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    bio: "Passionate developer with a love for learning new technologies. Currently focusing on React and Node.js development.",
    stats: {
      coursesCompleted: 12,
      totalHours: 247,
      certificates: 8,
      streak: 45,
      rank: "Advanced Learner"
    },
    badges: [
      {
        id: 1,
        name: "React Master",
        description: "Completed all React courses",
        icon: "🚀",
        color: "from-blue-500 to-cyan-500",
        earned: "Dec 2023",
        rarity: "Epic"
      },
      {
        id: 2,
        name: "Speed Learner",
        description: "Completed 5 courses in one month",
        icon: "⚡",
        color: "from-yellow-500 to-orange-500",
        earned: "Nov 2023",
        rarity: "Rare"
      },
      {
        id: 3,
        name: "Consistent Learner",
        description: "45-day learning streak",
        icon: "🔥",
        color: "from-red-500 to-pink-500",
        earned: "Dec 2023",
        rarity: "Epic"
      },
      {
        id: 4,
        name: "JavaScript Expert",
        description: "Mastered JavaScript fundamentals",
        icon: "💻",
        color: "from-purple-500 to-indigo-500",
        earned: "Oct 2023",
        rarity: "Rare"
      },
      {
        id: 5,
        name: "First Course",
        description: "Completed your first course",
        icon: "🎯",
        color: "from-green-500 to-teal-500",
        earned: "Jan 2023",
        rarity: "Common"
      },
      {
        id: 6,
        name: "Night Owl",
        description: "Completed lessons after 10 PM",
        icon: "🦉",
        color: "from-indigo-500 to-purple-500",
        earned: "Sep 2023",
        rarity: "Uncommon"
      }
    ],
    recentActivity: [
      {
        id: 1,
        type: "course_completed",
        title: "Completed Advanced React Patterns",
        date: "2 days ago",
        icon: CheckCircleIcon
      },
      {
        id: 2,
        type: "badge_earned",
        title: "Earned React Master badge",
        date: "3 days ago",
        icon: TrophyIcon
      },
      {
        id: 3,
        type: "streak_milestone",
        title: "Reached 45-day learning streak",
        date: "1 week ago",
        icon: FireIcon
      }
    ],
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Python", level: 70 },
      { name: "CSS", level: 80 },
      { name: "TypeScript", level: 65 }
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: UserIcon },
    { id: 'badges', name: 'Badges', icon: TrophyIcon },
    { id: 'activity', name: 'Activity', icon: ChartBarIcon },
    { id: 'settings', name: 'Settings', icon: CogIcon }
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Common': return 'text-gray-600 dark:text-gray-400';
      case 'Uncommon': return 'text-green-600 dark:text-green-400';
      case 'Rare': return 'text-blue-600 dark:text-blue-400';
      case 'Epic': return 'text-purple-600 dark:text-purple-400';
      case 'Legendary': return 'text-yellow-600 dark:text-yellow-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="relative">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                <CameraIcon className="h-4 w-4" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {userData.name}
                </h1>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-1 text-gray-400 hover:text-primary-600 transition-colors"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
              </div>
              <p className="text-lg text-primary-600 dark:text-primary-400 mb-2">
                {userData.title}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                📍 {userData.location} • Member since {userData.joinDate}
              </p>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
                {userData.bio}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="glass-card p-4">
                <div className="text-2xl font-bold text-primary-600">
                  {userData.stats.coursesCompleted}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Courses
                </div>
              </div>
              <div className="glass-card p-4">
                <div className="text-2xl font-bold text-secondary-600">
                  {userData.stats.certificates}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Certificates
                </div>
              </div>
              <div className="glass-card p-4">
                <div className="text-2xl font-bold text-accent-600">
                  {userData.stats.totalHours}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Hours
                </div>
              </div>
              <div className="glass-card p-4">
                <div className="text-2xl font-bold text-orange-600">
                  {userData.stats.streak}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Day Streak
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Skills
                </h3>
                <div className="space-y-4">
                  {userData.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="progress-bar h-2">
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Learning Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Learning Statistics
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <BookOpenIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Courses Completed
                        </p>
                        <p className="text-2xl font-bold text-blue-600">
                          {userData.stats.coursesCompleted}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                        <ClockIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Total Learning Hours
                        </p>
                        <p className="text-2xl font-bold text-green-600">
                          {userData.stats.totalHours}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                        <TrophyIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Current Rank
                        </p>
                        <p className="text-lg font-bold text-purple-600">
                          {userData.stats.rank}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Badges Tab */}
          {activeTab === 'badges' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {userData.badges.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card hover-card p-6 text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${badge.color} rounded-full mx-auto mb-4 flex items-center justify-center text-3xl`}>
                    {badge.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {badge.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {badge.description}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className={`font-medium ${getRarityColor(badge.rarity)}`}>
                      {badge.rarity}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {badge.earned}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {userData.recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <activity.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Account Settings */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Account Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <UserIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Profile Information
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Update your personal information
                        </p>
                      </div>
                    </div>
                    <button className="btn-neumorphic !py-2 !px-4 text-sm">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <BellIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Notifications
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Manage your notification preferences
                        </p>
                      </div>
                    </div>
                    <button className="btn-neumorphic !py-2 !px-4 text-sm">
                      Configure
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <ShieldCheckIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Privacy & Security
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Control your privacy settings
                        </p>
                      </div>
                    </div>
                    <button className="btn-neumorphic !py-2 !px-4 text-sm">
                      Manage
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Language & Region
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Set your preferred language
                        </p>
                      </div>
                    </div>
                    <button className="btn-neumorphic !py-2 !px-4 text-sm">
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
