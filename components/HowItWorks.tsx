import { PenSquareIcon } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <>
      <div className="flex flex-col gap-12 p-11">
        {/*first big card*/}
        <div className="flex flex-col p-6 pt-8 bg-[#F6F5F4] rounded-xl pb-0 space-y-12">
          <div className="px-4 flex flex-col gap-2 pb-8">
            {/*icon*/}
            <PenSquareIcon color="#059669" />

            {/*title*/}
            <h1 className="font-bold text-lg">
              The assistant that helps you work, in the tool where you <br />{" "}
              work
            </h1>

            <p className="text-base font-light">
              No more copy-paste between tabs.
            </p>
          </div>

          <div className="">
            <Image
              src="/notion1.svg"
              alt="Voltiant Logo"
              width={955.98}
              height={517.14}
              quality={100}
              className=""
              priority
            />
          </div>
        </div>

        {/*1x3 card*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="flex flex-col p-6 pt-8 bg-[#F6F5F4] rounded-xl pb-0 space-y-12">
              <div className="px-4 flex flex-col gap-2 pb-8">
                {/*icon*/}
                <PenSquareIcon color="#0EA5E9" />

                {/*title*/}
                <h1 className="font-bold text-lg">
                  Generate diagrams & flowcharts
                </h1>

                {/*desc*/}
                <p className="text-base font-light">
                  Level up your doc with visual aids.
                </p>
              </div>

              {/*image*/}
              <div className="">
                <Image
                  src="/notion21.svg"
                  alt="Voltiant Logo"
                  width={955.98}
                  height={517.14}
                  quality={100}
                  className=""
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6 pt-8 bg-[#F6F5F4] rounded-xl pb-0 space-y-12">
            <div className="px-4 flex flex-col gap-2 pb-8">
              {/*icon*/}
              <PenSquareIcon color="#0EA5E9" />

              {/*title*/}
              <h1 className="font-bold text-lg">Translate</h1>

              {/*desc*/}
              <p className="text-base font-light">
                Now you can write in Japanese, Spanish, German and more.{" "}
              </p>
            </div>

            {/*image*/}
            <div className="">
              <Image
                src="/notion22.svg"
                alt="Voltiant Logo"
                width={955.98}
                height={517.14}
                quality={100}
                className=""
                priority
              />
            </div>
          </div>

          <div className="flex flex-col p-6 pt-8 bg-[#F6F5F4] rounded-xl pb-0 space-y-12">
            <div className="px-4 flex flex-col gap-2 pb-8">
              {/*icon*/}
              <PenSquareIcon color="#0EA5E9" />

              {/*title*/}
              <h1 className="font-bold text-lg">Improve writing</h1>

              {/*desc*/}
              <p className="text-base font-light">
                Your personalized reviewer and editor.
              </p>
            </div>

            {/*image*/}
            <div className="">
              <Image
                src="/notion23.svg"
                alt="Voltiant Logo"
                width={955.98}
                height={517.14}
                quality={100}
                className=""
                priority
              />
            </div>
          </div>
        </div>

        {/*second big card*/}
        <div className="flex flex-col p-6 pt-8 bg-[#F6F5F4] rounded-xl pb-0 space-y-12">
          {/*first big card*/}
          <div className="">
            <div className="px-4 flex flex-col gap-2 pb-8">
              <PenSquareIcon color="#0EA5E9" />

              <h1 className="font-bold text-lg">
                The assistant that helps you work, in the tool where you <br />{" "}
                work
              </h1>

              <p className="text-base font-light">
                No more copy-paste between tabs.
              </p>
            </div>

            <div className="">
              <Image
                src="/notion1.svg"
                alt="Voltiant Logo"
                width={955.98}
                height={517.14}
                quality={100}
                className=""
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
