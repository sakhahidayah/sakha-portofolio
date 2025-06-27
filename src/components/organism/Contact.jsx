import ContactGroup from "../molecules/ContactGroup";

function Contact() {
  return (
    <>
    <div id="contact" className="flex pt-32  flex-col gap-10 lg:gap-0 lg:flex-row-reverse justify-center lg:justify-between lg:px-16 lg:items-baseline items-center mb-24">
    <ContactGroup/>
    </div>
    </>
  );
}
export default Contact