import UiComp from "./UiComp";
import timeline from "@/assets/images/background/timeline.svg";
import alert from "@/assets/images/background/alert.svg";
import progress from "@/assets/images/background/progress.svg";
import rating from "@/assets/images/background/rating.svg";
import stepper from "@/assets/images/background/stepper.svg";
import card from "@/assets/images/background/card.webp";
import listGroup from "@/assets/images/background/list_group.svg";
import badge from "@/assets/images/background/badge.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";


const UiComponents = () => {
  const uiComponents = [
    {
      id : "1",
      title: "Timeline",
      img: timeline,
      url:"https://drishya-ui.netlify.app/?path=/story/ui-timeline--advanced-timeline"
    },
    {
      id : "2",
      title: "Stepper",
      img: stepper,
      url:"https://drishya-ui.netlify.app/?path=/story/ui-stepper--basic-stepper"
    },
    {
      id : "3",
      title: "Alert",
      img: alert,
      url:"https://drishya-ui.netlify.app/?path=/story/ui-alert--advanced-alert"
    },
    {
      id : "4",
      title: "Progress",
      img: progress,
      url:"https://drishya-ui.netlify.app/?path=/story/ui-progressbar--advanced-progress"
    },
    {
      id : "5",
      title: "Rating",
      img: rating,
      url:"https://drishya-ui.netlify.app/?path=/story/ui-rating--advanced-rating"
    },
    {
      id : "6",
      title: "Card",
      img: card,
      url:"https://drishya-ui.netlify.app/?path=/story/ui-card--baisc-card"
    },
    {
      id : "7",
      title: "List Group",
      img: listGroup,
      url:"https://drishya-ui.netlify.app/?path=/story/ui-listgroup--basic-list-group"
    },
    {
      id : "7",
      title: "Badge",
      img: badge,
      url:"https://drishya-ui.netlify.app/?path=/story/ui-badge--advanced-badge"
    },
  ]
  return (
    <>
       <div className="container my-10">
         <div className="flex flex-col items-center gap-2">
            <h1 className="text-center font-semibold text-5xl">Get Started for <span className="text-primary" >Free</span></h1>
            <div className="flex items-center justify-center">
            <p className="text-base font-medium text-foreground/70 text-center lg:w-8/12 w-full">Bring your ideas to life in no time. Preline UI provides all the essential components you need to convert your vision into thriving start-ups.</p>
            </div>
         </div>
         <div className="grid grid-cols-12 gap-6 mt-16 relative z-100">
          {
            uiComponents.map((item) => {
              return (
                <UiComp key={item.id} title={item.title} img={item.img} url={item.url} />
              )
            })
          }
         </div>
         <div className="flex items-center justify-center mt-6">
          <Link to="https://drishya-ui.netlify.app/" >
          <Button>View All</Button>
          </Link>
         </div>
       </div>
    </>
  )
}

export default UiComponents
