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
  QuestObjectivesLocale as PrismaQuestObjectivesLocale,
} from "@prisma/client";

export class QuestObjectivesLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestObjectivesLocaleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questObjectivesLocale.count(args);
  }

  async questObjectivesLocales(
    args: Prisma.QuestObjectivesLocaleFindManyArgs
  ): Promise<PrismaQuestObjectivesLocale[]> {
    return this.prisma.questObjectivesLocale.findMany(args);
  }
  async questObjectivesLocale(
    args: Prisma.QuestObjectivesLocaleFindUniqueArgs
  ): Promise<PrismaQuestObjectivesLocale | null> {
    return this.prisma.questObjectivesLocale.findUnique(args);
  }
  async createQuestObjectivesLocale(
    args: Prisma.QuestObjectivesLocaleCreateArgs
  ): Promise<PrismaQuestObjectivesLocale> {
    return this.prisma.questObjectivesLocale.create(args);
  }
  async updateQuestObjectivesLocale(
    args: Prisma.QuestObjectivesLocaleUpdateArgs
  ): Promise<PrismaQuestObjectivesLocale> {
    return this.prisma.questObjectivesLocale.update(args);
  }
  async deleteQuestObjectivesLocale(
    args: Prisma.QuestObjectivesLocaleDeleteArgs
  ): Promise<PrismaQuestObjectivesLocale> {
    return this.prisma.questObjectivesLocale.delete(args);
  }
}
