import component126 from '../assets/Component 126.svg'
const Navbar = () => {
  return (
      <div className='h-24 px-30 max-xl:px-8 flex items-center  justify-between '>
        <h1 className='text-[28px]/[46px] max-xl:text-[22px]/[36px] font-ghibli'>Elementum</h1>
        <ul className='flex gap-10 max-xl:gap-5 mr-30 max-xl:mr-8 text-[18px]/[34px] max-xl:text-[15px]/[28px] max-sm:hidden *:hover:cursor-pointer'>
          <li>Home</li>
          <li>Studio</li>
          <li>Services</li>
          <li>Contact</li>
          <li>FAQs</li>
        </ul>
        <img src={component126} alt="" srcset="" />
      </div>
  )
}
export default Navbar