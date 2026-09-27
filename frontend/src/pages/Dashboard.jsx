import { LogOut, NotebookPen, Sparkles, Users, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="app-shell">
      <div className="grain" aria-hidden="true" />

      <header className="app-header">
        <div className="app-header-inner">
          <div className="brand-row">
            <div className="brand-mark">
              <NotebookPen size={16} strokeWidth={2.4} />
            </div>
            <div>
              <span className="brand-name">MeetNote</span>
              <span className="brand-sub">Dashboard</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-ink m-0">{user?.name}</p>
              <p className="text-xs text-ink-faint m-0">{user?.email}</p>
            </div>
            <button type="button" onClick={logout} className="btn btn-ghost">
              <LogOut size={16} />
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="app-main page-enter">
        <div>
          <span className="eyebrow">Overview</span>
          <h1 className="font-display text-ink text-[clamp(1.5rem,3vw,1.85rem)] font-bold m-0">
            Welcome, {user?.name?.split(' ')[0] || 'there'}
          </h1>
          <p className="mt-2 text-ink-faint max-w-xl">
            You're signed in. Phase 1 is complete — auth works end to end. Meetings and live notes land in Phase 2.
          </p>
        </div>

        <div className="stat-grid">
          <div className="panel stat-card">
            <span className="mono-label">01 · Account</span>
            <p className="value">Active</p>
            <p className="hint">JWT session stored locally</p>
          </div>
          <div className="panel stat-card">
            <span className="mono-label">02 · Meetings</span>
            <p className="value">0</p>
            <p className="hint">Unlocks in Phase 2</p>
          </div>
          <div className="panel stat-card">
            <span className="mono-label">03 · Agents</span>
            <p className="value">Soon</p>
            <p className="hint">Summary · Q&A · Email</p>
          </div>
        </div>

        <div className="empty-state">
          <div className="empty-icon">
            <FileText size={22} />
          </div>
          <h3>No meetings yet</h3>
          <p>
            Next up: create and join meetings with a share code, then co-edit notes in real time with Socket.io.
            AI summarization and Q&A follow after that.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold">
              <Users size={13} /> Collaborative notes
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold">
              <Sparkles size={13} /> AI agents later
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
