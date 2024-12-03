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
  ProductionPlanItem as PrismaProductionPlanItem,
} from "@prisma/client";

export class ProductionPlanItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductionPlanItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productionPlanItem.count(args);
  }

  async productionPlanItems(
    args: Prisma.ProductionPlanItemFindManyArgs
  ): Promise<PrismaProductionPlanItem[]> {
    return this.prisma.productionPlanItem.findMany(args);
  }
  async productionPlanItem(
    args: Prisma.ProductionPlanItemFindUniqueArgs
  ): Promise<PrismaProductionPlanItem | null> {
    return this.prisma.productionPlanItem.findUnique(args);
  }
  async createProductionPlanItem(
    args: Prisma.ProductionPlanItemCreateArgs
  ): Promise<PrismaProductionPlanItem> {
    return this.prisma.productionPlanItem.create(args);
  }
  async updateProductionPlanItem(
    args: Prisma.ProductionPlanItemUpdateArgs
  ): Promise<PrismaProductionPlanItem> {
    return this.prisma.productionPlanItem.update(args);
  }
  async deleteProductionPlanItem(
    args: Prisma.ProductionPlanItemDeleteArgs
  ): Promise<PrismaProductionPlanItem> {
    return this.prisma.productionPlanItem.delete(args);
  }
}
