import { Button } from "@/components/ui/button";
import heroBg from "@/assets/images/background/hero_bg.svg";
import setting from "@/assets/images/background/setting.svg";
import rightBg from "@/assets/images/background/right_bg.svg";
import leftBg from "@/assets/images/background/left_bg.svg";
import looperImg from "@/assets/images/background/LooperGroup.svg";
import drishyaEllipse1 from "@/assets/images/background/drishya_ellipse_1.svg";
import drishyaEllipse2 from "@/assets/images/background/drishya_ellipse_2.svg";
import drishyaEllipse3 from "@/assets/images/background/drishya_ellipse_3.svg";
import UiComponents from "@/components/pages/home/UiComponents";

const Home = () => {
  return (
    <div className="container relative">
      <div className="flex items-center gap-10 justify-between relative lg:flex-nowrap flex-wrap">
        <div className="lg:w-6/12 w-full relative z-20">
          <div className="flex flex-col gap-2.5">
            <span className="px-4 py-1.5 w-fit rounded-full bg-primary/10 text-primary text-xs font-medium">
              Welcome to DrishyaUI
            </span>
            <div className="flex flex-col gap-4">
              <h1 className="lg:text-[51px] text-5xl leading-tight font-semibold">
                Drishya UI, crafted with Tailwind CSS
              </h1>
              <p className="text-base text-foreground/60">
                Preline UI is an open-source Tailwind CSS components library for
                any needs. Comes with UI examples & blocks, templates, plugins,
                Figma design system and more.
              </p>
              <div className="flex items-center gap-3">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline" className="font-normal">
                  npm i drishyaui
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 w-full flex justify-end">
          <div className="lg:w-8/12 w-full relative">
            <img src={heroBg} alt="image" className="w-full" />
            <img src={setting} alt="" className="absolute end-8 top-[260px] h-[160px] -z-[1] hero-setting" />
          </div>
        </div>
        {/* Left Bg Image */}
        <img src={leftBg} alt="" className="absolute -start-96 -bottom-30 lg:block hidden" />
        {/* looper legacy */}
        <img src={looperImg} alt="" className="absolute start-1/2 -translate-x-1/2 top-50 h-36 looper-anime"  />
        <img src={drishyaEllipse1} alt="" className="absolute start-1/2 -translate-x-1/2 top-0 h-24"  />
        <img src={drishyaEllipse2} alt="" className="absolute start-1/5 -translate-x-1/2 top-20 h-12"  />
        <img src={drishyaEllipse3} alt="" className="absolute end-1/3 -translate-x-1/2 bottom-20 h-12"  />
      </div>
      {/* Random shapes */}
      <img src={rightBg} alt="" className="absolute -end-144 -top-96 lg:block hidden" />
      {/* Ui-components Block */}
      <UiComponents/>
    </div>
  );
};

export default Home;
