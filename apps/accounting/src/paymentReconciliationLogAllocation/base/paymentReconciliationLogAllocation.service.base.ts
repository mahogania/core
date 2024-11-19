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
  PaymentReconciliationLogAllocation as PrismaPaymentReconciliationLogAllocation,
} from "@prisma/client";

export class PaymentReconciliationLogAllocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PaymentReconciliationLogAllocationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.paymentReconciliationLogAllocation.count(args);
  }

  async paymentReconciliationLogAllocations(
    args: Prisma.PaymentReconciliationLogAllocationFindManyArgs
  ): Promise<PrismaPaymentReconciliationLogAllocation[]> {
    return this.prisma.paymentReconciliationLogAllocation.findMany(args);
  }
  async paymentReconciliationLogAllocation(
    args: Prisma.PaymentReconciliationLogAllocationFindUniqueArgs
  ): Promise<PrismaPaymentReconciliationLogAllocation | null> {
    return this.prisma.paymentReconciliationLogAllocation.findUnique(args);
  }
  async createPaymentReconciliationLogAllocation(
    args: Prisma.PaymentReconciliationLogAllocationCreateArgs
  ): Promise<PrismaPaymentReconciliationLogAllocation> {
    return this.prisma.paymentReconciliationLogAllocation.create(args);
  }
  async updatePaymentReconciliationLogAllocation(
    args: Prisma.PaymentReconciliationLogAllocationUpdateArgs
  ): Promise<PrismaPaymentReconciliationLogAllocation> {
    return this.prisma.paymentReconciliationLogAllocation.update(args);
  }
  async deletePaymentReconciliationLogAllocation(
    args: Prisma.PaymentReconciliationLogAllocationDeleteArgs
  ): Promise<PrismaPaymentReconciliationLogAllocation> {
    return this.prisma.paymentReconciliationLogAllocation.delete(args);
  }
}
