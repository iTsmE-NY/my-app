import { Mali } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 flex flex-col gap-10">
      <main className="w-[400px] h-[400px] outline !outline-black flex justify-center items-center">
        <div className="bg-black size-20"></div>
      </main>
      <main className="w-[400px] h-[400px] outline !outline-black relative">
        <div className="bg-black h-5"></div>
      </main>
      <main className="w-[400px] h-[400px] outline !outline-black relative">
        <div className="flex w-95 h-20 gap-5">
          <div className="basis-1/3 flex-none bg-black flex items-center justify-center"></div>
          <div className="basis-2/3 flex-none bg-black flex items-center justify-center"></div>
        </div>
      </main>
      <main className="h-[300px] w-[500px] outline !outline-black relative">
        <div className="flex flex-col w-full h-full gap-2 justify-end">
          <div className="flex w-full h-20 gap-2">
            <div
              className="flex-grow bg-black flex items-center justify-center"
              style={{ flexGrow: 1 }}
            ></div>
            <div
              className="flex-grow bg-black flex items-center justify-center"
              style={{ flexGrow: 2 }}
            ></div>
          </div>
          <div className="flex w-full h-20 gap-2">
            <div
              className="flex-grow bg-black flex items-center justify-center"
              style={{ flexGrow: 2 }}
            ></div>
            <div
              className="flex-grow bg-black flex items-center justify-center"
              style={{ flexGrow: 1 }}
            ></div>
          </div>
        </div>
      </main>
      <main className="h-[300px] w-[500px] outline !outline-black relative">
        <div className="flex flex-col w-full h-full gap-2 justify-end">
          <div className="flex w-full h-20 gap-2">
            <div className="flex-grow bg-black flex items-center justify-center"></div>
            <div
              className="flex-grow bg-black flex items-center justify-center"
              style={{ height: "50%" }}
            ></div>
            <div className="flex-grow bg-black flex items-center justify-center"></div>
          </div>
          <div className="flex w-full h-10 gap-2">
            <div className="flex-grow bg-black flex items-center justify-center"></div>
            <div className="flex-grow bg-black flex items-center justify-center"></div>
            <div
              className="flex-grow bg-black flex items-center justify-center"
              style={{ height: "50%" }}
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
}
