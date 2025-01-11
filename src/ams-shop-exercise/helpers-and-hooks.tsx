import {useEffect,useState} from "react";
import {Product} from "./product/product";
import {CarProduct} from "./car/car";
import {getProducts} from "./product/service";

const PAGE_SIZE = 10;

export function useCarHook() {

    const [product, setProduct] = useState<Product>();
    const [isRemove, setIsRemove] = useState(false);
    const [totalProductsCar, setTotalProductsCar] = useState(0);
    const [carProducts, setCarProducts] = useState<CarProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>();
    const [activePage, setPage] = useState(1);
    const [totalProdutos, setTotalProdutos] = useState(0);

    useEffect(() => {

        const quantProduto =carProducts.filter(cp => cp.product.title === product?.title).reduce(
            (quant,carProductAtual)=>
                quant+carProductAtual.quant,
            0
        );
        const otherCarProduct:CarProduct[]=carProducts.filter(cp => cp.product.title !== product?.title);

            if(isRemove){
                if(quantProduto>1 && product){
                       setCarProducts([...otherCarProduct,{
                            quant: quantProduto-1,
                            product:product
                        }]);
                    }else{
                        setCarProducts(otherCarProduct);
                    }

            }else{
                if(product){
                    setCarProducts([...otherCarProduct,{
                        quant: quantProduto+1,
                        product:product
                    }]);
                }
            }
        console.log("Carro Alterado");
        console.log(carProducts);
        console.log(totalProductsCar);
    }, [totalProductsCar]);

    useEffect(() => {
        async function load() {
            setIsLoading(true);
            const inintIndex = (activePage-1)*PAGE_SIZE;
            setProducts( carProducts.slice(inintIndex,inintIndex+PAGE_SIZE).map(car => car.product));
            setTotalProdutos((carProducts.length/PAGE_SIZE)+(carProducts.length%PAGE_SIZE>0?1:0));
            setIsLoading(false);
        }

        load();
    }, [activePage,totalProductsCar]);

    const increment = (product:Product) => {
        updateInfo(product,false);
    };

    const decrement = (product:Product) => {
        updateInfo(product,true);
    };

    const updateInfo= (product:Product,isRemove:boolean) =>{
        setProduct(product);
        setIsRemove(isRemove);
        setTotalProductsCar(totalProductsCar + (isRemove?-1:1));
    }
    return { increment, decrement,totalProductsCar,carProducts,isLoading, products, activePage, totalProdutos,setPage};
}

export function useProductsHook() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>();
    const [activePage, setPage] = useState(1);
    const [totalProdutos, setTotalProdutos] = useState(0);

    useEffect(() => {
        async function load() {
            setIsLoading(true);

            const result = await getProducts((activePage-1)*PAGE_SIZE);
            setProducts(result.products);
            setTotalProdutos((result.total/PAGE_SIZE)+(result.total%PAGE_SIZE>0?1:0));
            setIsLoading(false);
        }

        load();
    }, [activePage]);

    return {isLoading, products, activePage, totalProdutos,setPage};
}