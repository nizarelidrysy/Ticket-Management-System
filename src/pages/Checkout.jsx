import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, CheckCircle, Smartphone, User, Mail, Calendar, MapPin } from 'lucide-react';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Get data from direct navigation, or handle empty state
    const { match, category, price } = location.state || {}; // { match, category, price }

    const [formData, setFormData] = useState({
        title: 'Mr',
        fullName: '',
        email: '',
        phone: ''
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!match) {
            navigate('/'); // Redirect home if no order data
        }
    }, [match, navigate]);

    if (!match) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Prepare data for PHP API
        const orderData = {
            ...formData,
            items: [{
                id: match.id,
                title: `${match.teamA.name} vs ${match.teamB.name}`,
                category,
                price
            }],
            totalPrice: price
        };

        try {
            const response = await fetch('http://localhost:8000/api/orders.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSuccess(true);
            } else {
                alert(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('Failed to connect to the server.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl text-center border border-emerald-100"
                >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Payment Successful!</h2>
                    <p className="text-slate-500 mb-8">
                        Your tickets for <strong className="text-slate-900">{match.teamA.name} vs {match.teamB.name}</strong> have been sent to <strong>{formData.email}</strong>.
                    </p>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => navigate('/')}
                            className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors"
                        >
                            Return Home
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <CreditCard className="w-8 h-8 text-emerald-600" /> Secure Checkout
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Guest Form */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-fit">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <User className="w-5 h-5 text-slate-400" /> Guest Details
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                                <div className="flex gap-4">
                                    {['Mr', 'Ms', 'Mrs'].map((t) => (
                                        <label key={t} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="title"
                                                value={t}
                                                checked={formData.title === t}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                                            />
                                            <span className="text-slate-600">{t}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                                    <Mail className="w-3 h-3" /> Tickets will be sent here
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                    placeholder="+212 6..."
                                />
                                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                                    <Smartphone className="w-3 h-3" /> Used for ticket delivery issues
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 mt-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Processing...' : `Pay $${price}`}
                            </button>
                        </form>
                    </div>

                    {/* Order Review */}
                    <div className="bg-slate-100 rounded-3xl p-8 border border-white/50 h-fit">
                        <h2 className="text-xl font-bold text-slate-900 mb-6">Your Order</h2>
                        <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <div className="w-full h-full flex">
                                        <img src={match.teamA.flag} className="w-1/2 h-full object-contain bg-slate-50 p-1" />
                                        <img src={match.teamB.flag} className="w-1/2 h-full object-contain bg-slate-50 p-1" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">{match.teamA.name} vs {match.teamB.name}</h3>
                                    <div className="text-sm text-slate-500 mt-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> {match.date} {match.time}</div>
                                    <div className="text-sm text-slate-500 mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> {match.stadium.name}</div>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                                <span className="text-sm font-medium text-slate-600">Category {category.replace('cat', '')}</span>
                                <span className="font-bold text-emerald-600">${price}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-lg font-bold text-slate-900 px-4">
                            <span>Total to Pay</span>
                            <span>${price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
