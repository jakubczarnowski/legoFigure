import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { usePartsQuery } from "api/queries/usePartsQuery";
import { useFormContext } from "react-hook-form";
import { SinglePart } from "../SinglePart";
import { SummarySkeleton } from "./SummarySkeleton";

type Props = {
    name: string;
    setImgUrl: string;
    setNum: string;
    isSubmitting: boolean;
};
export const SummaryCard = ({ name, setImgUrl, setNum, isSubmitting }: Props) => {
    const { data: parts, isLoading } = usePartsQuery(setNum);
    const {
        formState: { isValid },
    } = useFormContext();
    if (isLoading) return <SummarySkeleton />;
    return (
        <Stack bg={"white"} color={"bg"} rounded={"2xl"} p={"2rem"} maxWidth={"400px"} gap={"1.5rem"}>
            <Heading>SUMMARY</Heading>
            <Flex alignItems={"center"} justifyContent={"center"} direction={"column"}>
                <Image
                    src={setImgUrl}
                    objectFit={"contain"}
                    width={"150px"}
                    height={"150px"}
                    fallbackSrc={"/assets/ImagePlaceholder.png"}
                    mb={5}
                />
                <Text fontSize={"sm"} fontWeight={"bold"} textAlign={"center"} overflowWrap={"break-word"}>
                    {name}
                </Text>
            </Flex>
            <Text fontSize={"md"} fontWeight={"semibold"}>
                There are {parts?.length} parts in this minifig
            </Text>
            <Flex direction={"column"} gap={5} mb={"30px"}>
                {parts && parts.map((part) => <SinglePart key={part.partNum} {...part} />)}
            </Flex>
            <Button
                variant={"filled"}
                bgColor={"blue.600"}
                color={"white"}
                disabled={!isValid}
                type={"submit"}
                _hover={{}}
                isLoading={isSubmitting}
            >
                Submit
            </Button>
        </Stack>
    );
};
