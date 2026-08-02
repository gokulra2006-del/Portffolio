export function Footer() {
  return (
    <footer className="w-full border-t border-gh-border py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gh-text-muted">
          © {new Date().getFullYear()} Designed & Built by Gokul.
        </p>
        <p className="text-sm text-gh-text-muted flex items-center gap-1">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
