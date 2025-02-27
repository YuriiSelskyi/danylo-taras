import Image from "next/image";

const index = () => {
  return (
    <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 m-20 mb-0">
      <h2 className="text-4xl sm:text-60xl font-bold text-center">
        Our team firmly believes that you deserve <br /> nothing less than
        exceptional quality and service.
      </h2>
      <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
        We are committed to ensuring that every detail of your project reflects
        the highest standards, <br />
        because your satisfaction is our top priority.
      </h3>
      <div className="grid grid-cols-1 my-16">
        <Image
          src="/images/team/teamimg.jpeg"
          alt="office-image"
          height={684}
          width={1296}
        />
      </div>
    </div>
  );
};

export default index;
