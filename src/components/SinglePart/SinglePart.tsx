import { Flex, Image, Text } from "@chakra-ui/react";

type Props = {
    name: string;
    partNum: string;
    partImgUrl: string;
};
export const SinglePart = ({ name, partNum, partImgUrl }: Props) => (
    <Flex alignItems={"center"} justifyContent={"flex-start"} direction={"row"} gap={2}>
        <Image
            src={partImgUrl}
            objectFit={"contain"}
            width={"60px"}
            height={"60px"}
            fallbackSrc={"/assets/ImagePlaceholder.png"}
            mb={5}
        />
        <Flex direction={"column"}>
            <Text fontSize={"md"} fontWeight={"bold"} noOfLines={1}>
                {name}
            </Text>
            <Text color={"orange"} fontSize={"md"} fontWeight={"bold"}>
                {partNum}
            </Text>
        </Flex>
    </Flex>
);
