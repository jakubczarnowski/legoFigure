import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Flex,
    Text,
    Image,
    Link,
} from "@chakra-ui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    figureId: string;
    name: string;
    numParts: number;
    imgUrl: string;
    setUrl: string;
};

export const FigureDetailsModal = ({ isOpen, onClose, name, numParts, imgUrl, setUrl, figureId }: Props) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent p={3}>
                <ModalHeader>Set number - ({figureId})</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex alignItems={"center"} justifyContent={"center"} direction={"column"}>
                        <Image
                            src={imgUrl}
                            objectFit={"contain"}
                            width={"150px"}
                            height={"150px"}
                            fallbackSrc={"/assets/ImagePlaceholder.png"}
                            mb={5}
                        />
                        <Text fontSize={"md"} fontWeight={"bold"} mb={5}>
                            {name}
                        </Text>
                        <Text fontSize={"md"}>Number of parts: {numParts}</Text>
                    </Flex>
                </ModalBody>

                <ModalFooter justifyContent={"space-between"}>
                    <Link href={setUrl} target={"_blank"} textDecoration="none" _hover={{}}>
                        <Button colorScheme={"red"} mr={3}>
                            Visit Rebrickable page
                        </Button>
                    </Link>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
