import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { TEAMS } from '../data/mockData';

const Teams = () => {
    return (
        <div className="pt-24 pb-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Participating Teams</h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        The giants of world football gathering for glory in 2030.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TEAMS.map((team, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            key={team.id}
                            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group"
                        >
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner relative group-hover:scale-110 transition-transform duration-300">
                                <img
                                    src={team.flag}
                                    alt={team.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{team.name}</h3>
                            <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-6">{team.group}</div>

                            <a
                                href={team.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-emerald-600 transition-colors"
                            >
                                <Globe className="w-4 h-4" /> Official Website
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teams;
