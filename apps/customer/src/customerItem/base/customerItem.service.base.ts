/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CustomerItem as PrismaCustomerItem } from "@prisma/client";

export class CustomerItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CustomerItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.customerItem.count(args);
  }

  async customerItems(
    args: Prisma.CustomerItemFindManyArgs
  ): Promise<PrismaCustomerItem[]> {
    return this.prisma.customerItem.findMany(args);
  }
  async customerItem(
    args: Prisma.CustomerItemFindUniqueArgs
  ): Promise<PrismaCustomerItem | null> {
    return this.prisma.customerItem.findUnique(args);
  }
  async createCustomerItem(
    args: Prisma.CustomerItemCreateArgs
  ): Promise<PrismaCustomerItem> {
    return this.prisma.customerItem.create(args);
  }
  async updateCustomerItem(
    args: Prisma.CustomerItemUpdateArgs
  ): Promise<PrismaCustomerItem> {
    return this.prisma.customerItem.update(args);
  }
  async deleteCustomerItem(
    args: Prisma.CustomerItemDeleteArgs
  ): Promise<PrismaCustomerItem> {
    return this.prisma.customerItem.delete(args);
  }
}
