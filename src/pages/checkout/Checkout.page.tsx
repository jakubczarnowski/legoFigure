import { Flex, Spinner } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router";
import { ShippingForm } from "../../components/ShippingForm";
import { SummaryCard } from "../../components/Summary";
import { Routes } from "../../shared";
import { FormProvider, useForm } from "react-hook-form";
import { ShippingData } from "../../shared/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { format } from "date-fns";
import { useAtom } from "jotai";
import { selectedFigureIdAtom } from "../../shared/atoms";
import { useShippingMutation } from "../../api/queries/useShippingMutation";
import { useFigureQuery } from "../../api/queries/useFigureQuery";
import { useRandomFiguresQuery } from "../../api/queries/useRandomFiguresQuery";

type Props = {};

const ShippingSchema = Yup.object().shape({
	name: Yup.string().min(2, "Too Short!").max(20, "Too Long!").required("Required"),
	surname: Yup.string().min(2, "Too Short!").max(20, "Too Long!").required("Required"),
	email: Yup.string().email("Email is invalid").required("Required"),
	phoneNumber: Yup.string().length(9, "Enter a valid Phone number").required("Required"),
	dateOfBirth: Yup.date().max(new Date(), "Date of birth cannot be a future date").required("Required"),
	address: Yup.string().required("Required"),
	city: Yup.string().required("Required"),
	state: Yup.string().required("Required"),
	zipCode: Yup.string().required("Required"),
});

export const CheckoutPage = (props: Props) => {
	const navigate = useNavigate();
	const methods = useForm<ShippingData>({
		resolver: yupResolver(ShippingSchema),
		mode: "onBlur",
		defaultValues: {
			name: "",
			surname: "",
			phoneNumber: "",
			email: "",
			address: "",
			dateOfBirth: format(new Date(), "yyyy-MM-dd"),
			city: "",
			zipCode: "",
			state: "",
		},
	});
	const shippingMutation = useShippingMutation();
	const [figureId, setFigureId] = useAtom(selectedFigureIdAtom);
	const { refetch } = useRandomFiguresQuery();
	if (figureId === null) return <Navigate to={Routes.error} />;
	// fetching again just to be closer to real world scenario
	const { data: figure, isLoading } = useFigureQuery(figureId);
	if (isLoading) return <Spinner />;
	if (!figure) return <Navigate to={Routes.error} />;

	async function onSubmit(values: ShippingData) {
		shippingMutation.mutate(values, {
			onSuccess: () => {
				refetch();
				setFigureId(null);
				navigate(Routes.home);
			},
		});
	}
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Flex justifyContent={"center"} alignItems={"center"} gap={20} wrap={"wrap"} m={5}>
					<ShippingForm />
					<SummaryCard setId={figure.set_num} imgUrl={figure.set_img_url} name={figure.name} isSubmitting={shippingMutation.isLoading} />
				</Flex>
			</form>
		</FormProvider>
	);
};
