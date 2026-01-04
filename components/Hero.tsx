
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-200 dark:border-border-dark">
      {/* 背景基础层 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-[0.4] dark:opacity-[0.2]"></div>
        
        {/* 色彩装饰：光晕层 */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-[20%] right-[15%] w-[20%] h-[20%] bg-purple-500/5 dark:bg-purple-600/10 blur-[80px] rounded-full"></div>

        {/* 径向渐变压暗边缘，聚焦中心 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background-light_70%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent"></div>
      </div>
      
      {/* 科技感几何装饰线 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none max-w-7xl mx-auto border-x border-dashed border-gray-200 dark:border-border-dark px-4 sm:px-6 lg:px-8">
        <div className="h-full w-px bg-gray-200 dark:bg-border-dark absolute left-1/4 top-0 hidden lg:block opacity-30"></div>
        <div className="h-full w-px bg-gray-200 dark:bg-border-dark absolute left-3/4 top-0 hidden lg:block opacity-30"></div>
        
        {/* 浮动的小元素 */}
        <div className="absolute top-1/4 left-10 hidden xl:block">
           <div className="w-12 h-px bg-blue-500/50 mb-1"></div>
           <div className="w-6 h-px bg-blue-500/30"></div>
        </div>
        <div className="absolute bottom-1/3 right-10 hidden xl:block">
           <div className="text-blue-500/20 font-mono text-[80px] select-none">0xAF</div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/50 dark:bg-white/5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-xs font-mono mb-8 uppercase tracking-wider backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-500 animate-pulse"></span>
          System Status: Operational
        </div>
        
        <h1 className="text-5xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-tight uppercase">
          企业专属<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-200">AI 开发平台</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          <span className="text-gray-900 dark:text-white font-mono border-b border-blue-500/50">Modelverse</span> 精选模型市场 + <span className="text-gray-900 dark:text-white font-mono border-b border-red-500/50">Sandbox</span> 安全开发环境。
          <br className="hidden md:block mt-2"/>
          无需自建算力，100% 隔离的合规开发环境。
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <a className="group w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold hover:bg-blue-600 dark:hover:bg-blue-400 transition-all flex items-center justify-center gap-3 font-mono uppercase tracking-tight shadow-xl shadow-blue-500/10" href="#">
            体验 Modelverse
            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
          <a className="group w-full sm:w-auto px-8 py-4 bg-white/10 dark:bg-transparent text-gray-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-all border border-gray-900 dark:border-white/30 flex items-center justify-center gap-3 font-mono uppercase tracking-tight backdrop-blur-sm" href="#">
            申请 Sandbox 环境
          </a>
        </div>
      </div>

      <div className="mt-20 relative max-w-5xl mx-auto px-4">
        {/* 装饰性边角标 */}
        <div className="absolute -top-4 -left-2 w-10 h-10 border-t-2 border-l-2 border-blue-500/50"></div>
        <div className="absolute -top-4 -right-2 w-10 h-10 border-t-2 border-r-2 border-blue-500/50"></div>
        <div className="absolute -bottom-4 -left-2 w-10 h-10 border-b-2 border-l-2 border-blue-500/50"></div>
        <div className="absolute -bottom-4 -right-2 w-10 h-10 border-b-2 border-r-2 border-blue-500/50"></div>

        <div className="bg-gray-100 dark:bg-[#0A0A0A] border border-gray-300 dark:border-border-dark p-1 shadow-2xl overflow-hidden relative group">
          {/* 模拟扫描线动画 */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-full group-hover:animate-[scan_3s_linear_infinite] z-20 pointer-events-none"></div>
          
          <div className="bg-white dark:bg-[#0F0F0F] aspect-[16/9] relative flex items-center justify-center border border-gray-200 dark:border-[#1F1F1F]">
            <div className="absolute inset-0 grid-pattern opacity-[0.05]"></div>
            
            {/* Mock Dashboard UI */}
            <div className="w-4/5 h-3/4 flex border border-gray-200 dark:border-[#333] shadow-2xl relative bg-white dark:bg-[#0A0A0A]">
              <div className="w-1/4 h-full bg-gray-50 dark:bg-[#111] border-r border-gray-200 dark:border-[#333] p-4 flex flex-col gap-3">
                <div className="h-8 w-8 bg-blue-600 mb-4 flex items-center justify-center text-white text-xs font-mono">ID</div>
                <div className="h-2 w-3/4 bg-gray-300 dark:bg-[#333]"></div>
                <div className="h-2 w-1/2 bg-gray-300 dark:bg-[#333]"></div>
                <div className="mt-auto border-t border-gray-200 dark:border-[#333] pt-4">
                  <div className="h-10 w-full bg-blue-500/10 border border-blue-500/20 p-2 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <div className="h-2 w-1/2 bg-blue-500/40"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-full flex flex-col">
                <div className="h-10 w-full bg-white dark:bg-[#161616] border-b border-gray-200 dark:border-[#333] flex items-center px-4 justify-between">
                  <span className="font-mono text-[10px] text-gray-400">/ROOT/DEV/MAIN</span>
                  <div className="h-6 px-3 bg-blue-600 text-[10px] font-mono text-white flex items-center justify-center">DEPLOY_V2</div>
                </div>
                <div className="flex-1 p-4 grid grid-cols-2 gap-4 bg-gray-50 dark:bg-[#0F0F0F]">
                  <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] p-4 group/card hover:border-blue-500/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div className="h-5 px-2 border border-purple-500/50 text-purple-500 text-[10px] font-mono flex items-center">MODEL_AI</div>
                      <span className="text-[10px] font-mono text-green-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500"></span>RUNNING</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-[#333]"></div>
                  </div>
                  <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] p-4 group/card hover:border-orange-500/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div className="h-5 px-2 border border-orange-500/50 text-orange-500 text-[10px] font-mono flex items-center">DB_CORE</div>
                      <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-gray-500"></span>IDLE</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-[#333]"></div>
                  </div>
                  <div className="col-span-2 bg-black border border-gray-800 p-3 font-mono text-[9px] text-green-500 h-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-2 text-[8px] text-gray-700">CONSOLE_V1</div>
                    &gt; System initialized<br/>
                    &gt; Loading modules... [OK]<br/>
                    &gt; Connection established to 192.168.1.4<br/>
                    &gt; Initializing neural weights...<br/>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(1000%); }
        }
      `}} />
    </section>
  );
};

export default Hero;
