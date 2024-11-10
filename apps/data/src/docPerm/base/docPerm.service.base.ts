/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DocPerm as PrismaDocPerm } from "@prisma/client";

export class DocPermServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DocPermCountArgs, "select">): Promise<number> {
    return this.prisma.docPerm.count(args);
  }

  async docPerms(args: Prisma.DocPermFindManyArgs): Promise<PrismaDocPerm[]> {
    return this.prisma.docPerm.findMany(args);
  }
  async docPerm(
    args: Prisma.DocPermFindUniqueArgs
  ): Promise<PrismaDocPerm | null> {
    return this.prisma.docPerm.findUnique(args);
  }
  async createDocPerm(args: Prisma.DocPermCreateArgs): Promise<PrismaDocPerm> {
    return this.prisma.docPerm.create(args);
  }
  async updateDocPerm(args: Prisma.DocPermUpdateArgs): Promise<PrismaDocPerm> {
    return this.prisma.docPerm.update(args);
  }
  async deleteDocPerm(args: Prisma.DocPermDeleteArgs): Promise<PrismaDocPerm> {
    return this.prisma.docPerm.delete(args);
  }
}
