
import React from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed w-full z-50 border-b border-gray-200 dark:border-border-dark bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-dashed border-gray-200 dark:border-border-dark h-full">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold font-mono border border-gray-200 dark:border-border-dark">R</div>
            <span className="font-bold text-xl tracking-tight font-display uppercase">RunC.AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-400 font-mono">
            <a className="hover:text-primary transition-colors uppercase tracking-wide" href="#model-market">模型服务平台</a>
            <a className="hover:text-primary transition-colors uppercase tracking-wide" href="#agent-sandbox">应用沙箱</a>
            <a className="hover:text-primary transition-colors uppercase tracking-wide" href="#advantages">核心优势</a>
            <a className="hover:text-primary transition-colors uppercase tracking-wide" href="#">文档</a>
            <a className="hover:text-primary transition-colors uppercase tracking-wide" href="#">API参考</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
            >
              <span className="material-icons text-xl">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <a className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary font-mono uppercase" href="#">登录</a>
            <a className="bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black px-5 py-2 text-sm font-bold transition-all font-mono uppercase" href="#">
              立即试用
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
