import { Discount } from "../discount/Discount";
import { Feature } from "../feature/Feature";
import { Price } from "../price/Price";
import { Product } from "../product/Product";

export type Option = {
  createdAt: Date;
  discount?: Discount | null;
  feature?: Feature | null;
  id: string;
  price?: Price | null;
  product?: Product | null;
  updatedAt: Date;
};
