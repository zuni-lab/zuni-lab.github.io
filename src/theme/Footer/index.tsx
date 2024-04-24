import type { WrapperProps } from "@docusaurus/types";
import { LogoSVG } from "@site/src/components/Logo";
import type FooterType from "@theme/Footer";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  console.log({ props });
  return (
    <>
      <footer className="p-4 mb-4">
        <div className="footer flex flex-wrap gap-40 py-12 px-8 overflow-hidden rounded-[2.75rem]">
          <div className="pl-12 w-1/3 flex flex-col justify-between">
            <LogoSVG />
            <p>Copyright © 2023 ZUNI Laboratory.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
