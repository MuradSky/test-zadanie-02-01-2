interface ProductsData {
    id: number,
    name: string,
    active: boolean,
    createdAt: string,
    options: {
        size: string,
        amount: number
    }   
}

interface PricePlansData {
    id: number,
    description: string,
    active: boolean,
    createdAt: string,
    removedAt: string,
}

interface PagesData {
    id: number,
    title: string,
    active: boolean,
    updatedAt: string,
    publishedAt: string,
}

type Data = ProductsData & PricePlansData & PagesData