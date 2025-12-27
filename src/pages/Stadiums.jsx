import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { STADIUMS } from '../data/mockData';

const Stadiums = () => {
    return (
        <div className="pt-24 pb-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">World Cup 2030 Stadiums</h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Discover the architectural marvels hosting the world's biggest matches across Morocco.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {STADIUMS.map((stadium, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            key={stadium.id}
                            className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={stadium.image}
                                    alt={stadium.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-6 text-white">
                                    <div className="text-sm font-medium opacity-90 flex items-center gap-1 mb-1">
                                        <MapPin className="w-4 h-4" /> {stadium.city}
                                    </div>
                                    <h3 className="text-2xl font-bold leading-none">{stadium.name}</h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Capacity</div>
                                        <div className="text-xl font-bold text-slate-900">{stadium.capacity.toLocaleString()}</div>
                                    </div>
                                </div>

                                <a
                                    href={stadium.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 group-hover:translate-y-[-2px]"
                                >
                                    View on Google Maps <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stadiums;
