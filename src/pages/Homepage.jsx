import CustomerReview from "../components/Hompage/CustomerReview"
import Features from "../components/Hompage/Features"
import Footer from "../components/Hompage/Footer"
import Herotitle from "../components/Hompage/Herotitle"
import OfferProvided from "../components/Hompage/OfferProvided"
import Navbar from "../components/Navbar"

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col gap-15 relative">
        <Herotitle />
        <img src="/Home/Heroimg.png" className="px-5" alt="" srcset="" />
      </section>
      <section className="mt-60 relative">
        <Features/>
      </section>
      <section className="mt-80 relative">
        <OfferProvided/>
      </section>
      <section className="mt-80 mb-40">
        <CustomerReview/>
      </section>
      <Footer/>
    </div>
  )
}
export default Homepage