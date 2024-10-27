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
  CreatureImmunity as PrismaCreatureImmunity,
  Creature as PrismaCreature,
} from "@prisma/client";

export class CreatureImmunityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CreatureImmunityCountArgs, "select">
  ): Promise<number> {
    return this.prisma.creatureImmunity.count(args);
  }

  async creatureImmunities(
    args: Prisma.CreatureImmunityFindManyArgs
  ): Promise<PrismaCreatureImmunity[]> {
    return this.prisma.creatureImmunity.findMany(args);
  }
  async creatureImmunity(
    args: Prisma.CreatureImmunityFindUniqueArgs
  ): Promise<PrismaCreatureImmunity | null> {
    return this.prisma.creatureImmunity.findUnique(args);
  }
  async createCreatureImmunity(
    args: Prisma.CreatureImmunityCreateArgs
  ): Promise<PrismaCreatureImmunity> {
    return this.prisma.creatureImmunity.create(args);
  }
  async updateCreatureImmunity(
    args: Prisma.CreatureImmunityUpdateArgs
  ): Promise<PrismaCreatureImmunity> {
    return this.prisma.creatureImmunity.update(args);
  }
  async deleteCreatureImmunity(
    args: Prisma.CreatureImmunityDeleteArgs
  ): Promise<PrismaCreatureImmunity> {
    return this.prisma.creatureImmunity.delete(args);
  }

  async findCreatures(
    parentId: string,
    args: Prisma.CreatureFindManyArgs
  ): Promise<PrismaCreature[]> {
    return this.prisma.creatureImmunity
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .creatures(args);
  }
}
