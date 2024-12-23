/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DocTypeLink as PrismaDocTypeLink } from "@prisma/client";

export class DocTypeLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DocTypeLinkCountArgs, "select">
  ): Promise<number> {
    return this.prisma.docTypeLink.count(args);
  }

  async docTypeLinks(
    args: Prisma.DocTypeLinkFindManyArgs
  ): Promise<PrismaDocTypeLink[]> {
    return this.prisma.docTypeLink.findMany(args);
  }
  async docTypeLink(
    args: Prisma.DocTypeLinkFindUniqueArgs
  ): Promise<PrismaDocTypeLink | null> {
    return this.prisma.docTypeLink.findUnique(args);
  }
  async createDocTypeLink(
    args: Prisma.DocTypeLinkCreateArgs
  ): Promise<PrismaDocTypeLink> {
    return this.prisma.docTypeLink.create(args);
  }
  async updateDocTypeLink(
    args: Prisma.DocTypeLinkUpdateArgs
  ): Promise<PrismaDocTypeLink> {
    return this.prisma.docTypeLink.update(args);
  }
  async deleteDocTypeLink(
    args: Prisma.DocTypeLinkDeleteArgs
  ): Promise<PrismaDocTypeLink> {
    return this.prisma.docTypeLink.delete(args);
  }
}
