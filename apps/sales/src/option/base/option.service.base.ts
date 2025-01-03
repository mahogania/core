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
  Option as PrismaOption,
  Discount as PrismaDiscount,
  Feature as PrismaFeature,
  Price as PrismaPrice,
  Product as PrismaProduct,
} from "@prisma/client";

export class OptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OptionCountArgs, "select">): Promise<number> {
    return this.prisma.option.count(args);
  }

  async options(args: Prisma.OptionFindManyArgs): Promise<PrismaOption[]> {
    return this.prisma.option.findMany(args);
  }
  async option(
    args: Prisma.OptionFindUniqueArgs
  ): Promise<PrismaOption | null> {
    return this.prisma.option.findUnique(args);
  }
  async createOption(args: Prisma.OptionCreateArgs): Promise<PrismaOption> {
    return this.prisma.option.create(args);
  }
  async updateOption(args: Prisma.OptionUpdateArgs): Promise<PrismaOption> {
    return this.prisma.option.update(args);
  }
  async deleteOption(args: Prisma.OptionDeleteArgs): Promise<PrismaOption> {
    return this.prisma.option.delete(args);
  }

  async getDiscount(parentId: string): Promise<PrismaDiscount | null> {
    return this.prisma.option
      .findUnique({
        where: { id: parentId },
      })
      .discount();
  }

  async getFeature(parentId: string): Promise<PrismaFeature | null> {
    return this.prisma.option
      .findUnique({
        where: { id: parentId },
      })
      .feature();
  }

  async getPrice(parentId: string): Promise<PrismaPrice | null> {
    return this.prisma.option
      .findUnique({
        where: { id: parentId },
      })
      .price();
  }

  async getProduct(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.option
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }
}
