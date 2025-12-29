import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 p-3 rounded-full backdrop-blur-2xl bg-white/40 dark:bg-white/10 border border-white/30 hover:bg-white/60 dark:hover:bg-white/20 transition-all duration-300 shadow-lg shadow-pink-200/50 dark:shadow-pink-900/30"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-pink-300" />
      ) : (
        <Moon className="w-5 h-5 text-rose-600" />
      )}
    </button>
  );
}