/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ClreDedCntr as PrismaClreDedCntr } from "@prisma/client";

export class ClreDedCntrServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClreDedCntrCountArgs, "select">
  ): Promise<number> {
    return this.prisma.clreDedCntr.count(args);
  }

  async clreDedCntrs(
    args: Prisma.ClreDedCntrFindManyArgs
  ): Promise<PrismaClreDedCntr[]> {
    return this.prisma.clreDedCntr.findMany(args);
  }
  async clreDedCntr(
    args: Prisma.ClreDedCntrFindUniqueArgs
  ): Promise<PrismaClreDedCntr | null> {
    return this.prisma.clreDedCntr.findUnique(args);
  }
  async createClreDedCntr(
    args: Prisma.ClreDedCntrCreateArgs
  ): Promise<PrismaClreDedCntr> {
    return this.prisma.clreDedCntr.create(args);
  }
  async updateClreDedCntr(
    args: Prisma.ClreDedCntrUpdateArgs
  ): Promise<PrismaClreDedCntr> {
    return this.prisma.clreDedCntr.update(args);
  }
  async deleteClreDedCntr(
    args: Prisma.ClreDedCntrDeleteArgs
  ): Promise<PrismaClreDedCntr> {
    return this.prisma.clreDedCntr.delete(args);
  }
}