import green_rectangle from "../../assets/vectors/Rectangle 657.svg"
import pink_rectangle from "../../assets/vectors/pinkrectangle.svg"
import vector5 from "../../assets/vectors/Vector 5.svg"
import purple_semicircle from "../../assets/vectors/purple_semicircle.svg"
import scribble1 from "../../assets/vectors/scribble1.svg"
import scribble2 from "../../assets/vectors/scribble2.svg"
const Herotitle = () => {
  return (
    <div className=" w-333 max-xl:w-full max-xl:px-8 max-sm:px-4 m-auto flex flex-col items-center mt-20 max-xl:mt-10 max-sm:mt-6 gap-5">
      <h1 className="font-ghibli text-[100px]/[126px] max-[1750px]:text-[80px]/[96px] max-xl:text-[56px]/[72px] max-sm:text-[32px]/[44px] relative max-w-[1305px] max-xl:max-w-full text-center text-pretty font-[400] ">The <span className="relative">thinker
        <img src={vector5} className="absolute scale-150 top-22 left-0 max-[1750px]:top-16 max-[1750px]:scale-120   max-xl:top-12 max-sm:top-7" alt="" srcset="" />
      </span> and <br /> doer were <span className="relative">
          changing
          <img src={pink_rectangle} className="absolute  bottom-[-20px] right-0  z-[-1] max-[1750px]:scale-70 max-[1750px]:right-[-70px] max-[1750px]:bottom-[-30px] max-xl:scale-70 max-xl:right-[-50px] max-sm:right-[-35px] max-sm:bottom-[-10px]" alt="" srcset="" />
        </span> the <span className="relative">status
          <img src={green_rectangle} className="absolute scale-150 bottom-5 left-20 scale-x-200 z-[-1] max-[1750px]:scale-150  max-[1750px]:scale-y-120 max-[1750px]:left-10 max-[1750px]:bottom-2 max-xl:scale-x-120 max-xl:scale-y-100 max-xl:left-0 max-xl:bottom-0" alt="" srcset="" />
        </span> quo with
      </h1>
      <p className=" w-215 max-xl:w-full max-xl:px-6 max-sm:px-3 text-[22px]/[36px] max-xl:text-[18px]/[28px] max-sm:text-[15px]/[24px] text-pretty text-center">We are a team of strategists, designers communicators, researchers. Togeather,
        we belive that progress only hghappens when you refuse to play things safe.</p>
      <img src={purple_semicircle} className="absolute  top-70 right-40  max-[1500px]:right-5 rotate-180  z-[-1] h-[155px] max-xl:hidden" alt="" srcset="" />
      <img src={scribble1} className="absolute  top-90 left-10 z-[-1] max-[1750px]:scale-70 max-[1750px]:left-5  max-xl:hidden " alt="" srcset="" />
      <img src={scribble2} className="absolute  top-90 left-0 z-[-1] max-[1750px]:scale-70 max-[1750px]:left-[-15px]  max-xl:hidden" alt="" srcset="" />
    </div>
  )
}
export default Herotitle