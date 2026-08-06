export function Footer() {
  return (
    <footer className="w-full border-t border-gh-border py-8 mt-20 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gh-text-muted font-mono">
          © {new Date().getFullYear()} Designed & Built by Gokul Ramachandran.
        </p>
        <p className="text-sm text-gh-text-muted font-mono flex items-center gap-1">
          Built with React 19, Vite, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

