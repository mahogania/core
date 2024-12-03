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
  TbClreDedVlutComn as PrismaTbClreDedVlutComn,
} from "@prisma/client";

export class TbClreDedVlutComnServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TbClreDedVlutComnCountArgs, "select">
  ): Promise<number> {
    return this.prisma.tbClreDedVlutComn.count(args);
  }

  async tbClreDedVlutComns(
    args: Prisma.TbClreDedVlutComnFindManyArgs
  ): Promise<PrismaTbClreDedVlutComn[]> {
    return this.prisma.tbClreDedVlutComn.findMany(args);
  }
  async tbClreDedVlutComn(
    args: Prisma.TbClreDedVlutComnFindUniqueArgs
  ): Promise<PrismaTbClreDedVlutComn | null> {
    return this.prisma.tbClreDedVlutComn.findUnique(args);
  }
  async createTbClreDedVlutComn(
    args: Prisma.TbClreDedVlutComnCreateArgs
  ): Promise<PrismaTbClreDedVlutComn> {
    return this.prisma.tbClreDedVlutComn.create(args);
  }
  async updateTbClreDedVlutComn(
    args: Prisma.TbClreDedVlutComnUpdateArgs
  ): Promise<PrismaTbClreDedVlutComn> {
    return this.prisma.tbClreDedVlutComn.update(args);
  }
  async deleteTbClreDedVlutComn(
    args: Prisma.TbClreDedVlutComnDeleteArgs
  ): Promise<PrismaTbClreDedVlutComn> {
    return this.prisma.tbClreDedVlutComn.delete(args);
  }
}
