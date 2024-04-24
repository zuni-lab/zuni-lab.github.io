import { Container } from "./Containter";

export const AboutUs = () => {
  return (
    <div className="content px-28 mt-20">
      <h1>About us</h1>
      <Container>
        <p>
          <span className="font-bold italic mr-2">ZUNI Laboratory</span>
          is made up of engineers, researchers, and artists, all united by a
          shared passion for leveraging the power of decentralized technologies.
          We are committed to pushing the boundaries of what's possible and
          creating applications that enrich and enhance people's lives.
        </p>
      </Container>
    </div>
  );
};
