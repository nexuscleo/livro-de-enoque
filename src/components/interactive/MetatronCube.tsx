import React, { useState, useMemo } from 'react';
import { METATRON_GATES } from '../../data/metatronData';
import { MetatronGate } from '../../types/metatron';
import { Key, Sparkles, Flame } from 'lucide-react';

interface Point {
  id: number;
  x: number;
  y: number;
  gate: MetatronGate;
}

export const MetatronCube: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<number>(0);

  // Center and radii
  const center = { x: 160, y: 160 };
  const rInner = 60;
  const rOuter = 120;

  // Build the 13 unique points (1 Center + 6 Inner + 6 Outer = 13 unique gates)
  const points: Point[] = useMemo(() => {
    const pts: Point[] = [
      { id: 0, x: center.x, y: center.y, gate: METATRON_GATES[0] } // Center: Portão 1 (Sabedoria)
    ];

    // Inner 6 points (id: 1..6 -> Gates index 1..6)
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60 * Math.PI) / 180;
      pts.push({
        id: i + 1,
        x: center.x + rInner * Math.cos(angle),
        y: center.y + rInner * Math.sin(angle),
        gate: METATRON_GATES[i + 1]
      });
    }

    // Outer 6 points (id: 7..12 -> Gates index 7..12)
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60 * Math.PI) / 180;
      pts.push({
        id: i + 7,
        x: center.x + rOuter * Math.cos(angle),
        y: center.y + rOuter * Math.sin(angle),
        gate: METATRON_GATES[i + 7]
      });
    }

    return pts;
  }, []);

  // Build all 78 connection lines
  const lines = useMemo(() => {
    const linesList: { fromId: number; toId: number; x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        linesList.push({
          fromId: points[i].id,
          toId: points[j].id,
          x1: points[i].x,
          y1: points[i].y,
          x2: points[j].x,
          y2: points[j].y
        });
      }
    }
    return linesList;
  }, [points]);

  const activeGate = points.find(p => p.id === activeNodeId)?.gate || METATRON_GATES[0];

  return (
    <div className="my-6 sm:my-8 p-3.5 sm:p-6 bg-celestial-surface/90 border border-gold/40 rounded-2xl shadow-xl backdrop-blur-sm">
      
      {/* Header */}
      <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5 pb-2.5 sm:pb-3 border-b border-gold/20">
        <div className="p-1.5 sm:p-2 rounded-xl bg-amber-500/10 border border-gold/30 text-amber-400">
          <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <h3 className="font-header font-bold text-sm sm:text-base md:text-lg text-gold-light">
            O Cubo de Metatron e os 13 Portões de Luz (Interativo)
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-400 font-sans">
            Toque nos nós de luz da geometria sagrada para abrir as revelações da Presença.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
        
        {/* Interactive SVG Geometry */}
        <div className="md:col-span-6 flex justify-center">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 relative touch-manipulation">
            <svg 
              className="w-full h-full drop-shadow-[0_0_15px_rgba(234,179,8,0.2)] select-none" 
              viewBox="0 0 320 320"
            >
              {/* Outer boundary circles */}
              <circle cx="160" cy="160" r="120" stroke="rgba(234, 179, 8, 0.15)" strokeWidth="1" fill="none" />
              <circle cx="160" cy="160" r="60" stroke="rgba(234, 179, 8, 0.15)" strokeWidth="1" fill="none" />

              {/* 78 Connector Lines */}
              <g>
                {lines.map((l, idx) => {
                  const isConnected = l.fromId === activeNodeId || l.toId === activeNodeId;
                  return (
                    <line
                      key={idx}
                      x1={l.x1}
                      y1={l.y1}
                      x2={l.x2}
                      y2={l.y2}
                      className={`cube-connector-line ${isConnected ? 'active' : ''}`}
                    />
                  );
                })}
              </g>

              {/* 13 Interactive Light Nodes */}
              <g>
                {points.map((pt) => {
                  const isActive = pt.id === activeNodeId;
                  return (
                    <circle
                      key={pt.id}
                      cx={pt.x}
                      cy={pt.y}
                      r={isActive ? 13 : 10}
                      className={`cube-node-circle ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveNodeId(pt.id)}
                    >
                      <title>{pt.gate.name}</title>
                    </circle>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        {/* Gate Revelation Card */}
        <div className="md:col-span-6 bg-celestial-elevated/70 border border-gold/40 rounded-xl p-4 sm:p-5 shadow-md">
          
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-gold/20">
            <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
              <Key className="w-3.5 h-3.5" />
              <span>{activeGate.category || 'Atributo Sagrado'}</span>
            </span>
            {activeGate.hebrewName && (
              <span className="text-xs sm:text-sm font-spectral text-mystic-blue tracking-widest">
                {activeGate.hebrewName}
              </span>
            )}
          </div>

          <h4 className="font-header font-bold text-base sm:text-lg text-gold-light mb-1.5 sm:mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />
            <span className="leading-snug">{activeGate.name}</span>
          </h4>

          <p className="text-xs sm:text-sm md:text-base text-slate-200 font-body leading-relaxed mb-3 sm:mb-4">
            {activeGate.text}
          </p>

          <div className="pt-2.5 border-t border-slate-800 text-[10px] sm:text-[11px] text-slate-400 flex items-center justify-between">
            <span>Nó selecionado: #{activeNodeId + 1} de 13</span>
            <span className="text-amber-400 font-mono">3 Enoque (Merkabah)</span>
          </div>

        </div>

      </div>

    </div>
  );
};
