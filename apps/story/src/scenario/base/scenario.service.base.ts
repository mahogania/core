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
  Scenario as PrismaScenario,
  AreaScenarioTrigger as PrismaAreaScenarioTrigger,
  ScenarioRegion as PrismaScenarioRegion,
  SceneTemplate as PrismaSceneTemplate,
  User as PrismaUser,
} from "@prisma/client";

export class ScenarioServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ScenarioCountArgs, "select">): Promise<number> {
    return this.prisma.scenario.count(args);
  }

  async scenarios(
    args: Prisma.ScenarioFindManyArgs
  ): Promise<PrismaScenario[]> {
    return this.prisma.scenario.findMany(args);
  }
  async scenario(
    args: Prisma.ScenarioFindUniqueArgs
  ): Promise<PrismaScenario | null> {
    return this.prisma.scenario.findUnique(args);
  }
  async createScenario(
    args: Prisma.ScenarioCreateArgs
  ): Promise<PrismaScenario> {
    return this.prisma.scenario.create(args);
  }
  async updateScenario(
    args: Prisma.ScenarioUpdateArgs
  ): Promise<PrismaScenario> {
    return this.prisma.scenario.update(args);
  }
  async deleteScenario(
    args: Prisma.ScenarioDeleteArgs
  ): Promise<PrismaScenario> {
    return this.prisma.scenario.delete(args);
  }

  async findAreaScenarioTriggers(
    parentId: string,
    args: Prisma.AreaScenarioTriggerFindManyArgs
  ): Promise<PrismaAreaScenarioTrigger[]> {
    return this.prisma.scenario
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .areaScenarioTriggers(args);
  }

  async getScenarioRegions(
    parentId: string
  ): Promise<PrismaScenarioRegion | null> {
    return this.prisma.scenario
      .findUnique({
        where: { id: parentId },
      })
      .scenarioRegions();
  }

  async getSceneTemplate(
    parentId: string
  ): Promise<PrismaSceneTemplate | null> {
    return this.prisma.scenario
      .findUnique({
        where: { id: parentId },
      })
      .sceneTemplate();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.scenario
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
