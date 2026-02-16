
import React, { useState } from 'react';
import { Inquisitor, GameMode } from '../../types';
import { MODES_DESCRIPTION } from '../../constants';
import MetalContainer from '../UI/MetalContainer';
import ProgressBar from '../UI/ProgressBar';
import { Shield, Award, User, Biohazard, Zap, Check, Briefcase, Sparkles, Coins, Settings, Crown, Activity, Terminal, ScanLine, Lock, Trash2, X } from 'lucide-react';

interface InquisitorProfileProps {
  inquisitor: Inquisitor;
  activeModes: GameMode[];
  onToggleMode?: (mode: GameMode) => void;
  onDeleteTitle?: (index: number) => void;
  onDeleteItem?: (index: number) => void;
}

type SubTab = 'status' | 'inventory' | 'modes';

const InquisitorProfile: React.FC<InquisitorProfileProps> = ({ 
    inquisitor, 
    activeModes, 
    onToggleMode,
    onDeleteTitle,
    onDeleteItem
}) => {
  const [activeTab, setActiveTab] = useState<SubTab>('status');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[480px]">
        
        {/* Left Col: Core Stats (Persistent) */}
        <MetalContainer title="圣裁官核心数据" glowColor="gold" className="lg:col-span-1 h-full flex flex-col relative overflow-hidden">
             {/* Background Decor */}
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
                <User size={300} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="text-center mt-4 shrink-0">
                    <div className="relative inline-block mb-4">
                        <div className="w-28 h-28 bg-gray-900 rounded-full border-2 border-yellow-500 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                            <User size={48} className="text-gray-500" />
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black border border-yellow-500 text-yellow-500 px-3 py-1 rounded text-xs font-bold whitespace-nowrap shadow-lg">
                            LV.{inquisitor.等级}
                        </div>
                    </div>
                    
                    <h2 className="text-2xl font-display font-bold text-white mb-1 tracking-wide">{inquisitor.圣裁官姓名}</h2>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">{inquisitor.身份} | {inquisitor.性别}</div>
                </div>

                <div className="mt-8 space-y-6 flex-1 flex flex-col min-h-0">
                    <div className="shrink-0">
                        <div className="flex justify-between text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider">
                            <span>经验值</span>
                            <span>{inquisitor.经验值}%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-sm overflow-hidden border border-white/5">
                            <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400" style={{ width: `${inquisitor.经验值}%` }}></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-500/10 to-transparent border-l-4 border-yellow-500 rounded-r-lg shrink-0">
                        <div className="flex items-center gap-3 text-yellow-500 text-sm font-bold">
                            <div className="p-1.5 bg-yellow-500/20 rounded"><Coins size={16} /></div>
                            善升点
                        </div>
                        <span className="text-xl font-display font-bold text-white drop-shadow-md">{inquisitor.善升点.toLocaleString()}</span>
                    </div>

                    {/* Titles Section - Scrollable if too many */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 min-h-0">
                        <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-3 flex items-center gap-2 sticky top-0 bg-[#1a1b1e]/95 backdrop-blur z-10 py-1">
                            <span className="w-1 h-1 bg-yellow-500 rounded-full"></span> 称号
                        </div>
                        
                        <div className="space-y-2 pb-2">
                            {inquisitor.称号.map((t, i) => (
                                <div key={i} className="group relative">
                                    <div className="relative flex items-center justify-between p-3 bg-black/40 border border-white/5 rounded hover:border-yellow-500/40 hover:bg-yellow-500/5 transition-all duration-300">
                                        <div className="flex items-center gap-3">
                                            <div className="text-yellow-500 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <Crown size={14} />
                                            </div>
                                            <span className="text-xs font-bold text-gray-300 group-hover:text-yellow-400 transition-colors">{t}</span>
                                        </div>
                                        {onDeleteTitle && (
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); onDeleteTitle(i); }}
                                                className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-500 transition-all"
                                                title="删除头衔"
                                            >
                                                <X size={12} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {inquisitor.称号.length === 0 && (
                                <div className="text-xs text-gray-600 italic text-center py-2">暂无称号</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MetalContainer>

        {/* Right Col: Secondary Menu & Content - Flex layout to fill height */}
        <div className="lg:col-span-2 h-full flex flex-col gap-4">
            
            {/* Secondary Menu Tabs */}
            <div className="shrink-0 flex items-center p-1.5 bg-metal-dark border border-white/10 rounded-xl shadow-lg">
                <button 
                    onClick={() => setActiveTab('status')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300
                    ${activeTab === 'status' ? 'bg-tech-blue/20 text-tech-blue shadow-[0_0_10px_rgba(0,243,255,0.1)] border border-tech-blue/20' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent'}`}
                >
                    <Activity size={16} /> <span className="hidden sm:inline">状态</span>
                </button>
                <button 
                    onClick={() => setActiveTab('inventory')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300
                    ${activeTab === 'inventory' ? 'bg-tech-blue/20 text-tech-blue shadow-[0_0_10px_rgba(0,243,255,0.1)] border border-tech-blue/20' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent'}`}
                >
                    <Briefcase size={16} /> <span className="hidden sm:inline">物品</span>
                </button>
                <button 
                    onClick={() => setActiveTab('modes')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300
                    ${activeTab === 'modes' ? 'bg-tech-blue/20 text-tech-blue shadow-[0_0_10px_rgba(0,243,255,0.1)] border border-tech-blue/20' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent'}`}
                >
                    <Settings size={16} /> <span className="hidden sm:inline">模式</span>
                </button>
            </div>

            {/* Content Area - Flex-1 to fill remaining space */}
            <div className="flex-1 min-h-0 relative">
                
                {/* STATUS TAB */}
                {activeTab === 'status' && (
                    <MetalContainer title="外貌与状态" glowColor="blue" className="h-full flex flex-col">
                        <div className="flex-1 flex flex-col gap-4 min-h-0 p-1">
                            
                            {/* Appearance Description */}
                            <div className="bg-black/60 rounded-lg border border-white/10 p-1 relative overflow-hidden group shrink-0 flex flex-col max-h-[160px]">
                                {/* Decor Header */}
                                <div className="bg-white/5 px-3 py-1 flex justify-between items-center border-b border-white/5 shrink-0">
                                    <div className="text-[10px] font-mono text-tech-blue flex items-center gap-2">
                                        <ScanLine size={12} className="animate-pulse"/> 外貌描述
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    </div>
                                </div>
                                {/* Terminal Content */}
                                <div className="p-4 relative font-mono text-sm text-gray-300 leading-relaxed overflow-y-auto custom-scrollbar">
                                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
                                    {inquisitor.外貌}
                                    <span className="inline-block w-2 h-4 bg-tech-blue ml-1 animate-pulse align-middle"></span>
                                </div>
                            </div>

                            {/* Status Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
                                {/* Permanent Buffs */}
                                <div className="flex flex-col h-full bg-white/5 rounded-lg border border-white/5 p-4 relative overflow-hidden group">
                                     <div className="absolute top-0 right-0 p-2 opacity-10 transition-transform group-hover:scale-110 duration-500"><Shield size={80} /></div>
                                     <div className="text-xs font-bold text-green-500 mb-2 flex items-center gap-2 uppercase tracking-wider z-10 shrink-0">
                                        <Activity size={14}/> 永久状态
                                     </div>
                                     <div className="space-y-2 z-10 flex-1 overflow-y-auto custom-scrollbar pr-1">
                                        {inquisitor.永久状态.map((b, i) => (
                                            <div key={i} className="flex items-center justify-between p-2 bg-black/40 rounded border border-green-500/20 shrink-0">
                                                <span className="text-xs text-gray-300 font-bold">{b}</span>
                                                <div className="flex gap-0.5">
                                                    <div className="w-1 h-3 bg-green-500 rounded-sm"></div>
                                                    <div className="w-1 h-3 bg-green-500/50 rounded-sm"></div>
                                                    <div className="w-1 h-3 bg-green-500/20 rounded-sm"></div>
                                                </div>
                                            </div>
                                        ))}
                                     </div>
                                </div>

                                {/* Temp States */}
                                <div className="flex flex-col h-full bg-white/5 rounded-lg border border-white/5 p-4 relative overflow-hidden group">
                                     <div className="absolute top-0 right-0 p-2 opacity-10 transition-transform group-hover:scale-110 duration-500"><Biohazard size={80} /></div>
                                     <div className="text-xs font-bold text-pink-500 mb-2 flex items-center gap-2 uppercase tracking-wider z-10 shrink-0">
                                        <Biohazard size={14}/> 临时状态
                                     </div>
                                     <div className="space-y-2 z-10 flex-1 overflow-y-auto custom-scrollbar pr-1">
                                        {inquisitor.临时状态.length > 0 ? inquisitor.临时状态.map((b, i) => (
                                            <div key={i} className="flex items-center justify-between p-2 bg-black/40 rounded border border-pink-500/20 shrink-0">
                                                <span className="text-xs text-gray-300 font-bold">{b}</span>
                                                <Activity size={12} className="text-pink-500 animate-pulse"/>
                                            </div>
                                        )) : (
                                            <div className="h-full flex flex-col items-center justify-center text-gray-600 gap-2">
                                                <Check size={24} className="opacity-50"/>
                                                <span className="text-[10px] font-bold">无异常状态</span>
                                            </div>
                                        )}
                                     </div>
                                </div>
                            </div>
                            
                            {/* Corruption Bar */}
                            {activeModes.includes(GameMode.CORRUPTION) && (
                                <div className="shrink-0 pt-2">
                                    <ProgressBar value={inquisitor.堕落值} max={100} label="堕落值" color="bg-purple-600" />
                                </div>
                            )}
                        </div>
                    </MetalContainer>
                )}

                {/* INVENTORY TAB */}
                {activeTab === 'inventory' && (
                    <MetalContainer title="物品栏" glowColor="blue" className="h-full flex flex-col">
                         <div className="grid grid-cols-2 auto-rows-max gap-4 overflow-y-auto custom-scrollbar p-1 flex-1 min-h-0">
                             {Array.from({ length: Math.max(inquisitor.物品栏.length, 6) }).map((_, i) => {
                                 const item = inquisitor.物品栏[i];
                                 return (
                                     <div key={i} className={`relative flex flex-col p-3 rounded-lg border transition-all duration-300 group
                                        ${item 
                                            ? 'bg-black/40 border-white/10 hover:border-tech-blue/50 hover:bg-white/5' 
                                            : 'bg-transparent border-white/5 border-dashed opacity-50'
                                        }
                                     `}>
                                         <div className="flex justify-between items-start mb-2">
                                             <span className="text-[9px] text-gray-600 font-bold tracking-widest">槽位_0{i+1}</span>
                                             {item && onDeleteItem && (
                                                 <button 
                                                    onClick={(e) => { e.stopPropagation(); onDeleteItem(i); }}
                                                    className="text-gray-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                                    title="丢弃物品"
                                                 >
                                                     <Trash2 size={12} />
                                                 </button>
                                             )}
                                         </div>
                                         
                                         <div className="flex-1 flex items-center gap-3 min-h-[40px]">
                                             {item ? (
                                                 <>
                                                    <div className="p-2 bg-tech-blue/10 rounded-md text-tech-blue border border-tech-blue/20 group-hover:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all">
                                                        <Briefcase size={20} />
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-200 group-hover:text-white line-clamp-2">{item}</span>
                                                 </>
                                             ) : (
                                                 <div className="w-full text-center">
                                                     <span className="text-[10px] text-gray-700 font-bold uppercase tracking-wider">[ 空置 ]</span>
                                                 </div>
                                             )}
                                         </div>
                                         
                                         {item && <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-tech-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>}
                                     </div>
                                 );
                             })}
                         </div>
                    </MetalContainer>
                )}

                {/* MODES TAB */}
                {activeTab === 'modes' && (
                    <MetalContainer title="模式选择" glowColor="red" className="h-full flex flex-col">
                        <div className="space-y-4 h-full overflow-y-auto custom-scrollbar p-1">
                            {Object.values(GameMode).map((mode) => {
                                const isActive = activeModes.includes(mode);
                                return (
                                    <button 
                                        key={mode}
                                        onClick={() => onToggleMode && onToggleMode(mode)}
                                        className={`w-full p-5 rounded-lg border text-left transition-all duration-300 group relative overflow-hidden flex gap-4
                                            ${isActive 
                                                ? 'bg-gradient-to-r from-red-900/20 to-black border-red-500/50 shadow-[0_0_15px_rgba(220,38,38,0.1)]' 
                                                : 'bg-black/40 border-white/5 hover:bg-white/5 hover:border-white/20'
                                            }
                                        `}
                                    >
                                        <div className={`mt-1 w-6 h-6 rounded border flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-red-600 border-red-600 text-black' : 'border-gray-600 bg-black/50'}`}>
                                            {isActive ? <Check size={14} strokeWidth={3} /> : <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>}
                                        </div>
                                        
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={`text-lg font-bold font-display tracking-wide ${isActive ? 'text-white' : 'text-gray-400'}`}>{mode}</span>
                                                {isActive && <span className="text-[10px] font-bold text-red-500 px-2 py-0.5 border border-red-500 rounded bg-red-500/10 animate-pulse">已激活</span>}
                                            </div>
                                            <div className="text-xs text-gray-500 leading-relaxed font-mono opacity-80">
                                                {MODES_DESCRIPTION[mode]}
                                            </div>
                                        </div>

                                        {isActive && (
                                            <div className="absolute inset-0 border-2 border-red-500/20 pointer-events-none rounded-lg"></div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </MetalContainer>
                )}

            </div>
        </div>
    </div>
  );
};

export default InquisitorProfile;
