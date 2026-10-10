import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// jsdom does not implement matchMedia; components read it for theme + reduced motion.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
});

// Mock Element.prototype.scrollIntoView
if (typeof Element !== 'undefined') {
  Element.prototype.scrollIntoView = vi.fn();
}

// jsdom implements neither observer API; framer-motion needs both.
class MockObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
vi.stubGlobal('IntersectionObserver', MockObserver);
vi.stubGlobal('ResizeObserver', MockObserver);

// Mock fetch for deterministic testing without external API dependency
const mockFetch = vi.fn().mockImplementation((url: RequestInfo | URL) => {
  const urlStr = typeof url === 'string' ? url : url.toString();
  if (urlStr.includes('/repos')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        { name: 'repo-1', stargazers_count: 5, forks_count: 2, language: 'TypeScript' }
      ]),
    });
  }
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ stargazers_count: 5, forks_count: 2 }),
  });
});
vi.stubGlobal('fetch', mockFetch);

// Cleanup after each test case
afterEach(() => {
  cleanup();
});
