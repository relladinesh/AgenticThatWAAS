import React from 'react';
import { GeneratedWebsite } from '../../types/business';
import { CheckCircle2, Clock, PlayCircle, XCircle, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgressCardsProps {
  data: GeneratedWebsite[];
}

export function ProgressCards({ data }: ProgressCardsProps) {
  if (!data || data.length === 0) return null;

  const total = data.length;
  const uniqueBusinesses = new Set(data.map(d => d.slug)).size;
  const success = data.filter(d => d.status === 'Success').length;
  const failed = data.filter(d => d.status === 'Failed').length;
  const generating = data.filter(d => d.status === 'Generating').length;
  const deploying = data.filter(d => d.status === 'Deploying').length;
  
  const successRate = total > 0 ? Math.round((success / total) * 100) : 0;

  const cards = [
    { title: 'Total Businesses', value: uniqueBusinesses, icon: LayoutGrid, color: 'text-slate-600', bg: 'bg-slate-100' },
    { title: 'Success', value: success, icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'In Progress', value: generating + deploying, icon: PlayCircle, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Failed', value: failed, icon: XCircle, color: 'text-red-600', bg: 'bg-red-100' },
    { title: 'Success Rate', value: `${successRate}%`, icon: Clock, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8">
      {cards.map((card, idx) => (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          key={card.title} 
          className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg ${card.bg}`}>
              <card.icon className={`w-5 h-5 ${card.color}`} />
            </div>
            <span className="text-sm font-medium text-slate-500">{card.title}</span>
          </div>
          <div className="text-2xl font-bold text-slate-800">{card.value}</div>
        </motion.div>
      ))}
    </div>
  );
}
