import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";

export interface Icons {
  img: ImageMetadata;
  label: string;
  href: string;
}

export interface Contacts {
  contact: string;
  address: string;
}

export const footerIcons: Icons[] = [
  {
    img: instagram,
    label: "Instagram",
    href: "#",
  },
  {
    img: facebook,
    label: "Facebook",
    href: "#",
  },
  {
    img: youtube,
    label: "Youtube",
    href: "#",
  },
  {
    img: twitter,
    label: "twitter",
    href: "#",
  },
];

export const footerContacts: Contacts[] = [
  {
    contact: "Email us at",
    address: "hello@landify.design",
  },
  {
    contact: "If you're hurry, quick call for us",
    address: "+8(663)125-08-59",
  },
];
