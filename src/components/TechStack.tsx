import { Container } from "./Containter";
import { AwsSvg } from "./icons/AwsSvg";
import { BSCSvg } from "./icons/BSCSvg";
import { EthereumSvg } from "./icons/EthereumSvg";
import { FlowSvg } from "./icons/FlowSvg";
import { FlutterSvg } from "./icons/FlutterSvg";
import { GoSvg } from "./icons/GoSvg";
import { IconSvg } from "./icons/IconSvg";
import { JSSvg } from "./icons/JSSvg";
import { K8SSvg } from "./icons/K8SSvg";
import { MongoDbSvg } from "./icons/MongoDbSvg";
import { NearSvg } from "./icons/NearSvg";
import { NextJSSvg } from "./icons/NextJSSvg";
import { PolkadotSvg } from "./icons/PolkadotSvg";
import { PostgresSvg } from "./icons/PostgresSvg";
import { RustSvg } from "./icons/RustSvg";
import { SolanaSvg } from "./icons/SolanaSvg";
import { SoliditySvg } from "./icons/SoliditytSvg";

export const TechStack = () => {
  return (
    <div className="content px-28 mt-20">
      <h1>Tech stack</h1>
      <Container className="grid grid-cols-6 gap-x-8 gap-y-16 !py-8">
        <div className="h-[6.5rem] flex items-center justify-center">
          <SoliditySvg width="100%" height="132%" />
        </div>
        <div className="h-[6.5rem] flex items-center justify-center">
          <RustSvg width="100%" height="100%" />
        </div>
        <div className="h-[6.5rem] flex items-center justify-center">
          <GoSvg width="100%" height="100%" />
        </div>
        <div className="h-[6.5rem] flex items-center justify-center">
          <JSSvg width="100%" height="100%" />
        </div>
        <div className="h-[6.5rem] flex items-center justify-center col-span-2">
          <img src="img/circom.png" alt="circom" width="100%" height="100%" />
        </div>
        <div className="h-[6.5rem] flex items-center justify-center">
          <PostgresSvg width="100%" height="100%" />
        </div>
        <div className="h-[6.5rem] flex items-center justify-center">
          <MongoDbSvg width="100%" height="180%" />
        </div>
        <div className="h-[6.5rem] flex items-center justify-center">
          <FlutterSvg width="100%" height="100%" />
        </div>
        <div className="h-[6.5rem] flex items-center justify-center">
          <NextJSSvg width="100%" height="100%" />
        </div>
        <div className="h-[6.5rem] flex items-center justify-center">
          <K8SSvg width="100%" height="100%" />
        </div>
        <div className="h-[6.5rem] flex items-center justify-center">
          <AwsSvg width="100%" height="100%" />
        </div>
        <div className="my-4 col-span-6 flex items-center justify-center font-semibold text-3xl">
          with <span className="text-blue-500 mx-1">shipped</span> projects on
        </div>
        <div className="col-span-6 flex flex-wrap justify-center items-center gap-y-8">
          <div className="h-32 w-1/4 flex items-center justify-center">
            <EthereumSvg width="100%" height="100%" />
          </div>
          <div className="h-32 w-1/4 flex items-center justify-center">
            <SolanaSvg width="100%" height="100%" />
          </div>
          <div className="h-32 w-1/4 flex items-center justify-center">
            <BSCSvg width="100%" height="100%" />
          </div>
          <div className="h-32 w-1/4 flex items-center justify-center">
            <FlowSvg width="100%" height="100%" />
          </div>
          <div className="h-32 w-1/4 flex items-center justify-center">
            <NearSvg width="100%" height="100%" />
          </div>
          <div className="h-32 w-1/4 flex items-center justify-center">
            <PolkadotSvg width="100%" height="100%" />
          </div>
          <div className="h-32 w-1/4 flex items-center justify-center">
            <IconSvg width="100%" height="100%" />
          </div>
        </div>
      </Container>
    </div>
  );
};
