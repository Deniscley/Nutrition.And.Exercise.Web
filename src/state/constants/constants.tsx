import { AiOutlineYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiOpenaigym } from "react-icons/si";

export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Programa 1",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Programa 2",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Programa 3",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Programa 4",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/444",
  },
];

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Valor Um",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Valor Dois",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Valor Três",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Valor Quatro",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer:
      "Consectetur adipisicing elit. No ipsa dolorem, rem consequatur eum omnis ex, fuga temporaribus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "Consectetur adipisicing elit. No ipsa dolorem, rem consequatur eum omnis ex, fuga temporaribus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "Consectetur adipisicing elit. No ipsa dolorem, rem consequatur eum omnis ex, fuga temporaribus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer:
      "Consectetur adipisicing elit. No ipsa dolorem, rem consequatur eum omnis ex, fuga temporaribus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer:
      "Consectetur adipisicing elit. No ipsa dolorem, rem consequatur eum omnis ex, fuga temporaribus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer:
      "Consectetur adipisicing elit. No ipsa dolorem, rem consequatur eum omnis ex, fuga temporaribus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ana Ayi",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi deserunt cupiditate iste ducimus porro numquam laborum asperiores optio inventore quos quo culpa dicta, error commodi? Repellat placeat nobis corporis.",
    job: "Médica",
    avatar: require("../../../public/images/Ana.jpg"),
  },
  {
    id: 2,
    name: "Carla Ayi",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi deserunt cupiditate iste ducimus porro numquam laborum asperiores optio inventore quos quo culpa dicta, error commodi? Repellat placeat nobis corporis.",
    job: "Student",
    avatar: require("../../../public/images/Carla.jpg"),
  },
  {
    id: 3,
    name: "José Quist",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi deserunt cupiditate iste ducimus porro numquam laborum asperiores optio inventore quos quo culpa dicta, error commodi? Repellat placeat nobis corporis.",
    job: "Engenheiro",
    avatar: require("../../../public/images/Jose.jpg"),
  },
  {
    id: 4,
    name: "Maria Lavoe",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi deserunt cupiditate iste ducimus porro numquam laborum asperiores optio inventore quos quo culpa dicta, error commodi? Repellat placeat nobis corporis.",
    job: "Professora",
    avatar: require("../../../public/images/Maria.jpg"),
  },
  {
    id: 5,
    name: "Pedro Yaa Dankwa",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi deserunt cupiditate iste ducimus porro numquam laborum asperiores optio inventore quos quo culpa dicta, error commodi? Repellat placeat nobis corporis.",
    job: "Dentista",
    avatar: require("../../../public/images/Pedro.jpg"),
  },
];

export const plans = [
  {
    id: 1,
    name: "Pacote Prata",
    desc: "Este pacote é perfeito para iniciantes que precisam de ajuda constante",
    price: 29.99,
    features: [
      { feature: "Primeiro recurso", available: true },
      { feature: "Segundo recurso", available: true },
      { feature: "terceiro recurso", available: true },
      { feature: "Quarto recurso", available: true },
      { feature: "Quinto recurso Plus", available: false },
      { feature: "Sexto recurso", available: false },
      { feature: "Sétimo recurso Plus", available: false },
      { feature: "Oitavo recurso", available: false },
      { feature: "Nono recurso", available: false },
      { feature: "Décimo recurso", available: false },
      { feature: "Décimo primeiro recurso", available: false },
    ],
  },
  {
    id: 2,
    name: "Pacote Ouro",
    desc: "Este é o pacote perfeito para iniciantes que sabem o que estão fazendo",
    price: 49.99,
    features: [
      { feature: "Primeiro recurso", available: true },
      { feature: "Segundo recurso", available: true },
      { feature: "terceiro recurso", available: true },
      { feature: "Quarto recurso", available: true },
      { feature: "Quinto recurso Plus", available: true },
      { feature: "Sexto recurso", available: true },
      { feature: "Sétimo recurso Plus", available: true },
      { feature: "Oitavo recurso", available: false },
      { feature: "Nono recurso", available: false },
      { feature: "Décimo recurso", available: false },
      { feature: "Décimo primeiro recurso", available: false },
    ],
  },
  {
    id: 3,
    name: "Pacote Platina",
    desc: "Este pacote é perfeito para pessoas ocupadas que precisam de atendimento domiciliar",
    price: 89.99,
    features: [
      { feature: "Primeiro recurso", available: true },
      { feature: "Segundo recurso", available: true },
      { feature: "terceiro recurso", available: true },
      { feature: "Quarto recurso", available: true },
      { feature: "Quinto recurso Plus", available: true },
      { feature: "Sexto recurso", available: true },
      { feature: "Sétimo recurso Plus", available: true },
      { feature: "Oitavo recurso", available: true },
      { feature: "Nono recurso", available: true },
      { feature: "Décimo recurso", available: true },
      { feature: "Décimo primeiro recurso", available: true },
    ],
  },
];

export const trainers = [
  {
    id: 1,
    image: 1,
    name: "Denis Laureano",
    job: "Personal Trainer",
    socials: [
      { icon: <BsInstagram />, link: "https://instagram.com/" },
      { icon: <AiOutlineYoutube />, link: "https://youtube.com/" },
      { icon: <FaFacebook />, link: "https://facebook.com/" },
    ],
  },
];
