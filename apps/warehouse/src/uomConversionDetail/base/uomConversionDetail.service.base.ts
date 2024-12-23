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
  UomConversionDetail as PrismaUomConversionDetail,
} from "@prisma/client";

export class UomConversionDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UomConversionDetailCountArgs, "select">
  ): Promise<number> {
    return this.prisma.uomConversionDetail.count(args);
  }

  async uomConversionDetails(
    args: Prisma.UomConversionDetailFindManyArgs
  ): Promise<PrismaUomConversionDetail[]> {
    return this.prisma.uomConversionDetail.findMany(args);
  }
  async uomConversionDetail(
    args: Prisma.UomConversionDetailFindUniqueArgs
  ): Promise<PrismaUomConversionDetail | null> {
    return this.prisma.uomConversionDetail.findUnique(args);
  }
  async createUomConversionDetail(
    args: Prisma.UomConversionDetailCreateArgs
  ): Promise<PrismaUomConversionDetail> {
    return this.prisma.uomConversionDetail.create(args);
  }
  async updateUomConversionDetail(
    args: Prisma.UomConversionDetailUpdateArgs
  ): Promise<PrismaUomConversionDetail> {
    return this.prisma.uomConversionDetail.update(args);
  }
  async deleteUomConversionDetail(
    args: Prisma.UomConversionDetailDeleteArgs
  ): Promise<PrismaUomConversionDetail> {
    return this.prisma.uomConversionDetail.delete(args);
  }
}
