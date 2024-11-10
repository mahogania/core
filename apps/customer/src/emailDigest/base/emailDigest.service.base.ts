/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, EmailDigest as PrismaEmailDigest } from "@prisma/client";

export class EmailDigestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmailDigestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.emailDigest.count(args);
  }

  async emailDigests(
    args: Prisma.EmailDigestFindManyArgs
  ): Promise<PrismaEmailDigest[]> {
    return this.prisma.emailDigest.findMany(args);
  }
  async emailDigest(
    args: Prisma.EmailDigestFindUniqueArgs
  ): Promise<PrismaEmailDigest | null> {
    return this.prisma.emailDigest.findUnique(args);
  }
  async createEmailDigest(
    args: Prisma.EmailDigestCreateArgs
  ): Promise<PrismaEmailDigest> {
    return this.prisma.emailDigest.create(args);
  }
  async updateEmailDigest(
    args: Prisma.EmailDigestUpdateArgs
  ): Promise<PrismaEmailDigest> {
    return this.prisma.emailDigest.update(args);
  }
  async deleteEmailDigest(
    args: Prisma.EmailDigestDeleteArgs
  ): Promise<PrismaEmailDigest> {
    return this.prisma.emailDigest.delete(args);
  }
}
