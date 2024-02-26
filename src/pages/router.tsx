import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./Layout"
import { Products } from "./products"
import { PricePlans} from "./price-plans"
import { Pages } from "./pages"

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Products />,
            },
            {
                path: '/price-plans',
                element: <PricePlans />
            },
            {
                path: '/pages',
                element: <Pages />
            },
        ]
    }
])
