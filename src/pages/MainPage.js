import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";

const MainPage = () => {
  const navigate = useNavigate();
  const [isDrawer1Open, setDrawer1Open] = useState(false);

  const onDostElogo3Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const openDrawer1 = useCallback(() => {
    setDrawer1Open(true);
  }, []);

  const closeDrawer1 = useCallback(() => {
    setDrawer1Open(false);
  }, []);

  return (
    <>
      <div className="relative bg-white w-full h-[1169px] overflow-hidden text-center text-31xl text-white font-inter">
        <div className="absolute top-[1737px] left-[1334px] font-medium inline-block w-[514px] h-[111px]">
          Vast Database
        </div>
        <div className="absolute top-[1866px] left-[1317px] text-13xl font-medium inline-block w-[547px] h-[301px]">
          Our chatbot is 99% capable of answering your questions (now why 99?
          You can’t really expect our cute little model to solve those complex
          differential equations now, can you? :)
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8px] left-[1825px] w-20 h-20 bg-[url('/public/dostelogo11@2x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-darken"
          onClick={onDostElogo3Click}
        />
        <img
          className="absolute top-[80px] left-[674px] w-[572px] h-[572px] object-cover mix-blend-darken"
          alt=""
          src="/dostelogo-4@2x.png"
        />
        <div className="absolute top-[671px] left-[844px] text-black text-left inline-block w-[232px] h-[70px] opacity-[0.4]">
          Try it out!
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[25px] left-[16px] w-[67px] h-[43px]"
          onClick={openDrawer1}
        >
          <div className="absolute top-[-2px] left-[-2px] box-border w-[71px] h-1 border-t-[4px] border-solid border-black" />
          <div className="absolute top-[20px] left-[-2px] box-border w-[71px] h-1 border-t-[4px] border-solid border-black" />
          <div className="absolute top-[41px] left-[-2px] box-border w-[71px] h-1 border-t-[4px] border-solid border-black" />
        </button>
        <input
          className="bg-lightcyan absolute top-[1029px] left-[214px] rounded-sm shadow-[8px_11px_4px_rgba(0,_0,_0,_0.25)] box-border w-[1491px] h-[85px] border-[1px] border-solid border-black"
          type="text"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1045px] left-[1603px] w-[68px] h-[54px] bg-[url('/public/sent@2x.png')] bg-cover bg-no-repeat bg-[top]" />
      </div>
      {isDrawer1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawer1}
        >
          <Drawer onClose={closeDrawer1} />
        </PortalDrawer>
      )}
    </>
  );
};

export default MainPage;
