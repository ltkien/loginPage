import MailSVG from "./MailSVG";
import SmsSVG from "./SmsSVG";
export default function ForgotPassword() {
  return (
    <main className="flex flex-col h-screen justify-center items-center ">
      <div
        className="flex flex-col gap-[16px] font-Inter h-[361px] w-[327px] rounded-[11px] border-[0.29px] border-gainsboro shadow-lg justify-center items-center 
  md:h-[811px] md:w-[496px]   "
      >
        <div className="flex flex-col gap-[10px] md:gap[16px]">
          <h1
            className="flex font-medium text-xl leading-7 justify-center items-center text-gunmetal
        md:font-semibold md:text-[30px] md:leading-[45px]"
          >
            Forget Password
          </h1>
          <div className="text-center">
            <a
              className="font-light text-[10px] leading-[15px] text-slate-gray 
          md:text-[18px] md:leading-[32px] "
            >
              Please Select option to send link reset password
            </a>
          </div>
        </div>
        <div className="flex flex-row  w-[264px] h-[56px] rounded-[9px] border-[1px] pl-[10px] gap-[10px] border-dodger-blue">
          <div className=" flex items-center justify-center ">
            <div className="flex items-center justify-center h-[24px] w-[24px] rounded-[30px] bg-dodger-blue-0.2">
              <MailSVG />
            </div>
          </div>
          <div className="flex flex-col justify-center w-[113px] gap-[4px]">
            <h2 className=" font-medium text-[10px] leading-[15px] ">
              Reset via Email
            </h2>
            <p className="font-normal text-[8px] leading-[12px] text-silver-chalice ">
              Link reset will be send to your email address registered
            </p>
          </div>
        </div>
        <div className="flex flex-row  w-[264px] h-[56px] rounded-[9px] border-[1px] pl-[10px] gap-[10px] border-dodger-blue">
          <div className=" flex items-center justify-center ">
            <div className="flex items-center justify-center h-[24px] w-[24px] rounded-[30px] bg-gainsboro">
              <SmsSVG />
            </div>
          </div>
          <div className="flex flex-col justify-center w-[113px] gap-[4px]">
            <h2 className=" font-medium text-[10px] leading-[15px] ">
              Reset via SMS
            </h2>
            <p className="font-normal text-[8px] leading-[12px] text-silver-chalice ">
              Link reset will be send to your sms registered
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-[264px] ">
          <button
            className=" w-full h-[30px] rounded-[6px] bg-dodger-blue font-bold text-[10px] leading-[15px]  text-[#FCFCFC]
               md:h-[48px] md:rounded-[10px] md:text-[16px] md:leading-[24px]"
            type="submit"
          >
            Send Password
          </button>
        </div>
      </div>
    </main>
  );
}
