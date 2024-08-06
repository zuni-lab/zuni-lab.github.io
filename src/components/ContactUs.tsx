import { Container } from "./Containter";
import { DiscordSvg } from "./icons/DiscordSvg";
import { TeleSvg } from "./icons/TeleSvg";

export const ContactUs = () => {
  return (
    <div className="content px-24 mt-16 font-semibold">
      <h1>Contact Us 📪</h1>
      <Container>
        <p className="text-2xl mb-0">
          If you have any questions or would like to learn more about our
          organization, please feel free to reach out to us at: <br />
        </p>
        <div className="text-lg flex flex-col gap-2 mt-4 pl-4">
          <div className="flex items-center gap-2 mt-2">
            <TeleSvg width="24" height="24" />
            <a href="https://t.me/bc0xdavid" className="text-blue-500">
              t.me/david
            </a>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <DiscordSvg width="24" height="24" />
            <a href="https://discord.gg/NhUfGfJwah" className="text-blue-500">
              discord.com/channels@zunilab
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
