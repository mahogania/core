/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SalesPartner as PrismaSalesPartner } from "@prisma/client";

export class SalesPartnerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SalesPartnerCountArgs, "select">
  ): Promise<number> {
    return this.prisma.salesPartner.count(args);
  }

  async salesPartners(
    args: Prisma.SalesPartnerFindManyArgs
  ): Promise<PrismaSalesPartner[]> {
    return this.prisma.salesPartner.findMany(args);
  }
  async salesPartner(
    args: Prisma.SalesPartnerFindUniqueArgs
  ): Promise<PrismaSalesPartner | null> {
    return this.prisma.salesPartner.findUnique(args);
  }
  async createSalesPartner(
    args: Prisma.SalesPartnerCreateArgs
  ): Promise<PrismaSalesPartner> {
    return this.prisma.salesPartner.create(args);
  }
  async updateSalesPartner(
    args: Prisma.SalesPartnerUpdateArgs
  ): Promise<PrismaSalesPartner> {
    return this.prisma.salesPartner.update(args);
  }
  async deleteSalesPartner(
    args: Prisma.SalesPartnerDeleteArgs
  ): Promise<PrismaSalesPartner> {
    return this.prisma.salesPartner.delete(args);
  }
}
