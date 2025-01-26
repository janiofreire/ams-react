import { BrowserRouter, Route, Routes } from "react-router";

import { MantineProvider } from "@mantine/core";



import "@mantine/core/styles.css";
import { Frame } from "./frame";
import { ProductListShop } from "./productListShop";
import { CarList } from "./carList";


export function ShopRouter2() {
   return (
    <MantineProvider defaultColorScheme={"dark"}>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Frame />}>
            <Route path={"/productList"} element={<ProductListShop/>} />
              <Route path={"/checkout"} element={<CarList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
