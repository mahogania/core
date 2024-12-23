/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Scenarios as PrismaScenarios } from "@prisma/client";

export class ScenariosServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ScenariosCountArgs, "select">
  ): Promise<number> {
    return this.prisma.scenarios.count(args);
  }

  async scenariosItems(
    args: Prisma.ScenariosFindManyArgs
  ): Promise<PrismaScenarios[]> {
    return this.prisma.scenarios.findMany(args);
  }
  async scenarios(
    args: Prisma.ScenariosFindUniqueArgs
  ): Promise<PrismaScenarios | null> {
    return this.prisma.scenarios.findUnique(args);
  }
  async createScenarios(
    args: Prisma.ScenariosCreateArgs
  ): Promise<PrismaScenarios> {
    return this.prisma.scenarios.create(args);
  }
  async updateScenarios(
    args: Prisma.ScenariosUpdateArgs
  ): Promise<PrismaScenarios> {
    return this.prisma.scenarios.update(args);
  }
  async deleteScenarios(
    args: Prisma.ScenariosDeleteArgs
  ): Promise<PrismaScenarios> {
    return this.prisma.scenarios.delete(args);
  }
}
