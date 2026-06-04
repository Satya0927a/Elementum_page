import purple_semicircle from "../../assets/vectors/purple_semicircle.svg"
import arrow from "../../assets/vectors/arrow.svg"
const Footer = ()=>{
  const Links = {
    section1:{
      heading:"Company",
      links:[
        {
          name:"Home",
          url:"/"
        },
        {
          name:"Studio",
          url:"/"
        },
        {
          name:"Service",
          url:"/"
        },
        {
          name:"Blog",
          url:"/"
        },
      ]
    },
    section2:{
      heading:"Terms and Policies",
      links:[
        {
          name:"Privacy Policy",
          url:"/"
        },
        {
          name:"Terms & Conditions",
          url:"/"
        },
        {
          name:"Explore",
          url:"/"
        },
        {
          name:"Accesability",
          url:"/"
        },
      ]
    },
    section3:{
      heading:"Follow Us",
      links:[
        {
          name:"Instagram",
          url:"/"
        },
        {
          name:"Youtube",
          url:"/"
        },
        {
          name:"Linkdein",
          url:"/"
        },
        {
          name:"Twitter",
          url:"/"
        },
      ]
    },
    section4:{
      heading:"Terms and Policies",
      links:[
        {
          name:"1498w Fluton ste, STE 2D Chicgo, IL 63867.",
          url:"/"
        },
        {
          name:"(123) 456789000",
          url:"/"
        },
        {
          name:"info@elementum.com ",
          url:"/"
        },
      ]
    },
  }
  return(
    <div className="bg-[hsla(136,40%,89%,1)] h-[1297px] flex flex-col items-center gap-25 relative">
      <div className=" max-w-[904px] flex flex-col gap-10 items-center mt-35">
        <h1 className="font-ghibli text-[100px]/[116px] text-center">Subscribe to our newsletter</h1>
        <p className="text-[24px]/[36px]">To make your stay special and even more memorable</p>
        <button className="w-[233px] h-[72px] text-[20px]/[30px] font-bold bg-black text-white rounded-full hover:cursor-pointer">Subscribe Now</button>
      </div>
      <div className="flex justify-between max-w-[1600px] w-full  border-t-1 py-20">
        <HyperLinks heading={Links.section1.heading} links={Links.section1.links}/>
        <HyperLinks heading={Links.section2.heading} links={Links.section2.links}/>
        <HyperLinks heading={Links.section3.heading} links={Links.section3.links}/>
        <HyperLinks heading={Links.section4.heading} links={Links.section4.links}/>

      </div>
      <p>©2023 Elementum. All rights reserved</p>
      <img className="absolute right-20 top-60" src={purple_semicircle} alt="" srcset="" />
      <img className="absolute left-160 top-0" src={arrow} alt="" srcset="" />
      <img className="absolute left-190 top-0" src={arrow} alt="" srcset="" />
      
    </div>
  )
}
const HyperLinks= ({heading,links})=>{
  return(
    <div>
      <ul className="flex flex-col gap-5">
        <li className="font-ghibli text-[22px]/30px">{heading}</li>
        {links.map((e)=>{ return(<a href={e.url}>{e.name}</a>)})}
      </ul>
    </div>
  )
}
export default Footer