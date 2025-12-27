import React from 'react';

export const Privacy = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 p-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">Privacy Policy</h1>
                <div className="prose prose-slate max-w-none">
                    <p className="lead">Your privacy is important to us. This policy explains how we handle your data.</p>
                    <h3>Data Collection</h3>
                    <p>We collect your name, email, and phone number solely for ticket processing and security purposes.</p>
                    <h3>Data Usage</h3>
                    <p>Your data is used to issue tickets, prevent fraud (blocking), and communicate important match updates.</p>
                    <h3>Third Parties</h3>
                    <p>We do not sell your data. We may share necessary details with stadium security for access control.</p>
                </div>
            </div>
        </div>
    );
};

export const Cookies = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 p-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">Cookie Policy</h1>
                <div className="prose prose-slate max-w-none">
                    <p className="lead">We use cookies to enhance your experience.</p>
                    <h3>Essential Cookies</h3>
                    <p>Required for the site to function (e.g., maintaining your session during checkout).</p>
                    <h3>Analytics</h3>
                    <p>We use anonymous analytics to understand site traffic and improve performance.</p>
                </div>
            </div>
        </div>
    );
};
