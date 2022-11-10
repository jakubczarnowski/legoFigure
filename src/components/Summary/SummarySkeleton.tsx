import { Stack, Heading, Flex, Skeleton, SkeletonText, SkeletonCircle } from "@chakra-ui/react";

export const SummarySkeleton = () => (
	<Stack aria-label="Summary Skeleton" bg={"white"} color={"bg"} rounded={"2xl"} p={"2rem"} minWidth={"400px"} gap={"1.5rem"}>
		<Heading>SUMMARY</Heading>
		<Flex alignItems={"center"} justifyContent={"center"} direction={"column"}>
			<Skeleton height={"150px"} width={"150px"} mb={5} />
			<SkeletonText />
		</Flex>
		<SkeletonText />
		<Flex direction={"column"} gap={5} mb={"30px"}>
			<Skeleton height={"70px"} mb={5} />
			<Skeleton height={"70px"} mb={5} />
			<Skeleton height={"70px"} mb={5} />
			<Skeleton height={"70px"} mb={5} />
		</Flex>
		<SkeletonCircle />
	</Stack>
);
