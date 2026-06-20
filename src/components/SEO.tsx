import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE = 'https://squirrelll.ing';
const DEFAULT_OG = 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a6756135-5b3d-41a7-8977-e1c5c5f1a496/id-preview-5287d2ae--804848c4-9f75-4785-b07b-ff5c10eee937.lovable.app-1781984274085.png';

export interface SEOProps {
  title: string;
  description: string;
  path: string; // route path starting with /
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  image = DEFAULT_OG,
  type = 'website',
  noindex = false,
  jsonLd,
}) => {
  const url = `${SITE}${path}`;
  const jsonArr = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Squirrelll.ing" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
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
