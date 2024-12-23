/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UomCategory as PrismaUomCategory } from "@prisma/client";

export class UomCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UomCategoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.uomCategory.count(args);
  }

  async uomCategories(
    args: Prisma.UomCategoryFindManyArgs
  ): Promise<PrismaUomCategory[]> {
    return this.prisma.uomCategory.findMany(args);
  }
  async uomCategory(
    args: Prisma.UomCategoryFindUniqueArgs
  ): Promise<PrismaUomCategory | null> {
    return this.prisma.uomCategory.findUnique(args);
  }
  async createUomCategory(
    args: Prisma.UomCategoryCreateArgs
  ): Promise<PrismaUomCategory> {
    return this.prisma.uomCategory.create(args);
  }
  async updateUomCategory(
    args: Prisma.UomCategoryUpdateArgs
  ): Promise<PrismaUomCategory> {
    return this.prisma.uomCategory.update(args);
  }
  async deleteUomCategory(
    args: Prisma.UomCategoryDeleteArgs
  ): Promise<PrismaUomCategory> {
    return this.prisma.uomCategory.delete(args);
  }
}
