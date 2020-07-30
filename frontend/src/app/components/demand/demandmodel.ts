import { Product } from './../product/productmodel';
export interface Demand {
    id?: number,
    cliente: number,
    total: number,
    dtCompra: string,
    produtos: Product[]
}