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
  TbClreDedPrcDclrPdls as PrismaTbClreDedPrcDclrPdls,
} from "@prisma/client";

export class TbClreDedPrcDclrPdlsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TbClreDedPrcDclrPdlsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.tbClreDedPrcDclrPdls.count(args);
  }

  async tbClreDedPrcDclrPdlsItems(
    args: Prisma.TbClreDedPrcDclrPdlsFindManyArgs
  ): Promise<PrismaTbClreDedPrcDclrPdls[]> {
    return this.prisma.tbClreDedPrcDclrPdls.findMany(args);
  }
  async tbClreDedPrcDclrPdls(
    args: Prisma.TbClreDedPrcDclrPdlsFindUniqueArgs
  ): Promise<PrismaTbClreDedPrcDclrPdls | null> {
    return this.prisma.tbClreDedPrcDclrPdls.findUnique(args);
  }
  async createTbClreDedPrcDclrPdls(
    args: Prisma.TbClreDedPrcDclrPdlsCreateArgs
  ): Promise<PrismaTbClreDedPrcDclrPdls> {
    return this.prisma.tbClreDedPrcDclrPdls.create(args);
  }
  async updateTbClreDedPrcDclrPdls(
    args: Prisma.TbClreDedPrcDclrPdlsUpdateArgs
  ): Promise<PrismaTbClreDedPrcDclrPdls> {
    return this.prisma.tbClreDedPrcDclrPdls.update(args);
  }
  async deleteTbClreDedPrcDclrPdls(
    args: Prisma.TbClreDedPrcDclrPdlsDeleteArgs
  ): Promise<PrismaTbClreDedPrcDclrPdls> {
    return this.prisma.tbClreDedPrcDclrPdls.delete(args);
  }
}
