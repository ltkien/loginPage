import Image from "next/image";
export default function Test2() {
  return (
    <main className="flex flex-col h-screen justify-center items-center ">
      <div className="flex flex-col font-Inter h-[409.02px] w-[327px] rounded-[13px] border-[0.33px] border-[#E6E8EC] shadow-lg justify-center items-center   ">
        <div className=" flex flex-col w-[248px] gap-[16px]">
          <div className="gap-[6px]">
            <h1 className="flex font-normal text-xl leading-7 justify-center items-center text-[#23262F]">
              Get’s started.
            </h1>
            <div className="text-center">
              <a className="font-normal text-[12px] leading-[18px] text-[#777E90] ">
                Don’t have an account?
              </a>
              <a className=" font-medium text-[12px] leading-[14.52px] text-royal-blue">
                {" "}
                Sign up
              </a>
            </div>
          </div>
          <div className="flex justify-between gap-[6.6px]">
            <button
              className=" flex justify-center items-center w-[72.55px] h-[29.02px] rounded-[10px] border border-[#E6E8EC]"
              type="button"
            >
              <div className="flex justify-center items-center">
                <Image
                  src="./fb.svg"
                  width={15.83}
                  height={15.83}
                  alt="Picture of the author"
                />
              </div>
            </button>
            <button
              className="flex justify-center items-center w-[72.55px] h-[29.02px] rounded-[10px] border border-[#E6E8EC] "
              type="button"
            >
              <div className="flex justify-center items-center ">
                <Image
                  src="./ggIcon.svg"
                  width={15.83}
                  height={15.83}
                  alt="Picture of the author"
                />
              </div>
            </button>
            <button
              className=" flex justify-center items-center w-[72.55px] h-[29.02px] rounded-[10px] border border-[#E6E8EC]"
              type="button"
            >
              <div className="flex justify-center items-center ">
                <Image
                  src="./twitter.svg"
                  width={15.83}
                  height={15.83}
                  alt="Picture of the author"
                />
              </div>
            </button>
          </div>
          <div className="flex  justify-around items-center gap-[6px]">
            <hr className="w-[68px] h-[1px] border-0 rounded bg-[#E6E8EC]" />
            <div>
              <p className="flex justify-center items-center font-normal text-[9px] leading-[13.19px] text-[#777E90]">
                or login with email
              </p>
            </div>
            <hr className="w-[68px] h-[1px] border-0 rounded bg-[#E6E8EC]" />
          </div>
          <div className=" flex flex-col gap-[8px]">
            <label className=" font-medium text-[10px] leading-[15px] text-[#353945]">
              Email
            </label>
            <input
              type="text"
              name="email"
              className=" flex px-[10px] items-center font-normal h-[30px] text-[10px] leading-[15px] rounded-[4px] border border-[#B1B5C3] text-[#B1B5C3]"
              placeholder="Email Address"
            ></input>
          </div>
          <div className=" flex flex-col gap-[8px] ">
            <label className=" font-medium text-[10px] leading-[15px] text-[#353945]">
              Password
            </label>
            <div className=" flex items-center relative">
              <input
                type="password"
                name="password"
                className=" w-full flex px-[10px] items-center font-normal h-[30px] text-[10px] leading-[15px] rounded-[4px] border border-[#B1B5C3] text-[#B1B5C3] "
                placeholder="Password"
              ></input>
              <Image
                src="./eye.svg"
                width={15.83}
                height={15.83}
                alt="Picture of the author"
                className="absolute right-[3%] "
              />
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className=" flex flex-row items-center">
              <input
                type="checkbox"
                className="w-[10.51px] h-[10.51px] rounded-[2.63px] border-[0.99px] mr-[5px]"
              ></input>
              <p className="font-normal text-[10px] leading-[10px] text-[#777E90]">
                Remember me
              </p>
            </div>

            <p className="font-normal text-[10px] leading-[10px] text-[#475BE8]">
              Forgot your password?
            </p>
          </div>
          <div className="flex items-center justify-between ">
            <button
              className=" w-full h-[30px] rounded-[4px] bg-[#3B71FE] font-bold text-[10px] leading-[15px]  text-[#FCFCFC]"
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
