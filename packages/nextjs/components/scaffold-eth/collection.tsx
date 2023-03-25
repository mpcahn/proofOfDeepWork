import React from "react";
import Image from "next/image";
import NFTmodal from "./nftModal";

export default function collection() {
  const collections = [
    {
      img: "/assets/foxComputer.png",
      title: "Coding",
      description: "Learned array methods",
      id: 1,
      timeStart: "1678464000",
      timeEnd: "1678465800",
    },
    {
      img: "/assets/foxMath.png",
      title: "Trig Practice",
      description: "Practiced Trigonometry",
      id: 2,
      timeStart: "1678554000",
      timeEnd: "1678557600",
    },
    {
      img: "/assets/foxRead.png",
      title: "Read a Whitepaper",
      description: "Read the Ethereum Whitepaper",
      id: 3,
      timeStart: "1678644000",
      timeEnd: "1678651200",
    },
    {
      img: "/assets/foxWrite.png",
      title: "Writing",
      description: "Wrote a poem",
      id: 4,
      timeStart: "1678737600",
      timeEnd: "1678741200",
    },
  ];

  const getDate = (timestamp: string) => {
    const d = new Date(+timestamp * 1000), // Convert the passed timestamp to milliseconds
      yyyy = d.getFullYear(),
      mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
      dd = ("0" + d.getDate()).slice(-2); // Add leading 0.
    return yyyy + "-" + mm + "-" + dd;
  };

  const getTime = (timestamp: string) => {
    const d = new Date(+timestamp * 1000), // Convert the passed timestamp to milliseconds
      hh = d.getHours(),
      min = ("0" + d.getMinutes()).slice(-2); // Add leading 0.

    let h = hh,
      ampm = "AM";

    if (hh > 12) {
      h = hh - 12;
      ampm = "PM";
    } else if (hh === 12) {
      h = 12;
      ampm = "PM";
    } else if (hh == 0) {
      h = 12;
    }

    return h + ":" + min + " " + ampm;
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5">
        <h1 className="text-center mb-8">
          <span className="block text-2xl mb-2">Welcome to</span>
          <span className="block text-4xl font-bold">Proof of Deep Work</span>
          <NFTmodal />
        </h1>
        {collections.map((val, i) => {
          const date = getDate(val.timeStart);
          const timeStart = getTime(val.timeStart);
          const timeEnd = getTime(val.timeEnd);

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
                <div className="p-8" key={i}>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{val.title}</div>
                  <p className="mt-2 text-slate-500">{val.description}</p>
                  <p className="mt-2 text-slate-500">date: {date}</p>
                  <p className="mt-2 text-slate-500">Start: {timeStart}</p>
                  <p className="mt-2 text-slate-500">End: {timeEnd}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
