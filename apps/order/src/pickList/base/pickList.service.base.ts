/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PickList as PrismaPickList } from "@prisma/client";

export class PickListServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PickListCountArgs, "select">): Promise<number> {
    return this.prisma.pickList.count(args);
  }

  async pickLists(
    args: Prisma.PickListFindManyArgs
  ): Promise<PrismaPickList[]> {
    return this.prisma.pickList.findMany(args);
  }
  async pickList(
    args: Prisma.PickListFindUniqueArgs
  ): Promise<PrismaPickList | null> {
    return this.prisma.pickList.findUnique(args);
  }
  async createPickList(
    args: Prisma.PickListCreateArgs
  ): Promise<PrismaPickList> {
    return this.prisma.pickList.create(args);
  }
  async updatePickList(
    args: Prisma.PickListUpdateArgs
  ): Promise<PrismaPickList> {
    return this.prisma.pickList.update(args);
  }
  async deletePickList(
    args: Prisma.PickListDeleteArgs
  ): Promise<PrismaPickList> {
    return this.prisma.pickList.delete(args);
  }
}
