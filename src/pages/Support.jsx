import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Support = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-slate-900 text-center mb-12">Contact Support</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
                        <p className="text-slate-500">tickets@frmf.ma</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
                        <p className="text-slate-500">+212 537 77 77 77</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Visit Us</h3>
                        <p className="text-slate-500">Rabat, Morocco</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
