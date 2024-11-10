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
  AreaQuestTrigger as PrismaAreaQuestTrigger,
  Area as PrismaArea,
  Quest as PrismaQuest,
} from "@prisma/client";

export class AreaQuestTriggerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AreaQuestTriggerCountArgs, "select">
  ): Promise<number> {
    return this.prisma.areaQuestTrigger.count(args);
  }

  async areaQuestTriggers(
    args: Prisma.AreaQuestTriggerFindManyArgs
  ): Promise<PrismaAreaQuestTrigger[]> {
    return this.prisma.areaQuestTrigger.findMany(args);
  }
  async areaQuestTrigger(
    args: Prisma.AreaQuestTriggerFindUniqueArgs
  ): Promise<PrismaAreaQuestTrigger | null> {
    return this.prisma.areaQuestTrigger.findUnique(args);
  }
  async createAreaQuestTrigger(
    args: Prisma.AreaQuestTriggerCreateArgs
  ): Promise<PrismaAreaQuestTrigger> {
    return this.prisma.areaQuestTrigger.create(args);
  }
  async updateAreaQuestTrigger(
    args: Prisma.AreaQuestTriggerUpdateArgs
  ): Promise<PrismaAreaQuestTrigger> {
    return this.prisma.areaQuestTrigger.update(args);
  }
  async deleteAreaQuestTrigger(
    args: Prisma.AreaQuestTriggerDeleteArgs
  ): Promise<PrismaAreaQuestTrigger> {
    return this.prisma.areaQuestTrigger.delete(args);
  }

  async getArea(parentId: string): Promise<PrismaArea | null> {
    return this.prisma.areaQuestTrigger
      .findUnique({
        where: { id: parentId },
      })
      .area();
  }

  async getQuest(parentId: string): Promise<PrismaQuest | null> {
    return this.prisma.areaQuestTrigger
      .findUnique({
        where: { id: parentId },
      })
      .quest();
  }
}
