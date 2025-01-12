
import {
    Accordion, Avatar,
    Button,
    Center,
    Container,
    Group,
    Loader, Pagination
    ,Box,Text, Collapse
    ,ActionIcon
} from "@mantine/core";

export function CarIteraction(){
    return ( <><Button variant="default" radius="md" onClick={()=>decrement(item)}>
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
             </Button></>);
}