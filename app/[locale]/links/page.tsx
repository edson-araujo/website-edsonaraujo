import { Footer } from "@/components/footer";
import LeftPanel from "./left-panel";
import RightPanel from "./right-panel";

export default function links() {
  return (
    <div className="relative flex flex-col items-center flex-1 w-full h-full">
      {/* Pattern */}
      <div className="absolute inset-0 z-0 bg-light-pattern bg-verySmall" />
      {/* Overlay */}
      <div className="absolute inset-0 z-10" />
      <div className="container relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row">
        {/* Left Panel */}
        <LeftPanel />
        {/* Right Panel */}
        <RightPanel />
      </div>
    </div>
  );
}
