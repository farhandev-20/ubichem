import { MetadataRoute } from 'next';
import { productCategories } from '@/content/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'https://ubichem.in';

  const staticRoutes = [
    '',
    '/about',
    '/team',
    '/awareness',
    '/services',
    '/awards',
    '/clients',
    '/range',
    '/products',
    '/gallery',
    '/enquiry',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productRoutes = productCategories.map((category) => ({
    url: `${baseUrl}/products/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}

