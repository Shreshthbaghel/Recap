import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-bg-elevated border border-line rounded-3xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-text-main font-display">Dashboard</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-bg border border-line rounded-xl text-text-main hover:bg-line transition-colors font-medium"
          >
            Logout
          </button>
        </div>
        <div className="p-6 bg-bg rounded-2xl border border-line">
          <h2 className="text-xl font-semibold mb-2">Welcome, {user?.name}!</h2>
          <p className="text-muted">You have successfully logged in. Phase 1 is complete.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
