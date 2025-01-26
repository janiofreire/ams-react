import { Outlet, useNavigate } from "react-router";

import {Badge} from "@mantine/core";
import { useCarStore } from "../../store/carStore";



export function Frame() {
  const navigate = useNavigate();
    const  totalProductsCar = useCarStore((state)=>state.totalProdutcts);

  const navigateToCheckout = () => {
    navigate("/checkout");
  };

  const navigateToProductList = () => {
    navigate("/productList");
  };

  return (
    <div>
        <button onClick={navigateToCheckout}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                 className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                <path d="M17 17h-11v-14h-2"/>
                <path d="M6 5l14 1l-1 7h-13"/>
            </svg>
            { totalProductsCar>0 &&
                (<Badge size="xs" circle>
                    {totalProductsCar}
                </Badge>)
            }
        </button>
        <button onClick={navigateToProductList}>Product List</button>
        <div>
            <Outlet/>
        </div>
    </div>
  );
}
