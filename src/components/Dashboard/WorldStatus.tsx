
import React from 'react';
import { WorldState } from '../../types';
import MetalContainer from '../UI/MetalContainer';
import ProgressBar from '../UI/ProgressBar';
import { Globe, Target, Zap, ShieldCheck, Database, Flag } from 'lucide-react';

interface WorldStatusProps {
  world: WorldState;
}

const WorldStatus: React.FC<WorldStatusProps> = ({ world }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[480px]">
        
        {/* Left Column: Planetary Analysis */}
        <MetalContainer title="世界信息" glowColor="blue" className="h-full flex flex-col relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <Globe size={200} />
            </div>

            <div className="space-y-6 relative z-10 flex-1 flex flex-col justify-center">
                
                {/* World Card */}
                <div className="relative p-6 bg-gradient-to-br from-black/60 to-tech-blue/5 rounded-xl border border-tech-blue/20 group hover:border-tech-blue/40 transition-colors shadow-[0_0_20px_rgba(0,243,255,0.05)]">
                    <div className="absolute top-3 right-3 flex gap-1.5">
                        <div className="w-1.5 h-1.5 bg-tech-blue rounded-full animate-ping"></div>
                        <div className="w-1.5 h-1.5 bg-tech-blue rounded-full"></div>
                    </div>
                    
                    <div className="text-[10px] text-tech-blue font-display font-bold uppercase tracking-widest mb-2 flex items-center gap-2 opacity-80">
                        <Database size={12} /> 当前任务世界名称
                    </div>
                    <div className="text-3xl md:text-4xl font-display font-bold text-white tracking-wide drop-shadow-[0_0_10px_rgba(0,243,255,0.3)] mb-2">
                        {world.当前任务世界名称}
                    </div>
                     <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded bg-tech-blue/10 border border-tech-blue/30 text-[10px] text-tech-blue font-bold uppercase tracking-wider">
                            {world.世界类型与基调}
                        </span>
                    </div>
                </div>

                {/* Stats Single Block */}
                <div className="p-5 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors group">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500 border border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors">
                            <Flag size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider group-hover:text-yellow-500 transition-colors">
                                已净化世界数
                            </div>
                            <div className="text-xs text-gray-500">
                                PURIFIED WORLDS
                            </div>
                        </div>
                    </div>
                    <div className="text-4xl font-display font-bold text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.3)]">
                        {world.已净化世界数}
                    </div>
                </div>

                {/* Purification Process */}
                <div className="mt-auto pt-6 border-t border-white/10">
                    <div className="flex justify-between items-end mb-3">
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-white flex items-center gap-2">
                                <Zap size={14} className="text-tech-blue" />
                                当前世界净化度
                            </span>
                            <span className="text-[10px] text-gray-500 mt-0.5">正在覆写世界法则代码...</span>
                        </div>
                        <span className="text-2xl font-display font-bold text-tech-blue drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">{world.当前世界净化度}%</span>
                    </div>
                    <ProgressBar 
                        value={world.当前世界净化度} 
                        max={100} 
                        showValue={false}
                        color="bg-gradient-to-r from-blue-600 to-tech-blue" 
                    />
                </div>
            </div>
        </MetalContainer>

        {/* Right Column: Tactical Briefing */}
        <MetalContainer title="任务信息" glowColor="red" className="h-full relative flex flex-col">
            <div className="flex flex-col h-full">
                
                {/* Mission Main Block - Now takes full height */}
                <div className="flex-1 relative group flex flex-col">
                     <div className="absolute inset-0 bg-neon-alert/5 border border-neon-alert/20 rounded-xl group-hover:bg-neon-alert/10 transition-colors duration-500"></div>
                     
                     {/* Corner Accents */}
                     <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-alert opacity-50"></div>
                     <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon-alert opacity-50"></div>
                     <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neon-alert opacity-50"></div>
                     <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-alert opacity-50"></div>
                     
                     <div className="relative p-6 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6 border-b border-neon-alert/20 pb-4">
                            <div className="flex items-center gap-2 text-neon-alert">
                                <Target size={20} className="animate-pulse" />
                                <span className="font-display font-bold tracking-widest text-base">任务</span>
                            </div>
                            <div className="px-2 py-1 bg-neon-alert/20 border border-neon-alert/40 text-[10px] font-bold text-neon-alert rounded animate-pulse">
                                执行中 · IN PROGRESS
                            </div>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            <p className="text-base text-gray-200 leading-loose font-sans font-medium">
                                {world.任务}
                            </p>
                            
                            <div className="mt-8 p-4 bg-black/50 rounded border border-white/5 text-xs text-gray-400 font-mono space-y-2">
                                <div className="text-[10px] uppercase text-gray-600 font-bold mb-2">战术分析 // TACTICAL ANALYSIS</div>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                                    <span>目标精神壁垒强度: <span className="text-white font-bold">S级 (Class S)</span></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                                    <span>建议侵蚀策略: <span className="text-white font-bold">情感锚点瓦解</span></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-neon-alert rounded-full animate-pulse"></span>
                                    <span className="text-neon-alert">警告: 检测到高维干涉痕迹</span>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>

                {/* Status Footer */}
                <div className="flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest pt-3 px-1">
                    <span>任务状态: <span className="text-gray-300">进行中</span></span>
                    <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div> 录制中 (REC)</span>
                </div>

            </div>
        </MetalContainer>
    </div>
  );
};

export default WorldStatus;
