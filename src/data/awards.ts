import GermanAward from "../assets/images/germanAward.svg?url";
import GoldenAward from "../assets/images/goldenAward.svg?url";
import GoodAward from "../assets/images/goodAward.svg?url";
import IfAward from "../assets/images/ifAward.svg?url";

export interface SectionAward {
  title: string;
  year: string;
  img: string;
}

export const awards: SectionAward[] = [
  { title: "German Design Award", year: "2021", img: GermanAward },
  { title: "Gold A’ Design Award", year: "2021", img: GoldenAward },
  { title: "IF Design Award", year: "2020", img: IfAward },
  { title: "Good Design Award", year: "2019", img: GoodAward },
];
