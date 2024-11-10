/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CompanyHistory as PrismaCompanyHistory } from "@prisma/client";

export class CompanyHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CompanyHistoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.companyHistory.count(args);
  }

  async companyHistories(
    args: Prisma.CompanyHistoryFindManyArgs
  ): Promise<PrismaCompanyHistory[]> {
    return this.prisma.companyHistory.findMany(args);
  }
  async companyHistory(
    args: Prisma.CompanyHistoryFindUniqueArgs
  ): Promise<PrismaCompanyHistory | null> {
    return this.prisma.companyHistory.findUnique(args);
  }
  async createCompanyHistory(
    args: Prisma.CompanyHistoryCreateArgs
  ): Promise<PrismaCompanyHistory> {
    return this.prisma.companyHistory.create(args);
  }
  async updateCompanyHistory(
    args: Prisma.CompanyHistoryUpdateArgs
  ): Promise<PrismaCompanyHistory> {
    return this.prisma.companyHistory.update(args);
  }
  async deleteCompanyHistory(
    args: Prisma.CompanyHistoryDeleteArgs
  ): Promise<PrismaCompanyHistory> {
    return this.prisma.companyHistory.delete(args);
  }
}
