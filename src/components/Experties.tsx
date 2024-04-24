import { Container } from "./Containter";

export const Experties = () => {
  return (
    <div className="content px-24 mt-16">
      <h1>Experties</h1>
      <Container className="flex flex-wrap text-xl">
        <div className="w-1/2">
          <h1 className="text-2xl">💰 Crypto Exchange</h1>
          <p>
            We are building a decentralized exchange that allows users to trade
            cryptocurrencies without the need for a central authority.
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl">🏦 Decentralized Finance Primitives</h1>
          <p>
            We are developing a suite of financial tools that enable users to
            access a range of decentralized financial services.
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl">🧑🏻‍💻 Privacy Solutions</h1>
          <p>
            We are researching and developing privacy solutions that enable
            users to protect their data and maintain their privacy online.
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl">🔐 Cryptography researching</h1>
          <p>
            We are exploring the latest advancements in cryptography to build
            secure and private applications.
          </p>
        </div>
      </Container>
    </div>
  );
};
