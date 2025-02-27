import { Helmet } from "react-helmet-async";

function SEO({ title, description }: { title: string; description: string }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={"https://nari-s3.s3.us-east-1.amazonaws.com/logo.png"}
      />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default SEO;
