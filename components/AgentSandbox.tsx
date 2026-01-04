
import React from 'react';

const AgentSandbox: React.FC = () => {
  return (
    <section id="agent-sandbox" className="py-16 lg:py-24 bg-white dark:bg-[#050505] relative overflow-hidden border-b border-gray-200 dark:border-border-dark">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/5 rounded-full hidden lg:block"></div>
        <div className="absolute bottom-4 right-4 font-mono text-[8px] text-gray-300 dark:text-gray-700 space-y-1 text-right">
          <div className="flex items-center justify-end gap-2 uppercase tracking-widest">ISOLATION_KERNEL: ACTIVE <span className="w-1 h-1 bg-blue-500"></span></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="text-blue-600 dark:text-blue-500 font-mono mb-4 uppercase tracking-[0.2em] text-[10px] border-l-2 border-blue-500 pl-3">Infrastructure Layer</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase font-display tracking-tight text-gray-900 dark:text-white">Agent Sandbox</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-10 font-normal leading-relaxed max-w-lg mx-auto lg:mx-0">
              为 AI Agent 构建的高可靠生产运行环境，兼顾极致安全与毫秒级响应。物理级隔离确保业务逻辑与数据的绝对私密。
            </p>
            
            <div className="inline-flex border border-gray-200 dark:border-border-dark bg-white dark:bg-black overflow-hidden mb-12">
              <span className="px-6 py-2 border-r border-gray-200 dark:border-border-dark text-[10px] font-mono uppercase text-gray-400 tracking-widest">硬件级隔离</span>
              <span className="px-6 py-2 border-r border-gray-200 dark:border-border-dark text-[10px] font-mono uppercase text-gray-400 tracking-widest">弹性算力</span>
              <span className="px-6 py-2 text-[10px] font-mono uppercase text-gray-400 tracking-widest">安全合规</span>
            </div>

            <div className="grid grid-cols-1 gap-4 text-left">
              {[
                { title: '微虚拟化隔离 (MicroVM)', desc: '采用极简内核，确保每个 Agent 拥有独立的物理级隔离边界，防止数据泄露。' },
                { title: '即时快照恢复', desc: '支持秒级环境快照与状态回滚，确保业务连续性与环境一致性。' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 border border-gray-100 dark:border-border-dark bg-white/50 dark:bg-white/5 hover:border-blue-500/30 transition-colors group">
                   <div className="flex-shrink-0 w-10 h-10 bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <span className="material-icons text-sm">{idx === 0 ? 'security' : 'restore'}</span>
                   </div>
                   <div>
                      <h4 className="font-bold text-sm uppercase mb-1 tracking-wide text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-normal leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
             <div className="relative w-64 h-64 lg:w-96 lg:h-96 perspective-1000">
                <div className="absolute inset-0 flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
                   <div className="absolute inset-0 border border-dashed border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                   <div className="relative w-48 h-48 lg:w-64 lg:h-64 border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-white/5 rotate-45 transform-style-3d flex items-center justify-center">
                      <div className="w-1/2 h-1/2 border-2 border-blue-500/40 rotate-45 flex items-center justify-center relative overflow-hidden">
                         <div className="font-mono font-bold text-4xl lg:text-6xl text-gray-900 dark:text-white flex items-center">
                            <span>&gt;</span>
                            <div className="w-2 h-8 border-l-4 border-current ml-2 animate-pulse"></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}} />
    </section>
  );
};

export default AgentSandbox;
