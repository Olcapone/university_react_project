import shortid from "shortid";
import { HiOutlineAcademicCap, HiOutlineBookOpen } from "react-icons/hi";

const menuConfig = [
  {
    id: shortid.generate(),
    name: "Университет",
    icon: <HiOutlineAcademicCap />,
  },

  {
    id: shortid.generate(),
    name: "Факультеты",
    icon: <HiOutlineBookOpen />,
  },
];

export { menuConfig };
