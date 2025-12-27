import React from 'react';
import { Calendar, MapPin, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MATCHES } from '../data/mockData';

const Home = () => {
    return (
        <div className="pb-20">
            {/* Abstract Design Hero */}
            <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-950 border-b border-white/5">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-600/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-white border border-white/10 mb-8 hover:bg-white/10 transition-colors cursor-default">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-sm font-medium tracking-wide uppercase">Official 2030 Ticket Portal</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
                                World Class <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
                                    History.
                                </span>
                            </h1>

                            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                                Morocco, Spain, Portugal. The Centennial World Cup 2030.
                                Be part of the global celebration across three continents.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#matches"
                                    className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
                                >
                                    Find Tickets <ArrowRight className="w-5 h-5" />
                                </a>
                                <Link
                                    to="/stadiums"
                                    className="px-8 py-4 bg-white/5 text-white font-bold rounded-full transition-all hover:bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center gap-2"
                                >
                                    Explore Stadiums
                                </Link>
                            </div>
                        </motion.div>

                        {/* Abstract Visual Right Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative z-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[3rem] p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-slate-900 rounded-[2.8rem] p-8 overflow-hidden relative min-h-[500px] flex flex-col justify-between">
                                    <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

                                    <div className="flex justify-between items-start mb-8">
                                        <div className="text-white/60 text-sm font-mono">SEMI FINAL</div>
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                                            <TrendingUp className="text-white w-5 h-5" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-8xl font-bold text-white tracking-tighter">MAR</div>
                                        <div className="h-px bg-white/20 w-full"></div>
                                        <div className="text-8xl font-bold text-white/30 tracking-tighter">POR</div>
                                    </div>

                                    <div className="mt-8 flex justify-between items-end">
                                        <div>
                                            <div className="text-white/60 text-sm mb-1">Grand Stade</div>
                                            <div className="text-white font-medium">Casablanca</div>
                                        </div>
                                        <div className="text-2xl font-bold text-emerald-500">$250</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Matches Section */}
            <div id="matches" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-2">Featured Matches</h2>
                        <p className="text-slate-500">Select your preferred match to view seating options.</p>
                    </div>
                    <Link to="/matches" className="text-emerald-600 font-bold hover:underline">View Full Schedule</Link>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {MATCHES.slice(0, 3).map((match) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            key={match.id}
                            className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                {/* Date & Venue */}
                                <div className="flex-shrink-0 flex flex-col items-center md:items-start min-w-[140px]">
                                    <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-1">{match.category}</div>
                                    <div className="text-3xl font-bold text-slate-900">{new Date(match.date).getDate()} <span className="text-lg text-slate-400 font-medium">{new Date(match.date).toLocaleString('default', { month: 'short' })}</span></div>
                                    <div className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {match.stadium.city}
                                    </div>
                                </div>

                                {/* Matchup */}
                                <div className="flex-grow flex items-center justify-center gap-8 md:gap-16 w-full border-t md:border-t-0 md:border-l md:border-r border-slate-100 py-4 md:py-0">
                                    <div className="flex flex-col items-center text-center">
                                        <img src={match.teamA.flag} alt={match.teamA.name} className="w-10 h-8 object-cover rounded shadow mb-2" />
                                        <div className="text-2xl font-bold text-slate-900 tracking-tight">{match.teamA.id}</div>
                                        <div className="text-xs text-slate-400 font-medium mt-1">{match.teamA.name}</div>
                                    </div>
                                    <div className="text-xl font-bold text-slate-300">VS</div>
                                    <div className="flex flex-col items-center text-center">
                                        <img src={match.teamB.flag} alt={match.teamB.name} className="w-10 h-8 object-cover rounded shadow mb-2" />
                                        <div className="text-2xl font-bold text-slate-900 tracking-tight">{match.teamB.id}</div>
                                        <div className="text-xs text-slate-400 font-medium mt-1">{match.teamB.name}</div>
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

export default Home;
