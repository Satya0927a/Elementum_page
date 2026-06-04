import vectorcurve from "../../assets/vectors/vector curve2.svg"
import triangle from "../../assets/vectors/triangle.svg"
import titledrectangle from "../../assets/vectors/tiltedrectangle.svg"
import green_rectangle from "../../assets/vectors/Rectangle 657.svg"
import vector5 from "../../assets/vectors/Vector 5.svg"
import longarrow from "../../assets/vectors/longarrow.svg"
const Features = () => {
  const Content = {
    card1: {
      heading: "Tomorrow should be better than today",
      subHeading: "We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.",
      img:"/Home/featurecard1.png"
    },
    card2: {
      heading: "See how we can help you progress",
      subHeading: "We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.",
      img :"/Home/featurecard2.png"
    },
  }
  return (
    <div className="flex flex-col gap-50 max-w-[1599px] m-auto" >
      <FeaturesCard  heading={Content.card1.heading} para={Content.card1.subHeading} img={Content.card1.img} order={1}/>
      <FeaturesCard heading={Content.card2.heading} para={Content.card2.subHeading} img={Content.card2.img} order={-1}/>
      <img src={vectorcurve} className="absolute right-0 top-120 z-[-1]" alt="" srcset="" />
      <img src={triangle} className="absolute left-20 bottom-90 z-[-1]" alt="" srcset="" />
      <img src={triangle} className="absolute left-140 bottom-0 " alt="" srcset="" />
      <img src={titledrectangle} className="absolute right-20 top-10 z-[-1]" alt="" srcset="" />
    </div>
  )
}
export default Features

const FeaturesCard = ({ heading, para, img ,order}) => {
  return (
    <div className={`max-w-[1599px] h-[600px]  flex justify-between items-center ${order==-1?"flex-row-reverse":""}`}>
      <div className="max-w-[737px] flex flex-col items-start gap-7">
        <h1 className=" font-ghibli text-[56px]/[76px] relative">{heading}
        <img src={green_rectangle} className={`absolute ${order==1?"right-30 bottom-0 z-[-1]":"right-140 top-0 scale-x-70 z-[-1]"}`} alt="" srcset="" />
        <img src={vector5} className={`absolute ${order==1?"left-0 top-15 z-[-1]":"right-20 top-31  z-[-1]"}`} alt="" srcset="" />

        </h1>
        <p className="text-[24px]/[36px]">{para}</p>
        <button className="flex gap-1 items-center hover:cursor-pointer">Read more <img src={longarrow}></img></button>
      </div>
      <img src={img} alt="" />
    </div>
  )
}