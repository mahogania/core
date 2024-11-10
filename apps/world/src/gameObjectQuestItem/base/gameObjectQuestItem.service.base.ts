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
  GameObjectQuestItem as PrismaGameObjectQuestItem,
} from "@prisma/client";

export class GameObjectQuestItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GameObjectQuestItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.gameObjectQuestItem.count(args);
  }

  async gameObjectQuestItems(
    args: Prisma.GameObjectQuestItemFindManyArgs
  ): Promise<PrismaGameObjectQuestItem[]> {
    return this.prisma.gameObjectQuestItem.findMany(args);
  }
  async gameObjectQuestItem(
    args: Prisma.GameObjectQuestItemFindUniqueArgs
  ): Promise<PrismaGameObjectQuestItem | null> {
    return this.prisma.gameObjectQuestItem.findUnique(args);
  }
  async createGameObjectQuestItem(
    args: Prisma.GameObjectQuestItemCreateArgs
  ): Promise<PrismaGameObjectQuestItem> {
    return this.prisma.gameObjectQuestItem.create(args);
  }
  async updateGameObjectQuestItem(
    args: Prisma.GameObjectQuestItemUpdateArgs
  ): Promise<PrismaGameObjectQuestItem> {
    return this.prisma.gameObjectQuestItem.update(args);
  }
  async deleteGameObjectQuestItem(
    args: Prisma.GameObjectQuestItemDeleteArgs
  ): Promise<PrismaGameObjectQuestItem> {
    return this.prisma.gameObjectQuestItem.delete(args);
  }
}
