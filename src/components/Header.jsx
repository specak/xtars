'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md rounded-xl mb-4">
      <h1 className="text-xl font-bold">Welcome in, to the new Edtech world</h1>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 transition"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        <span className="text-sm">{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>
    </header>
  );
};

export default Header;
