import WorkInterior from "../assets/images/workInterior.svg?url";
import workPool from "../assets/images/workPool.svg?url";
import workRenovation from "../assets/images/workRenovation.svg?url";

export interface Work {
  id?: string;
  title: string;
  description: string;
  image: string;
}

export const recentWorks: Work[] = [
  {
    title: "Villa Furnishing & Interior",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
    image: WorkInterior,
  },
  {
    title: "Luxury Hotel Renovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
    image: workRenovation,
  },
  {
    title: "Residence Swimming Pool",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
    image: workPool,
  },
];
