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
  AreaTriggerCreatePropertiesSplinePoint as PrismaAreaTriggerCreatePropertiesSplinePoint,
} from "@prisma/client";

export class AreaTriggerCreatePropertiesSplinePointServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AreaTriggerCreatePropertiesSplinePointCountArgs, "select">
  ): Promise<number> {
    return this.prisma.areaTriggerCreatePropertiesSplinePoint.count(args);
  }

  async areaTriggerCreatePropertiesSplinePoints(
    args: Prisma.AreaTriggerCreatePropertiesSplinePointFindManyArgs
  ): Promise<PrismaAreaTriggerCreatePropertiesSplinePoint[]> {
    return this.prisma.areaTriggerCreatePropertiesSplinePoint.findMany(args);
  }
  async areaTriggerCreatePropertiesSplinePoint(
    args: Prisma.AreaTriggerCreatePropertiesSplinePointFindUniqueArgs
  ): Promise<PrismaAreaTriggerCreatePropertiesSplinePoint | null> {
    return this.prisma.areaTriggerCreatePropertiesSplinePoint.findUnique(args);
  }
  async createAreaTriggerCreatePropertiesSplinePoint(
    args: Prisma.AreaTriggerCreatePropertiesSplinePointCreateArgs
  ): Promise<PrismaAreaTriggerCreatePropertiesSplinePoint> {
    return this.prisma.areaTriggerCreatePropertiesSplinePoint.create(args);
  }
  async updateAreaTriggerCreatePropertiesSplinePoint(
    args: Prisma.AreaTriggerCreatePropertiesSplinePointUpdateArgs
  ): Promise<PrismaAreaTriggerCreatePropertiesSplinePoint> {
    return this.prisma.areaTriggerCreatePropertiesSplinePoint.update(args);
  }
  async deleteAreaTriggerCreatePropertiesSplinePoint(
    args: Prisma.AreaTriggerCreatePropertiesSplinePointDeleteArgs
  ): Promise<PrismaAreaTriggerCreatePropertiesSplinePoint> {
    return this.prisma.areaTriggerCreatePropertiesSplinePoint.delete(args);
  }
}
