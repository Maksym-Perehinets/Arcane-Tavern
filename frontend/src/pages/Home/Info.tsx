import { HomeIntroductionLinks } from "@/constants";
import { IHomeIntroductionLinks } from "@/types";
import { Link } from "react-router-dom";

const Info = () => {
  const handleClick = (myLink: string) => () => {
    window.location.href = myLink;
  };

  return (
    <div className="w-full h-screen py-[4%] px-[12%] bg-[#020202]">

      <h1 className="text-center text-5xl text-stone-500">
        A quick introduction
      </h1>

      <div className="chat-text-div flex flex-col">

        <div className="messages-div">
          
          <div>
            <p className="intro-message bg-[#3b2249]">Where am I?</p>
          </div>

          <div>
            <p className="intro-message bg-[#140c16] w-2/3 float-right">
              You’re currently residing at the Arcane Tavern, home of various
              DnD tools to make your life easier, whether you’re a DM or a
              player
            </p>
          </div>

          <div>
            <p className="intro-message bg-[#3b2249]">What tools can i use?</p>
          </div>

        </div>

        <div className="w-full flex justify-around mt-20">
          {HomeIntroductionLinks.map((elem: IHomeIntroductionLinks, key) => {
            return (
              <div
                key={key} 
                className="w-min"
              >
                <Link to={elem.link}>
                <div 
                  className="intro-circle rounded-full bg-[#130b18] size-60 cursor-pointer"
                >
                  <img className="w-[9vmax] ml-[15%] pt-[10%]" src={elem.logoLink} alt="womp womp :(" />
                </div>
                </Link>
                <p className="text-center text-xl ml-[5%] mt-2 text-stone-500">{elem.entries}</p>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  );
};

export default Info;
