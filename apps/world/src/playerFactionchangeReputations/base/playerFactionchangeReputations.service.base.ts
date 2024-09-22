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
  PlayerFactionchangeReputations as PrismaPlayerFactionchangeReputations,
} from "@prisma/client";

export class PlayerFactionchangeReputationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PlayerFactionchangeReputationsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.playerFactionchangeReputations.count(args);
  }

  async playerFactionchangeReputationsItems(
    args: Prisma.PlayerFactionchangeReputationsFindManyArgs
  ): Promise<PrismaPlayerFactionchangeReputations[]> {
    return this.prisma.playerFactionchangeReputations.findMany(args);
  }
  async playerFactionchangeReputations(
    args: Prisma.PlayerFactionchangeReputationsFindUniqueArgs
  ): Promise<PrismaPlayerFactionchangeReputations | null> {
    return this.prisma.playerFactionchangeReputations.findUnique(args);
  }
  async createPlayerFactionchangeReputations(
    args: Prisma.PlayerFactionchangeReputationsCreateArgs
  ): Promise<PrismaPlayerFactionchangeReputations> {
    return this.prisma.playerFactionchangeReputations.create(args);
  }
  async updatePlayerFactionchangeReputations(
    args: Prisma.PlayerFactionchangeReputationsUpdateArgs
  ): Promise<PrismaPlayerFactionchangeReputations> {
    return this.prisma.playerFactionchangeReputations.update(args);
  }
  async deletePlayerFactionchangeReputations(
    args: Prisma.PlayerFactionchangeReputationsDeleteArgs
  ): Promise<PrismaPlayerFactionchangeReputations> {
    return this.prisma.playerFactionchangeReputations.delete(args);
  }
}
