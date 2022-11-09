import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { ShippingData } from "../../shared/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type Props = {};

const ShippingSchema = Yup.object().shape({
	name: Yup.string().min(2, "Too Short!").max(20, "Too Long!").required("Required"),
	surname: Yup.string().min(2, "Too Short!").max(20, "Too Long!").required("Required"),
	email: Yup.string().email("Email is invalid").required("Required"),
	phoneNumber: Yup.string().required("Required"),
	dateOfBirth: Yup.date().max(new Date(), "Date of birth has to be in the past").required("Required"),
	address: Yup.string().required("Required"),
	city: Yup.string().required("Required"),
	state: Yup.string().required("Required"),
	zipCode: Yup.string().required("Required"),
});
export const ShippingForm = (props: Props) => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<ShippingData>({
		resolver: yupResolver(ShippingSchema),
		defaultValues: {
			name: "",
			surname: "",
			phoneNumber: "",
			email: "",
			address: "",
			dateOfBirth: new Date(),
			city: "",
			zipCode: "",
			state: "",
		},
	});
	function onSubmit(values: ShippingData) {
		console.log(values);
	}
	return (
		<Flex direction={"column"}>
			<Heading mb={10}>SHIPPING DETAILS</Heading>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex direction={"row"} gap={5}>
					<FormControl isInvalid={!!errors?.name} mb={5}>
						<FormLabel htmlFor="name">First name</FormLabel>
						<Input variant={"filled"} id="name" placeholder="Your Name" {...register("name")} />
						<FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={!!errors?.surname} mb={5}>
						<FormLabel htmlFor="surname">Surname</FormLabel>
						<Input variant={"filled"} id="surname" placeholder="Surname" {...register("surname")} />
						<FormErrorMessage>{errors.surname && errors.surname.message}</FormErrorMessage>
					</FormControl>
				</Flex>
				<FormControl isInvalid={!!errors?.phoneNumber} mb={5}>
					<FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
					<Input variant={"filled"} id="phoneNumber" placeholder="Your Phone Number" {...register("phoneNumber")} />
					<FormErrorMessage>{errors.phoneNumber && errors.phoneNumber.message}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={!!errors?.email} mb={5}>
					<FormLabel htmlFor="email">Email</FormLabel>
					<Input variant={"filled"} id="email" placeholder="Your Email Address" {...register("email")} />
					<FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={!!errors?.dateOfBirth} mb={5}>
					<FormLabel htmlFor="dateOfBirth">Date of Birth</FormLabel>
					<Input type="date" variant={"filled"} id="dateOfBirth" placeholder="Date of Birth" {...register("dateOfBirth")} />
					<FormErrorMessage>{errors.dateOfBirth && errors.dateOfBirth.message}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={!!errors?.address} mb={5}>
					<FormLabel htmlFor="address">Address</FormLabel>
					<Input variant={"filled"} id="address" placeholder="Address" {...register("address")} />
					<FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={!!errors?.city} mb={5}>
					<FormLabel htmlFor="city">City</FormLabel>
					<Input variant={"filled"} id="city" placeholder="City" {...register("city")} />
					<FormErrorMessage>{errors.city && errors.city.message}</FormErrorMessage>
				</FormControl>
				<Flex direction={"row"} gap={5}>
					<FormControl isInvalid={!!errors?.state} mb={5}>
						<FormLabel htmlFor="state">State</FormLabel>
						<Input variant={"filled"} id="state" placeholder="State" {...register("state")} />
						<FormErrorMessage>{errors.state && errors.state.message}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={!!errors?.zipCode} mb={5}>
						<FormLabel htmlFor="zipCode">Zip Code</FormLabel>
						<Input variant={"filled"} id="zipCode" placeholder="Zip Code" {...register("zipCode")} />
						<FormErrorMessage>{errors.zipCode && errors.zipCode.message}</FormErrorMessage>
					</FormControl>
				</Flex>
				<Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
					Submit
				</Button>
			</form>
		</Flex>
	);
};
