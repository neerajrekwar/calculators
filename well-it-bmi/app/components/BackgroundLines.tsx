import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import TextFlipper from "./TextFlipper";
import Link from "next/link";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center z-40 w-full flex-col px-4">
      <h2 className=" text-4xl md:text-5xl lg:text-7xl text-tp py-2 md:py-10 relative z-20 font-bold tracking-tight">
        <div className=" flex  items-end justify-end   z-999  ">
          <TextFlipper />, made easy.
          <br />
        </div>{" "}
        Know your number.
      </h2>
      <p className="max-w-xl text-ts mx-auto text-base md:text-lg text-tS text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
      <div className="z-40 mt-8  md:my-16">
        <Link
          href={"/bmi"}
          className="text-base md:text-lg p-2 px-3 text-tp h-6 rounded-full bg-accent "
        >
          Make it 
        </Link>
       
      </div>
    </BackgroundLines>
  );
}
