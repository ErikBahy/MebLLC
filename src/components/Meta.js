import React from "react";
import { Helmet } from "react-helmet";
import { useRouter } from "./../util/router.js";

function Meta(props) {
  const router = useRouter();

  // Merge default and page-specific meta data
  const meta = {
    title: "MEB LLC Security",
    description: "Professional Security Services",
    ...props,
  };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" key="description" />
      {/* ... rest of your meta tags ... */}
    </Helmet>
  );
}

export default Meta;
