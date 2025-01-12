
import {
    Accordion, Avatar,
    Button,
    Center,
    Container,
    Grid,
    Box,
    Loader, Pagination
    ,Text
} from "@mantine/core";

import {Product} from "./product/product";
import {ProductComponent} from "./product/componet";
import {CarProduct} from "./car/car";

interface Props {
    increment: any;
    decrement: any;
    carProducts:CarProduct[];
    products?:Product[];
    isLoading:boolean;
    totalProdutos:number;
    activePage:number;
    setPage:any;
}

interface Props2 {
    increment: any;
    decrement: any;
    item:Product;
    carProducts:CarProduct[];
}
interface Props3 {
    increment: any;
    decrement: any;
    item:Product;
    carProducts:CarProduct[];
    index:number;
}

export function ProductList(prop:Props) {
    const { increment,decrement,carProducts,products,isLoading,totalProdutos,
        activePage,setPage} = prop;

    const items = products && products.map((item,index) => (
                    <ProductViewer
                        decrement={decrement} 
                        increment={increment}
                        item={item}
                        carProducts={carProducts}
                        index={index}
                    />               
    ));

    return (
        <Container>
            {isLoading ? (
                <Center>
                    <Loader />
                </Center>
            ) : (
                <Center style={{ flexDirection: "column" }}>
                    {products && (
                        <Accordion variant="contained">
                            {items}
                        </Accordion>
                    )}
                    <Pagination total={totalProdutos} value={activePage} onChange={setPage} mt="sm"  />
                </Center>
            )}

        </Container>
    );
};


export function CarIteraction(prop:Props2){
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

export function ProductViewer(prop:Props3){
    const { increment,decrement,carProducts,item,index} = prop;
    return (<>
        
            
                <Grid style={{ marginTop: '10px', borderStyle:'solid'}}>
                    <Grid.Col span={2}>  <Avatar src={item.thumbnail} radius="xl" size="lg" /></Grid.Col>
                    <Grid.Col span={4}> <Text>{item.title}</Text></Grid.Col>
                    <Grid.Col span={2}> <Text>${item.price}</Text></Grid.Col>
                    <Grid.Col span={4}> <CarIteraction 
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
                                        <ProductComponent 
                                                title={item.title||""}
                                                reviews={item.reviews ||[]}
                                                thumbnail={item.thumbnail||""}
                                                description={item.description||""}
                                                price={item.price||0}>
                                                
                                                <CarIteraction 
                                                    decrement={decrement} 
                                                    increment={increment}
                                                    item={item}
                                                    carProducts={carProducts}
                            />
                                                </ProductComponent>
                                                </Accordion.Panel>
                            </Accordion.Item>
                        </Center>
                    </Grid.Col>
             </Grid>
            
             
    </>);
}
