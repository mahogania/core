/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BomWebsiteItem as PrismaBomWebsiteItem } from "@prisma/client";

export class BomWebsiteItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BomWebsiteItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.bomWebsiteItem.count(args);
  }

  async bomWebsiteItems(
    args: Prisma.BomWebsiteItemFindManyArgs
  ): Promise<PrismaBomWebsiteItem[]> {
    return this.prisma.bomWebsiteItem.findMany(args);
  }
  async bomWebsiteItem(
    args: Prisma.BomWebsiteItemFindUniqueArgs
  ): Promise<PrismaBomWebsiteItem | null> {
    return this.prisma.bomWebsiteItem.findUnique(args);
  }
  async createBomWebsiteItem(
    args: Prisma.BomWebsiteItemCreateArgs
  ): Promise<PrismaBomWebsiteItem> {
    return this.prisma.bomWebsiteItem.create(args);
  }
  async updateBomWebsiteItem(
    args: Prisma.BomWebsiteItemUpdateArgs
  ): Promise<PrismaBomWebsiteItem> {
    return this.prisma.bomWebsiteItem.update(args);
  }
  async deleteBomWebsiteItem(
    args: Prisma.BomWebsiteItemDeleteArgs
  ): Promise<PrismaBomWebsiteItem> {
    return this.prisma.bomWebsiteItem.delete(args);
  }
}