/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, LeadSource as PrismaLeadSource } from "@prisma/client";

export class LeadSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LeadSourceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.leadSource.count(args);
  }

  async leadSources(
    args: Prisma.LeadSourceFindManyArgs
  ): Promise<PrismaLeadSource[]> {
    return this.prisma.leadSource.findMany(args);
  }
  async leadSource(
    args: Prisma.LeadSourceFindUniqueArgs
  ): Promise<PrismaLeadSource | null> {
    return this.prisma.leadSource.findUnique(args);
  }
  async createLeadSource(
    args: Prisma.LeadSourceCreateArgs
  ): Promise<PrismaLeadSource> {
    return this.prisma.leadSource.create(args);
  }
  async updateLeadSource(
    args: Prisma.LeadSourceUpdateArgs
  ): Promise<PrismaLeadSource> {
    return this.prisma.leadSource.update(args);
  }
  async deleteLeadSource(
    args: Prisma.LeadSourceDeleteArgs
  ): Promise<PrismaLeadSource> {
    return this.prisma.leadSource.delete(args);
  }
}