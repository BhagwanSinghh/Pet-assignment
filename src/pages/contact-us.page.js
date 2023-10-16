import ContactUs from "../components/Contacts/ContactUs";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import ScrollToTopButton from "../components/ScrollButton/ScrollButton"

const ContactUsPage = ()=>{
    return(
        <>
        <Header/>,
        <Banner page="Contact Us"/>,
        <ContactUs/>
        <Footer/>
        <ScrollToTopButton/>
        </>
    )
}
export default ContactUsPage;

