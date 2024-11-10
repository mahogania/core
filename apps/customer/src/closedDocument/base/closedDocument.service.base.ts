/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ClosedDocument as PrismaClosedDocument } from "@prisma/client";

export class ClosedDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClosedDocumentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.closedDocument.count(args);
  }

  async closedDocuments(
    args: Prisma.ClosedDocumentFindManyArgs
  ): Promise<PrismaClosedDocument[]> {
    return this.prisma.closedDocument.findMany(args);
  }
  async closedDocument(
    args: Prisma.ClosedDocumentFindUniqueArgs
  ): Promise<PrismaClosedDocument | null> {
    return this.prisma.closedDocument.findUnique(args);
  }
  async createClosedDocument(
    args: Prisma.ClosedDocumentCreateArgs
  ): Promise<PrismaClosedDocument> {
    return this.prisma.closedDocument.create(args);
  }
  async updateClosedDocument(
    args: Prisma.ClosedDocumentUpdateArgs
  ): Promise<PrismaClosedDocument> {
    return this.prisma.closedDocument.update(args);
  }
  async deleteClosedDocument(
    args: Prisma.ClosedDocumentDeleteArgs
  ): Promise<PrismaClosedDocument> {
    return this.prisma.closedDocument.delete(args);
  }
}
