import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";
import { FieldErrors, useFormContext, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { ShippingData } from "../../shared/types";

type Props = {};

export const ShippingForm = (props: Props) => {
	// TODO ADD CITY FETCH
	const {
		register,
		formState: { errors, isSubmitting },
	} = useFormContext<ShippingData>();
	return (
		<Flex direction={"column"}>
			<Heading mb={10}>SHIPPING DETAILS</Heading>
			<Flex direction={"row"} gap={5}>
				<FormControl isInvalid={!!errors?.name} mb={5}>
					<FormLabel htmlFor="name">First name</FormLabel>
					<Input aria-label={"Name Input"} variant={"filled"} id="name" placeholder="Your Name" {...register("name")} />
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
				<InputGroup>
					<InputLeftAddon children="+48" />
					<Input type={"number"} prefix="+48" variant={"filled"} id="phoneNumber" placeholder="Your Phone Number" {...register("phoneNumber")} />
				</InputGroup>
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
		</Flex>
	);
};
