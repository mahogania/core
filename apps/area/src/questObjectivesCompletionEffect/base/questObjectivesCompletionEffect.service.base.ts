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
  QuestObjectivesCompletionEffect as PrismaQuestObjectivesCompletionEffect,
} from "@prisma/client";

export class QuestObjectivesCompletionEffectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestObjectivesCompletionEffectCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questObjectivesCompletionEffect.count(args);
  }

  async questObjectivesCompletionEffects(
    args: Prisma.QuestObjectivesCompletionEffectFindManyArgs
  ): Promise<PrismaQuestObjectivesCompletionEffect[]> {
    return this.prisma.questObjectivesCompletionEffect.findMany(args);
  }
  async questObjectivesCompletionEffect(
    args: Prisma.QuestObjectivesCompletionEffectFindUniqueArgs
  ): Promise<PrismaQuestObjectivesCompletionEffect | null> {
    return this.prisma.questObjectivesCompletionEffect.findUnique(args);
  }
  async createQuestObjectivesCompletionEffect(
    args: Prisma.QuestObjectivesCompletionEffectCreateArgs
  ): Promise<PrismaQuestObjectivesCompletionEffect> {
    return this.prisma.questObjectivesCompletionEffect.create(args);
  }
  async updateQuestObjectivesCompletionEffect(
    args: Prisma.QuestObjectivesCompletionEffectUpdateArgs
  ): Promise<PrismaQuestObjectivesCompletionEffect> {
    return this.prisma.questObjectivesCompletionEffect.update(args);
  }
  async deleteQuestObjectivesCompletionEffect(
    args: Prisma.QuestObjectivesCompletionEffectDeleteArgs
  ): Promise<PrismaQuestObjectivesCompletionEffect> {
    return this.prisma.questObjectivesCompletionEffect.delete(args);
  }
}