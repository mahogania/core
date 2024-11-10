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
  ItemCustomerDetail as PrismaItemCustomerDetail,
} from "@prisma/client";

export class ItemCustomerDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ItemCustomerDetailCountArgs, "select">
  ): Promise<number> {
    return this.prisma.itemCustomerDetail.count(args);
  }

  async itemCustomerDetails(
    args: Prisma.ItemCustomerDetailFindManyArgs
  ): Promise<PrismaItemCustomerDetail[]> {
    return this.prisma.itemCustomerDetail.findMany(args);
  }
  async itemCustomerDetail(
    args: Prisma.ItemCustomerDetailFindUniqueArgs
  ): Promise<PrismaItemCustomerDetail | null> {
    return this.prisma.itemCustomerDetail.findUnique(args);
  }
  async createItemCustomerDetail(
    args: Prisma.ItemCustomerDetailCreateArgs
  ): Promise<PrismaItemCustomerDetail> {
    return this.prisma.itemCustomerDetail.create(args);
  }
  async updateItemCustomerDetail(
    args: Prisma.ItemCustomerDetailUpdateArgs
  ): Promise<PrismaItemCustomerDetail> {
    return this.prisma.itemCustomerDetail.update(args);
  }
  async deleteItemCustomerDetail(
    args: Prisma.ItemCustomerDetailDeleteArgs
  ): Promise<PrismaItemCustomerDetail> {
    return this.prisma.itemCustomerDetail.delete(args);
  }
}