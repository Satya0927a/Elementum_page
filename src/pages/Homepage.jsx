import CustomerReview from "../components/Hompage/CustomerReview"
import Features from "../components/Hompage/Features"
import Footer from "../components/Hompage/Footer"
import Herotitle from "../components/Hompage/Herotitle"
import OfferProvided from "../components/Hompage/OfferProvided"
import Navbar from "../components/Navbar"

const Homepage = () => {
  return (
    <div className="max-xl:overflow-x-hidden">
      <Navbar />
      <section className="flex flex-col gap-15 max-xl:gap-10 relative">
        <Herotitle />
        <img src="/Home/Heroimg.png" className="px-5" alt="" srcset="" />
      </section>
      <section className="mt-60 max-xl:mt-30 relative min-lg:px-5">
        <Features/>
      </section>
      <section className="mt-40 max-xl:mt-20 relative min-lg:px-5">
        <OfferProvided/>
      </section>
      <section className="mt-80 max-xl:mt-60 mb-40 max-xl:mb-50">
        <CustomerReview/>
      </section>
      <Footer/>
    </div>
  )
}
export default Homepage