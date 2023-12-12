export interface Product {
    id?: number,
    img?: string,
    title?: string,
    price?: number,
    color?: string,
    type?: string,
  }

export interface State {
    productInfo: Product,
    cartItems: Product[],
    items: Product[],
  }

export interface Filters {
  types: string[],
  colors: string[],
  minPrice: number,
  maxPrice: number
}