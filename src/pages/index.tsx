import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Seeking the art in the decentralized world."
    >
      <head>
        <link href="/dist/main.css" rel="stylesheet"></link>
      </head>
      <main className="bg-red-900 h-screen w-full">11</main>
    </Layout>
  );
}
