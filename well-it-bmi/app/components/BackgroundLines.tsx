import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import TextFlipper from "./TextFlipper";
import Link from "next/link";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center z-40 w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-7xl  py-2 md:py-10 relative z-20 font-bold tracking-tight">
        <div className=" flex  items-end justify-end  z-999  ">
          <TextFlipper />, made easy.
          <br />
        </div>{" "}
        Know your number.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
      <div className="z-50 mt-8 md:my-16">
        <Link
          href={"/bmi"}
          className="text-lg p-2 px-3 text-tP h-6 rounded-full bg-primary"
        >
          find it
        </Link>
      </div>
    </BackgroundLines>
  );
}