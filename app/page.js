import { poppins } from "./layout";
import Link from "next/link";

export default function Home() {
  const values = [
    {
      title: "Model1",
      desc: "Find in-depth information about model features and API.",
      href: "/1",
    },
    {
      title: "Model2",
      desc: "Find in-depth information about model features and API.",
      href: "/2",
    },
    {
      title: "Model3",
      desc: "Find in-depth information about model features and API.",
      href: "/3",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-cardBorder bg-cardBg  pb-6 pt-8 backdrop-blur-2xl  lg:static lg:w-auto  lg:rounded-xl lg:border bg-transparent text-heading lg:p-4 ">
          made by team no.
          <code className="font-mono font-bold">99</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white  lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* By{" "} */}
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className=""
              width={100}
              height={24}
              priority
            /> */}
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-green-200 after:via-green-300 after:blur-2xl after:content-['']  before:lg:h-[360px] z-[-1] ">
        <p
          className={`text-[48px] ${poppins.className} text-heading relative z-10 font-semibold`}
        >
          Argosense
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {values.map(({ title, desc, href }, index) => (
          <Link
            key={index}
            href={href}
            className="group rounded-lg border border-transparent px-7 py-4 transition-colors hover:border-cardBorder hover:bg-cardBg "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl text-heading font-semibold`}>
              {title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-heading`}>
              {desc}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
