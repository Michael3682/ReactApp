import {createRoot} from "react-dom/client"
import App from "./app"
import "./stylings/index.css"

const root = createRoot(document.getElementById('root'))

root.render(<App />)