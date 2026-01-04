
import React from 'react';

const AgentSandbox: React.FC = () => {
  return (
    <section id="agent-sandbox" className="py-24 bg-gray-50 dark:bg-[#080808] relative overflow-hidden border-b border-gray-200 dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase font-display">Agent Sandbox</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 font-light">AI Agent 生产级运行环境</p>
          
          <div className="inline-flex border border-gray-300 dark:border-gray-700 bg-white dark:bg-black overflow-hidden">
            <span className="px-6 py-2 border-r border-gray-300 dark:border-gray-700 text-[11px] font-mono uppercase text-gray-600 dark:text-gray-300">安全隔离</span>
            <span className="px-6 py-2 border-r border-gray-300 dark:border-gray-700 text-[11px] font-mono uppercase text-gray-600 dark:text-gray-300">毫秒启动</span>
            <span className="px-6 py-2 text-[11px] font-mono uppercase text-gray-600 dark:text-gray-300">企业级成本</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark">
          {[
            {
              num: '01',
              title: '虚拟机级安全隔离',
              sub: 'Kernel Isolation',
              subColor: 'text-blue-600 border-blue-600',
              icon: 'memory',
              desc: '微虚拟技术(MicroVM)实现虚拟机级严格隔离，资源占用仅为传统方案的1/10，确保多用户环境下的安全性。'
            },
            {
              num: '02',
              title: '毫秒级极速启动',
              sub: '50ms Response',
              subColor: 'text-green-600 border-green-600',
              icon: 'speed',
              desc: '独家Snapshot快照技术让环境启动快至毫秒级，支持高并发Agent调度，轻松应对流量洪峰。'
            },
            {
              num: '03',
              title: '开箱即用环境',
              sub: 'Pre-built Templates',
              subColor: 'text-purple-600 border-purple-600',
              icon: 'inventory_2',
              desc: '内置代码执行环境+完整GUI桌面，30秒即可启动AI Agent。无需重复造轮子。'
            }
          ].map((item, idx) => (
            <div key={idx} className={`group p-8 border-gray-200 dark:border-border-dark hover:bg-gray-50 dark:hover:bg-[#141414] transition-all relative ${idx < 2 ? 'border-r' : ''} ${idx < 3 ? 'md:border-b-0 border-b' : ''}`}>
              <div className="absolute top-4 right-4 text-gray-100 dark:text-[#222] font-mono text-5xl font-bold z-0 group-hover:text-blue-500/10 transition-colors">
                {item.num}
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mb-6 font-bold">
                  <span className="material-icons text-sm">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className={`text-[9px] font-mono ${item.subColor} mb-4 border-l-2 pl-2 uppercase`}>{item.sub}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentSandbox;
