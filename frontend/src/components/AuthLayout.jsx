import { NotebookPen } from 'lucide-react';

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="auth-shell">
      <div className="grain" aria-hidden="true" />

      <aside className="auth-brand">
        <div className="flex items-center gap-3 reveal">
          <div className="auth-brand-mark">
            <NotebookPen size={18} strokeWidth={2.4} />
          </div>
          <div>
            <div className="auth-brand-name">MeetNote</div>
            <div className="text-xs text-white/50 mt-0.5">Meeting assistant</div>
          </div>
        </div>

        <div className="auth-brand-copy reveal reveal-delay-1">
          <p className="mono-label !text-teal-300 mb-4">Phase 1 · Foundation</p>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="auth-brand-meta">
            <span className="auth-chip">JWT auth</span>
            <span className="auth-chip">MongoDB</span>
            <span className="auth-chip">React + Vite</span>
          </div>
        </div>

        <p className="text-sm text-white/40 reveal reveal-delay-2">
          Built to grow into real-time notes and AI agents.
        </p>
      </aside>

      <main className="auth-panel">{children}</main>
    </div>
  );
};

export default AuthLayout;
