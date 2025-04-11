import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="psv12082001@outlook.com" Image={HiOutlineMail} />
      <SingleInfo text="+916305866421" Image={FiPhone} />
      <SingleInfo text="India, Hyderabad, Telangana" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
