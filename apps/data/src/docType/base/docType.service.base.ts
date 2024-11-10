/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DocType as PrismaDocType } from "@prisma/client";

export class DocTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DocTypeCountArgs, "select">): Promise<number> {
    return this.prisma.docType.count(args);
  }

  async docTypes(args: Prisma.DocTypeFindManyArgs): Promise<PrismaDocType[]> {
    return this.prisma.docType.findMany(args);
  }
  async docType(
    args: Prisma.DocTypeFindUniqueArgs
  ): Promise<PrismaDocType | null> {
    return this.prisma.docType.findUnique(args);
  }
  async createDocType(args: Prisma.DocTypeCreateArgs): Promise<PrismaDocType> {
    return this.prisma.docType.create(args);
  }
  async updateDocType(args: Prisma.DocTypeUpdateArgs): Promise<PrismaDocType> {
    return this.prisma.docType.update(args);
  }
  async deleteDocType(args: Prisma.DocTypeDeleteArgs): Promise<PrismaDocType> {
    return this.prisma.docType.delete(args);
  }
}