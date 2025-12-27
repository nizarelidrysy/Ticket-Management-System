import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { MATCHES } from '../data/mockData';

const Matches = () => {
    const [searchParams] = useSearchParams();
    const teamFilter = searchParams.get('team');

    // Sort: Filtered Team First, then by Date
    const sortedMatches = [...MATCHES].sort((a, b) => {
        if (teamFilter) {
            const aInvolves = a.teamA.id === teamFilter || a.teamB.id === teamFilter;
            const bInvolves = b.teamA.id === teamFilter || b.teamB.id === teamFilter;
            if (aInvolves && !bInvolves) return -1;
            if (!aInvolves && bInvolves) return 1;
        }
        return new Date(a.date) - new Date(b.date);
    });

    return (
        <div className="pt-24 pb-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Match Schedule</h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Secure your seats for the most anticipated games of World Cup 2030.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {sortedMatches.map((match, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            key={match.id}
                            className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                {/* Event Info */}
                                <div className="flex-shrink-0 flex flex-col items-center md:items-start min-w-[150px]">
                                    <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-1">{match.category}</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-slate-900">{new Date(match.date).getDate()}</span>
                                        <span className="text-lg font-medium text-slate-400 uppercase">
                                            {new Date(match.date).toLocaleString('default', { month: 'short' })}
                                        </span>
                                    </div>
                                    <div className="text-sm text-slate-400 mt-1">{match.time} Local Time</div>
                                    <div className="text-sm text-slate-500 mt-3 flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {match.stadium.city}
                                    </div>
                                </div>

                                {/* Matchup */}
                                <div className="flex-grow flex items-center justify-center gap-8 md:gap-16 w-full border-t md:border-t-0 md:border-l md:border-r border-slate-100 py-6 md:py-0">
                                    {/* Team A */}
                                    <div className="flex flex-col items-center gap-3 w-32">
                                        <div className="w-16 h-16 rounded-full overflow-hidden shadow-sm border border-slate-100">
                                            <img src={match.teamA.flag} alt={match.teamA.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="text-lg font-bold text-slate-900 text-center leading-tight">{match.teamA.name}</div>
                                    </div>

                                    <div className="text-2xl font-bold text-slate-300">VS</div>

                                    {/* Team B */}
                                    <div className="flex flex-col items-center gap-3 w-32">
                                        <div className="w-16 h-16 rounded-full overflow-hidden shadow-sm border border-slate-100">
                                            <img src={match.teamB.flag} alt={match.teamB.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="text-lg font-bold text-slate-900 text-center leading-tight">{match.teamB.name}</div>
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="flex-shrink-0 flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                                    <div className="text-right hidden md:block">
                                        <div className="text-xs text-slate-400">Starting from</div>
                                        <div className="text-xl font-bold text-slate-900">${match.price}</div>
                                    </div>
                                    <Link
                                        to={`/match/${match.id}`}
                                        className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 group-hover:scale-105 transform duration-300"
                                    >
                                        Get Tickets <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Matches;
