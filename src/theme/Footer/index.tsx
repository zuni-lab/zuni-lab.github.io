import Link from "@docusaurus/Link";
import type { WrapperProps } from "@docusaurus/types";
import { LogoSVG } from "@site/src/components/Logo";
import { DiscordSvg } from "@site/src/components/icons/DiscordSvg";
import { GithubSvg } from "@site/src/components/icons/GithubSvg";
import { TeleSvg } from "@site/src/components/icons/TeleSvg";
import type FooterType from "@theme/Footer";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <footer className="p-4 mb-4">
        <div className="footer flex flex-wrap py-12 px-8 overflow-hidden rounded-[2.75rem]">
          <div className="pl-12 w-1/3 flex flex-col justify-between">
            <LogoSVG />
            <p>Copyright © 2023 ZUNI Laboratory.</p>
          </div>
          <div className="w-2/3 pl-20 flex flex-wrap">
            <div className="w-1/2">
              <h3 className="font-bold">Contact</h3>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-2 mt-2">
                  <TeleSvg width="24" height="24" />
                  <a href="https://t.me/david7oathan" className="text-blue-600">
                    t.me/david7oathan
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <DiscordSvg width="24" height="24" />
                  <a
                    href="https://discord.gg/6VkkwFazT7"
                    className="text-blue-500"
                  >
                    discord.com/channels@zuni-lab
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <GithubSvg width="24" height="24" />
                  <a
                    href="https://github.com/zuni-lab"
                    className="text-blue-500"
                  >
                    github.com/zuni-lab
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2 font-bold">
              <h3 className="font-bold">Projects</h3>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-2">
                  <Link to="/projects/zuni" className="text-blue-500 text-xl">
                    ZUNI
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Link to="/projects/zswap" className="text-blue-500 text-xl">
                    ZSWAP
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Link to="/projects/cex" className="text-blue-500 text-xl">
                    CEX
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Link to="/projects/dex" className="text-blue-500 text-xl">
                    DEX
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
