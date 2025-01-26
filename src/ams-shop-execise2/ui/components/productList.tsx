import { Accordion, Center, Container, Loader, Pagination } from "@mantine/core";
import { Product } from "../../model/product";
import { CarProduct } from "../../model/car";
import { ProductViewer } from "./productViwer";


interface Props {
    products:Product[];
    totalProdutos:number;
    activePage:number;
    setPage:any;
}

export function ProductList(prop:Props) {
    const {products,totalProdutos, activePage,setPage} = prop;

    const items = products && products.map((item,index) => (
                    <ProductViewer
                        item={item}
                        index={index}
                    />               
    ));

    return (
        <Container>
               <Center style={{ flexDirection: "column" }}>
                    {products && (
                        <Accordion variant="contained">
                            {items}
                        </Accordion>
                    )}
                    <Pagination total={totalProdutos || 0} value={activePage} onChange={setPage} mt="sm"  />
                </Center>
        </Container>
    );
};