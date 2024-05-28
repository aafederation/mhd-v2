import Head from "next/head";

export const HeadMatter = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />

      {/* facebook open graph tag */}
      <meta property="og:url" content="https://mhd.aafederation.org/" />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="Asian American Federation Mental Health Directory"
      />
      <meta
        property="og:description"
        content="Asian American Federation Mental Health Directory"
      />
      <meta property="og:image" content="/img/logo/AAF-Logo.svg" />
      {/* facebook open graph tag */}

      {/* twitter card  */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@AAFederation" />
      <meta
        name="twitter:title"
        content="Asian American Federation Mental Health Directory"
      />
      <meta
        name="twitter:description"
        content="Asian American Federation Mental Health Directory"
      />
      <meta
        name="twitter:image:src"
        content="https://mhd.aafederation.org//img/logo/AAF-Logo.svg"
      />
      {/* twitter card */}

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>TEJ</title>
      <link
        rel="shortcut icon"
        type="image/png"
        href="/images/logos/fav-icon_1.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>AAF Mental Health Directory</title>
      <link
        rel="shortcut icon"
        type="image/png"
        href="/img/icon/aaf-favicon.png"
      />
    </Head>
  );
};
