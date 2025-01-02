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
  AccountingDimensionDetail as PrismaAccountingDimensionDetail,
} from "@prisma/client";

export class AccountingDimensionDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AccountingDimensionDetailCountArgs, "select">
  ): Promise<number> {
    return this.prisma.accountingDimensionDetail.count(args);
  }

  async accountingDimensionDetails(
    args: Prisma.AccountingDimensionDetailFindManyArgs
  ): Promise<PrismaAccountingDimensionDetail[]> {
    return this.prisma.accountingDimensionDetail.findMany(args);
  }
  async accountingDimensionDetail(
    args: Prisma.AccountingDimensionDetailFindUniqueArgs
  ): Promise<PrismaAccountingDimensionDetail | null> {
    return this.prisma.accountingDimensionDetail.findUnique(args);
  }
  async createAccountingDimensionDetail(
    args: Prisma.AccountingDimensionDetailCreateArgs
  ): Promise<PrismaAccountingDimensionDetail> {
    return this.prisma.accountingDimensionDetail.create(args);
  }
  async updateAccountingDimensionDetail(
    args: Prisma.AccountingDimensionDetailUpdateArgs
  ): Promise<PrismaAccountingDimensionDetail> {
    return this.prisma.accountingDimensionDetail.update(args);
  }
  async deleteAccountingDimensionDetail(
    args: Prisma.AccountingDimensionDetailDeleteArgs
  ): Promise<PrismaAccountingDimensionDetail> {
    return this.prisma.accountingDimensionDetail.delete(args);
  }
}