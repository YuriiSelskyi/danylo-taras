"use client";
import emailjs from "@emailjs/browser";

const Join = () => {
  // FORM SUBMIT
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await emailjs
      .sendForm("service_odrd7bc", "template_8o27gyu", event.target, {
        publicKey: "FuhEasgYQOruVcAgE",
      })
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="bg-joinus">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-[#b79f95] text-lg font-normal tracking-widest">
            JOIN US
          </h3>
          <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">
            {" "}
            Take your property to <br /> the new level.
          </h2>
          {/* <p className="text-lightblack text-base font-normal">Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead <br /> historiarum. Golums, zombies unrelenting et Raimi fascinati beheading.</p> */}
        </div>

        <div className="mx-auto max-w-4xl pt-5">
          <form
            className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full"
            action="#"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="input1"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                placeholder="Your name"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="input2"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black"
                placeholder="Your email"
                autoComplete="off"
              />
            </div>
            <div className="sm:mr-3">
              <button
                type="submit"
                className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-[#b79f95] hover:bg-btnblue"
              >
                Join!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
