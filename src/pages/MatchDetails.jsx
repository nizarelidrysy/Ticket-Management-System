import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, CreditCard, ChevronLeft } from 'lucide-react';
import SeatMap from '../components/SeatMap';
import { MATCHES } from '../data/mockData';

const MatchDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const match = MATCHES.find(m => m.id === parseInt(id));

    const [selectedCategory, setSelectedCategory] = useState(null);

    // Categories definition (could be moved to mockData too, but kept here for simplicity as per SeatMap)
    const categoryPrices = {
        'cat1': match ? match.price * 1.5 : 0,
        'cat2': match ? match.price * 1.2 : 0,
        'cat3': match ? match.price : 0
    };

    if (!match) return <div className="pt-32 text-center text-slate-500">Match not found</div>;

    const handleCheckout = () => {
        if (!selectedCategory) return;

        // Pass order details directly to checkout via state
        const price = categoryPrices[selectedCategory];
        navigate('/checkout', {
            state: {
                match,
                category: selectedCategory,
                price
            }
        });
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors">
                    <ChevronLeft className="w-4 h-4" /> Back to Matches
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Match Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-1">{match.category}</div>
                                    <h1 className="text-3xl font-bold text-slate-900">{match.teamA.name} vs {match.teamB.name}</h1>
                                </div>
                                <div className="text-right">
                                    <div className="text-slate-900 font-bold text-lg">{match.date}</div>
                                    <div className="text-slate-500">{match.time}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-slate-500 mb-8">
                                <MapPin className="w-5 h-5" />
                                <span className="font-medium">{match.stadium.name}, {match.stadium.city}</span>
                            </div>

                            <div className="flex justify-center items-center gap-12 py-8 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-center">
                                    <img src={match.teamA.flag} alt={match.teamA.name} className="w-20 h-16 object-contain rounded shadow-none mb-3 mx-auto" />
                                    <div className="font-bold text-lg">{match.teamA.id}</div>
                                </div>
                                <div className="text-4xl font-bold text-slate-300">VS</div>
                                <div className="text-center">
                                    <img src={match.teamB.flag} alt={match.teamB.name} className="w-20 h-16 object-contain rounded shadow-none mb-3 mx-auto" />
                                    <div className="font-bold text-lg">{match.teamB.id}</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Seat Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <SeatMap onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                        </motion.div>
                    </div>

                    {/* Sidebar / Checkout Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-black/5">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-8 border-b border-slate-100 pb-8">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Match</span>
                                    <span className="font-medium text-slate-900 text-right">{match.teamA.id} vs {match.teamB.id}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Category</span>
                                    <span className="font-medium text-slate-900">{selectedCategory ? `Category ${selectedCategory.replace('cat', '')}` : '-'}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold">
                                    <span className="text-slate-900">Total</span>
                                    <span className="text-emerald-600">
                                        {selectedCategory ? `$${categoryPrices[selectedCategory]}` : '$0'}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                disabled={!selectedCategory}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${selectedCategory ? 'bg-slate-900 text-white hover:bg-emerald-600 shadow-md hover:shadow-lg transform hover:-translate-y-1' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
                            >
                                <CreditCard className="w-5 h-5" />
                                Checkout Now
                            </button>
                            <p className="text-xs text-center text-slate-400 mt-4">
                                Instant digital delivery. Secure payment processing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchDetails;
