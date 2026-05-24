import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { Services } from "./components/pages/Services";
import { AboutUs } from "./components/pages/AboutUs";
import { OurWork } from "./components/pages/OurWork";
import { FAQs } from "./components/pages/FAQs";
import { ContactUs } from "./components/pages/ContactUs";
import { GuildUp } from "./components/pages/GuildUp";
import ThankYou from "./components/pages/ThankYou";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about-us", Component: AboutUs },
      { path: "our-work", Component: OurWork },
      { path: "faqs", Component: FAQs },
      { path: "contact-us", Component: ContactUs },
      { path: "projects/guildup", Component: GuildUp },
      { path: "thank-you", Component: ThankYou },
    ],
  },
]);
