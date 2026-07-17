import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE = 'https://squirrelll.ing';
const DEFAULT_OG = 'https://squirrelll.ing/uploads/og-image.jpg';

export interface SEOProps {
  title: string;
  description: string;
  path: string; // route path starting with /
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  image = DEFAULT_OG,
  type = 'website',
  noindex = false,
  keywords,
  ogTitle,
  ogDescription,
  jsonLd,
}) => {
  const url = `${SITE}${path}`;
  const jsonArr = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const ogT = ogTitle ?? title;
  const ogD = ogDescription ?? description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={ogT} />
      <meta property="og:description" content={ogD} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Squirrelll.ing" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogT} />
      <meta name="twitter:description" content={ogD} />
      <meta name="twitter:image" content={image} />


      {jsonArr.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
