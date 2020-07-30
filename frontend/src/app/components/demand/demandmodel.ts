import { Product } from './../product/productmodel';
export interface Demand {
    id?: number,
    cliente: number,
    total: number,
    dtPedido: string,
    produtos: Product[]
}