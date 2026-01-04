
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-border-dark pt-16 lg:pt-24 pb-8 font-mono text-[11px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1 pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">R</div>
              <span className="font-bold text-lg tracking-tighter uppercase font-display">RunC.AI</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed uppercase">
              企业级专属AI开发平台<br/>
              安全可靠的模型市场<br/>
              隔离开发环境
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-gray-900 dark:text-white">产品</h4>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400 uppercase">
              <li><a className="hover:text-blue-500 transition-colors" href="#">模型服务平台</a></li>
              <li><a className="hover:text-blue-500 transition-colors" href="#">应用沙箱</a></li>
              <li><a className="hover:text-blue-500 transition-colors" href="#">企业级部署</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-gray-900 dark:text-white">资源</h4>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400 uppercase">
              <li><a className="hover:text-blue-500 transition-colors" href="#">文档中心</a></li>
              <li><a className="hover:text-blue-500 transition-colors" href="#">API 参考</a></li>
              <li><a className="hover:text-blue-500 transition-colors" href="#">体验中心</a></li>
              <li><a className="hover:text-blue-500 transition-colors" href="#">社区</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-gray-900 dark:text-white">公司</h4>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400 uppercase">
              <li><a className="hover:text-blue-500 transition-colors" href="#">关于我们</a></li>
              <li><a className="hover:text-blue-500 transition-colors" href="#">联系我们</a></li>
              <li><a className="hover:text-blue-500 transition-colors" href="#">加入我们</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 uppercase tracking-widest">
          <p>© {currentYear} RunC AI Platform. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="hover:text-gray-600 dark:hover:text-gray-200">PRIVACY</a>
            <a href="#" className="hover:text-gray-600 dark:hover:text-gray-200">TERMS</a>
            <span>沪ICP备12020087号-61</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
