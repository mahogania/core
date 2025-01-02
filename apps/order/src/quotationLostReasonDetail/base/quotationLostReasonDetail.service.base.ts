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
  QuotationLostReasonDetail as PrismaQuotationLostReasonDetail,
} from "@prisma/client";

export class QuotationLostReasonDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuotationLostReasonDetailCountArgs, "select">
  ): Promise<number> {
    return this.prisma.quotationLostReasonDetail.count(args);
  }

  async quotationLostReasonDetails(
    args: Prisma.QuotationLostReasonDetailFindManyArgs
  ): Promise<PrismaQuotationLostReasonDetail[]> {
    return this.prisma.quotationLostReasonDetail.findMany(args);
  }
  async quotationLostReasonDetail(
    args: Prisma.QuotationLostReasonDetailFindUniqueArgs
  ): Promise<PrismaQuotationLostReasonDetail | null> {
    return this.prisma.quotationLostReasonDetail.findUnique(args);
  }
  async createQuotationLostReasonDetail(
    args: Prisma.QuotationLostReasonDetailCreateArgs
  ): Promise<PrismaQuotationLostReasonDetail> {
    return this.prisma.quotationLostReasonDetail.create(args);
  }
  async updateQuotationLostReasonDetail(
    args: Prisma.QuotationLostReasonDetailUpdateArgs
  ): Promise<PrismaQuotationLostReasonDetail> {
    return this.prisma.quotationLostReasonDetail.update(args);
  }
  async deleteQuotationLostReasonDetail(
    args: Prisma.QuotationLostReasonDetailDeleteArgs
  ): Promise<PrismaQuotationLostReasonDetail> {
    return this.prisma.quotationLostReasonDetail.delete(args);
  }
}