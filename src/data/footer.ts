import facebook from "../assets/icons/facebook.svg?url";
import instagram from "../assets/icons/instagram.svg?url";
import youtube from "../assets/icons/youtube.svg?url";
import twitter from "../assets/icons/twitter.svg?url";

export interface Icons {
  img: string;
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
