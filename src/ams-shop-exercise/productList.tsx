
import {
    Accordion, Avatar,
    Button,
    Center,
    Container,
    Group,
    Loader, Pagination
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

export function ProductList(prop:Props) {

    const { increment,decrement,carProducts,products,isLoading,totalProdutos,
        activePage,setPage} = prop;
    const items = products && products.map((item,index) => (
        <Accordion.Item key={index} value={item.title || ''}>
            <Accordion.Control>
                <Group wrap="nowrap">
                    <Avatar src={item.thumbnail} radius="xl" size="lg" />
                    <div>
                        {item.title} ${item.price}
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
                            </Button>
                        </Button.Group>
                    </div>
                </Group>

            </Accordion.Control>
            <Accordion.Panel><ProductComponent title={item.title}
                                               reviews={item.reviews}
                                               thumbnail={item.thumbnail}
                                               description={item.description}
                                               price={item.price}/></Accordion.Panel>
        </Accordion.Item>
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
                        <Accordion variant="contained" defaultValue="Apples">
                            {items}
                        </Accordion>
                    )}
                    <Pagination total={totalProdutos} value={activePage} onChange={setPage} mt="sm"  />
                </Center>
            )}

        </Container>
    );
};