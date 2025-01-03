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
  ScenarioPoi as PrismaScenarioPoi,
  ScenarioRegion as PrismaScenarioRegion,
} from "@prisma/client";

export class ScenarioPoiServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ScenarioPoiCountArgs, "select">
  ): Promise<number> {
    return this.prisma.scenarioPoi.count(args);
  }

  async scenarioPois(
    args: Prisma.ScenarioPoiFindManyArgs
  ): Promise<PrismaScenarioPoi[]> {
    return this.prisma.scenarioPoi.findMany(args);
  }
  async scenarioPoi(
    args: Prisma.ScenarioPoiFindUniqueArgs
  ): Promise<PrismaScenarioPoi | null> {
    return this.prisma.scenarioPoi.findUnique(args);
  }
  async createScenarioPoi(
    args: Prisma.ScenarioPoiCreateArgs
  ): Promise<PrismaScenarioPoi> {
    return this.prisma.scenarioPoi.create(args);
  }
  async updateScenarioPoi(
    args: Prisma.ScenarioPoiUpdateArgs
  ): Promise<PrismaScenarioPoi> {
    return this.prisma.scenarioPoi.update(args);
  }
  async deleteScenarioPoi(
    args: Prisma.ScenarioPoiDeleteArgs
  ): Promise<PrismaScenarioPoi> {
    return this.prisma.scenarioPoi.delete(args);
  }

  async findScenarioRegions(
    parentId: string,
    args: Prisma.ScenarioRegionFindManyArgs
  ): Promise<PrismaScenarioRegion[]> {
    return this.prisma.scenarioPoi
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .scenarioRegions(args);
  }
}
