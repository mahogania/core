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
  BomExplosionItem as PrismaBomExplosionItem,
} from "@prisma/client";

export class BomExplosionItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BomExplosionItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.bomExplosionItem.count(args);
  }

  async bomExplosionItems(
    args: Prisma.BomExplosionItemFindManyArgs
  ): Promise<PrismaBomExplosionItem[]> {
    return this.prisma.bomExplosionItem.findMany(args);
  }
  async bomExplosionItem(
    args: Prisma.BomExplosionItemFindUniqueArgs
  ): Promise<PrismaBomExplosionItem | null> {
    return this.prisma.bomExplosionItem.findUnique(args);
  }
  async createBomExplosionItem(
    args: Prisma.BomExplosionItemCreateArgs
  ): Promise<PrismaBomExplosionItem> {
    return this.prisma.bomExplosionItem.create(args);
  }
  async updateBomExplosionItem(
    args: Prisma.BomExplosionItemUpdateArgs
  ): Promise<PrismaBomExplosionItem> {
    return this.prisma.bomExplosionItem.update(args);
  }
  async deleteBomExplosionItem(
    args: Prisma.BomExplosionItemDeleteArgs
  ): Promise<PrismaBomExplosionItem> {
    return this.prisma.bomExplosionItem.delete(args);
  }
}