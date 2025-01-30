import { Button } from "@mantine/core";
import { Product } from "../../model/product";
import { stateCarStore, useCarStore } from "../../store/carStore";
import { carBusiness } from "../../business/carBusiness";

interface Props2 {
    item:Product;    
}

export function CarInteraction(prop:Props2){
    const { item} = prop;
    const quant = useCarStore((state) => carBusiness.getCarProductByProdut(state.produts,item).quant);
    const decrement = stateCarStore.removeProdutFromCar;
    const increment = stateCarStore.addProdutToCar;
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