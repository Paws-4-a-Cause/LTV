import instaLogo from "../assets/icons/Logos/instagram.png";
import faceLogo from "../assets/icons/Logos/facebook.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-2">
          Email: <a href="mailto:lovethevoiceless@gmail.com" className="underline">lovethevoiceless@gmail.com</a>
        </p>
        <p className="mb-6">
          Donate: PayNow Love the Voiceless's Mobile <span className="font-semibold">8101 6366</span>
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 justify-center">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 md:mb-0 md:w-1/2"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 md:mb-0 md:w-1/2"
          />
        </div>
        <textarea
          placeholder="Type your message here..."
          className="border border-gray-300 rounded-md px-4 py-2 mt-4 w-full"
          rows={4}
        ></textarea>
        <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-md mt-4 hover:bg-gray-100 transition">
          Submit
        </button>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://www.facebook.com/LTVDogs/videos/" className="hover:opacity-75">
            <img src={faceLogo} alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/lovethevoiceless/?hl=en" className="hover:opacity-75">
            <img src={instaLogo} alt="Instagram" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;