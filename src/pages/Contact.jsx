import ContactHero from "../components/contact/ContactHero";
import ContactInfoCards from "../components/contact/ContactInfoCards";
import AdmissionSection from "../components/contact/AdmissionSection";
import WhyEnroll from "../components/contact/WhyEnroll";
import LocationSection from "../components/contact/LocationSection";
import OfficeHours from "../components/contact/OfficeHours";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";
import WhatsAppAdmission from "../components/contact/WhatsAppAdmission";

import {
  contactInfo,
} from "../data/contact";

function Contact() {
  return (
    <>
      <ContactHero />

      <ContactInfoCards
        contact={contactInfo}
      />

      <AdmissionSection
        contact={contactInfo}
      />

      <WhatsAppAdmission
        phone={contactInfo.whatsapp}
      />  
      <WhyEnroll />

      <LocationSection
        contact={contactInfo}
      />

      <OfficeHours
        hours={contactInfo.officeHours}
      />

      <ContactFAQ />

      <ContactCTA
        phone={contactInfo.whatsapp}
      />
    </>
  );
}

export default Contact;