import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ponplants.com'
  const now = new Date()

  return [
    { url: base,                              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/leca-vs-pon`,             lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/root-rot`,                lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/transition`,              lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/fertilizer`,              lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/tools`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tools/reservoir`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tools/root-rot-checker`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tools/fertilizer-chart`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/plants/alocasia`,         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/plants/pothos`,           lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/plants/monstera`,         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/plants/philodendron`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/plants/anthurium`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`,                   lastModified: now, changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${base}/contact`,                 lastModified: now, changeFrequency: 'yearly',  priority: 0.4 },
  ]
}
