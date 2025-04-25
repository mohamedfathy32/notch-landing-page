import React from 'react';
import MaiGamal from "../assets/Mai Gamal.png";
import mohamedFathy from "../assets/mohamed fathy.jpg";
import MahmoudElShamii from "../assets/Mahmoud ElShamii.jpg";
import OmarAmmar from "../assets/Omar Ammar.jpg";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FlagIcon from '@mui/icons-material/Flag';
import GoPower30 from "../assets/GoPower__30w-removebg-preview.png";
import GoPower20 from "../assets/GoPower__20W-removebg-preview.png";
import GoPower__Car_38W from "../assets/GoPower__Car_38W-removebg-preview.png";


export const teamInformation = [
  {
    quote:
      "Founder of Shamii Marketing and leader at NOTCH, combining expertise in social media marketing, graphic design, and photography to drive brand growth. Holds a degree in IT Management from CIC and is known for turning creative vision into impactful marketing strategies.",
    name: "Mahmoud ElShamii",
    designation: "Founder at NotchTech Group",
    src: MahmoudElShamii,
  },
  {
    quote:
      "A conceptual Graphic Designer with experience in the marketing and advertising industry. Skilled in Adobe Suite with a strong blend of creativity, time management, and problem-solving.",
    name: "Mai Gamal",
    designation: "Designer",
    src: MaiGamal,
  },
  {
    quote:
      "A Social Media Specialist and Media Buyer with expertise in creating engaging digital campaigns and driving targeted traffic. Skilled in leveraging data to optimize ad performance and enhance brand visibility across various social platforms.",
    name: "Omar Ammar",
    designation: "Social Media Specialist & Media Buyer",
    src: OmarAmmar,
  },
  {
    quote:
      "A Frontend Developer with a passion for creating user-friendly and efficient web experiences. Skilled in HTML, CSS, and JavaScript with a strong focus on responsive design and accessibility.",
    name: "Mohamed Fathy",
    designation: "Frontend Developer",
    src: mohamedFathy,
  },
];

export const services = [
  {
    title: "AI-Powered Marketing",
    description:
      "Leverage artificial intelligence to create smarter marketing campaigns that enhance customer experience and maximize returns. By utilizing AI, we analyze large data sets to ensure that your target audience is reached at the right time and place. Our advanced algorithms continuously optimize campaigns for the best results, driving efficiency and effectiveness.",
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 28 }} />,
  },
  {
    title: "Custom Software Development",
    description:
      "We provide fully tailored solutions designed to meet your specific business needs. Whether you're looking for web applications, mobile apps, or an enterprise resource planning (ERP) system, we create cutting-edge solutions based on the latest technologies. We work closely with you to understand your business processes and design software that fits your exact requirements, ensuring top-notch performance and quality.",
    icon: <ImportantDevicesIcon sx={{ fontSize: 28 }} />,
  },
  {
    title: "Digital Strategy & Branding",
    description:
      "We develop comprehensive digital strategies that elevate your brand online. Our team creates innovative branding solutions that help you stand out in a crowded market, ensuring that your business is easily recognizable and memorable.",
    icon: <LightbulbIcon sx={{ fontSize: 28 }} />,
  },
];

export const vision = [
  {
    icon:<VerifiedUserIcon sx={{ fontSize: 40, color: '#3b82f6' }} />,
    title: "Values",
    description:
      "We value integrity, innovation, and excellence in everything we do. We believe that by embracing these principles, we can build trust, foster creativity, and deliver the highest quality solutions to our clients. Our commitment to these values drives us to continuously improve and provide outstanding results.",
  },
  {
    icon:<BusinessCenterIcon sx={{ fontSize: 40, color: '#3b82f6' }} />,

    title: "Mission",
    description:
      "Our mission is to provide unparalleled value to our clients by delivering high-quality, tailored solutions that not only meet their needs but exceed their expectations. We aim to be a trusted partner, helping businesses navigate complex challenges and achieve their goals with efficiency and effectiveness.",
  },
  {
    icon:<FlagIcon sx={{ fontSize: 40, color: '#3b82f6' }} />,

    title: "Goals",
    description:
      "Our goal is to lead the industry through innovation, constantly pushing boundaries and redefining standards. We strive to create impactful solutions that drive success and growth for our clients, ensuring their continued competitiveness in a fast-changing world.",
  },
];

export const products = [
  {
    title: "GoPower 30W",
    image: GoPower30,
    desc: "The GoPower 30W charger provides fast and efficient charging for your devices.",
    price: 400,
  },
  {
    title: "GoPower 20W",
    image: GoPower20,
    desc: "The GoPower 20W charger is compact and perfect for everyday use.",
    price: 75,
  },
  {
    title: "GoPower Car 38W",
    image: GoPower__Car_38W,
    desc: "Charge your devices in the car with the GoPower Car 38W charger.",
    price: 120,
  },
];
