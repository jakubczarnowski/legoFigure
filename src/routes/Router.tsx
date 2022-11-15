import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Layout } from "../layout";
import { CheckoutPage } from "../pages/Checkout";
import { ChooseFigurePage } from "../pages/ChooseFigure";
import { Error } from "../pages/Error";
import { HomePage } from "../pages/Home";
import { Routes as AppRoutes } from "../shared/";

export const AppRouter = () => {
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
