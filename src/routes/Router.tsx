import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Layout } from "../layout";
import { CheckoutPage } from "../pages/checkout";
import { ChooseFigurePage } from "../pages/chooseFigure";
import { Error } from "../pages/error";
import { HomePage } from "../pages/home";
import { Routes as AppRoutes } from "../shared/";
type Props = {};

export const AppRouter = (props: Props) => {
	return (
		<Layout>
			<Routes>
				<Route path={AppRoutes.home} element={<HomePage />} />
				<Route path={AppRoutes.choose} element={<ChooseFigurePage />} />
				<Route path={AppRoutes.checkout} element={<CheckoutPage />} />
				<Route path={AppRoutes.error} element={<Error />} />
				<Route path={"*"} element={<Navigate replace to={AppRoutes.error} />} />
			</Routes>
		</Layout>
	);
};
