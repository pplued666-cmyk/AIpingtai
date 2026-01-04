
import React from 'react';

const FeatureCards: React.FC = () => {
  return (
    <section className="py-0 border-b border-gray-200 dark:border-border-dark bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto border-x border-dashed border-gray-200 dark:border-border-dark">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-border-dark">
          {/* Card 1 */}
          <div className="group p-12 lg:p-16 relative overflow-hidden bg-gray-50 dark:bg-[#0A0A0A] hover:bg-white dark:hover:bg-[#0F0F0F] transition-colors duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="h-12 w-12 border border-blue-500/30 flex items-center justify-center mb-8 text-blue-600 dark:text-blue-400">
              <span className="material-icons">verified_user</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-display uppercase tracking-tight">金融级数据隔离</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light">
              Sandbox环境物理独立，确保数据不出域。满足最严格的金融、医疗等行业的企业合规要求。
            </p>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500"></span>
                私有VPC部署
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500"></span>
                审计日志全纪录
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group p-12 lg:p-16 relative overflow-hidden bg-gray-50 dark:bg-[#0A0A0A] hover:bg-white dark:hover:bg-[#0F0F0F] transition-colors duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="h-12 w-12 border border-indigo-500/30 flex items-center justify-center mb-8 text-indigo-600 dark:text-indigo-400">
              <span className="material-icons">bolt</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-display uppercase tracking-tight">免部署即用</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light">
              Modelverse模型开箱运行，无需繁琐配置 GPU 驱动。直接调用API集成业务，开发效率提升 10 倍。
            </p>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500"></span>
                一键启动 Jupyter
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500"></span>
                预置主流 ML 框架
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
