import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { LogoSVG } from "../components/Logo";

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
      <main className="h-screen w-full">
        <section className="sectionMain relative">
          <div className="mt-4 capitalize font-extrabold pt-16 text-7xl flex flex-col items-center justify-center">
            <p>Seeking the art</p>
            <p> in the decentrialized world. 🚀 </p>
          </div>
          <div className="content px-24 mt-24">
            <h1>About us</h1>
            <div className="font-medium text-xl flex flex-col items-center justify-center my-2">
              <p>
                <span className="font-bold italic mr-2">ZUNI Laboratory</span>
                is a pioneering research and development lab at the forefront of
                art and technology. Our passion lies in delving into the
                potential of decentralized technologies and creating innovative
                applications that have a transformative impact on society.
              </p>
              <p>
                Our diverse team comprises engineers, researchers, and artists,
                all united by a shared passion for leveraging the power of
                decentralized technologies. We are committed to pushing the
                boundaries of what's possible and creating applications that
                enrich and enhance people's lives.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
