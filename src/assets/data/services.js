import { MdOutlineHomeWork, MdMapsHomeWork } from "react-icons/md";
import { GiDogHouse, GiGardeningShears, GiScrewdriver } from "react-icons/gi";
import { BsBuilding } from "react-icons/bs";

import {
  service1,
  service2,
  service3,
  otherservice1,
  otherservice2,
  otherservice3,
} from "../images";

export const services = [
  {
    id: "1",
    title: "Home Clean",
    content: `There's nothing better than coming home to a fresh and clean house, without needing to lift a finger. Spend more time doing things you love and let a Pro take care of it.`,
    icon: <MdOutlineHomeWork />,
    img: service1,
  },
  {
    id: "2",
    title: "End of Lease Clean",
    content: `Whether you're preparing your house for the market, or have a rental inspection, our Pro's will ensure a high-quality clean, with an included Bond-Back Guarantee.`,
    icon: <GiDogHouse />,
    img: service2,
  },
  {
    id: "3",
    title: "Commercial Clean",
    content: `Booking technology specialised for your business needs and streamlined for your workplace. Vetted cleaners provide tailored services and efficient outcomes. `,
    icon: <BsBuilding />,
    img: service3,
  },
];

export const otherServices = [
  {
    id: "1",
    title: "Home Moving",
    content: `Whether moving interstate or down the road, our fully-insured removal Pro's come prepared with experience and the necessary equipment required for the job. `,
    icon: <MdMapsHomeWork />,
    img: otherservice1,
  },
  {
    id: "2",
    title: "Furniture Assembly",
    content: `Arrived home with a car full of flatpacks? Our Pro's have the experience and tools necessary to save you time and energy deciphering "which piece is which”.`,
    icon: <GiScrewdriver />,
    img: otherservice2,
  },
  {
    id: "3",
    title: "Home Gardening",
    content: `Your weekends should be spent enjoying your garden - not maintaining it. Rely on a Pro for a full range of customised services to fit your garden needs.`,
    icon: <GiGardeningShears />,
    img: otherservice3,
  },
];
