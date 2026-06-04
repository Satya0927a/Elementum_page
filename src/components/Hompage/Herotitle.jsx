import green_rectangle from "../../assets/vectors/Rectangle 657.svg"
import pink_rectangle from "../../assets/vectors/pinkrectangle.svg"
import vector5 from "../../assets/vectors/Vector 5.svg"
import purple_semicircle from "../../assets/vectors/purple_semicircle.svg"
import scribble1 from "../../assets/vectors/scribble1.svg"
import scribble2 from "../../assets/vectors/scribble2.svg"
const Herotitle = () => {
  return (
    <div className=" w-333 m-auto flex flex-col items-center mt-20 gap-5">
      <h1 className="font-ghibli text-[100px]/[126px] relative max-w-[1305px] text-center text-pretty font-[400]">The thinker and <br/> doer were changing the status quo with
        <img src={vector5} className="absolute scale-150 top-25 left-110"  alt="" srcset="" />
        <img src={green_rectangle} className="absolute scale-150 bottom-7 left-95 scale-x-200 z-[-1]"  alt="" srcset="" />
        <img src={pink_rectangle} className="absolute  bottom-30 right-0  z-[-1]"  alt="" srcset="" />
      </h1>
      <p className=" w-215 text-[22px]/[36px] text-pretty text-center">We are a team of strategists, designers communicators, researchers. Togeather,
        we belive that progress only hghappens when you refuse to play things safe.</p>
        <img src={purple_semicircle} className="absolute  top-70 right-40 rotate-180  z-[-1] h-[155px]"  alt="" srcset="" />
        <img src={scribble1} className="absolute  top-90 left-10 z-[-1] "  alt="" srcset="" />
        <img src={scribble2} className="absolute  top-90 left-0 z-[-1] "  alt="" srcset="" />
    </div>
  )
}
export default Herotitle