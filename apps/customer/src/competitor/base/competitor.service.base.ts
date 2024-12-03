/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Competitor as PrismaCompetitor } from "@prisma/client";

export class CompetitorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CompetitorCountArgs, "select">
  ): Promise<number> {
    return this.prisma.competitor.count(args);
  }

  async competitors(
    args: Prisma.CompetitorFindManyArgs
  ): Promise<PrismaCompetitor[]> {
    return this.prisma.competitor.findMany(args);
  }
  async competitor(
    args: Prisma.CompetitorFindUniqueArgs
  ): Promise<PrismaCompetitor | null> {
    return this.prisma.competitor.findUnique(args);
  }
  async createCompetitor(
    args: Prisma.CompetitorCreateArgs
  ): Promise<PrismaCompetitor> {
    return this.prisma.competitor.create(args);
  }
  async updateCompetitor(
    args: Prisma.CompetitorUpdateArgs
  ): Promise<PrismaCompetitor> {
    return this.prisma.competitor.update(args);
  }
  async deleteCompetitor(
    args: Prisma.CompetitorDeleteArgs
  ): Promise<PrismaCompetitor> {
    return this.prisma.competitor.delete(args);
  }
}
