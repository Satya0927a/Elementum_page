import vectorcurve from "../../assets/vectors/vector curve.svg"
import green_rectangle from "../../assets/vectors/Rectangle 657.svg"
import vector5 from "../../assets/vectors/Vector 5.svg"
import longarrow from "../../assets/vectors/longarrow.svg"
const OfferProvided = () => {
  const Content = {
    offer1: {
      text1: "Office of multiple interest content",
      text2: "Colaborative & partnership"
    },
    offer2: {
      text1: "The hanger US Air force digital experimental",
      text2: "We talk about our weight"
    },
    offer3: {
      text1: "Delta faucet content, social, digital",
      text2: "Piloting digital confidence"
    },
  }
  return (
    <div className="max-w-[1618px] max-xl:max-w-full max-xl:px-8 m-auto flex flex-col gap-10 ">
      <h1 className="font-ghibli text-[100px]/[116px] max-xl:text-[56px]/[72px] max-w-[831px] max-xl:max-w-full relative">What we <span className="relative">can
        <img src={green_rectangle} className="absolute right-2 top-3 z-[-1] min-xl:scale-120 max-xl:top-2" alt="" srcset="" />
      </span> <span className="relative"> offer
          <img src={vector5} className="absolute left-2 bottom-[-10px] z-[-1] scale-120" alt="" srcset="" />
        </span> you!
      </h1>
      <div>
        <Offers text1={Content.offer1.text1} text2={Content.offer1.text2} />
        <Offers text1={Content.offer2.text1} text2={Content.offer2.text2} />
        <Offers text1={Content.offer3.text1} text2={Content.offer3.text2} />
      </div>
      <img src={vectorcurve} className="absolute right-0 bottom-150" alt="" srcset="" />
    </div>
  )
}
const Offers = ({ text1, text2 }) => {
  return (
    <div className="flex justify-between items-center h-[180px] max-xl:h-auto max-xl:py-6 max-xl:flex-col max-xl:items-start max-xl:gap-3 border-t-1" >
      <span className="text-[30px]/[42px] max-xl:text-[22px]/[32px] max-w-[226px] max-xl:max-w-full">{text1}</span>
      <span className="font-ghibli text-[56px]/[116px] max-xl:text-[32px]/[44px]">{text2}</span>
      <button className="max-xl:self-end"><img src={longarrow}></img></button>
    </div>
  )
}
export default OfferProvided