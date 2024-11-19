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
  Industry as PrismaIndustry,
  Business as PrismaBusiness,
  Relation as PrismaRelation,
} from "@prisma/client";

export class IndustryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.IndustryCountArgs, "select">): Promise<number> {
    return this.prisma.industry.count(args);
  }

  async industries(
    args: Prisma.IndustryFindManyArgs
  ): Promise<PrismaIndustry[]> {
    return this.prisma.industry.findMany(args);
  }
  async industry(
    args: Prisma.IndustryFindUniqueArgs
  ): Promise<PrismaIndustry | null> {
    return this.prisma.industry.findUnique(args);
  }
  async createIndustry(
    args: Prisma.IndustryCreateArgs
  ): Promise<PrismaIndustry> {
    return this.prisma.industry.create(args);
  }
  async updateIndustry(
    args: Prisma.IndustryUpdateArgs
  ): Promise<PrismaIndustry> {
    return this.prisma.industry.update(args);
  }
  async deleteIndustry(
    args: Prisma.IndustryDeleteArgs
  ): Promise<PrismaIndustry> {
    return this.prisma.industry.delete(args);
  }

  async findBusinesses(
    parentId: string,
    args: Prisma.BusinessFindManyArgs
  ): Promise<PrismaBusiness[]> {
    return this.prisma.industry
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .businesses(args);
  }

  async findRelations(
    parentId: string,
    args: Prisma.RelationFindManyArgs
  ): Promise<PrismaRelation[]> {
    return this.prisma.industry
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .relations(args);
  }
}