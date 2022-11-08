import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../../routes";

type Props = {
	children: React.ReactNode;
};

const RouterProvider = ({ children }: Props) => {
	return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouterProvider;
