import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AboutUs from "./pages/AboutUs";
import OurStories from "./pages/OurStories";
import AdoptionProcess from "./pages/AdoptionProcess";
import AdoptFoster from "./pages/AdoptFoster";
import BeInvolved from "./pages/BeInvolved";
import KennelSponsorship from "./pages/KernelSponsorship";
import ContactUs from "./pages/ContactUs";
import AdoptionForm from "./pages/AdoptionForm";
import logo from "/public/logo.avif";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about_us",
    element: <AboutUs />,
  },
  {
    path: "our_stories",
    element: <OurStories/>,
  },
  {
    path: "adoption_process",
    element: <AdoptionProcess/>,
  },
  {
    path: "adopt_foster",
    element: <AdoptFoster/>,
  },
  {
    path: "be_involved",
    element: <BeInvolved/>,
  },
  {
    path: "kennel_sponsorship",
    element: <KennelSponsorship/>,
  },
  {
    path: "contact_us",
    element: <ContactUs/>,
  },
  {
    path: "adoption_form",
    element: <AdoptionForm/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);