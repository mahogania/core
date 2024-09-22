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
  PlayerFactionchangeTitles as PrismaPlayerFactionchangeTitles,
} from "@prisma/client";

export class PlayerFactionchangeTitlesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PlayerFactionchangeTitlesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.playerFactionchangeTitles.count(args);
  }

  async playerFactionchangeTitlesItems(
    args: Prisma.PlayerFactionchangeTitlesFindManyArgs
  ): Promise<PrismaPlayerFactionchangeTitles[]> {
    return this.prisma.playerFactionchangeTitles.findMany(args);
  }
  async playerFactionchangeTitles(
    args: Prisma.PlayerFactionchangeTitlesFindUniqueArgs
  ): Promise<PrismaPlayerFactionchangeTitles | null> {
    return this.prisma.playerFactionchangeTitles.findUnique(args);
  }
  async createPlayerFactionchangeTitles(
    args: Prisma.PlayerFactionchangeTitlesCreateArgs
  ): Promise<PrismaPlayerFactionchangeTitles> {
    return this.prisma.playerFactionchangeTitles.create(args);
  }
  async updatePlayerFactionchangeTitles(
    args: Prisma.PlayerFactionchangeTitlesUpdateArgs
  ): Promise<PrismaPlayerFactionchangeTitles> {
    return this.prisma.playerFactionchangeTitles.update(args);
  }
  async deletePlayerFactionchangeTitles(
    args: Prisma.PlayerFactionchangeTitlesDeleteArgs
  ): Promise<PrismaPlayerFactionchangeTitles> {
    return this.prisma.playerFactionchangeTitles.delete(args);
  }
}
