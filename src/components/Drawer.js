import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Drawer = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div
      className="bg-white w-[369px] h-full overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-[90%] text-center text-5xl text-white font-inter"
      data-animate-on-scroll
    >
      <div className="absolute top-[1737px] left-[1334px] text-31xl font-medium inline-block w-[514px] h-[111px]">
        Vast Database
      </div>
      <div className="absolute top-[1866px] left-[1317px] text-13xl font-medium inline-block w-[547px] h-[301px]">
        Our chatbot is 99% capable of answering your questions (now why 99? You
        can’t really expect our cute little model to solve those complex
        differential equations now, can you? :)
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[47px] left-[91px] w-[188px] h-[188px] bg-[url('/public/dostelogo1@2x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-darken" />
      <button className="cursor-pointer [border:none] p-0 bg-lightcyan absolute top-[293px] left-[53px] rounded-sm shadow-[5px_6px_4px_rgba(0,_0,_0,_0.25)] w-[264px] h-[71px]" />
      <button
        className="cursor-pointer [border:none] p-0 bg-lightcyan absolute top-[393px] left-[53px] rounded-sm shadow-[5px_6px_4px_rgba(0,_0,_0,_0.25)] w-[264px] h-[71px]"
        onClick={onRectangleButtonClick}
      />
      <img
        className="absolute top-[307px] left-[69px] w-11 h-11 object-cover"
        alt=""
        src="/add-new@2x.png"
      />
      <b className="absolute top-[316px] left-[138px] inline-block text-black text-left w-[115px] h-[25px]">
        New Chat
      </b>
      <b className="absolute top-[416px] left-[148px] inline-block text-black text-left w-[115px] h-[25px]">
        Log out
      </b>
      <img
        className="absolute top-[408px] left-[71px] w-[42px] h-[42px] object-cover"
        alt=""
        src="/logout@2x.png"
      />
    </div>
  );
};

export default Drawer;
