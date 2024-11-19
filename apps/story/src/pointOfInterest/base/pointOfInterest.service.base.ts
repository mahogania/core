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
  PointOfInterest as PrismaPointOfInterest,
  PointsOfInterestLocale as PrismaPointsOfInterestLocale,
  QuestPoi as PrismaQuestPoi,
} from "@prisma/client";

export class PointOfInterestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PointOfInterestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.pointOfInterest.count(args);
  }

  async pointOfInterests(
    args: Prisma.PointOfInterestFindManyArgs
  ): Promise<PrismaPointOfInterest[]> {
    return this.prisma.pointOfInterest.findMany(args);
  }
  async pointOfInterest(
    args: Prisma.PointOfInterestFindUniqueArgs
  ): Promise<PrismaPointOfInterest | null> {
    return this.prisma.pointOfInterest.findUnique(args);
  }
  async createPointOfInterest(
    args: Prisma.PointOfInterestCreateArgs
  ): Promise<PrismaPointOfInterest> {
    return this.prisma.pointOfInterest.create(args);
  }
  async updatePointOfInterest(
    args: Prisma.PointOfInterestUpdateArgs
  ): Promise<PrismaPointOfInterest> {
    return this.prisma.pointOfInterest.update(args);
  }
  async deletePointOfInterest(
    args: Prisma.PointOfInterestDeleteArgs
  ): Promise<PrismaPointOfInterest> {
    return this.prisma.pointOfInterest.delete(args);
  }

  async findPointsOfInterestLocales(
    parentId: string,
    args: Prisma.PointsOfInterestLocaleFindManyArgs
  ): Promise<PrismaPointsOfInterestLocale[]> {
    return this.prisma.pointOfInterest
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .pointsOfInterestLocales(args);
  }

  async findQuestPoiPoints(
    parentId: string,
    args: Prisma.QuestPoiFindManyArgs
  ): Promise<PrismaQuestPoi[]> {
    return this.prisma.pointOfInterest
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .questPoiPoints(args);
  }
}