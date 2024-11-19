/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PoolMembers as PrismaPoolMembers } from "@prisma/client";

export class PoolMembersServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PoolMembersCountArgs, "select">
  ): Promise<number> {
    return this.prisma.poolMembers.count(args);
  }

  async poolMembersItems(
    args: Prisma.PoolMembersFindManyArgs
  ): Promise<PrismaPoolMembers[]> {
    return this.prisma.poolMembers.findMany(args);
  }
  async poolMembers(
    args: Prisma.PoolMembersFindUniqueArgs
  ): Promise<PrismaPoolMembers | null> {
    return this.prisma.poolMembers.findUnique(args);
  }
  async createPoolMembers(
    args: Prisma.PoolMembersCreateArgs
  ): Promise<PrismaPoolMembers> {
    return this.prisma.poolMembers.create(args);
  }
  async updatePoolMembers(
    args: Prisma.PoolMembersUpdateArgs
  ): Promise<PrismaPoolMembers> {
    return this.prisma.poolMembers.update(args);
  }
  async deletePoolMembers(
    args: Prisma.PoolMembersDeleteArgs
  ): Promise<PrismaPoolMembers> {
    return this.prisma.poolMembers.delete(args);
  }
}
