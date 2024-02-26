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
                path: '/test-zadanie-02-01-2/',
                element: <Products />,
            },
            {
                path: '/test-zadanie-02-01-2/price-plans',
                element: <PricePlans />
            },
            {
                path: '/test-zadanie-02-01-2/pages',
                element: <Pages />
            },
        ]
    }
])
