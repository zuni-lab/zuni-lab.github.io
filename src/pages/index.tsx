import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { AboutUs } from "../components/AboutUs";
import { ContactUs } from "../components/ContactUs";
import { Experties } from "../components/Experties";
import { TechStack } from "../components/TechStack";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Seeking the art in the decentralized world."
    >
      <main className="w-full">
        <section className="sectionMain relative pb-20">
          <div className="mt-4 capitalize font-extrabold pt-16 flex flex-col items-center justify-center gap-4">
            <p className="text-7xl">ZUNI LAB</p>
            <p className="text-5xl">
              Seeking the art in the decentrialized world 🚀
            </p>
          </div>
          <AboutUs />
          <TechStack />
          <Experties />
          <ContactUs />
        </section>
      </main>
    </Layout>
  );
}
