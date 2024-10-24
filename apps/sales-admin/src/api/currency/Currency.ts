import { Discount } from "../discount/Discount";
import { Price } from "../price/Price";

export type Currency = {
  createdAt: Date;
  discounts?: Array<Discount>;
  id: string;
  precision: number | null;
  prices?: Array<Price>;
  symbolField: string | null;
  updatedAt: Date;
};
