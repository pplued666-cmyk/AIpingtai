
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-200 dark:border-border-dark bg-background-light dark:bg-background-dark">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-[0.4] dark:opacity-[0.1]"></div>
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-purple-400/10 dark:bg-purple-600/5 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-mono mb-10 uppercase tracking-[0.2em] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          Cluster: Global-01 Status: Active
        </div>
        
        {/* Colorful Gradient Title - Updated Text */}
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

        {/* Interactive Interface Preview */}
        <div className="relative max-w-4xl mx-auto group">
          
          {/* Floating Illustration Element - Small size */}
          <div className="absolute -top-12 left-16 lg:left-32 z-20 w-24 h-32 pointer-events-none transform -rotate-6 transition-transform group-hover:rotate-0 duration-700">
             <div className="relative w-full h-full bg-white dark:bg-[#111] rounded-lg shadow-2xl border border-blue-500/30 overflow-hidden flex flex-col p-3">
                <div className="space-y-2">
                   <div className="flex gap-1.5 items-center"><span className="material-icons text-green-400 text-[10px]">check_circle</span> <div className="h-1 w-8 bg-gray-100 dark:bg-white/10 rounded"></div></div>
                   <div className="flex gap-1.5 items-center"><span className="material-icons text-green-400 text-[10px]">check_circle</span> <div className="h-1 w-12 bg-gray-100 dark:bg-white/10 rounded"></div></div>
                   <div className="flex gap-1.5 items-center"><span className="material-icons text-green-400 text-[10px]">check_circle</span> <div className="h-1 w-6 bg-gray-100 dark:bg-white/10 rounded"></div></div>
                </div>
                <div className="mt-auto flex justify-end">
                   <div className="w-8 h-8 bg-white dark:bg-black rounded-full shadow-lg border border-indigo-500/50 flex items-center justify-center">
                      <span className="material-icons text-blue-600 text-lg">search</span>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-white dark:bg-[#080808] border border-gray-200 dark:border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden text-left relative">
            
            {/* Interface Tabs */}
            <div className="flex border-b border-gray-100 dark:border-gray-800 overflow-x-auto no-scrollbar">
              <div className="px-10 py-5 text-sm font-bold text-blue-600 dark:text-blue-400 border-r border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-white/5 relative">
                联网搜索
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
              </div>
              {['代码生成', '文本创作', '深度思考'].map((tab, i) => (
                <div key={i} className="px-10 py-5 text-sm font-medium text-gray-400 dark:text-gray-500 border-r border-gray-100 dark:border-gray-800 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer">
                  {tab}
                </div>
              ))}
            </div>

            {/* Content Area */}
            <div className="p-10 pt-12 pb-20 min-h-[220px] relative">
              <div className="text-gray-700 dark:text-gray-200 text-xl leading-relaxed font-normal max-w-2xl">
                告诉我 <span className="text-blue-600 dark:text-blue-400 font-bold">AI 科技领域</span> 最近的新闻，
                按照 <span className="bg-gray-50 dark:bg-white/5 px-2 py-0.5 rounded border border-gray-100 dark:border-white/10 font-mono text-lg">"标题、摘要、来源"</span> 的结构生成。
                <span className="w-1 h-6 bg-blue-500 inline-block align-middle ml-2 animate-pulse"></span>
              </div>

              {/* Unified Square Send Button at the bottom right */}
              <div className="absolute bottom-8 right-8">
                 <div className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-none shadow-lg flex items-center justify-center cursor-pointer transition-all transform hover:scale-105 active:scale-95">
                    <span className="material-icons">arrow_upward</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Hero;
