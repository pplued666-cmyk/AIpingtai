
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-200 dark:border-border-dark bg-background-light dark:bg-background-dark">
      {/* Background Decor - Enhanced Tech Grid & Subtle Light Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* The Grid */}
        <div className="absolute inset-0 grid-pattern opacity-100"></div>
        <div className="absolute inset-0 dot-pattern opacity-0 dark:opacity-30"></div>
        
        {/* Subtle Gradient Glows (Dark Mode Focus) */}
        <div className="hidden dark:block">
          {/* Cyan/Blue Glow Top Left */}
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/20 blur-[140px] rounded-full animate-slow-glow"></div>
          
          {/* Purple/Indigo Glow Bottom Right */}
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 blur-[130px] rounded-full animate-slow-glow-reverse"></div>
          
          {/* Central Indigo Shimmer */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[160px] rounded-full opacity-50"></div>
          
          {/* Subtle Deep Purple Accent */}
          <div className="absolute top-[20%] right-[15%] w-[300px] h-[300px] bg-fuchsia-600/15 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
        </div>

        {/* Light Mode Glows (Minimalist) */}
        <div className="dark:hidden">
          <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] bg-purple-400/10 blur-[100px] rounded-full"></div>
        </div>
        
        {/* Tech Lines (Thin & Shimmering) */}
        <div className="absolute top-[35%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 dark:via-blue-400/20 to-transparent"></div>
        <div className="absolute bottom-[35%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 dark:via-purple-400/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-mono mb-10 uppercase tracking-[0.2em] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          Cluster: Global-01 Status: Active
        </div>
        
        {/* Colorful Gradient Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tight leading-[1.1] uppercase">
          <span className="text-gray-900 dark:text-white">企业专属</span><br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
            AI 开发平台
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-14 font-normal leading-relaxed">
          集成 <span className="text-blue-600 font-medium border-b border-blue-200">Modelverse</span> 模型市场与 <span className="text-rose-400 font-medium border-b border-rose-100">Sandbox</span> 安全隔离环境，构建下一代企业级 AI 基础设施。
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-24">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 font-bold transition-all uppercase tracking-widest font-mono text-sm shadow-lg shadow-blue-500/20">
            立即部署
          </button>
          <button className="bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 px-12 py-4 font-bold transition-all uppercase tracking-widest font-mono text-sm">
            查看文档
          </button>
        </div>

        {/* Updated Interface Preview Matching Screenshot */}
        <div className="relative max-w-4xl mx-auto group">
          
          {/* Floating Illustration Element */}
          <div className="absolute -top-10 left-16 lg:left-32 z-20 w-20 h-28 pointer-events-none transform -rotate-6 transition-transform group-hover:rotate-0 duration-700">
             <div className="relative w-full h-full bg-white dark:bg-[#111] rounded-lg shadow-2xl border border-indigo-500/20 overflow-hidden flex flex-col p-2.5">
                <div className="space-y-2 opacity-60">
                   <div className="flex gap-1 items-center"><span className="material-icons text-green-400 text-[10px]">check_circle</span> <div className="h-0.5 w-6 bg-gray-200 dark:bg-white/10 rounded-full"></div></div>
                   <div className="flex gap-1 items-center"><span className="material-icons text-green-400 text-[10px]">check_circle</span> <div className="h-0.5 w-10 bg-gray-200 dark:bg-white/10 rounded-full"></div></div>
                   <div className="flex gap-1 items-center"><span className="material-icons text-green-400 text-[10px]">check_circle</span> <div className="h-0.5 w-4 bg-gray-200 dark:bg-white/10 rounded-full"></div></div>
                </div>
                <div className="mt-auto flex justify-end">
                   <div className="w-8 h-8 bg-white dark:bg-black rounded-full shadow-lg border border-indigo-500/40 flex items-center justify-center">
                      <span className="material-icons text-blue-500 text-lg">search</span>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-white dark:bg-[#0C0C0C] border border-gray-200 dark:border-gray-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden text-left relative">
            
            {/* Interface Tabs with Vertical Dividers */}
            <div className="flex items-center border-b border-gray-100 dark:border-gray-800 overflow-x-auto no-scrollbar">
              <div className="px-10 py-5 text-sm font-bold text-blue-600 dark:text-blue-500 relative shrink-0">
                联网搜索
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500"></div>
              </div>
              <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 shrink-0"></div>
              <div className="px-10 py-5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors cursor-pointer whitespace-nowrap shrink-0">
                代码生成
              </div>
              <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 shrink-0"></div>
              <div className="px-10 py-5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors cursor-pointer whitespace-nowrap shrink-0">
                文本创作
              </div>
              <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 shrink-0"></div>
              <div className="px-10 py-5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors cursor-pointer whitespace-nowrap shrink-0">
                深度思考
              </div>
            </div>

            {/* Content Area */}
            <div className="p-10 pt-12 pb-24 min-h-[260px] relative">
              <div className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed font-normal max-w-3xl">
                告诉我 AI 科技领域最近的新闻，按照 <span className="bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded border border-gray-200 dark:border-white/10 font-mono text-lg italic">"标题、摘要、来源"</span> 的结构生成。
                <span className="w-1 h-6 bg-blue-500 inline-block align-middle ml-2 animate-pulse"></span>
              </div>

              {/* Square Send Button */}
              <div className="absolute bottom-8 right-8">
                 <div className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-none shadow-xl flex items-center justify-center cursor-pointer transition-all transform hover:scale-105 active:scale-95">
                    <span className="material-icons">arrow_upward</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
