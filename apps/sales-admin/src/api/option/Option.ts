import { Discount } from "../discount/Discount";
import { Constraint } from "../constraint/Constraint";
import { Feature } from "../feature/Feature";
import { Price } from "../price/Price";
import { Product } from "../product/Product";

export type Option = {
  createdAt: Date;
  discount?: Discount | null;
  drivingConstraints?: Constraint | null;
  feature?: Feature | null;
  id: string;
  leadingConstraints?: Constraint | null;
  price?: Price | null;
  product?: Product | null;
  updatedAt: Date;
};
