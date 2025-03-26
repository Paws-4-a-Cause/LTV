import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout";
import Home from "./pages/index"; // 👈 import Home
import AboutUs from "./pages/AboutUs";
import OurStories from "./pages/OurStories";
import AdoptionProcess from "./pages/AdoptionProcess";
import AdoptFoster from "./pages/AdoptFoster";
import BeInvolved from "./pages/BeInvolved";
import KennelSponsorship from "./pages/KennelSponsorship";
import ContactUs from "./pages/ContactUs";
import AdoptionForm from "./pages/AdoptionForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> }, // 👈 this makes Home render by default inside MainLayout
      { path: "about-us", element: <AboutUs /> },
      { path: "our-stories", element: <OurStories /> },
      { path: "adoption-process", element: <AdoptionProcess /> },
      { path: "adopt-foster", element: <AdoptFoster /> },
      { path: "be-involved", element: <BeInvolved /> },
      { path: "kennel-sponsorship", element: <KennelSponsorship /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "adoption-form", element: <AdoptionForm /> },
    ],
  },
]);

export default router;
