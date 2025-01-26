import { BrowserRouter, Route, Routes } from "react-router";

import { MantineProvider } from "@mantine/core";
import { ProductList } from "./productList";


import "@mantine/core/styles.css";
import {Frame} from "./frame";
import { useCarHook } from "./helpers-and-hooks";


export function ShopRouter() {
    const { increment,decrement,totalProductsCar,carProducts,totalProdutos,products,activePage,isLoading,setPage} = useCarHook();
   return (
    <MantineProvider defaultColorScheme={"dark"}>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Frame totalProductsCar={totalProductsCar} />}>
            <Route path={"/productList"} element={<ProductList
                decrement={decrement}
                increment={increment}
                carProducts={carProducts}               
            />} />
              <Route path={"/checkout"} element={<ProductList
                  decrement={decrement}
                  increment={increment}
                  carProducts={carProducts}
                  setPage={setPage}
                  products={products}
                  totalProdutos={totalProdutos}
                  activePage={activePage}
                  isLoading={isLoading}
              />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
