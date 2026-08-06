import { useNavigate, useLocation } from 'react-router-dom';

import { motion } from 'framer-motion';
import { ArrowLeft, Terminal } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gh-bg text-gh-text flex flex-col items-center justify-center p-6 text-center font-mono">
      <Helmet>
        <title>404: Route Not Found | Gokul Ramachandran</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg bg-gh-bg-secondary border border-gh-border rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Terminal Header */}
        <div className="bg-gh-bg px-4 py-3 border-b border-gh-border flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex items-center gap-2 text-gh-text-muted text-xs">
            <Terminal size={14} />
            gokul@portfolio: 404
          </div>
          <div className="w-12"></div>
        </div>

        {/* Terminal Body */}
        <div className="p-8 text-left space-y-4 text-sm">
          <p className="text-red-400 font-bold text-base">
            ERR_NOT_FOUND: 404 Route Not Found
          </p>

          <p className="text-gh-text-muted">
            The requested path <span className="text-gh-blue font-semibold">{location.pathname}</span> could not be resolved on this server.
          </p>

          <div className="bg-gh-bg p-4 rounded-xl border border-gh-border/50 text-xs text-gh-text-muted space-y-1">
            <p><span className="text-green-400">status:</span> 404</p>
            <p><span className="text-green-400">suggestion:</span> Check the URL or return to main terminal</p>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/')}
              className="btn-primary py-2 px-5 text-xs font-mono inline-flex items-center gap-2"
            >
              <ArrowLeft size={14} />
              Return Home
            </button>
            <button
              onClick={() => navigate('/archive')}
              className="btn-outline py-2 px-5 text-xs font-mono"
            >
              View Project Archive
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
