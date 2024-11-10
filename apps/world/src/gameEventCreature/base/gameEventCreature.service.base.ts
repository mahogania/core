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
  GameEventCreature as PrismaGameEventCreature,
  GameEvent as PrismaGameEvent,
} from "@prisma/client";

export class GameEventCreatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GameEventCreatureCountArgs, "select">
  ): Promise<number> {
    return this.prisma.gameEventCreature.count(args);
  }

  async gameEventCreatures(
    args: Prisma.GameEventCreatureFindManyArgs
  ): Promise<PrismaGameEventCreature[]> {
    return this.prisma.gameEventCreature.findMany(args);
  }
  async gameEventCreature(
    args: Prisma.GameEventCreatureFindUniqueArgs
  ): Promise<PrismaGameEventCreature | null> {
    return this.prisma.gameEventCreature.findUnique(args);
  }
  async createGameEventCreature(
    args: Prisma.GameEventCreatureCreateArgs
  ): Promise<PrismaGameEventCreature> {
    return this.prisma.gameEventCreature.create(args);
  }
  async updateGameEventCreature(
    args: Prisma.GameEventCreatureUpdateArgs
  ): Promise<PrismaGameEventCreature> {
    return this.prisma.gameEventCreature.update(args);
  }
  async deleteGameEventCreature(
    args: Prisma.GameEventCreatureDeleteArgs
  ): Promise<PrismaGameEventCreature> {
    return this.prisma.gameEventCreature.delete(args);
  }

  async findGameEvents(
    parentId: string,
    args: Prisma.GameEventFindManyArgs
  ): Promise<PrismaGameEvent[]> {
    return this.prisma.gameEventCreature
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .gameEvents(args);
  }
}