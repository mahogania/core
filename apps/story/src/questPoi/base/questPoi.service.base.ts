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
  QuestPoi as PrismaQuestPoi,
  PointOfInterest as PrismaPointOfInterest,
  QuestRegion as PrismaQuestRegion,
} from "@prisma/client";

export class QuestPoiServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.QuestPoiCountArgs, "select">): Promise<number> {
    return this.prisma.questPoi.count(args);
  }

  async questPois(
    args: Prisma.QuestPoiFindManyArgs
  ): Promise<PrismaQuestPoi[]> {
    return this.prisma.questPoi.findMany(args);
  }
  async questPoi(
    args: Prisma.QuestPoiFindUniqueArgs
  ): Promise<PrismaQuestPoi | null> {
    return this.prisma.questPoi.findUnique(args);
  }
  async createQuestPoi(
    args: Prisma.QuestPoiCreateArgs
  ): Promise<PrismaQuestPoi> {
    return this.prisma.questPoi.create(args);
  }
  async updateQuestPoi(
    args: Prisma.QuestPoiUpdateArgs
  ): Promise<PrismaQuestPoi> {
    return this.prisma.questPoi.update(args);
  }
  async deleteQuestPoi(
    args: Prisma.QuestPoiDeleteArgs
  ): Promise<PrismaQuestPoi> {
    return this.prisma.questPoi.delete(args);
  }

  async getPointOfInterest(
    parentId: string
  ): Promise<PrismaPointOfInterest | null> {
    return this.prisma.questPoi
      .findUnique({
        where: { id: parentId },
      })
      .pointOfInterest();
  }

  async getQuestPoi(parentId: string): Promise<PrismaQuestRegion | null> {
    return this.prisma.questPoi
      .findUnique({
        where: { id: parentId },
      })
      .questPoi();
  }
}