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
  QuestRequestItemsLocale as PrismaQuestRequestItemsLocale,
} from "@prisma/client";

export class QuestRequestItemsLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestRequestItemsLocaleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questRequestItemsLocale.count(args);
  }

  async questRequestItemsLocales(
    args: Prisma.QuestRequestItemsLocaleFindManyArgs
  ): Promise<PrismaQuestRequestItemsLocale[]> {
    return this.prisma.questRequestItemsLocale.findMany(args);
  }
  async questRequestItemsLocale(
    args: Prisma.QuestRequestItemsLocaleFindUniqueArgs
  ): Promise<PrismaQuestRequestItemsLocale | null> {
    return this.prisma.questRequestItemsLocale.findUnique(args);
  }
  async createQuestRequestItemsLocale(
    args: Prisma.QuestRequestItemsLocaleCreateArgs
  ): Promise<PrismaQuestRequestItemsLocale> {
    return this.prisma.questRequestItemsLocale.create(args);
  }
  async updateQuestRequestItemsLocale(
    args: Prisma.QuestRequestItemsLocaleUpdateArgs
  ): Promise<PrismaQuestRequestItemsLocale> {
    return this.prisma.questRequestItemsLocale.update(args);
  }
  async deleteQuestRequestItemsLocale(
    args: Prisma.QuestRequestItemsLocaleDeleteArgs
  ): Promise<PrismaQuestRequestItemsLocale> {
    return this.prisma.questRequestItemsLocale.delete(args);
  }
}
