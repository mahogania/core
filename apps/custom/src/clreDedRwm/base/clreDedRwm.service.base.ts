/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ClreDedRwm as PrismaClreDedRwm } from "@prisma/client";

export class ClreDedRwmServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClreDedRwmCountArgs, "select">
  ): Promise<number> {
    return this.prisma.clreDedRwm.count(args);
  }

  async clreDedRwms(
    args: Prisma.ClreDedRwmFindManyArgs
  ): Promise<PrismaClreDedRwm[]> {
    return this.prisma.clreDedRwm.findMany(args);
  }
  async clreDedRwm(
    args: Prisma.ClreDedRwmFindUniqueArgs
  ): Promise<PrismaClreDedRwm | null> {
    return this.prisma.clreDedRwm.findUnique(args);
  }
  async createClreDedRwm(
    args: Prisma.ClreDedRwmCreateArgs
  ): Promise<PrismaClreDedRwm> {
    return this.prisma.clreDedRwm.create(args);
  }
  async updateClreDedRwm(
    args: Prisma.ClreDedRwmUpdateArgs
  ): Promise<PrismaClreDedRwm> {
    return this.prisma.clreDedRwm.update(args);
  }
  async deleteClreDedRwm(
    args: Prisma.ClreDedRwmDeleteArgs
  ): Promise<PrismaClreDedRwm> {
    return this.prisma.clreDedRwm.delete(args);
  }
}
