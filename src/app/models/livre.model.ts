export interface Ilivres {
    id: number,
    name: string,
    longDescription?: string,
    imageUrl?: string,
    inStock?: boolean,
    shortDescription: string,
    price: number,
    category: string,
    stars: number
}