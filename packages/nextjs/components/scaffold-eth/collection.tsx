import React from "react";
import Image from "next/image";

export default function collection() {
  const collections = [
    {
      img: "/assets/foxComputer.png",
      title: "Coding",
      description: "Learned array methods",
      id: 1,
      timeStart: 1678464000,
      timeEnd: 1678465800,
    },
    {
      img: "/assets/foxMath.png",
      title: "Trig Practice",
      description: "Practiced Trigonometry",
      id: 2,
      timeStart: 1678554000,
      timeEnd: 1678557600,
    },
    {
      img: "/assets/foxRead.png",
      title: "Read a Whitepaper",
      description: "Read the Ethereum Whitepaper",
      id: 3,
      timeStart: 1678644000,
      timeEnd: 1678651200,
    },
    {
      img: "/assets/foxWrite.png",
      title: "Writing",
      description: "Wrote a poem",
      id: 4,
      timeStart: 1678737600,
      timeEnd: 1678741200,
    },
  ];

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5">
        <h1 className="text-center mb-8">
          <span className="block text-2xl mb-2">Welcome to</span>
          <span className="block text-4xl font-bold">RealFT</span>
        </h1>
        {collections.map((val, i) => {
          return (
            <div
              key={val.id}
              className="mt-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
            >
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={val.img}
                    alt={val.title}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{val.title}</div>
                  <p className="mt-2 text-slate-500">{val.description}</p>
                  <p className="mt-2 text-slate-500">{i}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
