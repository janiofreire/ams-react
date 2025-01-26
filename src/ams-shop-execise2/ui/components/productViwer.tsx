import { Accordion, Avatar, Center, Grid ,Text} from "@mantine/core";
import { Product } from "../../model/product";
import { CarInteraction } from "./carInteraction";
import { ProductDetail } from "./productDetail";
import { stateCarStore, useCarStore } from "../../store/carStore";

interface Props3 {
    item:Product;
    index:number;
}
export function ProductViewer(prop:Props3){
    const { item,index} = prop;
    const decrement = stateCarStore.removeProdutFromCar;
    const increment = stateCarStore.addProdutToCar;
    const carProducts = useCarStore((state) => state.produts);      
    

    return (<>          
                <Grid style={{ marginTop: '10px', borderStyle:'solid'}}>
                    <Grid.Col span={2}>  <Avatar src={item.thumbnail} radius="xl" size="lg" /></Grid.Col>
                    <Grid.Col span={4}> <Text>{item.title}</Text></Grid.Col>
                    <Grid.Col span={2}> <Text>${item.price}</Text></Grid.Col>
                    <Grid.Col span={4}> 
                        <CarInteraction 
                            decrement={decrement} 
                            increment={increment}
                            item={item}
                            carProducts={carProducts}
                        /></Grid.Col>
                    <Grid.Col span={12}>
                        <Center>
                            <Accordion.Item key={index} value={item.id+"" || ""}>
                                        <Accordion.Control></Accordion.Control>
                                        <Accordion.Panel>
                                        <ProductDetail 
                                                product={item}>
                                                <CarInteraction 
                                                    decrement={decrement} 
                                                    increment={increment}
                                                    item={item}
                                                    carProducts={carProducts}/>
                                                </ProductDetail>
                                                </Accordion.Panel>
                            </Accordion.Item>
                        </Center>
                    </Grid.Col>
             </Grid>
            
             
    </>);
}