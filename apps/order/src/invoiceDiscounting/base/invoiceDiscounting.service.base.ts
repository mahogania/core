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
  InvoiceDiscounting as PrismaInvoiceDiscounting,
} from "@prisma/client";

export class InvoiceDiscountingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InvoiceDiscountingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.invoiceDiscounting.count(args);
  }

  async invoiceDiscountings(
    args: Prisma.InvoiceDiscountingFindManyArgs
  ): Promise<PrismaInvoiceDiscounting[]> {
    return this.prisma.invoiceDiscounting.findMany(args);
  }
  async invoiceDiscounting(
    args: Prisma.InvoiceDiscountingFindUniqueArgs
  ): Promise<PrismaInvoiceDiscounting | null> {
    return this.prisma.invoiceDiscounting.findUnique(args);
  }
  async createInvoiceDiscounting(
    args: Prisma.InvoiceDiscountingCreateArgs
  ): Promise<PrismaInvoiceDiscounting> {
    return this.prisma.invoiceDiscounting.create(args);
  }
  async updateInvoiceDiscounting(
    args: Prisma.InvoiceDiscountingUpdateArgs
  ): Promise<PrismaInvoiceDiscounting> {
    return this.prisma.invoiceDiscounting.update(args);
  }
  async deleteInvoiceDiscounting(
    args: Prisma.InvoiceDiscountingDeleteArgs
  ): Promise<PrismaInvoiceDiscounting> {
    return this.prisma.invoiceDiscounting.delete(args);
  }
}