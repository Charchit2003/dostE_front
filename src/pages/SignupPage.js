import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const onLogInClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onDostElogo2Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1169px] overflow-hidden text-left text-21xl text-black font-inter">
      <div className="absolute top-[0px] left-[0px] bg-lightcyan w-[1920px] h-[1169px]" />
      <button className="cursor-pointer [border:none] py-[15px] pr-[182px] pl-[33px] bg-dodgerblue absolute top-[587px] left-[692px] rounded-sm shadow-[0px_4px_4px_4px_rgba(0,_0,_0,_0.25)] w-[499px] h-[70px] overflow-hidden flex flex-col items-end justify-start box-border">
        <div className="relative text-11xl font-inter text-white text-left inline-block w-[131px] h-[39px] shrink-0">
          Continue
        </div>
      </button>
      <b className="absolute top-[443px] left-[692px] inline-block w-[115px] h-[39px]">
        Email
      </b>
      <b className="absolute top-[309px] left-[757px] inline-block w-[405px] h-[39px]">
        Create your account
      </b>
      <div className="absolute top-[675px] left-[692px] text-5xl font-light inline-block w-[293px] h-[39px]">
        Already have an account?
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[675px] left-[985px] text-5xl font-bold font-inter text-royalblue text-left inline-block w-[79px] h-[39px]"
        onClick={onLogInClick}
      >
        {" "}
        Log in
      </button>
      <div className="absolute top-[747px] left-[940px] text-5xl font-light inline-block w-[39px] h-[39px]">
        OR
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[63px] left-[866px] w-[188px] h-[188px] bg-[url('/public/dostelogo1@2x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-darken"
        onClick={onDostElogo2Click}
      />
      <input
        className="bg-lightcyan absolute top-[500px] left-[692px] box-border w-[499px] h-[69px] border-[1px] border-solid border-black"
        placeholder="Enter your email "
        type="text"
      />
      <button className="cursor-pointer p-0 bg-lightcyan absolute top-[804px] left-[690px] box-border w-[499px] h-[69px] border-[2px] border-solid border-black" />
      <button className="cursor-pointer p-0 bg-lightcyan absolute top-[891px] left-[690px] box-border w-[501px] h-[69px] border-[2px] border-solid border-black" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[824px] left-[756px] text-5xl font-inter text-black text-left inline-block w-[353px] h-[39px]">
        Continue with Google
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[911px] left-[756px] text-5xl font-inter text-black text-left inline-block w-[353px] h-[39px]">
        Continue with Apple
      </button>
      <img
        className="absolute top-[760px] left-[692px] w-[236.01px] h-[3.02px]"
        alt=""
        src="/line-1.svg"
      />
      <img
        className="absolute top-[760px] left-[978.99px] w-[212.01px] h-[3px]"
        alt=""
        src="/line-2.svg"
      />
      <img
        className="absolute top-[820px] left-[703px] w-[38px] h-[38px] object-cover mix-blend-darken"
        alt=""
        src="/image-4@2x.png"
      />
      <img
        className="absolute top-[907px] left-[703px] w-[38px] h-[38px] object-cover"
        alt=""
        src="/image-6@2x.png"
      />
    </div>
  );
};

export default SignupPage;
