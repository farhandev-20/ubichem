'use client';

import { useEffect, useState, useCallback } from 'react';

type ToastType = 'success' | 'error';

interface ToastMessage {
  id: number;
  type: ToastType;
  message: string;
}

type ToastListener = (toasts: ToastMessage[]) => void;

let toasts: ToastMessage[] = [];
let listeners: ToastListener[] = [];
let nextId = 0;

function notify() {
  listeners.forEach((listener) => listener([...toasts]));
}

function addToast(type: ToastType, message: string) {
  const id = nextId++;
  toasts = [...toasts, { id, type, message }];
  notify();

  // Auto-dismiss after 5 seconds
  setTimeout(() => {
    removeToast(id);
  }, 5000);
}

function removeToast(id: number) {
  toasts = toasts.filter((t) => t.id !== id);
  notify();
}

export const toast = {
  success: (message: string) => addToast('success', message),
  error: (message: string) => addToast('error', message),
};

export function Toaster() {
  const [currentToasts, setCurrentToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const listener: ToastListener = (updated) => {
      setCurrentToasts(updated);
    };
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  const dismiss = useCallback((id: number) => {
    removeToast(id);
  }, []);

  if (currentToasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {currentToasts.map((t) => (
        <div
          key={t.id}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white text-body-sm animate-slide-in-right ${
            t.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
          role="alert"
        >
          <span className="flex-1">{t.message}</span>
          <button
            onClick={() => dismiss(t.id)}
            className="ml-2 text-white/80 hover:text-white transition-colors focus:outline-none"
            aria-label="Dismiss"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
