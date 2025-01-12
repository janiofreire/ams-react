import {useEffect,useState} from "react";
import {Product} from "./product/product";
import {CarProduct} from "./car/car";
import {getProducts} from "./product/service";

const PAGE_SIZE = 10;

export function useCarHook() {

    const [product, setProduct] = useState<Product>();
    const [isRemove, setIsRemove] = useState(false);
    const [totalProductsCar, setTotalProductsCar] = useState(0);
    const [carSize, setCarSize] = useState(0);
    const [carProducts, setCarProducts] = useState<CarProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>();
    const [activePage, setPage] = useState(1);
    const [totalProdutos, setTotalProdutos] = useState(0);
    const [idProdutoAlterado,setIdProdutoAlterado]= useState(-1);

    useEffect(() => {
        if(product){
            console.log("Altera carro");
            console.log("Carro:"+carProducts);
            const quantProduto =countQuantProductCar(carProducts,product);
            const otherCarProduct:CarProduct[]=carProducts.filter(cp => cp.product.id !== product?.id);
            const quant = quantProduto + (isRemove?-1:+1);
                if(quant > 0){                    
                    setCarProducts([...otherCarProduct,{
                        quant: quant,
                        product:product
                    }]);
                    setCarSize(otherCarProduct.length+1);
                }else{
                    console.log("Removeu produto");
                    console.log(otherCarProduct);
                    setCarProducts(otherCarProduct);
                    setCarSize(otherCarProduct.length);
                }  
                setIdProdutoAlterado(product.id);
        }
    }, [totalProductsCar]);

    useEffect(() => {
             console.log("Carrega carro");
            console.log("Carro:");
            console.log(carProducts);
            setIsLoading(true);
            const inintIndex = (activePage-1)*PAGE_SIZE;
            setProducts( carProducts.slice(inintIndex,inintIndex+PAGE_SIZE).map(car => car.product));
            setTotalProdutos((carProducts.length/PAGE_SIZE)+(carProducts.length%PAGE_SIZE>0?1:0));
            setIsLoading(false);
               
    }, [activePage,carSize,idProdutoAlterado]);

    const increment = (product:Product) => {
        updateInfo(product,false);
    };

    const decrement = (product:Product) => {
        updateInfo(product,true);
    };

    const updateInfo= (product:Product,isRemove:boolean) =>{
        setProduct(product);
        setIsRemove(isRemove);
        
        if(isRemove && totalProductsCar>0 && countQuantProductCar(carProducts,product)>0){
            setTotalProductsCar(totalProductsCar -1);
        }else if(!isRemove){
            setTotalProductsCar(totalProductsCar +1);
        }
                
    }
    return { increment, decrement,totalProductsCar,carProducts,isLoading, products, activePage, totalProdutos,setPage};
}

function countQuantProductCar(carProducts:CarProduct[],product:Product){
    if(carProducts && product){
            return carProducts.filter(cp => cp.product.id === product.id).reduce(
                (quant,carProductAtual)=>
                    quant+carProductAtual.quant,
                0
            );
    }else{
        return 0;
    }
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