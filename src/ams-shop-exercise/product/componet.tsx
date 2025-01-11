import {
  Accordion,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Group,
  Image,
  SimpleGrid,
  Space,
  Text
} from "@mantine/core";
import {Product} from "./product";


export const ProductComponent = ({
                                     title,
                                     reviews,
                                     description,
                                     price,
                                     thumbnail
                                 }: Product) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Center>
                    <Image src={thumbnail} h={300} w={300} />
                </Center>
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{title}</Text>
                <Text fw={500}>$ {price}</Text>
            </Group>

            <Text size="sm" c="dimmed">
                {description}
            </Text>

            <Card.Section p={"lg"}>
                <Text size="lg" c="dimmed">
                    Reviews
                </Text>
                <Space h={"lg"} />
                {reviews?.map((review, index) => (
                    <Container key={index}>
                        <SimpleGrid>
                            <Text>{review.comment}</Text>
                            <Text size={"xs"}>{review.reviewerName}</Text>
                            <Text size={"xs"}>{review.reviewerEmail}</Text>
                        </SimpleGrid>
                        <Space h={"lg"} />
                        <Divider />
                        <Space h={"lg"} />
                    </Container>
                ))}
            </Card.Section>

            <Button color="blue" mt="md" radius="md">
                Add to cart
            </Button>
        </Card>
    );
};

export const ProductListComponent =   (products: Product[]) => {
    const items = products && products.map((item,index) => (
        <Accordion.Item key={index} value={item.title || ''}>
            <Accordion.Control icon={item.thumbnail}>{item.title} {item.price}</Accordion.Control>
            <Accordion.Panel><ProductComponent title={item.title}
                                               reviews={item.reviews}
                                               thumbnail={item.thumbnail}
                                               description={item.description}
                                               price={item.price}/></Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Accordion variant="contained" defaultValue="Apples">
            {items}
        </Accordion>
    );
};