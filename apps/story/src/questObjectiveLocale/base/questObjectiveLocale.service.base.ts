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
  QuestObjectiveLocale as PrismaQuestObjectiveLocale,
  QuestObjective as PrismaQuestObjective,
} from "@prisma/client";

export class QuestObjectiveLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestObjectiveLocaleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questObjectiveLocale.count(args);
  }

  async questObjectiveLocales(
    args: Prisma.QuestObjectiveLocaleFindManyArgs
  ): Promise<PrismaQuestObjectiveLocale[]> {
    return this.prisma.questObjectiveLocale.findMany(args);
  }
  async questObjectiveLocale(
    args: Prisma.QuestObjectiveLocaleFindUniqueArgs
  ): Promise<PrismaQuestObjectiveLocale | null> {
    return this.prisma.questObjectiveLocale.findUnique(args);
  }
  async createQuestObjectiveLocale(
    args: Prisma.QuestObjectiveLocaleCreateArgs
  ): Promise<PrismaQuestObjectiveLocale> {
    return this.prisma.questObjectiveLocale.create(args);
  }
  async updateQuestObjectiveLocale(
    args: Prisma.QuestObjectiveLocaleUpdateArgs
  ): Promise<PrismaQuestObjectiveLocale> {
    return this.prisma.questObjectiveLocale.update(args);
  }
  async deleteQuestObjectiveLocale(
    args: Prisma.QuestObjectiveLocaleDeleteArgs
  ): Promise<PrismaQuestObjectiveLocale> {
    return this.prisma.questObjectiveLocale.delete(args);
  }

  async findQuestObjectives(
    parentId: string,
    args: Prisma.QuestObjectiveFindManyArgs
  ): Promise<PrismaQuestObjective[]> {
    return this.prisma.questObjectiveLocale
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .questObjectives(args);
  }
}
