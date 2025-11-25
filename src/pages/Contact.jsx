import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import ContactCTA from "../components/contact/ContactCTA";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";


const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-lightGray">
        <ContactHero />

        {/* Contact Details Section */}
        <section className="px-6 py-20 border-b md:py-32 border-dark/10">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Left Column: Info */}
              <div className="lg:col-span-5">
                <ContactInfo />
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* <ContactCTA /> */}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
