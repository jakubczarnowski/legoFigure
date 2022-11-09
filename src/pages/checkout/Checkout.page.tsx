import { Flex } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { ShippingForm } from "../../components/ShippingForm";
import { SummaryCard } from "../../components/Summary";
import { Routes } from "../../shared";

type Props = {};

export const CheckoutPage = (props: Props) => {
	const navigate = useNavigate();
	const location = useLocation();
	const figureId = useMemo<string>(() => location.state?.figureId, [location]);
	useEffect(() => {
		if (!location.state) navigate(Routes.error);
	}, [location]);
	if (!location) {
		return <>There was an error</>;
	}
	return (
		<Flex justifyContent={"center"} alignItems={"center"}>
			<ShippingForm />
			<SummaryCard />
		</Flex>
	);
};
