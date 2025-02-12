import { createBrowserRouter } from "react-router-dom";
import App from "./App";
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

export default router;