import person1 from "../../assets/people/one.png"
import person2 from "../../assets/people/two.png"
import person3 from "../../assets/people/three.png"
import person4 from "../../assets/people/four.png"
import person5 from "../../assets/people/five.png"
import person6 from "../../assets/people/six.png"
import person7 from "../../assets/people/seven.png"
import person8 from "../../assets/people/eight.png"
import comma1 from "../../assets/vectors/comma.png"
import comma2 from "../../assets/vectors/comma2.png"
import green_rectangle from "../../assets/vectors/Rectangle 657.svg"
import vector5 from "../../assets/vectors/Vector 5.svg"
const CustomerReview = () => {
  return (
    <div className="flex flex-col items-center gap-15 max-xl:gap-10 max-w-[1844px] max-xl:max-w-full max-xl:px-8 h-[653px] max-xl:h-auto max-xl:pb-8 m-auto relative">
      <h1 className="font-ghibli text-[56px]/[66px] max-xl:text-[40px]/[50px] max-w-[666px] max-xl:max-w-full tracking-[-2.5%] text-center relative">
        <span className="relative">
          What
          <img src={green_rectangle} className="absolute z-[-1] left-0 top-[-7px]" alt="" srcset="" />
        </span> our customer
        says  
        <span className="relative"> About Us
          <img src={vector5} className="absolute z-[-1] left-0 bottom-[-20px]" alt="" srcset="" />
        </span>
      </h1>
      <div className="w-[875px] max-xl:w-auto h-[358px] max-xl:h-auto max-xl:p-8 bg-[hsla(136,40%,89%,0.3)] flex justify-center items-center rounded-[55px] max-xl:rounded-[30px] relative">
        <p className="text-[30px]/[42px] max-xl:text-[20px]/[30px] max-w-[703px] max-xl:max-w-full text-center ">
          <span className="relative">Elementum
            <img src={comma2} className="absolute top-[-20px] left-[-80px] max-xl:scale-50 max-xl:left-[-60px]" alt="" srcset="" />
          </span>  delivered the site with inthe timeline
          as they requested. Inthe end, the client found a 50%
          increase in traffic with in days since its launch. They
          also had an impressive ability to use technologies that
          the company hasn`t used, which have also proved to
          be easy to use and <span className="relative">reliable
            <img src={comma1} className="absolute bottom-[-20px] right-[-80px] max-xl:scale-50 max-xl:bottom-[-10px] max-xl:right-[-60px]" alt="" srcset="" />
          </span>
        </p>
      </div>
      <img src={person1} className="absolute bottom-0 right-0 h-[245px] max-[1650px]:scale-50 max-xl:bottom-[-150px]" alt="" srcset="" />
      <img src={person2} className="absolute bottom-70 right-70 h-[112px] max-[1650px]:scale-70 max-[1650px]:right-30  max-[900px]:hidden" alt="" srcset="" />
      <img src={person3} className="absolute top-20 right-80 h-[90px] max-[1650px]:scale-50 max-xl:top-10 max-[900px]:hidden" alt="" srcset="" />
      <img src={person4} className="absolute top-0 right-20 h-[146px] max-[1650px]:scale-50 max-[1650px]:top-20 max-[1650px]:right-0 max-xl:top-0 max-[900px]:hidden" alt="" srcset="" />
      <img src={person5} className="absolute top-55 left-50 h-[216px] max-[1650px]:scale-50 max-[1650px]:left-0 max-[900px]:top-[-170px]" alt="" srcset="" />
      <img src={person6} className="absolute top-0 left-50 h-[123px] max-[1650px]:scale-50 max-[900px]:hidden" alt="" srcset="" />
      <img src={person7} className="absolute top-45 left-25 h-[74px] max-[1650px]:scale-80 max-xl:hidden" alt="" srcset="" />
      <img src={person8} className="absolute bottom-0 left-20 h-[123px] max-[1650px]:scale-50 max-[900px]:hidden" alt="" srcset="" />
    </div>
  )
}

export default CustomerReview