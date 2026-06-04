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
    <div className="flex flex-col items-center gap-15  max-w-[1844px] h-[653px] m-auto relative">
      <h1 className="font-ghibli text-[56px]/[66px] max-w-[666px] tracking-[-2.5%] text-center relative">
        What our customer
        says About Us
        <img src={green_rectangle} className="absolute z-[-1] left-0 top-0" alt="" srcset="" />
        <img src={vector5} className="absolute z-[-1] left-60 top-30" alt="" srcset="" />
      </h1>
      <div className="w-[875px] h-[358px] bg-[hsla(136,40%,89%,0.3)] flex justify-center items-center rounded-[55px] relative">
        <img src={comma2} className="absolute top-10 left-8" alt="" srcset="" />
        <p className="text-[30px]/[42px] max-w-[703px] text-center ">
          Elementum  delivered the site with inthe timeline
          as they requested. Inthe end, the client found a 50%
          increase in traffic with in days since its launch. They
          also had an impressive ability to use technologies that
          the company hasn`t used, which have also proved to
          be easy to use and reliable
        </p>
        <img src={comma1} className="absolute bottom-10 right-45" alt="" srcset="" />
      </div>
      <img src={person1} className="absolute bottom-0 right-0 h-[245px]" alt="" srcset="" />
      <img src={person2} className="absolute bottom-70 right-70 h-[112px]" alt="" srcset="" />
      <img src={person3} className="absolute top-20 right-80 h-[90px]" alt="" srcset="" />
      <img src={person4} className="absolute top-0 right-20 h-[146px]" alt="" srcset="" />
      <img src={person5} className="absolute top-55 left-50 h-[216px]" alt="" srcset="" />
      <img src={person6} className="absolute top-0 left-50 h-[123px]" alt="" srcset="" />
      <img src={person7} className="absolute top-45 left-25 h-[74px]" alt="" srcset="" />
      <img src={person8} className="absolute bottom-0 left-20 h-[123px]" alt="" srcset="" />
    </div>
  )
}

export default CustomerReview