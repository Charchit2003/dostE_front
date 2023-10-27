import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const onFEATURESClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='featuresSlide']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onABOUTDOSTEClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='dsotESlide']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGETINCONTACTClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactSlide']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLoginButtonClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onTryNowButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[4438px] overflow-hidden text-left text-31xl text-black font-inter">
      <div className="absolute top-[118px] left-[0px] bg-darkslateblue w-[1920px] h-[4320px]" />
      <div className="absolute top-[0px] left-[0px] bg-lightcyan w-[1920px] h-[305px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[7px] left-[36px] w-[188px] h-[188px] bg-[url('/public/dostelogo1@2x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-darken" />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[96px] left-[630px] text-13xl font-inter text-gray text-left inline-block w-[164px] h-[35px]"
        onClick={onFEATURESClick}
      >
        FEATURES
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[96px] left-[884px] text-13xl font-inter text-gray text-left inline-block w-[229px] h-[35px]"
        onClick={onABOUTDOSTEClick}
      >
        ABOUT DOSTE
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[96px] left-[1203px] text-13xl font-inter text-gray text-left inline-block w-[268px] h-[35px]"
        onClick={onGETINCONTACTClick}
      >
        GET IN CONTACT
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-dodgerblue absolute top-[59px] left-[1591px] rounded-2xl shadow-[6px_10px_2px_8px_rgba(0,_0,_0,_0.25)] w-[223px] h-[108px]"
        onClick={onLoginButtonClick}
      >
        <div className="absolute top-[23px] left-[44px] text-29xl font-medium font-inter text-gray text-left inline-block w-[169.09px] h-[30.97px]">
          Login
        </div>
      </button>
      <div className="absolute top-[203px] left-[0px] bg-blanchedalmond w-[1920px] h-[1642px]" />
      <button
        className="cursor-pointer [border:none] py-0 px-[9.632461547851562px] bg-dodgerblue absolute top-[1031px] left-[76px] rounded-2xl shadow-[8px_8px_4px_3px_rgba(0,_0,_0,_0.25)] h-[87px] overflow-hidden flex flex-col items-end justify-center box-border"
        onClick={onTryNowButtonClick}
      >
        <div className="relative text-29xl font-inter text-gray text-left inline-block w-52 h-[55px] shrink-0">
          Try Now
        </div>
      </button>
      <b className="absolute top-[444px] left-[72px] text-77xl inline-block w-[1017px] h-[227px]">
        <p className="m-0">{`Becasue dostE is all `}</p>
        <p className="m-0">you need!</p>
      </b>
      <div className="absolute top-[745px] left-[76px] inline-block w-[1494px] h-[244px]">
        A sophisticated AI chatbot tailored exclusively for college students,
        designed to assist them in acquiring essential information about
        basically everything and anything related to college.
      </div>
      <div className="absolute top-[1566px] left-[0px] bg-whitesmoke w-[1920px] h-[2619px]" />
      <div
        className="absolute top-[1438px] left-[0px] bg-lightcyan w-[1920px] h-[912px]"
        data-scroll-to="featuresSlide"
      />
      <div
        className="absolute top-[2313px] left-[4px] bg-lightcyan w-[1920px] h-[1153px]"
        data-scroll-to="dsotESlide"
      />
      <div
        className="absolute top-[3448px] left-[-5px] bg-lightcyan w-[1920px] h-[729px]"
        data-scroll-to="contactSlide"
      />
      <div className="absolute top-[1610px] left-[29px] bg-white w-[1852px] h-[586px]">
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro w-[580px] h-[586px]" />
        <div className="absolute top-[0px] left-[636px] rounded-sm bg-gainsboro w-[580px] h-[586px]" />
        <div className="absolute top-[0px] left-[1272px] rounded-sm bg-gainsboro w-[580px] h-[586px]" />
        <img
          className="absolute top-[0px] left-[0px] rounded-sm w-[580px] h-[586px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[636px] rounded-sm w-[580px] h-[586px] object-cover"
          alt=""
          src="/image-2@2x.png"
        />
        <img
          className="absolute top-[0px] left-[1272px] rounded-sm w-[580px] h-[586px] object-cover"
          alt=""
          src="/image-3@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-black w-[580px] h-[586px] opacity-[0.6]" />
        <div className="absolute top-[0px] left-[636px] rounded-sm bg-black w-[580px] h-[586px] opacity-[0.6]" />
        <div className="absolute top-[0px] left-[1272px] rounded-sm bg-black w-[580px] h-[586px] opacity-[0.6]" />
      </div>
      <div className="absolute top-[1729px] left-[62px] font-medium text-white text-center inline-block w-[514px] h-[111px]">
        <p className="m-0">{`Efficient Automation `}</p>
        <p className="m-0">Solutions</p>
      </div>
      <div className="absolute top-[1730px] left-[712px] font-medium text-white text-center inline-block w-[514px] h-[111px]">
        Personalized User Support
      </div>
      <div className="absolute top-[1737px] left-[1334px] font-medium text-white text-center inline-block w-[514px] h-[111px]">
        Vast Database
      </div>
      <div className="absolute top-[1908px] left-[46px] text-13xl font-medium text-white text-center inline-block w-[547px] h-[301px]">{`Our chatbot is designed to perform various tasks effectively and also learn and store information in its database. `}</div>
      <div className="absolute top-[1908px] left-[690px] text-13xl font-medium text-white text-center inline-block w-[547px] h-[301px]">
        Our chatbot provides quick and personalized user support, ensuring
        customer satisfaction.
      </div>
      <div className="absolute top-[1866px] left-[1317px] text-13xl font-medium text-white text-center inline-block w-[547px] h-[301px]">
        Our chatbot is 99% capable of answering your questions (now why 99? You
        can’t really expect our cute little model to solve those complex
        differential equations now, can you? :)
      </div>
      <div className="absolute top-[2542px] left-[62px] text-77xl font-medium inline-block w-[569px] h-[119px]">
        About dostE
      </div>
      <div className="absolute top-[3665px] left-[86px] text-11xl inline-block w-[796px] h-[111px]">
        If you can't find what you need or if the info seems a bit outdated,
        just give us a heads-up! We're all ears and ready to improve our service
        to make it even better.
      </div>
      <div className="absolute top-[4326px] left-[689px] text-11xl text-white inline-block w-[541px] h-[46px]">
        Copyright @ 2023 All Rights Reserved
      </div>
      <div className="absolute top-[3571px] left-[86px] font-medium inline-block w-[545px] h-[81px]">
        Get in contact with us
      </div>
      <div className="absolute top-[4234px] left-[890px] font-medium text-white inline-block w-[139px] h-[70px]">
        dostE
      </div>
      <div className="absolute top-[3551px] left-[1108px] text-11xl font-light inline-block w-[85px] h-[39px]">
        Name
      </div>
      <div className="absolute top-[3721px] left-[1108px] text-11xl font-light inline-block w-[134px] h-[39px]">
        Message
      </div>
      <div className="absolute top-[3551px] left-[1518px] text-11xl font-light inline-block w-[77px] h-[39px]">
        Email
      </div>
      <img
        className="absolute top-[2602px] left-[1108px] w-[761px] h-[759px] object-cover mix-blend-darken"
        alt=""
        src="/techsoc@2x.png"
      />
      <div className="absolute top-[2703px] left-[62px] text-21xl inline-block w-[1014px] h-[633px]">
        dostE, initially crafted as a tech project for BuildSchool 3.0 by three
        passionate IIT Madras students in their third year, has transformed into
        an indispensable tool for every IIT Madras student. Despite our limited
        tech background, we've built dostE into a go-to resource, providing
        essential info on courses, clubs, and everything in between. Now, it's
        the go-to hub for all students at IIT Madras! dostE database is vast,
        covering every tiny detail imaginable – from the number of cats on
        campus to bustling hours, mess schedules, and even the whereabouts of
        the elusive third elephant of GC. We've got it all covered!
      </div>
      <input
        className="[border:none] bg-gainsboro absolute top-[3595px] left-[1108px] rounded-sm w-[311px] h-[70px]"
        type="text"
      />
      <input
        className="[border:none] bg-gainsboro absolute top-[3766px] left-[1108px] rounded-sm w-[721px] h-[202px]"
        type="text"
      />
      <input
        className="[border:none] bg-gainsboro absolute top-[3595px] left-[1518px] rounded-sm w-[311px] h-[70px]"
        type="text"
      />
      <button className="cursor-pointer [border:none] py-[15px] px-[33px] bg-dodgerblue absolute top-[4000px] left-[1684px] rounded-sm shadow-[5px_10px_4px_rgba(0,_0,_0,_0.25)] w-[145px] h-[70px] flex flex-col items-end justify-start box-border">
        <div className="relative text-11xl font-inter text-white text-left inline-block w-[78px] h-[39px] shrink-0">
          Send
        </div>
      </button>
    </div>
  );
};

export default HomePage;
