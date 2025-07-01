import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import DashboardPage from './Pages/DashboardPage';
import MyHabitsPage from './Pages/MyHabitsPage';
import DiscoverPage from './Pages/DiscoverPage';
import JournalPage from './Pages/JournalPage';
import AIToolPage from './Pages/AIToolPage';
import SettingsPage from './Pages/SettingsPage';
import { useAppContext } from './contexts/AppContext';
import { Habit, HabitStatus } from './types';
import AddHabitModal from './Components/AddHabitModal';
import { PlusIcon, Bars3Icon, XMarkIcon } from './Components/Icons';
import Button from './Components/Button';

const App: React.FC = () => {
  const { settings, addHabit } = useAppContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddHabitModalOpen, setIsAddHabitModalOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = (pathname: string): string => {
    switch (pathname) {
      case '/': return 'Dashboard';
      case '/my-habits': return 'My Habits';
      case '/discover': return 'Discover Habits';
      case '/journal': return 'Daily Reflection';
      case '/ai-tool': return 'AI Habit Tool';
      case '/settings': return 'Settings';
      default: return 'Habitual Harmony';
    }
  };

  const handleAddHabit = (newHabitData: Omit<Habit, 'id' | 'createdAt' | 'completionDates'>) => {
    addHabit(newHabitData);
    setIsAddHabitModalOpen(false);
  };

  return (
    <div className={`flex h-screen font-sans antialiased text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-950`}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm p-4 md:p-5 flex justify-between items-center sticky top-0 z-30 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-neutral-600 dark:text-neutral-400 md:hidden mr-3 p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              {isSidebarOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
            <h1 className="text-xl md:text-2xl font-semibold text-neutral-800 dark:text-neutral-100">{getPageTitle(location.pathname)}</h1>
          </div>
          <Button
            variant='primary'
            onClick={() => setIsAddHabitModalOpen(true)}
            leftIcon={<PlusIcon className="w-5 h-5" />}
          >
            New Habit
          </Button>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 md:p-8 bg-neutral-100 dark:bg-neutral-950">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/my-habits" element={<MyHabitsPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/ai-tool" element={<AIToolPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
      {isAddHabitModalOpen && (
        <AddHabitModal
          isOpen={isAddHabitModalOpen}
          onClose={() => setIsAddHabitModalOpen(false)}
          onAddHabit={handleAddHabit}
        />
      )}
    </div>
  );
};

export default App;