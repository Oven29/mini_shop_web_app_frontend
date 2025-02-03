export type TypeMedia = 'VIDEO' | 'IMAGE';

export interface Media {
  id?: number;
  media_id?: string;
  type?: TypeMedia;
  url?: string;
}

export interface Product {
  id: number;
  name: string;
  translit: string;
  description?: string;
  price: number;
  category_id: number;
  discount?: number;
  discount_expire?: Date;
  amount?: number;
  media: Media[];
}

export interface Category {
  id: number;
  name: string;
  translit: string;
  products: Product[];
  parent_category_id?: number;
  subcategories: Category[];
  parent?: Category;
}

export type OrderStatus = 'RESERVE' | 'CANCEL' | 'DELIVERY' | 'DONE';

export interface Order {
  id: number;
  amount: number;
  discount: number;
  status: OrderStatus;
  user: User;
  items: Product[];
  created_at: Date;
}

export type InvoiceStatus = 'WAIT' | 'PAID' | 'CANCEL';

export interface Invoice {
  id?: number;
  pay_id: string;
  amount: number;
  status: InvoiceStatus;
  method: string;
  url?: string;
  created_at: Date;
}

export interface User {
  user_id: number;
  username?: string;
  first_name: string;
  register_date?: Date;
}

export interface ErrorResponse {
  status_code: number;
  msg: string;
}
