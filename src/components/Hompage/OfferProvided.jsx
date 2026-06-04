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
    <div className="max-w-[1618px] m-auto flex flex-col gap-10 ">
      <h1 className="font-ghibli text-[100px]/[116px] max-w-[831px] relative">What we can offer you!
        <img src={green_rectangle} className="absolute right-2 top-5 z-[-1] scale-120" alt="" srcset="" />
        <img src={vector5} className="absolute left-2 top-52 z-[-1] scale-120" alt="" srcset="" />
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
    <div className="flex justify-between items-center h-[180px] border-t-1" >
      <span className="text-[30px]/[42px] max-w-[226px]">{text1}</span>
      <span className="font-ghibli text-[56px]/[116px]">{text2}</span>
      <button><img src={longarrow}></img></button>
    </div>
  )
}
export default OfferProvided