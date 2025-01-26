import { createRoot } from "react-dom/client";
import { AcademyRouter } from "./ams-academy/router";
import {ShopRouter} from "./ams-shop-exercise/router";
import { ShopRouter2 } from "./ams-shop-execise2/ui/pages/router";

createRoot(document.getElementById("root") as HTMLElement).render(
  process.env.APP === "academy" ? <AcademyRouter /> : (process.env.APP === "shop" ? <p><ShopRouter /></p>:<p><ShopRouter2 /></p>)
);
