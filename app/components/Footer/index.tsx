import Image from "next/image";
import Link from "next/link";

const footer = () => {
  return (
    <div className="bg-black -mt-40" id="first-section">
      <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex-col flex justify-center items-center">
          <h3 className="text-white text-4xl font-semibold leading-9 mb-4">
            DST Constraction
          </h3>
          <a
            href="tel:16314318687"
            className="text-white text-2xl font-semibold leading-9 mb-4"
          >
            +16314318687 - Danylo
          </a>
          <a
            href="tel:16313366309"
            className="text-white text-2xl font-semibold leading-9 mb-4"
          >
            +16313366309 - Taras
          </a>
          <h2
            className="text-white text-2xl font-semibold leading-9 mb-4 lg:mb-20"
          >
            dst.construction.llc@gmail.com
          </h2>
          <div className="flex gap-4">
            <div className="footer-icons">
              <Link
                href="https://www.facebook.com/share/1DZFC3AV4k/"
                target="_blank"
              >
                <Image
                  src={"/images/footer/vec.svg"}
                  alt="facebook"
                  width={15}
                  height={20}
                />
              </Link>
            </div>
            <div className="footer-icons">
              <Link
                href="https://www.instagram.com/dst_construction_company"
                target="_blank"
              >
                <Image
                  src={"/images/footer/instagram.svg"}
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
