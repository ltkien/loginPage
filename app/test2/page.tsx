import Image from "next/image";
export default function Test2() {
  return (
    <main className="flex flex-col h-screen justify-center items-center ">
      <div className="flex flex-col font-Inter h-[409.02px] w-[327px] rounded-[13px] border-[0.33px] border-gainsboro shadow-lg justify-center items-center md:h-[627px] md:w-[456px]   ">
        <div className=" flex flex-col w-[248px] gap-[16px] md:gap-[24px] md:w-[376px]">
          <div className="gap-[6px] md:gap[16px]">
            <h1 className="flex font-normal text-xl leading-7 justify-center items-center text-gunmetal">
              Get’s started.
            </h1>
            <div className="text-center ">
              <a className="font-normal text-[12px] leading-[18px] text-slate-gray ">
                Don’t have an account?
              </a>
              <a className=" font-medium text-[12px] leading-[14.52px] text-dodger-blue">
                {" "}
                Sign up
              </a>
            </div>
          </div>
          <div className="flex justify-between gap-[6.6px]">
            <button
              className=" flex justify-center items-center w-[72.55px] h-[29.02px] rounded-[10px] border border-gainsboro md:w-[110px] md:h-[44px]"
              type="button"
            >
              <div className="flex justify-center items-center">
                <Image
                  src="./fb.svg"
                  width={15.83}
                  height={15.83}
                  alt="Picture of the author"
                  className="md:w-[24px] md:h-[24px]"
                />
              </div>
            </button>
            <button
              className="flex justify-center items-center w-[72.55px] h-[29.02px] rounded-[10px] border border-gainsboro md:w-[110px] md:h-[44px]"
              type="button"
            >
              <div className="flex justify-center items-center ">
                <Image
                  src="./ggIcon.svg"
                  width={15.83}
                  height={15.83}
                  alt="Picture of the author"
                  className="md:w-[24px] md:h-[24px]"
                />
              </div>
            </button>
            <button
              className=" flex justify-center items-center w-[72.55px] h-[29.02px] rounded-[10px] border border-gainsboro md:w-[110px] md:h-[44px]"
              type="button"
            >
              <div className="flex justify-center items-center ">
                <Image
                  src="./twitter.svg"
                  width={15.83}
                  height={15.83}
                  alt="Picture of the author"
                  className="md:w-[24px] md:h-[24px]"
                />
              </div>
            </button>
          </div>
          <div className="flex  justify-around items-center gap-[6px]">
            <hr className="w-[68px] h-[1px] border-0 rounded bg-gainsboro md:w-[104px]" />
            <div>
              <p className="flex justify-center items-center font-normal text-[9px] leading-[13.19px] text-slate-gray md:text-[14px] md:leading-[20px]">
                or login with email
              </p>
            </div>
            <hr className="w-[68px] h-[1px] border-0 rounded bg-gainsboro md:w-[104px]" />
          </div>
          <div className=" flex flex-col gap-[8px] md:gap-[10px]">
            <label
              className=" font-medium text-[10px] leading-[15px] text-dark-slate-gray 
            md:text-[16px] md:leading-[24px]"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              className="flex items-center font-normal text-[10px] leading-[15px] px-[10px]  h-[30px] rounded-[4px] border border-silver-chalice text-silver-chalice 
              md:h-[48px] md:rounded-[6px] md:text-[16px] md:leading-[24px] md:px-[20px]"
              placeholder="Email Address"
            ></input>
          </div>
          <div className=" flex flex-col gap-[8px] ">
            <label
              className=" font-medium text-[10px] leading-[15px] text-dark-slate-gray
            md:text-[16px] md:leading-[24px]"
            >
              Password
            </label>
            <div className=" flex items-center relative">
              <input
                type="password"
                name="password"
                className="flex items-center font-normal text-[10px] leading-[15px] px-[10px] w-full h-[30px] rounded-[4px] border border-silver-chalice text-silver-chalice
                md:h-[48px] md:rounded-[6px] md:text-[16px] md:leading-[24px] md:px-[20px] "
                placeholder="Password"
              ></input>
              <Image
                src="./eye.svg"
                width={15.83}
                height={15.83}
                alt="Picture of the author"
                className="absolute right-[3%] md:w-[24px] md:h-[24px]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className=" flex flex-row items-center">
              <input
                type="checkbox"
                className="w-[10.51px] h-[10.51px] rounded-[2.63px] border-[0.99px] mr-[5px]
                md:w-[14px] md:h-[14px] md:rounded-[4px] md:border-[2px] md:mr-[8px] "
              ></input>
              <p className="font-normal text-[10px] leading-[10px] text-slate-gray md:font-medium md:text-[14px] md:leading-[20px] ">
                Remember me
              </p>
            </div>

            <p className="font-normal text-[10px] leading-[10px] text-royal-blue md:font-medium md:text-[14px] md:leading-[20px]">
              Forgot your password?
            </p>
          </div>
          <div className="flex items-center justify-between ">
            <button
              className=" w-full h-[30px] rounded-[4px] bg-dodger-blue font-bold text-[10px] leading-[15px]  text-[#FCFCFC]
               md:h-[48px] md:rounded-[10px] md:text-[16px] md:leading-[24px]"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
