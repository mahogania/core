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
  TbClreDedPrcDclr as PrismaTbClreDedPrcDclr,
} from "@prisma/client";

export class TbClreDedPrcDclrServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TbClreDedPrcDclrCountArgs, "select">
  ): Promise<number> {
    return this.prisma.tbClreDedPrcDclr.count(args);
  }

  async tbClreDedPrcDclrs(
    args: Prisma.TbClreDedPrcDclrFindManyArgs
  ): Promise<PrismaTbClreDedPrcDclr[]> {
    return this.prisma.tbClreDedPrcDclr.findMany(args);
  }
  async tbClreDedPrcDclr(
    args: Prisma.TbClreDedPrcDclrFindUniqueArgs
  ): Promise<PrismaTbClreDedPrcDclr | null> {
    return this.prisma.tbClreDedPrcDclr.findUnique(args);
  }
  async createTbClreDedPrcDclr(
    args: Prisma.TbClreDedPrcDclrCreateArgs
  ): Promise<PrismaTbClreDedPrcDclr> {
    return this.prisma.tbClreDedPrcDclr.create(args);
  }
  async updateTbClreDedPrcDclr(
    args: Prisma.TbClreDedPrcDclrUpdateArgs
  ): Promise<PrismaTbClreDedPrcDclr> {
    return this.prisma.tbClreDedPrcDclr.update(args);
  }
  async deleteTbClreDedPrcDclr(
    args: Prisma.TbClreDedPrcDclrDeleteArgs
  ): Promise<PrismaTbClreDedPrcDclr> {
    return this.prisma.tbClreDedPrcDclr.delete(args);
  }
}