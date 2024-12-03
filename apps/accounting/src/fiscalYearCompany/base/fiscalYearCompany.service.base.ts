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
  FiscalYearCompany as PrismaFiscalYearCompany,
} from "@prisma/client";

export class FiscalYearCompanyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FiscalYearCompanyCountArgs, "select">
  ): Promise<number> {
    return this.prisma.fiscalYearCompany.count(args);
  }

  async fiscalYearCompanies(
    args: Prisma.FiscalYearCompanyFindManyArgs
  ): Promise<PrismaFiscalYearCompany[]> {
    return this.prisma.fiscalYearCompany.findMany(args);
  }
  async fiscalYearCompany(
    args: Prisma.FiscalYearCompanyFindUniqueArgs
  ): Promise<PrismaFiscalYearCompany | null> {
    return this.prisma.fiscalYearCompany.findUnique(args);
  }
  async createFiscalYearCompany(
    args: Prisma.FiscalYearCompanyCreateArgs
  ): Promise<PrismaFiscalYearCompany> {
    return this.prisma.fiscalYearCompany.create(args);
  }
  async updateFiscalYearCompany(
    args: Prisma.FiscalYearCompanyUpdateArgs
  ): Promise<PrismaFiscalYearCompany> {
    return this.prisma.fiscalYearCompany.update(args);
  }
  async deleteFiscalYearCompany(
    args: Prisma.FiscalYearCompanyDeleteArgs
  ): Promise<PrismaFiscalYearCompany> {
    return this.prisma.fiscalYearCompany.delete(args);
  }
}
