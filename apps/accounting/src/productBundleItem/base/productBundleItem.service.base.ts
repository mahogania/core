/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ProductBundleItem as PrismaProductBundleItem,
} from "@prisma/client";

export class ProductBundleItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductBundleItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productBundleItem.count(args);
  }

  async productBundleItems(
    args: Prisma.ProductBundleItemFindManyArgs
  ): Promise<PrismaProductBundleItem[]> {
    return this.prisma.productBundleItem.findMany(args);
  }
  async productBundleItem(
    args: Prisma.ProductBundleItemFindUniqueArgs
  ): Promise<PrismaProductBundleItem | null> {
    return this.prisma.productBundleItem.findUnique(args);
  }
  async createProductBundleItem(
    args: Prisma.ProductBundleItemCreateArgs
  ): Promise<PrismaProductBundleItem> {
    return this.prisma.productBundleItem.create(args);
  }
  async updateProductBundleItem(
    args: Prisma.ProductBundleItemUpdateArgs
  ): Promise<PrismaProductBundleItem> {
    return this.prisma.productBundleItem.update(args);
  }
  async deleteProductBundleItem(
    args: Prisma.ProductBundleItemDeleteArgs
  ): Promise<PrismaProductBundleItem> {
    return this.prisma.productBundleItem.delete(args);
  }
}
