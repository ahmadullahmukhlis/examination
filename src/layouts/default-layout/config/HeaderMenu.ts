import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },   {
        heading: "Vecancy",
        route: "/builder",
        keenthemesIcon: "switch",
        bootstrapIcon: "bi-layers",
      },  {
        heading: "Question Bank",
        route: "/builder",
        keenthemesIcon: "switch",
        bootstrapIcon: "bi-layers",
      }, 
      {
        heading: "Department",
        route: "/builder",
        keenthemesIcon: "switch",
        bootstrapIcon: "bi-layers",
      }, 
    ],
  
  }
];

export default MainMenuConfig;
