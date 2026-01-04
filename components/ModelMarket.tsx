
import React from 'react';

const ModelMarket: React.FC = () => {
  const models = [
    { id: 'DS', name: 'DeepSeek-V3', tags: ['[通用对话]', '[代码生成]'], match: '98%' },
    { id: 'LL', name: 'Llama-3.1-70B', tags: ['[逻辑推理]', '[多模态]'], match: '95%' },
    { id: 'QW', name: 'Qwen2.5-72B', tags: ['[中文增强]', '[长上下文]'], match: '97%' },
    { id: 'SD', name: 'FLUX.1-Dev', tags: ['[图像生成]', '[写实设计]'], match: '99%' },
  ];

  return (
    <section id="model-market" className="py-16 lg:py-24 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-border-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-0 w-32 h-px bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800"></div>
        <div className="absolute bottom-[20%] right-0 w-64 h-px bg-gradient-to-l from-gray-200 to-transparent dark:from-gray-800"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-dashed border-gray-200 dark:border-border-dark h-full">
        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          <div className="lg:w-1/2 pr-0 lg:pr-16 pb-8 lg:pb-0 border-b lg:border-b-0 lg:border-r border-dashed border-gray-200 dark:border-border-dark flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <div className="inline-block px-3 py-1 border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
                  MODULE: MODELVERSE
                </div>
                <h2 className="text-4xl font-bold mb-6 font-display tracking-tight text-gray-900 dark:text-white leading-tight uppercase">企业级 AI 模型市场</h2>
                <p className="text-xl text-gray-500 dark:text-gray-400 font-normal">
                  人工筛选 · 免部署 · 企业级 SLA
                </p>
              </div>
              
              <div className="space-y-10 mt-12">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0A0A0A] flex items-center justify-center">
                    <span className="material-icons text-xl text-gray-900 dark:text-white">filter_alt</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white uppercase">人工精选模型</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-normal max-w-md">
                      严格筛选高质量模型，确保每一个上架模型都经过严格的安全审查。
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0A0A0A] flex items-center justify-center">
                    <span className="material-icons text-xl text-gray-900 dark:text-white">bolt</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white uppercase">开箱即用</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-normal max-w-md">
                      无需适配环境，通过标准 API 接口集成到您的业务系统中。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 pb-2">
              <a className="inline-flex items-center text-gray-900 dark:text-white font-bold hover:text-blue-600 transition-colors text-sm uppercase tracking-widest border-b border-gray-900 dark:border-white pb-1" href="#">
                浏览所有模型 <span className="material-icons text-sm ml-2">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 pl-0 lg:pl-16 pt-8 lg:pt-0">
            <div className="bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800 p-1 relative">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 z-20"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500 z-20"></div>
              
              <div className="border border-gray-100 dark:border-[#1F1F1F] p-6">
                <div className="flex justify-between mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">STATUS: ONLINE_SYNC</span>
                  <div className="flex gap-1">
                    {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700"></div>)}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {models.map((model) => (
                    <div key={model.id} className="relative p-3 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 cursor-pointer group hover:bg-white dark:hover:bg-[#161616] transition-all">
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 border border-blue-500/50 transition-opacity"></div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-9 h-9 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center text-[10px] font-bold font-mono text-gray-400">
                            {model.id}
                          </div>
                          <div>
                            <h5 className="font-bold text-sm text-gray-900 dark:text-white font-mono uppercase tracking-tight">{model.name}</h5>
                            <div className="flex gap-2 text-[9px] text-gray-500 mt-0.5 font-mono uppercase">
                              {model.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 font-mono text-[9px] text-gray-400 uppercase">
                          <span className="text-blue-500">{model.match}</span> MATCH
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-[10px] font-bold uppercase tracking-widest font-mono transition-colors">
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
