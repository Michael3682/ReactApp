import "./styles/index.css"

import App from "./app"
import Login from "./components/login"
import NotFoundPage from "./components/notfoundpage"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const root = createRoot(document.getElementById('root'))

const router = createBrowserRouter([
    { path:"/", element: <Login /> },
    { path:"/home", element: <App /> },
    { path:"*", element: <NotFoundPage /> },
])

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)