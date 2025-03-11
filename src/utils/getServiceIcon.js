import { BsBrush } from "react-icons/bs";
import { IoCodeSlashSharp } from "react-icons/io5";

const iconMap = {
  BsBrush: BsBrush,
  IoCodeSlashSharp: IoCodeSlashSharp,
};

export const getServiceIcon = (iconName) => {
  return iconMap[iconName] || null;
};
