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
  CreatureModelInfo as PrismaCreatureModelInfo,
  Creature as PrismaCreature,
} from "@prisma/client";

export class CreatureModelInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CreatureModelInfoCountArgs, "select">
  ): Promise<number> {
    return this.prisma.creatureModelInfo.count(args);
  }

  async creatureModelInfos(
    args: Prisma.CreatureModelInfoFindManyArgs
  ): Promise<PrismaCreatureModelInfo[]> {
    return this.prisma.creatureModelInfo.findMany(args);
  }
  async creatureModelInfo(
    args: Prisma.CreatureModelInfoFindUniqueArgs
  ): Promise<PrismaCreatureModelInfo | null> {
    return this.prisma.creatureModelInfo.findUnique(args);
  }
  async createCreatureModelInfo(
    args: Prisma.CreatureModelInfoCreateArgs
  ): Promise<PrismaCreatureModelInfo> {
    return this.prisma.creatureModelInfo.create(args);
  }
  async updateCreatureModelInfo(
    args: Prisma.CreatureModelInfoUpdateArgs
  ): Promise<PrismaCreatureModelInfo> {
    return this.prisma.creatureModelInfo.update(args);
  }
  async deleteCreatureModelInfo(
    args: Prisma.CreatureModelInfoDeleteArgs
  ): Promise<PrismaCreatureModelInfo> {
    return this.prisma.creatureModelInfo.delete(args);
  }

  async findCreatures(
    parentId: string,
    args: Prisma.CreatureFindManyArgs
  ): Promise<PrismaCreature[]> {
    return this.prisma.creatureModelInfo
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .creatures(args);
  }
}
