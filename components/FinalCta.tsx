import { Heading } from "./heading";

export default function FinalCta() {
  return (
    <>
      <div className="flex flex-col items-center gap-16 sm:gap-20">
        <div className="">
          <Heading>Schedule for a Demo</Heading>
        </div>

        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://calendly.com/amanibobo1/voltient-demo-1"
            title="Calendly Scheduling Page"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
