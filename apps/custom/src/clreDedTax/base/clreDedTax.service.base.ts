/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ClreDedTax as PrismaClreDedTax } from "@prisma/client";

export class ClreDedTaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClreDedTaxCountArgs, "select">
  ): Promise<number> {
    return this.prisma.clreDedTax.count(args);
  }

  async clreDedTaxes(
    args: Prisma.ClreDedTaxFindManyArgs
  ): Promise<PrismaClreDedTax[]> {
    return this.prisma.clreDedTax.findMany(args);
  }
  async clreDedTax(
    args: Prisma.ClreDedTaxFindUniqueArgs
  ): Promise<PrismaClreDedTax | null> {
    return this.prisma.clreDedTax.findUnique(args);
  }
  async createClreDedTax(
    args: Prisma.ClreDedTaxCreateArgs
  ): Promise<PrismaClreDedTax> {
    return this.prisma.clreDedTax.create(args);
  }
  async updateClreDedTax(
    args: Prisma.ClreDedTaxUpdateArgs
  ): Promise<PrismaClreDedTax> {
    return this.prisma.clreDedTax.update(args);
  }
  async deleteClreDedTax(
    args: Prisma.ClreDedTaxDeleteArgs
  ): Promise<PrismaClreDedTax> {
    return this.prisma.clreDedTax.delete(args);
  }
}
