import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Ban, CheckCircle, Trash2, UserX, AlertCircle, Scan, Lock } from 'lucide-react';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('orders'); // 'orders' or 'blocked'
    const [orders, setOrders] = useState([]);
    const [blockedUsers, setBlockedUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [authStage, setAuthStage] = useState('scanning'); // scanning -> success -> complete

    useEffect(() => {
        // Fake Face ID Logic
        const scanTimer = setTimeout(() => setAuthStage('success'), 2000);
        const entryTimer = setTimeout(() => setAuthStage('complete'), 3500);

        return () => { clearTimeout(scanTimer); clearTimeout(entryTimer); };
    }, []);

    const fetchOrders = () => {
        fetch('http://localhost:8000/api/orders.php')
            .then(res => res.json())
            .then(data => setOrders(data.data || []))
            .catch(err => console.error(err));
    };

    const fetchBlockedUsers = () => {
        fetch('http://localhost:8000/api/blocked_users.php')
            .then(res => res.json())
            .then(data => setBlockedUsers(data.data || []))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        Promise.all([fetchOrders(), fetchBlockedUsers()])
            .finally(() => setLoading(false));
    }, []);

    const handleBlockUser = async (email, fullName) => {
        if (!confirm(`Are you sure you want to block ${fullName} (${email})? They won't be able to buy tickets.`)) return;

        try {
            const res = await fetch('http://localhost:8000/api/blocked_users.php', {
                method: 'POST',
                body: JSON.stringify({ email, fullName, reason: 'Admin blocked' })
            });
            if (res.ok) {
                // Refetch to update both lists
                await Promise.all([fetchOrders(), fetchBlockedUsers()]);
            }
        } catch (err) {
            alert('Failed to block user');
        }
    };

    const handleUnblockUser = async (id) => {
        try {
            const res = await fetch(`http://localhost:8000/api/blocked_users.php?id=${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                await Promise.all([fetchOrders(), fetchBlockedUsers()]);
            }
        } catch (err) {
            alert('Failed to unblock');
        }
    };

    const handlePurgeUser = async (user) => {
        if (!confirm(`Permanently delete ${user.full_name} and ALL their orders? This cannot be undone.`)) return;

        try {
            // 1. Find all orders by this user (email)
            const userOrders = orders.filter(o => o.email === user.email);

            // 2. Delete all orders
            await Promise.all(userOrders.map(o =>
                fetch(`http://localhost:8000/api/orders.php?id=${o.id}`, { method: 'DELETE' })
            ));

            // 3. Delete block record (Unblock)
            await fetch(`http://localhost:8000/api/blocked_users.php?id=${user.id}`, { method: 'DELETE' });

            // 4. Refresh
            await Promise.all([fetchOrders(), fetchBlockedUsers()]);
        } catch (err) {
            console.error(err);
            alert('Failed to delete user data');
        }
    };

    const handleDeleteOrder = async (id) => {
        if (!confirm('Are you sure you want to delete this order? This action cannot be undone.')) return;

        try {
            const res = await fetch(`http://localhost:8000/api/orders.php?id=${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setOrders(prev => prev.filter(o => o.id !== id));
            } else {
                alert('Failed to delete order');
            }
        } catch (err) {
            console.error(err);
            alert('Error deleting order');
        }
    };

    // Filter orders to hide those from blocked users AND filter by search term
    const filteredOrders = orders.filter(order => {
        const isBlocked = blockedUsers.some(blocked => blocked.email === order.email);
        const matchesSearch = order.fullName.toLowerCase().includes(searchTerm.toLowerCase());
        return !isBlocked && matchesSearch;
    });

    // Auth Overlay
    if (authStage !== 'complete') {
        return (
            <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    {authStage === 'scanning' ? (
                        <motion.div
                            key="scanning"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-slate-900 p-8 rounded-3xl flex flex-col items-center"
                        >
                            <div className="relative w-32 h-32 mb-8">
                                <Scan className="w-full h-full text-emerald-500 opacity-50 absolute" />
                                <motion.div
                                    className="w-full h-1 bg-emerald-400 absolute top-0 shadow-[0_0_15px_rgba(52,211,153,0.8)]"
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                                <Shield className="w-16 h-16 text-emerald-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                            </div>
                            <div className="text-emerald-500 font-mono text-lg tracking-widest uppercase animate-pulse">
                                Authenticating...
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-slate-900 p-10 rounded-3xl flex flex-col items-center border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)]"
                        >
                            <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/40">
                                <CheckCircle className="w-12 h-12 text-slate-900" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Access Granted</h2>
                            <p className="text-emerald-400 font-mono">Authentication Successful</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-500">Loading Dashboard...</div>;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                        <Shield className="w-8 h-8 text-emerald-600" />
                        Admin Dashboard
                    </h1>
                    <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                        <button
                            onClick={() => setActiveTab('orders')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'orders' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Orders
                        </button>
                        <button
                            onClick={() => setActiveTab('blocked')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'blocked' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500 hover:text-emerald-600'}`}
                        >
                            <Ban className="w-4 h-4" />
                            Blocked Users
                        </button>
                    </div>
                </div>

                <div className="mb-6 relative">
                    <input
                        type="text"
                        placeholder="Filter by Customer Name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-shadow pl-12"
                    />
                    <Shield className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                </div>

                {activeTab === 'orders' ? (
                    <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                        <table className="min-w-full divide-y divide-slate-200/50">
                            <thead className="bg-slate-50/50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Match</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Total</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <AnimatePresence>
                                    {filteredOrders.length === 0 ? (
                                        <tr>
                                            <td colSpan="7" className="px-6 py-12 text-center text-slate-400">
                                                No active orders found.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredOrders.map((order) => (
                                            <motion.tr
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, height: 0 }}
                                                key={order.id}
                                                className="hover:bg-emerald-50/30 transition-colors"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">#{order.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-0">
                                                            <div className="text-sm font-medium text-slate-900">{order.title}. {order.fullName}</div>
                                                            <div className="text-sm text-slate-500">{order.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                                                    {(() => {
                                                        try {
                                                            const tickets = JSON.parse(order.tickets || '[]');
                                                            return tickets[0]?.title || 'Unknown Match';
                                                        } catch (e) { return 'Error'; }
                                                    })()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                                    {(() => {
                                                        try {
                                                            const tickets = JSON.parse(order.tickets || '[]');
                                                            return tickets[0]?.category?.replace('cat', 'Category ') || '-';
                                                        } catch (e) { return '-'; }
                                                    })()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-emerald-600">
                                                    ${Number(order.totalPrice).toFixed(2)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                                    {new Date(order.date).toLocaleString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <button
                                                            onClick={() => handleBlockUser(order.email, order.fullName)}
                                                            className="text-rose-600 hover:text-rose-900 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 hover:bg-rose-100 transition-colors flex items-center gap-1"
                                                            title="Block User"
                                                        >
                                                            <Ban className="w-3 h-3" /> Block
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteOrder(order.id)}
                                                            className="text-slate-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors"
                                                            title="Delete Order"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        ))
                                    )}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blockedUsers.length === 0 && (
                            <div className="col-span-full py-12 text-center text-slate-400 bg-white/50 rounded-2xl border border-dashed border-slate-300">
                                <CheckCircle className="w-12 h-12 mx-auto mb-4 opacity-50 text-emerald-500" />
                                No blocked users.
                            </div>
                        )}
                        <AnimatePresence>
                            {blockedUsers.map((user) => (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    key={user.id}
                                    className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-rose-100/50 relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Ban className="w-24 h-24 text-rose-500 -mr-8 -mt-8" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
                                                <UserX className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 text-lg">{user.full_name || 'Unknown User'}</h3>
                                                <p className="text-sm text-slate-500 truncate max-w-[200px]" title={user.email}>{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="text-sm text-slate-500 mb-6">
                                            <span className="bg-rose-50 text-rose-600 px-2 py-1 rounded text-xs font-bold mr-2">BLOCKED</span>
                                            {new Date(user.blockedAt).toLocaleDateString()}
                                        </div>
                                        <button
                                            onClick={() => handleUnblockUser(user.id)}
                                            className="w-full py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <CheckCircle className="w-4 h-4" /> Unblock Access
                                        </button>
                                        <button
                                            onClick={() => handlePurgeUser(user)}
                                            className="w-full mt-2 py-2 bg-rose-50 border border-rose-100 text-rose-600 font-medium rounded-xl hover:bg-rose-100 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Trash2 className="w-4 h-4" /> Delete User & Data
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Admin;
