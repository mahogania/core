/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, WorkOrder as PrismaWorkOrder } from "@prisma/client";

export class WorkOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WorkOrderCountArgs, "select">
  ): Promise<number> {
    return this.prisma.workOrder.count(args);
  }

  async workOrders(
    args: Prisma.WorkOrderFindManyArgs
  ): Promise<PrismaWorkOrder[]> {
    return this.prisma.workOrder.findMany(args);
  }
  async workOrder(
    args: Prisma.WorkOrderFindUniqueArgs
  ): Promise<PrismaWorkOrder | null> {
    return this.prisma.workOrder.findUnique(args);
  }
  async createWorkOrder(
    args: Prisma.WorkOrderCreateArgs
  ): Promise<PrismaWorkOrder> {
    return this.prisma.workOrder.create(args);
  }
  async updateWorkOrder(
    args: Prisma.WorkOrderUpdateArgs
  ): Promise<PrismaWorkOrder> {
    return this.prisma.workOrder.update(args);
  }
  async deleteWorkOrder(
    args: Prisma.WorkOrderDeleteArgs
  ): Promise<PrismaWorkOrder> {
    return this.prisma.workOrder.delete(args);
  }
}
