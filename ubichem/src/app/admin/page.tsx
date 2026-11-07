'use client';

import { useState, useEffect } from 'react';
import { PageBanner } from '@/components/PageBanner';
import { toast } from '@/components/Toast';
import { Download, RefreshCw, LogOut, CheckCircle } from 'lucide-react';

interface EnquiryItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  productInterest: string;
  message: string;
  createdAt: string;
}

interface ContactItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'enquiry' | 'contact'>('enquiry');
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [total, setTotal] = useState(0);

  const checkLogin = async () => {
    try {
      const res = await fetch('/api/admin/enquiries?type=enquiry&limit=1');
      if (res.ok) {
        setIsLoggedIn(true);
        fetchData('enquiry');
      }
    } catch {
      // not logged in
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        setIsLoggedIn(true);
        toast.success('Logged in successfully!');
        fetchData(activeTab);
      } else {
        const data = await res.json();
        toast.error(data.error || 'Invalid credentials');
      }
    } catch {
      toast.error('Login request failed');
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async (type: 'enquiry' | 'contact') => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/enquiries?type=${type}&limit=100`);
      if (res.ok) {
        const data = await res.json();
        if (type === 'enquiry') {
          setEnquiries(data.data);
        } else {
          setContacts(data.data);
        }
        setTotal(data.total);
      } else if (res.status === 401) {
        setIsLoggedIn(false);
      }
    } catch {
      toast.error('Failed to load submissions');
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (tab: 'enquiry' | 'contact') => {
    setActiveTab(tab);
    fetchData(tab);
  };

  const handleExportCSV = () => {
    window.location.href = `/api/admin/export?type=${activeTab}`;
  };

  return (
    <>
      <PageBanner
        title="Admin Portal"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admin" },
        ]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto bg-surface-card rounded-2xl p-8 shadow-card border border-border-subtle space-y-6">
            <div className="space-y-1 text-center">
              <h2 className="font-heading text-2xl font-bold text-primary">
                Admin Authentication
              </h2>
              <p className="text-sm text-on-surface-variant">
                Enter your administrative credentials to manage enquiries.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-11 bg-white border border-border-subtle rounded-lg px-3.5 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="admin"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 bg-white border border-border-subtle rounded-lg px-3.5 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-lg bg-primary hover:bg-primary-hover text-on-primary font-semibold text-sm transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Authenticating...' : 'Sign In'}
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-surface-card p-6 rounded-2xl border border-border-subtle shadow-card">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleTabChange('enquiry')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                    activeTab === 'enquiry'
                      ? 'bg-primary text-white'
                      : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                  }`}
                >
                  Product Enquiries
                </button>
                <button
                  onClick={() => handleTabChange('contact')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                    activeTab === 'contact'
                      ? 'bg-primary text-white'
                      : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                  }`}
                >
                  Contact Messages
                </button>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => fetchData(activeTab)}
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border-subtle text-sm font-medium hover:bg-surface-container transition-colors cursor-pointer"
                  title="Refresh data"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-harvest-amber hover:bg-harvest-amber-hover text-on-surface text-sm font-semibold transition-colors shadow-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Submissions Table */}
            <div className="bg-surface-card rounded-2xl border border-border-subtle shadow-card overflow-hidden">
              <div className="p-4 border-b border-border-subtle bg-surface-container-low flex justify-between items-center">
                <span className="font-semibold text-sm text-on-surface">
                  Total Submissions: {total}
                </span>
              </div>

              <div className="overflow-x-auto">
                {activeTab === 'enquiry' ? (
                  <table className="w-full text-left text-sm">
                    <thead className="bg-surface-container-low text-xs text-on-surface-variant uppercase border-b border-border-subtle">
                      <tr>
                        <th className="px-6 py-3.5">Date</th>
                        <th className="px-6 py-3.5">Name</th>
                        <th className="px-6 py-3.5">Phone</th>
                        <th className="px-6 py-3.5">Email</th>
                        <th className="px-6 py-3.5">Village / City</th>
                        <th className="px-6 py-3.5">Product Category</th>
                        <th className="px-6 py-3.5">Message</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                      {enquiries.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="px-6 py-8 text-center text-outline italic">
                            No product enquiries received yet.
                          </td>
                        </tr>
                      ) : (
                        enquiries.map((enq) => (
                          <tr key={enq.id} className="hover:bg-surface-container-low/50 transition">
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-outline">
                              {new Date(enq.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 font-semibold text-on-surface whitespace-nowrap">
                              {enq.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap font-mono text-xs">
                              <a href={`tel:${enq.phone}`} className="text-primary hover:underline">
                                {enq.phone}
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                              <a href={`mailto:${enq.email}`} className="text-primary hover:underline">
                                {enq.email}
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-on-surface-variant">
                              {enq.city}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                                {enq.productInterest}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant max-w-xs break-words">
                              {enq.message}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full text-left text-sm">
                    <thead className="bg-surface-container-low text-xs text-on-surface-variant uppercase border-b border-border-subtle">
                      <tr>
                        <th className="px-6 py-3.5">Date</th>
                        <th className="px-6 py-3.5">Name</th>
                        <th className="px-6 py-3.5">Email</th>
                        <th className="px-6 py-3.5">Phone</th>
                        <th className="px-6 py-3.5">Message</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                      {contacts.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-8 text-center text-outline italic">
                            No contact messages received yet.
                          </td>
                        </tr>
                      ) : (
                        contacts.map((c) => (
                          <tr key={c.id} className="hover:bg-surface-container-low/50 transition">
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-outline">
                              {new Date(c.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 font-semibold text-on-surface whitespace-nowrap">
                              {c.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                              <a href={`mailto:${c.email}`} className="text-primary hover:underline">
                                {c.email}
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap font-mono text-xs">
                              <a href={`tel:${c.phone}`} className="text-primary hover:underline">
                                {c.phone}
                              </a>
                            </td>
                            <td className="px-6 py-4 text-xs text-on-surface-variant max-w-sm break-words">
                              {c.message}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

