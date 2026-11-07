'use client';

import { useState } from 'react';
import { productCategories } from '@/content/products';
import { toast } from '@/components/Toast';
import { useLanguage } from '@/i18n/LanguageContext';

export function EnquiryForm() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    productInterest: '',
    message: '',
    website: '', // honeypot
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.details) {
          const fieldErrors: Record<string, string> = {};
          for (const key in data.details) {
            fieldErrors[key] = data.details[key][0];
          }
          setErrors(fieldErrors);
        }
        toast.error(data.error || 'Failed to submit enquiry.');
        return;
      }

      toast.success(t.forms.enquirySuccess);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        productInterest: '',
        message: '',
        website: '',
      });
    } catch {
      toast.error('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="enquiry-name" className="block text-sm font-semibold text-on-surface mb-1.5">
          {t.forms.fullName} <span className="text-error">*</span>
        </label>
        <input
          id="enquiry-name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full h-12 bg-white border border-border-subtle rounded-lg px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          placeholder={t.forms.fullNamePlaceholder}
        />
        {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="enquiry-phone" className="block text-sm font-semibold text-on-surface mb-1.5">
            {t.forms.phone} <span className="text-error">*</span>
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-12 bg-white border border-border-subtle rounded-lg px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            placeholder={t.forms.phonePlaceholder}
          />
          {errors.phone && <p className="text-error text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="enquiry-email" className="block text-sm font-semibold text-on-surface mb-1.5">
            {t.forms.email} <span className="text-error">*</span>
          </label>
          <input
            id="enquiry-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full h-12 bg-white border border-border-subtle rounded-lg px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            placeholder={t.forms.emailPlaceholder}
          />
          {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="enquiry-city" className="block text-sm font-semibold text-on-surface mb-1.5">
            {t.forms.district} <span className="text-error">*</span>
          </label>
          <input
            id="enquiry-city"
            type="text"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full h-12 bg-white border border-border-subtle rounded-lg px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            placeholder={t.forms.districtPlaceholder}
          />
          {errors.city && <p className="text-error text-xs mt-1">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="enquiry-product" className="block text-sm font-semibold text-on-surface mb-1.5">
            {t.forms.productCategory} <span className="text-error">*</span>
          </label>
          <select
            id="enquiry-product"
            name="productInterest"
            required
            value={formData.productInterest}
            onChange={handleChange}
            className="w-full h-12 bg-white border border-border-subtle rounded-lg px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          >
            <option value="">{t.forms.selectCategory}</option>
            {productCategories.map((cat) => {
              const catName = t.categories[cat.slug]?.name || cat.name;
              return (
                <option key={cat.slug} value={cat.name}>
                  {catName}
                </option>
              );
            })}
          </select>
          {errors.productInterest && (
            <p className="text-error text-xs mt-1">{errors.productInterest}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-message" className="block text-sm font-semibold text-on-surface mb-1.5">
          {t.forms.message} <span className="text-error">*</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white border border-border-subtle rounded-lg p-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-y"
          placeholder={t.forms.messagePlaceholder}
        />
        {errors.message && <p className="text-error text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-lg bg-primary hover:bg-primary-hover text-on-primary font-semibold text-base transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
      >
        {loading ? t.common.submitting : t.forms.submitEnquiry}
      </button>
    </form>
  );
}

export default EnquiryForm;
