import Image from "next/image";

const Dedicated = () => {
  return (
    <div className="relative">
      <Image
        src="/images/dedicated/spiral.svg"
        height={272}
        width={686}
        alt="spiral-design"
        className="absolute left-0 hidden lg:block -z-10"
      />

      <div className="mx-auto max-w-7xl px-4 my-4 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-0 mb-20">
          {/* COLUMN-1 */}
          <div>
            <Image
              src="/images/dedicated/man.jpeg"
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0 rounded-3xl"
            />
          </div>

          {/* COLUMN-2 */}
          <div className="relative">
            <Image
              src="images/dedicated/comma.svg"
              alt="comma-image"
              width={200}
              height={106}
              className="absolute comma-pos hidden lg:block"
            />
            <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
              Dedicated to help peoples design needs.
            </h2>
            <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
              Quis ipsum suspendisse ultrices gravida risus commodo viverra
              maecenas accumsan lacus vel facilisis
            </p>
            <p className="text-2xl relative font-semibold mt-12 lg:ml-32 preline text-center lg:text-start">
              {" "}
              Вуйко Тарас, CEO
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-0 mt-20">
          {/* COLUMN-2 */}
          <div className="relative">
            <Image
              src="images/dedicated/comma.svg"
              alt="comma-image"
              width={200}
              height={106}
              className="absolute comma-pos hidden lg:block"
            />
            <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
              Makes repairs and create your dreams
            </h2>
            <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
              Quis ipsum suspendisse ultrices gravida risus commodo viverra
              maecenas accumsan lacus vel facilisis
            </p>
            <p className="text-2xl relative font-semibold mt-12 lg:ml-32 preline text-center lg:text-start">
              {" "}
              Данилко, CTO
            </p>
          </div>
          {/* COLUMN-1 */}
          <div className="flex flex-row-reverse">
            <Image
              src="/images/dedicated/man1.jpeg"
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dedicated;
