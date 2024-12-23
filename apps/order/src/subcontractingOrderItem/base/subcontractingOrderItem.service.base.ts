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
  SubcontractingOrderItem as PrismaSubcontractingOrderItem,
} from "@prisma/client";

export class SubcontractingOrderItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SubcontractingOrderItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.subcontractingOrderItem.count(args);
  }

  async subcontractingOrderItems(
    args: Prisma.SubcontractingOrderItemFindManyArgs
  ): Promise<PrismaSubcontractingOrderItem[]> {
    return this.prisma.subcontractingOrderItem.findMany(args);
  }
  async subcontractingOrderItem(
    args: Prisma.SubcontractingOrderItemFindUniqueArgs
  ): Promise<PrismaSubcontractingOrderItem | null> {
    return this.prisma.subcontractingOrderItem.findUnique(args);
  }
  async createSubcontractingOrderItem(
    args: Prisma.SubcontractingOrderItemCreateArgs
  ): Promise<PrismaSubcontractingOrderItem> {
    return this.prisma.subcontractingOrderItem.create(args);
  }
  async updateSubcontractingOrderItem(
    args: Prisma.SubcontractingOrderItemUpdateArgs
  ): Promise<PrismaSubcontractingOrderItem> {
    return this.prisma.subcontractingOrderItem.update(args);
  }
  async deleteSubcontractingOrderItem(
    args: Prisma.SubcontractingOrderItemDeleteArgs
  ): Promise<PrismaSubcontractingOrderItem> {
    return this.prisma.subcontractingOrderItem.delete(args);
  }
}
