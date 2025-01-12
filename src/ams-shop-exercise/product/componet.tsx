import {
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
import {ProductReview} from "./product";
import {ReactNode} from "react"

interface Props {
    title: string;
    description: string;
    price: number;
    reviews: ProductReview[];
    thumbnail: string,
    children?: ReactNode
}

export const ProductComponent = (prop:Props)=> {
    const {thumbnail,title,price,description,reviews}=prop;
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
            {prop.children}
            
        </Card>
    );
};