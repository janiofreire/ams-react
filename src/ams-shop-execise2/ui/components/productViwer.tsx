import { Accordion, Avatar, Center, Grid ,Text} from "@mantine/core";
import { Product } from "../../model/product";
import { CarInteraction } from "./carInteraction";
import { ProductDetail } from "./productDetail";

interface Props3 {
    item:Product;
    index:number;
}
export function ProductViewer(prop:Props3){
    const { item,index} = prop;
  
    return (<>          
                <Grid style={{ marginTop: '10px', borderStyle:'solid'}}>
                    <Grid.Col span={2}>  <Avatar src={item.thumbnail} radius="xl" size="lg" /></Grid.Col>
                    <Grid.Col span={4}> <Text>{item.title}</Text></Grid.Col>
                    <Grid.Col span={2}> <Text>${item.price}</Text></Grid.Col>
                    <Grid.Col span={4}> 
                        <CarInteraction 
                             item={item}
                            //quant={quant}
                        /></Grid.Col>
                    <Grid.Col span={12}>
                        <Center>
                            <Accordion.Item key={index} value={item.id+"" || ""}>
                                        <Accordion.Control></Accordion.Control>
                                        <Accordion.Panel>
                                        <ProductDetail 
                                                product={item}>
                                                <CarInteraction 
                                                     item={item}
                                                    //quant={quant}
                                                    />
                                                </ProductDetail>
                                                </Accordion.Panel>
                            </Accordion.Item>
                        </Center>
                    </Grid.Col>
             </Grid>
            
             
    </>);
}