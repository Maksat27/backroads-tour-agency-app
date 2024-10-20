import tourImg1 from "./images/tour-1.jpeg";
import tourImg2 from "./images/tour-2.jpeg";
import tourImg3 from "./images/tour-3.jpeg";
import tourImg4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  { id: 1, icon: "fas fa-wallet fa-fw", title: "saving money" },
  { id: 2, icon: "fas fa-tree fa-fw", title: "endless hiking" },
  { id: 3, icon: "fas fa-socks fa-fw", title: "amazing comfort" },
];

export const tours = [
  {
    id: 1,
    img: tourImg1,
    tourDate: "august 26th, 2020",
    title: "Tibet Adventure",
    country: "china",
    period: 6,
    cost: 2100,
  },
  {
    id: 2,
    img: tourImg2,
    tourDate: "october 1st, 2020",
    title: "best of java",
    country: "indonesia",
    period: 11,
    cost: 1400,
  },
  {
    id: 3,
    img: tourImg3,
    tourDate: "september 15th, 2020",
    title: "explore hong kong",
    country: "hong kong",
    period: 8,
    cost: 5000,
  },
  {
    id: 4,
    img: tourImg4,
    tourDate: "december 5th, 2019",
    title: "kenya highlights",
    country: "kenya",
    period: 20,
    cost: 3300,
  },
];
