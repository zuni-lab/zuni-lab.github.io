import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const features = [
  "Polkadot, Substrate, Near, Solana, Ethereum, Cosmos, now Flow",
  "Smart contract development",
  "Dapp development",
  "NFTs and decentralized marketplaces",
];

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
          <div className="content px-24 mt-20">
            <h1>About us</h1>
            <div className="mt-8 font-medium text-xl flex flex-col items-center justify-center">
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
          <div className="content px-24 mt-20">
            <h1>What we do</h1>
            <div className="mt-8 font-medium text-xl my-2">
              <p>
                At our organization, we focus on researching and developing
                cutting-edge web3 and blockchain applications that can help
                bring about a more decentralized and transparent world. Some of
                our key areas of focus include:
              </p>
              <ul className="list-disc list-inside font-semibold text-xl">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="content px-24 mt-16">
            <h1>Our Goals</h1>
            <div className="font-medium text-xl my-2">
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
