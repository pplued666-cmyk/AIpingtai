
import React from 'react';

const ModelMarket: React.FC = () => {
  const models = [
    { id: 'DS', name: 'DeepSeek-V3', tags: ['[通用对话]', '[代码生成]'], match: '98%' },
    { id: 'QW', name: 'Qwen3-Max', tags: ['[复杂推理]', '[多语言]'], match: '96%' },
    { id: 'SD', name: 'Stable Diffusion XL', tags: ['[图像生成]', '[设计辅助]'], match: '99%' },
  ];

  return (
    <section id="model-market" className="py-24 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-dashed border-gray-200 dark:border-border-dark h-full">
        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          <div className="lg:w-1/2 pr-0 lg:pr-16 pb-12 lg:pb-0 border-b lg:border-b-0 lg:border-r border-dashed border-gray-200 dark:border-border-dark">
            <div className="text-blue-600 dark:text-blue-500 font-mono mb-4 uppercase tracking-wider text-xs border border-blue-200 dark:border-blue-900/50 inline-block px-2 py-1 bg-blue-50 dark:bg-blue-900/10">Module: Modelverse</div>
            <h2 className="text-4xl font-bold mb-6 font-display uppercase">企业级 AI 模型市场</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 font-light">
              人工筛选 · 免部署 · 企业级 SLA
            </p>
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-900 dark:text-white group-hover:border-blue-500 transition-colors">
                  <span className="material-icons">filter_alt</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">人工精选模型</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">严格筛选高质量模型，拒绝低质数据污染。确保每一个上架模型都经过严格的安全审查。</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-900 dark:text-white group-hover:border-blue-500 transition-colors">
                  <span className="material-icons">play_circle</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">开箱即用</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">无需适配环境，开箱即用，直接通过标准API接口集成到您的业务系统中。</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <a className="inline-flex items-center text-gray-900 dark:text-white font-bold hover:text-blue-600 transition-colors font-mono text-sm uppercase tracking-wider border-b border-gray-900 dark:border-white pb-1 hover:border-blue-600" href="#">
                浏览所有模型 <span className="material-icons text-sm ml-2">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 pl-0 lg:pl-16 pt-12 lg:pt-0">
            <div className="bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-border-dark p-1 relative shadow-lg">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 z-20"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500 z-20"></div>
              
              <div className="border border-gray-100 dark:border-[#1F1F1F] p-6">
                <div className="flex justify-between mb-8 pb-4 border-b border-gray-100 dark:border-[#222]">
                  <span className="font-mono text-[10px] text-gray-400">STATUS: ONLINE</span>
                  <div className="flex gap-1">
                    {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700"></div>)}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {models.map((model) => (
                    <div key={model.id} className="relative p-4 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#222] cursor-pointer group hover:bg-white dark:hover:bg-[#161616] transition-all">
                      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 border border-blue-500/50 transition-opacity"></div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm font-bold font-mono text-gray-500">
                            {model.id}
                          </div>
                          <div>
                            <h5 className="font-bold text-sm text-gray-900 dark:text-white font-mono uppercase">{model.name}</h5>
                            <div className="flex gap-2 text-[9px] text-gray-500 mt-1 font-mono uppercase">
                              {model.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 font-mono text-[10px]">
                          <span className="text-blue-500">{model.match}</span> MATCH
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-[#222]">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-xs font-bold uppercase tracking-widest font-mono transition-colors">
                    LOAD_ALL (500+)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelMarket;
