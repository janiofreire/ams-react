import { Accordion, Center, Container, Loader, Pagination } from "@mantine/core";
import { Product } from "../../model/product";
import { ProductViewer } from "./productViwer";


interface Props {
    products:Product[];
    totalProdutos:number;
    activePage:number;
    setPage:any;
    isLoading?:boolean;
}

export function ProductList(prop:Props) {
    const {products,totalProdutos, activePage,setPage,isLoading} = prop;

    const items = products && products.map((item,index) => (
                    <ProductViewer
                        item={item}
                        index={index}
                        key={item.id}
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
                    <Pagination total={totalProdutos || 0} value={activePage} onChange={setPage} mt="sm"  />
                </Center>
            )}              
        </Container>
    );
};