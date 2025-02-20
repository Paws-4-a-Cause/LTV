import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import instaLogo from "./assets/icons/Logos/instagram.png";
import faceLogo from "./assets/icons/Logos/facebook.png";

function App() {
  const [count, setCount] = useState(0);;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="flex space-x-4 mb-6">
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              className="h-16 w-16 transition-transform duration-300 hover:scale-110"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="h-16 w-16 transition-transform duration-300 hover:scale-110"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Vite + React</h1>
        <div className="card bg-white shadow-lg rounded-xl p-6 mb-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            count is {count}
          </button>
          <p className="text-gray-600 mt-4">
            Edit <code className="bg-gray-200 p-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <footer className="bg-blue-900 text-white py-8 mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">Email: <a href="mailto:lovethevoiceless@gmail.com" className="underline">lovethevoiceless@gmail.com</a></p>
          <p className="mb-6">Donate: PayNow Love the Voiceless's Mobile <span className="font-semibold">8101 6366</span></p>
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
              <img
                src={faceLogo}
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a href="https://www.instagram.com/lovethevoiceless/?hl=en" className="hover:opacity-75">
              <img
                src={instaLogo}
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
