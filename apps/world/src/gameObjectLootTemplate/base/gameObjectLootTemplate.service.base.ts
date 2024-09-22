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
  GameObjectLootTemplate as PrismaGameObjectLootTemplate,
} from "@prisma/client";

export class GameObjectLootTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GameObjectLootTemplateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.gameObjectLootTemplate.count(args);
  }

  async gameObjectLootTemplates(
    args: Prisma.GameObjectLootTemplateFindManyArgs
  ): Promise<PrismaGameObjectLootTemplate[]> {
    return this.prisma.gameObjectLootTemplate.findMany(args);
  }
  async gameObjectLootTemplate(
    args: Prisma.GameObjectLootTemplateFindUniqueArgs
  ): Promise<PrismaGameObjectLootTemplate | null> {
    return this.prisma.gameObjectLootTemplate.findUnique(args);
  }
  async createGameObjectLootTemplate(
    args: Prisma.GameObjectLootTemplateCreateArgs
  ): Promise<PrismaGameObjectLootTemplate> {
    return this.prisma.gameObjectLootTemplate.create(args);
  }
  async updateGameObjectLootTemplate(
    args: Prisma.GameObjectLootTemplateUpdateArgs
  ): Promise<PrismaGameObjectLootTemplate> {
    return this.prisma.gameObjectLootTemplate.update(args);
  }
  async deleteGameObjectLootTemplate(
    args: Prisma.GameObjectLootTemplateDeleteArgs
  ): Promise<PrismaGameObjectLootTemplate> {
    return this.prisma.gameObjectLootTemplate.delete(args);
  }
}
