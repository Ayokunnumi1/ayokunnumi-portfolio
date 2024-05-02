// import Menu from "../asset/menu.png";
import "../styles/home.css";

const Home = () => {
  // const b = a
  return (
    <div class="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-home-pg-bg-image bg-cover bg-no-repeat p-[24px_33px_0_32.9px] box-sizing-border">
      <div class="relative flex flex-col w-[100%] h-[fit-content] box-sizing-border">
        <div class="m-[0_0_68px_0] flex flex-row justify-between w-[100%] box-sizing-border">
          <p class="m-[6.7px_12px_6.3px_0] w-[279.1px] break-words font-['Luckiest_Guy'] font-normal text-[24px] text-[#FFFFFF]">
            <span class="aycode-sub-8"></span>
            <span></span>
          </p>
          <div class="bg-[url('./assets/images/menu.png')] bg-[50%_50%] bg-contain bg-no-repeat w-[36px] h-[37px]"></div>
        </div>
        <div class="rounded-t-[150px] rounded-b-[100px] bg-[#272A2B] relative m-[0_2px_0_2.1px] flex flex-col items-center p-[332px_0_47px_0] w-[calc(100%_-_4.1px)] box-sizing-border">
          <div class="m-[0_0_6px_0] inline-block break-words font-['Lato'] font-bold text-[32px] text-[#FFFFFF]">
            AYO OMOLOLU
          </div>
          <p class="m-[0_8px_29px_0] break-words font-['Roboto_Slab'] font-semibold text-[18px] text-[#FFFFFF]">
            <span class="full-stack-web-developer-sub-0"></span>
            <span></span>
          </p>
          <div class="relative m-[0_8px_0_0] flex p-[0_1px_0_0] w-[172px] box-sizing-border">
            <div class="relative flex flex-row w-[171px] h-[fit-content] box-sizing-border">
              <img
                class="m-[0_18px_0_0] w-[31px] h-[33px]"
                src="./assets/images/ellipse14.png"
                alt="ellipse"
              />
              <img
                class="m-[0_14px_0_0] w-[31px] h-[33px]"
                src="./assets/images/ellipse15.png"
                alt="ellipse"
              />
              <img
                class="m-[0_15px_0_0] w-[31px] h-[33px]"
                src="./assets/images/ellipse16.png"
                alt="ellipse"
              />
              <img
                class="w-[31px] h-[33px]"
                src="./assets/vectors/ellipse17.png"
                alt="ellipse"
              />
            </div>
            <div class="bg-[url('./assets/images/twitter_circled.png')] bg-[50%_50%] bg-contain bg-no-repeat absolute left-[50px] bottom-[1px] w-[30px] h-[30px]"></div>
            <div class="bg-[url('./assets/images/medium.png')] bg-[50%_50%] bg-contain bg-no-repeat absolute right-[44px] bottom-[1px] w-[30px] h-[30px]"></div>
            <div class="bg-[url('./assets/images/linked_in_circled.png')] bg-[50%_50%] bg-contain bg-no-repeat absolute left-[1px] bottom-[1px] w-[30px] h-[30px]"></div>
            <div class="bg-[url('./assets/images/you_tube_logo.png')] bg-[50%_50%] bg-contain bg-no-repeat absolute top-[0px] right-[0px] w-[30px] h-[30px]"></div>
          </div>
        </div>
      </div>
      <img
        class="absolute left-[50%] top-[129px] translate-x-[-50%] w-[328px] h-[330px]"
        src="./assets/images/myPic.png"
        alt="ellipse"
      />
    </div>
  );
};

export default Home;
