import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Facebook, Instagram, Menu, X, Twitter, ChevronDown, Shield } from 'lucide-react';
import { TEAMS, MATCHES } from '../data/mockData';

// Custom X Logo Component
const XLogo = ({ className }) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

const Layout = ({ children }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    // Smart Navigation Handlers
    const handleSmartNav = (type) => {
        if (type === 'stadiums') {
            window.open('https://www.google.com/maps/search/Morocco+World+Cup+2030+Stadiums', '_blank');
        } else if (type === 'teams') {
            window.open('https://www.google.com/search?q=Morocco+National+Football+Team+Official+Site', '_blank');
        }
    };

    const handleTeamSelect = (teamId) => {
        setIsSearchOpen(false);
        setSearchQuery('');

        // Intelligent Check
        const hasMatches = MATCHES.some(m => m.teamA.id === teamId || m.teamB.id === teamId);

        if (hasMatches) {
            navigate(`/matches?team=${teamId}`);
        } else {
            // Toast or Professional Alert
            const teamName = TEAMS.find(t => t.id === teamId)?.name || 'Team';
            alert(`No upcoming matches found for ${teamName}. They have either been eliminated or have no scheduled games.`);
        }
    };

    const filteredTeams = TEAMS.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-emerald-500/30">
            {/* Header */}
            <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Unified Logo Area */}
                        <Link to="/" className="flex items-center gap-6 group">
                            {/* Main Website Logo */}
                            <div className="flex items-center gap-2">
                                <img src="/assets/websiteLogo.png" alt="2030" className="h-12 w-auto" />
                                <span className="font-bold text-2xl tracking-tighter text-black hidden sm:block">
                                    Ticket<span className="text-emerald-600">.ma</span>
                                </span>
                            </div>

                            <div className="h-8 w-px bg-slate-300 hidden md:block" />

                            {/* Partner Logos (Original Colors) */}
                            <div className="hidden md:flex items-center gap-4 transition-all duration-300">
                                <img src="/assets/FRMFLogo.svg" alt="FRMF" className="h-12 w-auto opacity-90 hover:opacity-100" />
                                <span className="text-slate-300 font-light text-lg">x</span>
                                <img src="/assets/DolbyDigital.svg" alt="Dolby" className="h-5 w-auto opacity-90 hover:opacity-100" />
                                <span className="text-slate-300 font-light text-lg">x</span>
                                <img src="/assets/marocTelecomLogo.svg" alt="Maroc Telecom" className="h-8 w-auto opacity-90 hover:opacity-100" />
                            </div>
                        </Link>

                        {/* Navigation */}
                        <div className="flex items-center gap-8">
                            <nav className="hidden lg:flex gap-8 items-center">
                                <Link to="/matches" className="text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors uppercase tracking-wider">Matches</Link>
                                <Link to="/stadiums" className="text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors uppercase tracking-wider">Stadiums</Link>
                                <Link to="/teams" className="text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors uppercase tracking-wider">Teams</Link>
                            </nav>

                            {/* Search & Actions */}
                            <div className="flex items-center gap-3">
                                {/* Admin Link */}
                                <Link
                                    to="/admin"
                                    className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all"
                                    title="Admin Dashboard"
                                >
                                    <Shield className="w-5 h-5" />
                                </Link>

                                {/* Team Dropdown Search */}
                                <div className="relative">
                                    <div className={`relative flex items-center transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-10'}`}>
                                        <button
                                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                                            className="absolute right-0 z-10 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-800 hover:text-emerald-600"
                                        >
                                            <Search className="w-5 h-5" />
                                        </button>
                                        <input
                                            type="text"
                                            placeholder="Filter Matches by Team..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className={`w-full bg-slate-100 border-none rounded-full py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 outline-none font-medium ${isSearchOpen ? 'opacity-100' : 'opacity-0 cursor-default'}`}
                                        />
                                    </div>

                                    {/* Dropdown Results */}
                                    {isSearchOpen && searchQuery && (
                                        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                                            {filteredTeams.length > 0 ? (
                                                filteredTeams.map(team => (
                                                    <button
                                                        key={team.id}
                                                        onClick={() => handleTeamSelect(team.id)}
                                                        className="w-full px-4 py-2 text-left hover:bg-emerald-50 flex items-center gap-3 transition-colors"
                                                    >
                                                        <img src={team.flag} alt={team.name} className="w-6 h-4 object-cover rounded shadow-sm" />
                                                        <span className="font-bold text-slate-800 text-sm">{team.name}</span>
                                                    </button>
                                                ))
                                            ) : (
                                                <div className="px-4 py-2 text-sm text-slate-400">No teams found</div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <button
                                    className="lg:hidden p-2 text-slate-800"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    {mobileMenuOpen ? <X /> : <Menu />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow pt-24">
                {children}
            </main>

            <footer className="bg-slate-950 text-slate-400 py-20 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-4 text-white mb-8">
                                <div className="flex items-center -space-x-2">
                                    {/* Morocco, Spain, Portugal Flags/Logos */}
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-slate-900 z-30">
                                        <img src={TEAMS.find(t => t.id === 'MAR').flag} alt="Morocco" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-slate-900 z-20">
                                        <img src={TEAMS.find(t => t.id === 'ESP').flag} alt="Spain" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-slate-900 z-10">
                                        <img src={TEAMS.find(t => t.id === 'POR').flag} alt="Portugal" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-2xl tracking-tight text-white mb-1">World Cup 2030</div>
                                    <div className="text-emerald-500 text-sm font-bold uppercase tracking-wide">YallaVamos 2030</div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                                The official ticketing platform for the Centennial World Cup.
                                uniting three continents and six countries in a global celebration of football.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-lg">Support</h4>
                            <ul className="space-y-4 text-sm font-medium">
                                <li><Link to="/faq" className="hover:text-emerald-400 transition-colors">Help Center & FAQ</Link></li>
                                <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
                                <li><Link to="/support" className="hover:text-emerald-400 transition-colors">Contact Support</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-lg">Follow Us</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/equipedumaroc/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-full hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all hover:-translate-y-1"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://x.com/EnMaroc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-full hover:bg-black hover:text-white hover:border-transparent transition-all hover:-translate-y-1"
                                >
                                    <XLogo className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.facebook.com/officielfrmf/?locale=fr_FR"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-full hover:bg-blue-600 hover:text-white hover:border-transparent transition-all hover:-translate-y-1"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium opacity-60">
                        <span>&copy; 2030 FIFA World Cup Organising Committee. All rights reserved.</span>
                        <div className="flex items-center gap-6">
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/cookies">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
