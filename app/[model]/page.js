import { poppins } from "../layout";

const page = ({ params }) => {
  const model = params.model;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p
        className={`text-[48px] ${poppins.className} text-heading relative z-10 font-semibold`}
      >
        Model : {model}
      </p>
    </main>
  );
};

export default page;
