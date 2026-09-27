import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-bg-elevated border border-line rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-green rounded-xl flex items-center justify-center mx-auto mb-4">
            <LogIn className="text-bg-elevated w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-text-main font-display mb-2">Welcome Back</h2>
          <p className="text-muted">Sign in to your account to continue</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-text-main mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-bg border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-main mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-bg border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green hover:bg-green-soft text-bg-elevated font-medium py-3 rounded-xl transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 text-center text-muted">
          Don't have an account?{' '}
          <Link to="/register" className="text-accent hover:text-accent-deep font-medium transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
