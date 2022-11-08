import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../layout";
import Checkout from "../pages/checkout";
import Choose from "../pages/choose";
import Error from "../pages/error";
import Home from "../pages/home";
import AppRoutes from "../shared/routes";
type Props = {};

const AppRouter = (props: Props) => {
	return (
		<Layout>
			<Routes>
				<Route path={AppRoutes.home} element={<Home />} />
				<Route path={AppRoutes.choose} element={<Choose />} />
				<Route path={AppRoutes.checkout} element={<Checkout />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Layout>
	);
};

export default AppRouter;
