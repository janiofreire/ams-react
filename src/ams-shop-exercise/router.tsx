import { BrowserRouter, Route, Routes } from "react-router";

import { MantineProvider } from "@mantine/core";
import { ProductList } from "./productList";


import "@mantine/core/styles.css";
import {Frame} from "./frame";
import {useCarHook, useProductsHook} from "./helpers-and-hooks";


export function ShopRouter() {
    const { increment,decrement,totalProductsCar,carProducts,totalProdutos,products,activePage,isLoading,setPage} = useCarHook();
    const prop2 = useProductsHook();
   return (
    <MantineProvider defaultColorScheme={"dark"}>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Frame totalProductsCar={totalProductsCar} />}>
            <Route path={"/productList"} element={<ProductList
                decrement={decrement}
                increment={increment}
                carProducts={carProducts}
                setPage={prop2.setPage}
                products={prop2.products}
                totalProdutos={prop2.totalProdutos}
                activePage={prop2.activePage}
                isLoading={prop2.isLoading}
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
