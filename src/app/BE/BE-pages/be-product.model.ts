export interface ProductType {
  id: string;
  name: string;
  imgLink: string;
  quantity: number;
  soldQuantity: number;
  priceSale: number;
  size: number;
  brand: string;
  unit: string;
  isStatus: boolean;
  categoryId: string;
}

export interface CreateProductType {
  name: string;
  imgLink: string;
  quantity: number;
  priceSale: number;
  size: number;
  brand: string;
  unit: string;
  isStatus: boolean;
  categoryId: string;
}

export interface CategoryType {
  id: string;
  name: string;
  isStatus: boolean;
}

export interface CourtType {
  id: string;
  name: string;
  price: number;
  isStatus: boolean;
}

export interface SupplierType {
  id: string;
  name: string;
  phoneNumber: string;
  address: string;
  email: string;
}
export interface CreateSupplierType {
  name: string;
  phoneNumber: string;
  address: string;
  email: string;
}

export interface PurchaseType {
  id: string;
  quantity: number;
  price: number;
  productName: string;
  supplierName: string;
  crateAt: string;
  userName: string;
}
export interface CreatePurchaseType {
  quantity: number;
  price: number;
  productId: string;
  supplierId: string;
  crateAt: string;
  userId: string;
}

export interface SaleType {
  id: string;
  name: string;
  startDay: string;
  endDay: string;
  precent: number;
  isStatus: boolean;
}

export interface CreateSaleType {
  name: string;
  startDay: string;
  endDay: string;
  precent: number;
  isStatus: boolean;
}
