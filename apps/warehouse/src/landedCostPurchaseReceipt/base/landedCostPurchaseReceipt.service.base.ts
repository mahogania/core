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
  LandedCostPurchaseReceipt as PrismaLandedCostPurchaseReceipt,
} from "@prisma/client";

export class LandedCostPurchaseReceiptServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LandedCostPurchaseReceiptCountArgs, "select">
  ): Promise<number> {
    return this.prisma.landedCostPurchaseReceipt.count(args);
  }

  async landedCostPurchaseReceipts(
    args: Prisma.LandedCostPurchaseReceiptFindManyArgs
  ): Promise<PrismaLandedCostPurchaseReceipt[]> {
    return this.prisma.landedCostPurchaseReceipt.findMany(args);
  }
  async landedCostPurchaseReceipt(
    args: Prisma.LandedCostPurchaseReceiptFindUniqueArgs
  ): Promise<PrismaLandedCostPurchaseReceipt | null> {
    return this.prisma.landedCostPurchaseReceipt.findUnique(args);
  }
  async createLandedCostPurchaseReceipt(
    args: Prisma.LandedCostPurchaseReceiptCreateArgs
  ): Promise<PrismaLandedCostPurchaseReceipt> {
    return this.prisma.landedCostPurchaseReceipt.create(args);
  }
  async updateLandedCostPurchaseReceipt(
    args: Prisma.LandedCostPurchaseReceiptUpdateArgs
  ): Promise<PrismaLandedCostPurchaseReceipt> {
    return this.prisma.landedCostPurchaseReceipt.update(args);
  }
  async deleteLandedCostPurchaseReceipt(
    args: Prisma.LandedCostPurchaseReceiptDeleteArgs
  ): Promise<PrismaLandedCostPurchaseReceipt> {
    return this.prisma.landedCostPurchaseReceipt.delete(args);
  }
}