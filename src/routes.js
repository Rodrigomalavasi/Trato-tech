import Home from "Pages/Home";
import Categoria from "Pages/Categoria";
import PaginaPadrao from "Pages/PaginaPadrao";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrinho from "Pages/Carrinho";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
                    <Route path='/carrinho' element={<Carrinho />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}