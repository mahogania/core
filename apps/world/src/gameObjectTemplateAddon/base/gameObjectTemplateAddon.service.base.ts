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
  GameObjectTemplateAddon as PrismaGameObjectTemplateAddon,
  GameObjectTemplate as PrismaGameObjectTemplate,
} from "@prisma/client";

export class GameObjectTemplateAddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GameObjectTemplateAddonCountArgs, "select">
  ): Promise<number> {
    return this.prisma.gameObjectTemplateAddon.count(args);
  }

  async gameObjectTemplateAddons(
    args: Prisma.GameObjectTemplateAddonFindManyArgs
  ): Promise<PrismaGameObjectTemplateAddon[]> {
    return this.prisma.gameObjectTemplateAddon.findMany(args);
  }
  async gameObjectTemplateAddon(
    args: Prisma.GameObjectTemplateAddonFindUniqueArgs
  ): Promise<PrismaGameObjectTemplateAddon | null> {
    return this.prisma.gameObjectTemplateAddon.findUnique(args);
  }
  async createGameObjectTemplateAddon(
    args: Prisma.GameObjectTemplateAddonCreateArgs
  ): Promise<PrismaGameObjectTemplateAddon> {
    return this.prisma.gameObjectTemplateAddon.create(args);
  }
  async updateGameObjectTemplateAddon(
    args: Prisma.GameObjectTemplateAddonUpdateArgs
  ): Promise<PrismaGameObjectTemplateAddon> {
    return this.prisma.gameObjectTemplateAddon.update(args);
  }
  async deleteGameObjectTemplateAddon(
    args: Prisma.GameObjectTemplateAddonDeleteArgs
  ): Promise<PrismaGameObjectTemplateAddon> {
    return this.prisma.gameObjectTemplateAddon.delete(args);
  }

  async getGameObjectTemplate(
    parentId: string
  ): Promise<PrismaGameObjectTemplate | null> {
    return this.prisma.gameObjectTemplateAddon
      .findUnique({
        where: { id: parentId },
      })
      .gameObjectTemplate();
  }
}
