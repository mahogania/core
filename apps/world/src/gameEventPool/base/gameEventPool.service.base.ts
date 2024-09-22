/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, GameEventPool as PrismaGameEventPool } from "@prisma/client";

export class GameEventPoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GameEventPoolCountArgs, "select">
  ): Promise<number> {
    return this.prisma.gameEventPool.count(args);
  }

  async gameEventPools(
    args: Prisma.GameEventPoolFindManyArgs
  ): Promise<PrismaGameEventPool[]> {
    return this.prisma.gameEventPool.findMany(args);
  }
  async gameEventPool(
    args: Prisma.GameEventPoolFindUniqueArgs
  ): Promise<PrismaGameEventPool | null> {
    return this.prisma.gameEventPool.findUnique(args);
  }
  async createGameEventPool(
    args: Prisma.GameEventPoolCreateArgs
  ): Promise<PrismaGameEventPool> {
    return this.prisma.gameEventPool.create(args);
  }
  async updateGameEventPool(
    args: Prisma.GameEventPoolUpdateArgs
  ): Promise<PrismaGameEventPool> {
    return this.prisma.gameEventPool.update(args);
  }
  async deleteGameEventPool(
    args: Prisma.GameEventPoolDeleteArgs
  ): Promise<PrismaGameEventPool> {
    return this.prisma.gameEventPool.delete(args);
  }
}
