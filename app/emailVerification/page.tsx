export default function EmailVerification() {
  return (
    <main className="flex flex-col h-screen justify-center items-center ">
      <div
        className="flex flex-col gap-[36px] font-Inter h-[364px] w-[327px] rounded-[11px] border-[0.29px] border-gainsboro shadow-lg justify-center items-center 
  md:h-[503px] md:w-[588px] md:gap-[40px]   "
      >
        <div className="flex flex-col gap-[8px] md:gap[16px]">
          <h1
            className="flex font-medium text-xl leading-7 justify-center items-center text-gunmetal
        md:font-bold md:text-[39px] md:leading-[60px]"
          >
            Email Verification
          </h1>
          <a
            className="font-light text-[10px] leading-[15px] text-slate-gray 
         md:font-normal md:text-[14px] md:leading-[20px] "
          >
            We have send code to your Email ui**@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center justify-between w-[288px] gap-[20px] md:w-[460px] md:gap-[28px]  ">
          <a
            className=" font-light text-[12px] leading-[18px] text-slate-gray 
         md:font-normal md:text-[14px] md:leading-[20px] "
          >
            Enter code here
          </a>
          <div className="flex flex-row justify-center items-center gap-[30px]">
            <input
              type="text"
              maxLength={1}
              className="flex w-[40px] h-[40px] border-b-2 border-dodger-blue text-center  text-slate-gray font-Roboto font-normal text-[24px] leading-[28px]"
            ></input>
            <input
              type="text"
              maxLength={1}
              className="flex w-[40px] h-[40px] border-b-2 border-dodger-blue text-center text-slate-gray font-Roboto font-normal text-[24px] leading-[28px]"
            ></input>
            <input
              type="text"
              maxLength={1}
              className="flex w-[40px] h-[40px] border-b-2 border-dodger-blue text-center text-slate-gray font-Roboto font-normal text-[24px] leading-[28px]"
            ></input>
            <input
              type="text"
              maxLength={1}
              className="flex w-[40px] h-[40px] border-b-2 border-dodger-blue text-center text-slate-gray font-Roboto font-normal text-[24px] leading-[28px]"
            ></input>
          </div>
          <button
            className=" w-full h-[34px] rounded-[6px] bg-dodger-blue font-bold text-[14px] leading-[21px]  text-white
               md:h-[60px] md:rounded-[10px] md:text-[16px] md:leading-[24px]"
            type="submit"
          >
            Verify Account
          </button>
          <div
            className="text-center text-[14px] leading-[20px]
          md:text-[16px] md:leading-[24px]"
          >
            <a className=" font-normal text-slate-gray " href="#">
              Don’t receive code?
            </a>
            <a className=" font-medium text-bright-blue md:font-semibold">
              {" "}
              Resend
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
