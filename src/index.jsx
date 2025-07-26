import "./stylings/index.css"

import App from "./app"
import Main from "./components/main"
import Login from "./components/login"
import Navbar from "./components/navbar"
import NotFoundPage from "./components/notfoundpage"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const root = createRoot(document.getElementById('root'))

const router = createBrowserRouter([
    { path:"/", element:<App />},
    { path:"/main", element: <Main /> },
    { path:"/navbar", element: <Navbar /> },
    { path:"/login", element: <Login /> },
    { path:"*", element: <NotFoundPage /> },
])

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)