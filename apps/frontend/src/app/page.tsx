'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

interface HealthStatus {
  status: string;
  timestamp: string;
  uptime: number;
}

export default function Home() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const data = await api.get<HealthStatus>('/health');
        setHealth(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch health');
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Welcome to hh4
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Full-stack application powered by NestJS, Next.js & PostgreSQL
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Backend Status
          </h2>

          {loading && <p className="text-gray-500">Checking backend...</p>}

          {error && <p className="text-red-500">Error: {error}</p>}

          {health && (
            <div className="space-y-2">
              <p className="text-green-600 font-semibold">
                ✅ {health.status}
              </p>
              <p className="text-sm text-gray-600">
                Uptime: {health.uptime.toFixed(2)}s
              </p>
              <p className="text-sm text-gray-600">
                {new Date(health.timestamp).toLocaleString()}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 space-y-3">
          <p className="text-gray-700">Quick Links:</p>
          <ul className="space-y-2">
            <li>
              <a
                href="http://localhost:4000/api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 underline"
              >
                Backend API →
              </a>
            </li>
            <li>
              <a
                href="http://localhost:4000/api/health"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 underline"
              >
                Health Check →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
