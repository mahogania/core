/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CustomerGroup as PrismaCustomerGroup } from "@prisma/client";

export class CustomerGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CustomerGroupCountArgs, "select">
  ): Promise<number> {
    return this.prisma.customerGroup.count(args);
  }

  async customerGroups(
    args: Prisma.CustomerGroupFindManyArgs
  ): Promise<PrismaCustomerGroup[]> {
    return this.prisma.customerGroup.findMany(args);
  }
  async customerGroup(
    args: Prisma.CustomerGroupFindUniqueArgs
  ): Promise<PrismaCustomerGroup | null> {
    return this.prisma.customerGroup.findUnique(args);
  }
  async createCustomerGroup(
    args: Prisma.CustomerGroupCreateArgs
  ): Promise<PrismaCustomerGroup> {
    return this.prisma.customerGroup.create(args);
  }
  async updateCustomerGroup(
    args: Prisma.CustomerGroupUpdateArgs
  ): Promise<PrismaCustomerGroup> {
    return this.prisma.customerGroup.update(args);
  }
  async deleteCustomerGroup(
    args: Prisma.CustomerGroupDeleteArgs
  ): Promise<PrismaCustomerGroup> {
    return this.prisma.customerGroup.delete(args);
  }
}
