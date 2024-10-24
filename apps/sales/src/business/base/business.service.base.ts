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
  Business as PrismaBusiness,
  Unit as PrismaUnit,
  Opportunity as PrismaOpportunity,
  Strength as PrismaStrength,
  Threat as PrismaThreat,
  Weakness as PrismaWeakness,
} from "@prisma/client";

export class BusinessServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BusinessCountArgs, "select">): Promise<number> {
    return this.prisma.business.count(args);
  }

  async businesses(
    args: Prisma.BusinessFindManyArgs
  ): Promise<PrismaBusiness[]> {
    return this.prisma.business.findMany(args);
  }
  async business(
    args: Prisma.BusinessFindUniqueArgs
  ): Promise<PrismaBusiness | null> {
    return this.prisma.business.findUnique(args);
  }
  async createBusiness(
    args: Prisma.BusinessCreateArgs
  ): Promise<PrismaBusiness> {
    return this.prisma.business.create(args);
  }
  async updateBusiness(
    args: Prisma.BusinessUpdateArgs
  ): Promise<PrismaBusiness> {
    return this.prisma.business.update(args);
  }
  async deleteBusiness(
    args: Prisma.BusinessDeleteArgs
  ): Promise<PrismaBusiness> {
    return this.prisma.business.delete(args);
  }

  async findBusinessUnits(
    parentId: string,
    args: Prisma.UnitFindManyArgs
  ): Promise<PrismaUnit[]> {
    return this.prisma.business
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .businessUnits(args);
  }

  async findOpportunities(
    parentId: string,
    args: Prisma.OpportunityFindManyArgs
  ): Promise<PrismaOpportunity[]> {
    return this.prisma.business
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .opportunities(args);
  }

  async findStrengths(
    parentId: string,
    args: Prisma.StrengthFindManyArgs
  ): Promise<PrismaStrength[]> {
    return this.prisma.business
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .strengths(args);
  }

  async findThreats(
    parentId: string,
    args: Prisma.ThreatFindManyArgs
  ): Promise<PrismaThreat[]> {
    return this.prisma.business
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .threats(args);
  }

  async findWeaknesses(
    parentId: string,
    args: Prisma.WeaknessFindManyArgs
  ): Promise<PrismaWeakness[]> {
    return this.prisma.business
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .weaknesses(args);
  }
}
