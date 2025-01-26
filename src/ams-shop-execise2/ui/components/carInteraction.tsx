import { Button } from "@mantine/core";
import { CarProduct } from "../../model/car";
import { Product } from "../../model/product";

interface Props2 {
    increment: any;
    decrement: any;
    item:Product;
    carProducts:CarProduct[];
}
export function CarInteraction(prop:Props2){
    const { increment,decrement,carProducts,item} = prop;
    return ( <>
    <Button.Group>
    <Button variant="default" radius="md" onClick={()=>decrement(item)}>
                        -
                        </Button>
                        <Button.GroupSection variant="default" bg="var(--mantine-color-body)" miw={80}>
                            {
                                (carProducts) ?
                                carProducts.map(carProduct =>
                                        (carProduct.product.title===item.title)?carProduct.quant:0)
                                    .reduce(
                                        (acumulator,quant)=> acumulator+quant,0
                                    )
                                    :0

                            }
                        </Button.GroupSection>
                        <Button variant="default" radius="md" onClick={()=>increment(item)}>
                            +
             </Button></Button.Group></>);
}