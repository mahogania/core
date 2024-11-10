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
  QuestRequestItem as PrismaQuestRequestItem,
  QuestRequestItemConditional as PrismaQuestRequestItemConditional,
  QuestRequestItemsLocale as PrismaQuestRequestItemsLocale,
  QuestTemplate as PrismaQuestTemplate,
} from "@prisma/client";

export class QuestRequestItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestRequestItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questRequestItem.count(args);
  }

  async questRequestItems(
    args: Prisma.QuestRequestItemFindManyArgs
  ): Promise<PrismaQuestRequestItem[]> {
    return this.prisma.questRequestItem.findMany(args);
  }
  async questRequestItem(
    args: Prisma.QuestRequestItemFindUniqueArgs
  ): Promise<PrismaQuestRequestItem | null> {
    return this.prisma.questRequestItem.findUnique(args);
  }
  async createQuestRequestItem(
    args: Prisma.QuestRequestItemCreateArgs
  ): Promise<PrismaQuestRequestItem> {
    return this.prisma.questRequestItem.create(args);
  }
  async updateQuestRequestItem(
    args: Prisma.QuestRequestItemUpdateArgs
  ): Promise<PrismaQuestRequestItem> {
    return this.prisma.questRequestItem.update(args);
  }
  async deleteQuestRequestItem(
    args: Prisma.QuestRequestItemDeleteArgs
  ): Promise<PrismaQuestRequestItem> {
    return this.prisma.questRequestItem.delete(args);
  }

  async findQuestRequestItemConditionals(
    parentId: string,
    args: Prisma.QuestRequestItemConditionalFindManyArgs
  ): Promise<PrismaQuestRequestItemConditional[]> {
    return this.prisma.questRequestItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .questRequestItemConditionals(args);
  }

  async findQuestRequestItemsLocales(
    parentId: string,
    args: Prisma.QuestRequestItemsLocaleFindManyArgs
  ): Promise<PrismaQuestRequestItemsLocale[]> {
    return this.prisma.questRequestItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .questRequestItemsLocales(args);
  }

  async findQuestTemplates(
    parentId: string,
    args: Prisma.QuestTemplateFindManyArgs
  ): Promise<PrismaQuestTemplate[]> {
    return this.prisma.questRequestItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .questTemplates(args);
  }
}