import { Button } from "primereact/button";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const CallToAction = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
      <p className="text-lg font-semibold text-center md:text-left">Join the Alumni Network & Stay Connected!</p>
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <Button label="Join Now" className="p-button-raised p-button-lg p-button-warning" />
        <div className="flex gap-3">
          <a href="https://linkedin.com" target="_blank" className="text-white text-2xl"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" className="text-white text-2xl"><FaInstagram /></a>
          <a href="https://whatsapp.com" target="_blank" className="text-white text-2xl"><FaWhatsapp /></a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
