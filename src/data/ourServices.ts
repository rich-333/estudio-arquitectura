import Building from "../assets/icons/buildingRenovation.svg?url";
import Interior from "../assets/icons/interiorDesign.svg?url";
import Management from "../assets/icons/management.svg?url";

export interface Services {
  id?: string;
  title: string;
  icon: string;
}

export const sectionServices: Services[] = [
  {
    title: "Architectural & Interior design",
    icon: Interior,
  },

  {
    title: "Building Renovation",
    icon: Building,
  },

  {
    title: "Construciton Management",
    icon: Management,
  },
];
