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
  SubcontractingBom as PrismaSubcontractingBom,
} from "@prisma/client";

export class SubcontractingBomServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SubcontractingBomCountArgs, "select">
  ): Promise<number> {
    return this.prisma.subcontractingBom.count(args);
  }

  async subcontractingBoms(
    args: Prisma.SubcontractingBomFindManyArgs
  ): Promise<PrismaSubcontractingBom[]> {
    return this.prisma.subcontractingBom.findMany(args);
  }
  async subcontractingBom(
    args: Prisma.SubcontractingBomFindUniqueArgs
  ): Promise<PrismaSubcontractingBom | null> {
    return this.prisma.subcontractingBom.findUnique(args);
  }
  async createSubcontractingBom(
    args: Prisma.SubcontractingBomCreateArgs
  ): Promise<PrismaSubcontractingBom> {
    return this.prisma.subcontractingBom.create(args);
  }
  async updateSubcontractingBom(
    args: Prisma.SubcontractingBomUpdateArgs
  ): Promise<PrismaSubcontractingBom> {
    return this.prisma.subcontractingBom.update(args);
  }
  async deleteSubcontractingBom(
    args: Prisma.SubcontractingBomDeleteArgs
  ): Promise<PrismaSubcontractingBom> {
    return this.prisma.subcontractingBom.delete(args);
  }
}