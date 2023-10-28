import Image from "next/image";

export default function Home() {
  return (
    <main className=" grid grid-cols-2">
      <div className="col-span-1 flex justify-center items-center ">
        <div>
          <form className="font-Manrope flex flex-col  w-[362px] h-4985px]  gap-[34px]  ">
            <div className="  gap-[10px]  ">
              <p className="  text-[37px] font-bold not-italic leading-[50.54px] text-[#11142D]">
                Welcome back
              </p>
              <p className=" font-normal text-base leading-6 text-[#808191] ">
                Welcome back! Please enter your details.
              </p>
            </div>
            <div className="flex flex-col  gap-[15px]">
              <div className=" flex flex-col gap-[5px]">
                <label className=" font-medium text-sm leading-[22px]">
                  Email
                </label>
                <input
                  type="text"
                  name=""
                  id="price"
                  className="font-normal text-base block w-[361px] h-[46px] gap-[10px] rounded-[10px] border px-[12px] py-[11px] text-[#808191] sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                ></input>
              </div>
              <div className="flex flex-col gap-[5px]">
                <label className="font-medium text-sm leading-[22px]">
                  Password
                </label>
                <input
                  className="font-normal text-base block w-[361px] h-[46px] gap-[10px] rounded-[10px] border px-[12px] py-[11px] text-[#808191] sm:text-sm sm:leading-6"
                  id="password"
                  type="password"
                  placeholder="**********"
                />
              </div>
              <div className="flex flex-none font-Manrope font-medium text-sm leading-[22px] items-center ">
                <input
                  type="checkbox"
                  className="w-[16px] h-[16px] rounded-[4px] border mr-[6px]"
                ></input>
                <p className=" mr-[83px]">Remember for 30 days</p>
                <p className="text-[#475BE8]">Forgot Password</p>
              </div>
            </div>

            <div className="flex flex-col mt-[-14px] gap-[20px] justify-center">
              <button
                className=" w-[362px] h-[46px] rounded-[10px] bg-[#475BE8] text-[#FCFCFC]"
                type="button"
              >
                Sign In
              </button>
              <button
                className=" w-[362px] h-[46px] border-[1px] rounded-[10px]  bg-[#FCFCFC] text-[#11142D]"
                type="button"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src="/ggIcon.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                  <div className="font-Manrope font-semibold text-base leading-[24px] text-[#11142D] ml-[5px]">
                    Sign in with Google
                  </div>
                </div>
              </button>
              <div className="text-center font-Manrope text-sm leading-[19.12px] mt-[10px]">
                <a className="font-medium text-[#808191] " href="#">
                  Don’t have an account?
                </a>
                <a className=" font-normal text-[#475BE8]"> Sign up</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <img src="picture.png" className="h-screen w-full"></img>
      </div>
    </main>
  );
}
