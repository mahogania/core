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
  CustomerGroupItem as PrismaCustomerGroupItem,
} from "@prisma/client";

export class CustomerGroupItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CustomerGroupItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.customerGroupItem.count(args);
  }

  async customerGroupItems(
    args: Prisma.CustomerGroupItemFindManyArgs
  ): Promise<PrismaCustomerGroupItem[]> {
    return this.prisma.customerGroupItem.findMany(args);
  }
  async customerGroupItem(
    args: Prisma.CustomerGroupItemFindUniqueArgs
  ): Promise<PrismaCustomerGroupItem | null> {
    return this.prisma.customerGroupItem.findUnique(args);
  }
  async createCustomerGroupItem(
    args: Prisma.CustomerGroupItemCreateArgs
  ): Promise<PrismaCustomerGroupItem> {
    return this.prisma.customerGroupItem.create(args);
  }
  async updateCustomerGroupItem(
    args: Prisma.CustomerGroupItemUpdateArgs
  ): Promise<PrismaCustomerGroupItem> {
    return this.prisma.customerGroupItem.update(args);
  }
  async deleteCustomerGroupItem(
    args: Prisma.CustomerGroupItemDeleteArgs
  ): Promise<PrismaCustomerGroupItem> {
    return this.prisma.customerGroupItem.delete(args);
  }
}
