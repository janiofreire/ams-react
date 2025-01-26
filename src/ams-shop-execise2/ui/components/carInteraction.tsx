import { Button } from "@mantine/core";
import { Product } from "../../model/product";
import { useCarStore } from "../../store/carStore";
import { carBusiness } from "../../business/carBusiness";

interface Props2 {
    increment: any;
    decrement: any;
    item:Product;    
}

export function CarInteraction(prop:Props2){
    const { increment,decrement,item} = prop;
    const quant = useCarStore((state) => carBusiness.getCarProductByProdut(state.produts,item).quant);
    return ( <>
    <Button.Group>
    <Button variant="default" radius="md" onClick={()=>decrement(item)}>
                        -
                        </Button>
                        <Button.GroupSection variant="default" bg="var(--mantine-color-body)" miw={80}>
                            {quant}
                        </Button.GroupSection>
                        <Button variant="default" radius="md" onClick={()=>increment(item)}>
                            +
             </Button></Button.Group></>);
}