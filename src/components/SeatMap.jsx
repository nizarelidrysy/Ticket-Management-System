import React from 'react';

const SeatMap = ({ onSelectCategory, selectedCategory }) => {
    const categories = [
        { id: 'cat1', name: 'Category 1', price: 150, color: '#f43f5e', labelColor: 'bg-rose-500' }, // Rose
        { id: 'cat2', name: 'Category 2', price: 100, color: '#3b82f6', labelColor: 'bg-blue-500' }, // Blue
        { id: 'cat3', name: 'Category 3', price: 50, color: '#10b981', labelColor: 'bg-emerald-500' }, // Emerald
    ];

    return (
        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Select Your Zone</h3>

            <div className="w-full aspect-video relative flex items-center justify-center mb-8 bg-white rounded-xl shadow-inner overflow-hidden border border-slate-100">
                {/* Stadium SVG */}
                <svg viewBox="0 0 400 300" className="w-full h-full max-w-lg">
                    {/* Pitch */}
                    <rect x="125" y="75" width="150" height="150" fill="#059669" rx="4" />
                    <rect x="125" y="75" width="150" height="150" fill="none" stroke="white" strokeWidth="2" rx="4" opacity="0.5" />
                    <circle cx="200" cy="150" r="20" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
                    <line x1="125" y1="150" x2="275" y2="150" stroke="white" strokeWidth="2" opacity="0.5" />

                    {/* Cat 3 (Corners/Ends) */}
                    <path
                        d="M 50 50 L 100 100 L 300 100 L 350 50 Q 200 10 50 50 Z"
                        fill={selectedCategory === 'cat3' ? categories[2].color : `${categories[2].color}40`}
                        stroke={categories[2].color}
                        strokeWidth="2"
                        className="cursor-pointer transition-all hover:opacity-80"
                        onClick={() => onSelectCategory('cat3')}
                    />
                    <path
                        d="M 50 250 L 100 200 L 300 200 L 350 250 Q 200 290 50 250 Z"
                        fill={selectedCategory === 'cat3' ? categories[2].color : `${categories[2].color}40`}
                        stroke={categories[2].color}
                        strokeWidth="2"
                        className="cursor-pointer transition-all hover:opacity-80"
                        onClick={() => onSelectCategory('cat3')}
                    />

                    {/* Cat 2 (Sides) */}
                    <path
                        d="M 30 70 L 100 100 L 100 200 L 30 230 Q 10 150 30 70 Z"
                        fill={selectedCategory === 'cat2' ? categories[1].color : `${categories[1].color}40`}
                        stroke={categories[1].color}
                        strokeWidth="2"
                        className="cursor-pointer transition-all hover:opacity-80"
                        onClick={() => onSelectCategory('cat2')}
                    />
                    <path
                        d="M 370 70 L 300 100 L 300 200 L 370 230 Q 390 150 370 70 Z"
                        fill={selectedCategory === 'cat2' ? categories[1].color : `${categories[1].color}40`}
                        stroke={categories[1].color}
                        strokeWidth="2"
                        className="cursor-pointer transition-all hover:opacity-80"
                        onClick={() => onSelectCategory('cat2')}
                    />

                    {/* Cat 1 (Central/Premium) */}
                    <rect
                        x="105" y="210" width="190" height="40"
                        rx="10"
                        fill={selectedCategory === 'cat1' ? categories[0].color : `${categories[0].color}40`}
                        stroke={categories[0].color}
                        strokeWidth="2"
                        className="cursor-pointer transition-all hover:opacity-80"
                        onClick={() => onSelectCategory('cat1')}
                    />
                    <rect
                        x="105" y="50" width="190" height="40"
                        rx="10"
                        fill={selectedCategory === 'cat1' ? categories[0].color : `${categories[0].color}40`}
                        stroke={categories[0].color}
                        strokeWidth="2"
                        className="cursor-pointer transition-all hover:opacity-80"
                        onClick={() => onSelectCategory('cat1')}
                    />

                </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => onSelectCategory(cat.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${selectedCategory === cat.id
                            ? 'border-slate-900 bg-slate-900 text-white shadow-lg scale-105'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                            }`}
                    >
                        <div className={`w-3 h-3 rounded-full mb-2 ${cat.labelColor}`} />
                        <div className="font-bold">{cat.name}</div>
                        <div className="text-sm opacity-80">${cat.price}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SeatMap;
