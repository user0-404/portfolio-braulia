import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { Formation } from './components/Formation';
import { Projects } from './components/Projects';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 dark:from-rose-950/40 dark:via-purple-950/40 dark:to-pink-950/40 transition-colors duration-500">
        <ThemeToggle />
        <Hero />
        <Formation />
        <Projects />
      </div>
    </ThemeProvider>
  );
}