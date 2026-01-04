
import React from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const navItems = [
    { label: '模型服务平台', href: '#model-market' },
    { label: '应用沙箱', href: '#agent-sandbox' },
    { label: '体验中心', href: '#experience' },
    { label: '文档', href: '#docs' },
    { label: 'API参考', href: '#api' },
  ];

  return (
    <nav className="fixed w-full z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold font-mono">R</div>
          <span className="font-bold text-xl tracking-tighter uppercase font-display text-gray-900 dark:text-white">RunC.AI</span>
        </div>
        
        {/* Updated Navigation from Screenshot */}
        <div className="hidden lg:flex items-center space-x-10 text-[14px] font-medium text-gray-600 dark:text-gray-400">
          {navItems.map((item) => (
            <a 
              key={item.label}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap" 
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <span className="material-icons text-xl">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <a className="hidden sm:block text-xs font-bold font-mono uppercase tracking-widest text-gray-500" href="#">Login</a>
          <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 text-xs font-bold transition-all uppercase tracking-widest font-mono shadow-md shadow-blue-500/10" href="#">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
