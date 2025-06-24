import React from 'react';
import { Helmet } from 'react-helmet-async';

const HereIsWhere = () => {
  return (
    <div>
      <Helmet>
        <title>HereIsWhere - MyDomain</title>
        <meta name="description" content="This is the HereIsWhere page on MyDomain." />
        <meta name="keywords" content="hereiswhere, mydomain, example" />
        <meta property="og:title" content="HereIsWhere - MyDomain" />
        <meta property="og:description" content="This is the HereIsWhere page on MyDomain." />
        <meta property="og:url" content="https://mydomain.com/hereiswhere" />
      </Helmet>
      <h1>Welcome to HereIsWhere</h1>
      <p>This is the page for mydomain.com/hereiswhere.</p>
    </div>
  );
};

export default HereIsWhere;