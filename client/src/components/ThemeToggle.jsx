import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}
      className="w-10 h-10 grid place-items-center bg-[rgb(var(--zinc5010))]
                   rounded-xl ring-inset ring-1 ring-[rgb(var(--zinc50)_/_0.02)] backdrop-blur-2xl 
                   hover:bg-[rgb(var(--zinc5010)_/_0.8)] transition-colors active:scale-95">
      <span className="material-symbols-rounded">
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;