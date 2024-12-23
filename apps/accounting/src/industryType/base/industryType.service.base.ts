/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, IndustryType as PrismaIndustryType } from "@prisma/client";

export class IndustryTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.IndustryTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.industryType.count(args);
  }

  async industryTypes(
    args: Prisma.IndustryTypeFindManyArgs
  ): Promise<PrismaIndustryType[]> {
    return this.prisma.industryType.findMany(args);
  }
  async industryType(
    args: Prisma.IndustryTypeFindUniqueArgs
  ): Promise<PrismaIndustryType | null> {
    return this.prisma.industryType.findUnique(args);
  }
  async createIndustryType(
    args: Prisma.IndustryTypeCreateArgs
  ): Promise<PrismaIndustryType> {
    return this.prisma.industryType.create(args);
  }
  async updateIndustryType(
    args: Prisma.IndustryTypeUpdateArgs
  ): Promise<PrismaIndustryType> {
    return this.prisma.industryType.update(args);
  }
  async deleteIndustryType(
    args: Prisma.IndustryTypeDeleteArgs
  ): Promise<PrismaIndustryType> {
    return this.prisma.industryType.delete(args);
  }
}
