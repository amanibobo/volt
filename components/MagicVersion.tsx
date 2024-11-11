import HeroVideoDialog from "./ui/hero-video-dialog";
export function HeroVideoDialogDemoTopInBottomOut() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="top-in-bottom-out"
        videoSrc="/voltient-demo-vid.webm"
        thumbnailSrc="/BACKDROP.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="/voltient-demo-vid.webm"
        thumbnailSrc="/BACKDROP.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
