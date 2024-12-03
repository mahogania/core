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
  BankClearanceDetail as PrismaBankClearanceDetail,
} from "@prisma/client";

export class BankClearanceDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BankClearanceDetailCountArgs, "select">
  ): Promise<number> {
    return this.prisma.bankClearanceDetail.count(args);
  }

  async bankClearanceDetails(
    args: Prisma.BankClearanceDetailFindManyArgs
  ): Promise<PrismaBankClearanceDetail[]> {
    return this.prisma.bankClearanceDetail.findMany(args);
  }
  async bankClearanceDetail(
    args: Prisma.BankClearanceDetailFindUniqueArgs
  ): Promise<PrismaBankClearanceDetail | null> {
    return this.prisma.bankClearanceDetail.findUnique(args);
  }
  async createBankClearanceDetail(
    args: Prisma.BankClearanceDetailCreateArgs
  ): Promise<PrismaBankClearanceDetail> {
    return this.prisma.bankClearanceDetail.create(args);
  }
  async updateBankClearanceDetail(
    args: Prisma.BankClearanceDetailUpdateArgs
  ): Promise<PrismaBankClearanceDetail> {
    return this.prisma.bankClearanceDetail.update(args);
  }
  async deleteBankClearanceDetail(
    args: Prisma.BankClearanceDetailDeleteArgs
  ): Promise<PrismaBankClearanceDetail> {
    return this.prisma.bankClearanceDetail.delete(args);
  }
}
