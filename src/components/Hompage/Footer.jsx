import purple_semicircle from "../../assets/vectors/purple_semicircle.svg"
import arrow from "../../assets/vectors/arrow.svg"
const Footer = () => {
  const Links = {
    section1: {
      heading: "Company",
      links: [
        {
          name: "Home",
          url: "/"
        },
        {
          name: "Studio",
          url: "/"
        },
        {
          name: "Service",
          url: "/"
        },
        {
          name: "Blog",
          url: "/"
        },
      ]
    },
    section2: {
      heading: "Terms and Policies",
      links: [
        {
          name: "Privacy Policy",
          url: "/"
        },
        {
          name: "Terms & Conditions",
          url: "/"
        },
        {
          name: "Explore",
          url: "/"
        },
        {
          name: "Accesability",
          url: "/"
        },
      ]
    },
    section3: {
      heading: "Follow Us",
      links: [
        {
          name: "Instagram",
          url: "/"
        },
        {
          name: "Youtube",
          url: "/"
        },
        {
          name: "Linkdein",
          url: "/"
        },
        {
          name: "Twitter",
          url: "/"
        },
      ]
    },
    section4: {
      heading: "Terms and Policies",
      links: [
        {
          name: "1498w Fluton ste, STE 2D Chicgo, IL 63867.",
          url: "/"
        },
        {
          name: "(123) 456789000",
          url: "/"
        },
        {
          name: "info@elementum.com ",
          url: "/"
        },
      ]
    },
  }
  return (
    <div className="bg-[hsla(136,40%,89%,1)] h-[1297px] max-xl:h-auto max-xl:pb-10 flex flex-col items-center gap-25 max-xl:gap-15 relative">
      <div className=" max-w-[904px] max-xl:max-w-full max-xl:px-8 flex flex-col gap-10 items-center mt-35 max-xl:mt-16 ">
        <h1 className="font-ghibli text-[100px]/[116px] max-sm:text-[26px/34px] max-xl:text-[56px]/[72px] text-center relative">
          <img className="absolute left-40 top-[-140px] max-xl:scale-50 max-xl:top-[-98px] max-xl:left-10" src={arrow} alt="" srcset="" />
          <img className="absolute left-60 top-[-140px] max-xl:scale-50 max-xl:top-[-98px] max-xl:left-20" src={arrow} alt="" srcset="" />
          Subscribe to our newsletter</h1>
        <p className="text-[24px]/[36px] max-xl:text-[18px]/[28px] text-center">To make your stay special and even more memorable</p>
        <button className="w-[233px] h-[72px] max-xl:h-[60px] text-[20px]/[30px] max-xl:text-[17px] font-bold bg-black text-white rounded-full hover:cursor-pointer">Subscribe Now</button>
      </div>
      <div className="flex max-xl:grid max-xl:grid-cols-2 max-xl:gap-10 justify-between max-w-[1600px] max-xl:max-w-full max-xl:px-8 w-full  border-t-1 py-20 max-xl:py-12">
        <HyperLinks heading={Links.section1.heading} links={Links.section1.links} />
        <HyperLinks heading={Links.section2.heading} links={Links.section2.links} />
        <HyperLinks heading={Links.section3.heading} links={Links.section3.links} />
        <HyperLinks heading={Links.section4.heading} links={Links.section4.links} />

      </div>
      <p>©2023 Elementum. All rights reserved</p>
      <img className="absolute right-20 top-60 max-xl:scale-50 max-xl:top-20 max-[900px]:hidden" src={purple_semicircle} alt="" srcset="" />

    </div>
  )
}
const HyperLinks = ({ heading, links }) => {
  return (
    <div>
      <ul className="flex flex-col gap-5">
        <li className="font-ghibli text-[22px]/30px">{heading}</li>
        {links.map((e) => { return (<a href={e.url}>{e.name}</a>) })}
      </ul>
    </div>
  )
}
export default Footer