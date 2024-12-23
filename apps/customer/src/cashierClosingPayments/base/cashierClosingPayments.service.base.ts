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
  CashierClosingPayments as PrismaCashierClosingPayments,
} from "@prisma/client";

export class CashierClosingPaymentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CashierClosingPaymentsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.cashierClosingPayments.count(args);
  }

  async cashierClosingPaymentsItems(
    args: Prisma.CashierClosingPaymentsFindManyArgs
  ): Promise<PrismaCashierClosingPayments[]> {
    return this.prisma.cashierClosingPayments.findMany(args);
  }
  async cashierClosingPayments(
    args: Prisma.CashierClosingPaymentsFindUniqueArgs
  ): Promise<PrismaCashierClosingPayments | null> {
    return this.prisma.cashierClosingPayments.findUnique(args);
  }
  async createCashierClosingPayments(
    args: Prisma.CashierClosingPaymentsCreateArgs
  ): Promise<PrismaCashierClosingPayments> {
    return this.prisma.cashierClosingPayments.create(args);
  }
  async updateCashierClosingPayments(
    args: Prisma.CashierClosingPaymentsUpdateArgs
  ): Promise<PrismaCashierClosingPayments> {
    return this.prisma.cashierClosingPayments.update(args);
  }
  async deleteCashierClosingPayments(
    args: Prisma.CashierClosingPaymentsDeleteArgs
  ): Promise<PrismaCashierClosingPayments> {
    return this.prisma.cashierClosingPayments.delete(args);
  }
}
