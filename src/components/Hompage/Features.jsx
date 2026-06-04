import vectorcurve from "../../assets/vectors/vector curve2.svg"
import triangle from "../../assets/vectors/triangle.svg"
import titledrectangle from "../../assets/vectors/tiltedrectangle.svg"
import green_rectangle from "../../assets/vectors/Rectangle 657.svg"
import vector5 from "../../assets/vectors/Vector 5.svg"
import longarrow from "../../assets/vectors/longarrow.svg"
const Features = () => {
  const Content = {
    card1: {
      heading: {
        track1: "Tomorrow",
        sentence: " should be better than ",
        track2: "today"
      },
      subHeading: "We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.",
      img: "/Home/featurecard1.png"
    },
    card2: {
      heading: {
        track1: "See",
        sentence: " how we can help you ",
        track2: "progress"
      },
      subHeading: "We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.",
      img: "/Home/featurecard2.png"
    },
  }
  return (
    <div className="flex flex-col gap-50 max-xl:gap-25 max-w-[1599px] max-xl:max-w-full max-xl:px-8 m-auto" >
      <FeaturesCard  heading={Content.card1.heading} para={Content.card1.subHeading} img={Content.card1.img} order={1}/>
      <FeaturesCard heading={Content.card2.heading} para={Content.card2.subHeading} img={Content.card2.img} order={-1} />
      <img src={vectorcurve} className="absolute right-0 top-120 z-[-1]" alt="" srcset="" />
      <img src={triangle} className="absolute left-20 bottom-90 z-[-1]" alt="" srcset="" />
      <img src={triangle} className="absolute left-140 bottom-0 " alt="" srcset="" />
      <img src={titledrectangle} className="absolute right-20 top-10 z-[-1]" alt="" srcset="" />"
    </div>
  )
}
export default Features

const FeaturesCard = ({ heading, para, img, order }) => {
  return (
    <div className={`max-w-[1599px] h-[600px] max-xl:h-auto flex max-xl:flex-col max-xl:gap-10 justify-between items-center ${order == -1 ? "flex-row-reverse" : ""}`}>
      <div className="max-w-[737px] max-xl:max-w-full flex flex-col items-start gap-7">
        <h1 className=" font-ghibli text-[56px]/[76px] max-xl:text-[40px]/[52px] relative"> <span className="relative">{heading.track1}
          <img src={order==1?vector5:green_rectangle} className={`absolute top-0 scale-120  z-[-1] ${order==1?"top-10":""}`} alt="" srcset="" />
        </span>{heading.sentence} <span className="relative">{heading.track2}
            <img src={order==1?green_rectangle:vector5} className={`absolute right-0 bottom-[-20px] z-[-1] ${order==1?"bottom-20":""}`} alt="" srcset="" />
          </span>

        </h1>
        <p className="text-[24px]/[36px] max-xl:text-[18px]/[28px]">{para}</p>
        <button className="flex gap-1 items-center hover:cursor-pointer">Read more <img src={longarrow}></img></button>
      </div>
      <img src={img} alt="" className="max-xl:max-w-full max-xl:h-auto" />
    </div>
  )
}