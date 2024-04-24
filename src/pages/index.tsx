import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Container } from "../components/Containter";
import { TechStack } from "../components/TechStack";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Seeking the art in the decentralized world."
    >
      <main className="w-full">
        <section className="sectionMain relative">
          <div className="mt-4 capitalize font-extrabold pt-16 flex flex-col items-center justify-center gap-4">
            <p className="text-7xl">ZUNI LAB</p>
            <p className="text-5xl">
              Seeking the art in the decentrialized world 🚀
            </p>
          </div>
          <div className="content px-28 mt-20">
            <h1>About us</h1>
            <Container>
              <p>
                <span className="font-bold italic mr-2">ZUNI Laboratory</span>
                is made up of engineers, researchers, and artists, all united by
                a shared passion for leveraging the power of decentralized
                technologies. We are committed to pushing the boundaries of
                what's possible and creating applications that enrich and
                enhance people's lives.
              </p>
            </Container>
          </div>
          <div className="content px-28 mt-20">
            <h1>Tech stack</h1>
            <TechStack />
          </div>

          <div className="content px-24 mt-16">
            <h1>Our Goals</h1>
            <div className="">
              <p>
                Our primary goal is to build innovative applications that can
                help drive the adoption of web3 and blockchain technologies. We
                believe that decentralized technologies have the potential to
                revolutionize industries and make the world a better place, and
                we are committed to helping make that vision a reality.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
