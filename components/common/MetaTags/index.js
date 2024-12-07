import Head from 'next/head';
import { formattedDate } from '../../../utils/formattedDate';
import { appUrls, baseUrl } from '../../../utils/urls';
import { serwis } from '../../../utils/serwis';

const MetaTags = ({ path, page, rating, ratingsTotal, reviews, imageSrcSet, imageSizes, href }) => {
  const {
    title,
    ogTitle,
    twitterTitle,
    canonical,
    description,
    ogDescription,
    twitterDescription,
    siteName,
    keywords,
    appleMobileWebAppTitle,
    type,
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    imageType,
  } = page.metaTags;
  const {
    localBusiness,
    organization,
    service,
    product,
    faqPage,
    place,
    webpage,
    website,
    imageObject,
    breadcrumbList,
    aboutPage,
    person,
    contactPage
  } = page.schema;

  const getReviews = () => {
    if (!reviews || !Array.isArray(reviews)) return null;

    return reviews.map((review) => {
      if (!review) return null;

      const reviewName = review.text.split(' ').slice(0, 5).join(' ') + '...';

      return (
        {
          "@type": "Review",
          "id": `${appUrls.home}opinie/#review${review.time}`,
          "name": reviewName,
          "itemReviewed": {
            "@type": "LocalBusiness",
            "@id": appUrls.home + "#localbusiness",
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
          },
          "author": {
            "@type": "Person",
            "name": review.author_name,
          },
          "datePublished": formattedDate(review.time),
          "reviewBody": review.text,
        }
      )
    })
  };


  const productSchema = {
    ...product,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (rating || serwis.rating).toString(),
      "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      "bestRating": "5",
      "worstRating": "1",
    },
    // "review": getReviews(),
  };

  const serviceSchema = {
    ...service,
    // "aggregateRating": {
    //   "@type": "AggregateRating",
    //   "ratingValue": (rating || serwis.rating).toString(),
    //   "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString(),
    //   "bestRating": "5",
    //   "worstRating": "1",
    // },
  };

  const localBusinessSchema = {
    ...localBusiness,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (rating || serwis.rating).toString(),
      "reviewCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      "bestRating": "5"
    },
    // "review": getReviews(),
  };

  return (
    <Head>
      {/* Basic meta tags */}
      {title && <title key="title">{title}</title>}
      {description && <meta key="description" name="description" content={description} />}
      {keywords && <meta key="keywords" name="keywords" content={keywords} />}

      {/* Open Graph */}
      {(ogTitle || title) && <meta key="og:title" property="og:title" content={ogTitle || title} />}
      {(ogDescription || description) && <meta key="og:description" property="og:description" content={ogDescription || description} />}
      {type && <meta key="og:type" property="og:type" content={type} />}
      {canonical && <meta key="og:url" property="og:url" content={canonical} />}
      <meta key="og:locale" property="og:locale" content="pl_PL" />
      {siteName && <meta key="og:site_name" property="og:site_name" content={siteName} />}
      {image && <meta key="og:image" property="og:image" content={image} />}
      {imageAlt && <meta key="og:image:alt" property="og:image:alt" content={imageAlt} />}
      {imageWidth && <meta key="og:image:width" property="og:image:width" content={imageWidth} />}
      {imageHeight && <meta key="og:image:height" property="og:image:height" content={imageHeight} />}
      {imageType && <meta key="og:image:type" property="og:image:type" content={imageType} />}

      {/* test */}
      {image?.includes('https://res.cloudinary.com') &&
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />}
      {/* {image && imageSrcSet && imageSizes && href &&
        <link
          rel="preload"
          as="image"
          href={href}
          imageSrcSet={imageSrcSet}
          imageSizes={imageSizes}
        // crossOrigin={image?.includes('https://res.cloudinary.com') ? 'anonymous' : undefined}
        />} */}

      {/* Twitter Cards */}
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      {(twitterTitle || title) && <meta key="twitter:title" name="twitter:title" content={twitterTitle || title} />}
      {(twitterDescription || description) && <meta key="twitter:description" name="twitter:description" content={twitterDescription || description} />}
      {image && <meta key="twitter:image" name="twitter:image" content={image} />}
      {imageAlt && <meta key="twitter:image:alt" name="twitter:image:alt" content={imageAlt} />}

      {/* Canonical URL */}
      {canonical && <link key="canonical" rel="canonical" href={canonical} />}

      {/* <meta property="og:updated_time" content={ogTime} /> */}
      {/* <meta property="og:image:secure_url" content={`${appUrls.home}images/share_1.webp`} /> */}
      {/* <meta name="apple-mobile-web-app-title" content={appleMobileWebAppTitle} /> */}

      {/* Structured Data */}
      {(path === `${baseUrl}/naprawa-zmywarek/` || path === `${baseUrl}/naprawa-pralek/` || path === `${baseUrl}/naprawa-suszarek/` || path === `${baseUrl}/naprawa-ekspresow/` || path === `${baseUrl}/naprawa-telewizorow/`) && (
        <>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [webpage, imageObject, localBusinessSchema, faqPage,
                  // serviceSchema,    // przywrócić jeśli Product przestanie wyświetlać gwiazdki
                  productSchema,  // dodany aby wyświetlać gwiazdki
                  breadcrumbList
                ]
              })
            }}
          />
        </>
      )}

      {path === `${baseUrl}/` && (
        <>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [webpage, imageObject, localBusinessSchema, website, breadcrumbList]
              })
            }}
          />
        </>
      )}

      {path === `${baseUrl}/kontakt/` && (
        <>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [contactPage, localBusinessSchema, breadcrumbList]
              })
            }}
          />
        </>
      )}

      {path === `${baseUrl}/o-mnie/` && (
        <>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [aboutPage, person, localBusinessSchema, breadcrumbList]
              })
            }}
          />
        </>
      )}

      {path === `${baseUrl}/opinie/` && (
        <>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [webpage, localBusinessSchema, ...getReviews(), breadcrumbList]
              })
            }}
          />
        </>
      )}

    </Head>
  );
};

export default MetaTags; 