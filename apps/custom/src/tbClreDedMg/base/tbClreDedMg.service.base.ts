/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TbClreDedMg as PrismaTbClreDedMg } from "@prisma/client";

export class TbClreDedMgServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TbClreDedMgCountArgs, "select">
  ): Promise<number> {
    return this.prisma.tbClreDedMg.count(args);
  }

  async tbClreDedMgs(
    args: Prisma.TbClreDedMgFindManyArgs
  ): Promise<PrismaTbClreDedMg[]> {
    return this.prisma.tbClreDedMg.findMany(args);
  }
  async tbClreDedMg(
    args: Prisma.TbClreDedMgFindUniqueArgs
  ): Promise<PrismaTbClreDedMg | null> {
    return this.prisma.tbClreDedMg.findUnique(args);
  }
  async createTbClreDedMg(
    args: Prisma.TbClreDedMgCreateArgs
  ): Promise<PrismaTbClreDedMg> {
    return this.prisma.tbClreDedMg.create(args);
  }
  async updateTbClreDedMg(
    args: Prisma.TbClreDedMgUpdateArgs
  ): Promise<PrismaTbClreDedMg> {
    return this.prisma.tbClreDedMg.update(args);
  }
  async deleteTbClreDedMg(
    args: Prisma.TbClreDedMgDeleteArgs
  ): Promise<PrismaTbClreDedMg> {
    return this.prisma.tbClreDedMg.delete(args);
  }
}