
import React from 'react';

const Advantages: React.FC = () => {
  const sections = [
    {
      title: '安全合规',
      icon: 'gpp_good',
      items: [
        'Sandbox环境物理级隔离',
        '模型提供合规使用说明',
        '支持等保三级认证标准'
      ]
    },
    {
      title: '高效交付',
      icon: 'flash_on',
      items: [
        'Modelverse模型免部署直接调用',
        'Sandbox 30秒启动开发环境',
        '预置主流AI开发框架'
      ]
    },
    {
      title: '灵活扩展',
      icon: 'extension',
      items: [
        '按需自动扩展GPU算力资源',
        '无缝对接企业现有系统',
        '支持私有化混合云部署'
      ]
    }
  ];

  return (
    <section id="advantages" className="py-24 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 dark:border-border-dark pb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 uppercase">平台优势</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light">为企业级关键业务构建的坚实底座</p>
          </div>
          <div className="hidden md:block">
            <span className="font-mono text-xs text-gray-400">/// ADVANTAGES_SECTION</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((sec, idx) => (
            <div key={idx} className="p-0 bg-transparent">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-icons text-blue-600 text-2xl">{sec.icon}</span>
                <h3 className="font-bold text-lg uppercase tracking-wide">{sec.title}</h3>
              </div>
              <ul className="space-y-4 border-l border-gray-200 dark:border-gray-800 pl-6">
                {sec.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 group">
                    <span className="text-blue-500 font-mono group-hover:text-blue-400">&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
