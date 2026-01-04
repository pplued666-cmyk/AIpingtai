
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative z-10">
        <div className="w-full md:w-2/3 p-12 md:p-16 lg:p-20 border-r border-gray-800">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">准备好开始了吗？</h2>
          <p className="text-gray-400 mb-12 max-w-xl text-lg font-light">立即注册，获取 Modelverse 免费调用额度与 Sandbox 体验资格。</p>
          <div className="flex flex-col sm:flex-row">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-bold transition-all uppercase tracking-widest font-mono text-sm">
              免费开始使用
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/20 px-10 py-4 font-bold transition-all uppercase tracking-widest font-mono text-sm border-l-0 sm:border-l">
              联系销售团队
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-gray-900 border-t md:border-t-0 border-gray-800 p-12 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-48 h-48 border border-white rotate-45"></div>
            <div className="w-64 h-64 border border-white rotate-45 absolute"></div>
          </div>
          <div className="text-center relative z-10">
            <div className="text-6xl text-white font-mono font-bold mb-2">01</div>
            <div className="text-[10px] text-blue-500 uppercase tracking-widest font-mono">Step One: Registration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
