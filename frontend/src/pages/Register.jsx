import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NotebookPen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthLayout from '../components/AuthLayout';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      await register(name.trim(), email.trim(), password);
    } catch (err) {
      setError(typeof err === 'string' ? err : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Start with a clean foundation."
      subtitle="Register once. Your meetings, notes, and AI agents will live here as we ship each phase."
    >
      <div className="auth-card page-enter">
        <p className="eyebrow">Get started</p>
        <h2>Create account</h2>
        <p className="lede">It only takes a minute — then you're on the dashboard.</p>

        {error && <div className="alert-error mb-5">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              placeholder="Ada Lovelace"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="you@company.com"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="At least 6 characters"
              minLength={6}
              required
            />
          </div>
          <button type="submit" disabled={loading} className="btn btn-accent w-full mt-2">
            {loading ? 'Creating account…' : 'Create account'}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>

        <div className="mt-8 flex items-center gap-2 text-ink-faint text-xs justify-center">
          <NotebookPen size={14} />
          <span>Phase 1 — Auth foundation</span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
