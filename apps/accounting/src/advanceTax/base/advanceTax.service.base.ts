/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AdvanceTax as PrismaAdvanceTax } from "@prisma/client";

export class AdvanceTaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AdvanceTaxCountArgs, "select">
  ): Promise<number> {
    return this.prisma.advanceTax.count(args);
  }

  async advanceTaxes(
    args: Prisma.AdvanceTaxFindManyArgs
  ): Promise<PrismaAdvanceTax[]> {
    return this.prisma.advanceTax.findMany(args);
  }
  async advanceTax(
    args: Prisma.AdvanceTaxFindUniqueArgs
  ): Promise<PrismaAdvanceTax | null> {
    return this.prisma.advanceTax.findUnique(args);
  }
  async createAdvanceTax(
    args: Prisma.AdvanceTaxCreateArgs
  ): Promise<PrismaAdvanceTax> {
    return this.prisma.advanceTax.create(args);
  }
  async updateAdvanceTax(
    args: Prisma.AdvanceTaxUpdateArgs
  ): Promise<PrismaAdvanceTax> {
    return this.prisma.advanceTax.update(args);
  }
  async deleteAdvanceTax(
    args: Prisma.AdvanceTaxDeleteArgs
  ): Promise<PrismaAdvanceTax> {
    return this.prisma.advanceTax.delete(args);
  }
}
