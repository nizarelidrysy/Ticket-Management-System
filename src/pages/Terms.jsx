import React from 'react';

const Terms = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
                <h1 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">Terms & Conditions</h1>

                <div className="prose prose-slate max-w-none">
                    <h3>1. Ticket Purchase</h3>
                    <p>
                        All ticket purchases are final. By purchasing a ticket through this platform, you agree to these terms.
                        Tickets are revocable licenses that only grant a one-time entry to the stadium for the specific match.
                    </p>

                    <h3>2. Entry Requirements</h3>
                    <p>
                        Valid identification matching the name on the ticket may be required at entry.
                        Prohibited items include weapons, flares, bottles, and any items deemed dangerous by security.
                    </p>

                    <h3>3. Refunds & Cancellations</h3>
                    <p>
                        Refunds are only issued if a match is cancelled and not rescheduled.
                        If a match is postponed, your ticket will be valid for the new date.
                    </p>

                    <h3>4. Conduct</h3>
                    <p>
                        Fans are expected to behave respectfully. Any form of discrimination, violence, or pitch invasion
                        will result in immediate ejection and a permanent ban from future matches (see our Blocked Users policy).
                    </p>

                    <h3>5. Data Privacy</h3>
                    <p>
                        We collect your data solely for the purpose of ticket fulfillment and security.
                        We do not sell your data to third parties.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
