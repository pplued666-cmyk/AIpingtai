
import React from 'react';

const BlueprintFeature: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  colorClass: string;
}> = ({ title, subtitle, description, buttonText, colorClass }) => (
  <div className="flex flex-col items-center py-4 h-full">
    <div className={`relative w-full border ${colorClass} bg-white/40 dark:bg-white/5 p-8 lg:p-10 flex flex-col h-full transition-all duration-300 hover:bg-white/60 dark:hover:bg-white/10`}>
      <div className={`absolute -top-1 -left-1 w-2 h-2 border-t border-l ${colorClass}`}></div>
      <div className={`absolute -top-1 -right-1 w-2 h-2 border-t border-r ${colorClass}`}></div>
      <div className={`absolute -bottom-1 -left-1 w-2 h-2 border-b border-l ${colorClass}`}></div>
      <div className={`absolute -bottom-1 -right-1 w-2 h-2 border-b border-r ${colorClass}`}></div>

      <div className="flex flex-col flex-1">
        <div className="mb-6">
          <p className="text-gray-500 dark:text-gray-400 text-[10px] mb-2 font-mono uppercase tracking-[0.2em]">
            {subtitle}
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white leading-tight uppercase tracking-tight">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-relaxed mb-10">
          {description}
        </p>

        <div className="mt-auto flex justify-start">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-mono text-[10px] uppercase tracking-widest flex items-center gap-3 transition-colors">
            <span>&gt;</span> {buttonText}
          </button>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCards: React.FC = () => {
  return (
    <section className="relative py-12 bg-background-light dark:bg-background-dark overflow-hidden border-b border-gray-200 dark:border-border-dark">
      <div className="absolute inset-0 grid-pattern opacity-[0.2] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-dashed border-gray-200 dark:border-border-dark relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          <BlueprintFeature 
            subtitle="Secure Node Isolation"
            title="金融级数据隔离"
            description="Sandbox 环境采用物理级隔离技术，确保您的企业数据始终保留在私有域中，完全符合等保三级及金融行业合规审计标准。我们为核心金融业务量身定制了最严苛的安全边界。"
            buttonText="GET PROTECTED"
            colorClass="border-blue-500/30"
          />

          <BlueprintFeature 
            subtitle="Zero-Config Deployment"
            title="免部署即用"
            description="无需复杂的 GPU 驱动配置或环境依赖管理，Modelverse 模型开箱即用。通过标准的 API 接口或一键式开发环境，让您的 AI 业务从构思到上线只需几分钟。"
            buttonText="GET STARTED"
            colorClass="border-indigo-500/30"
          />

        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
