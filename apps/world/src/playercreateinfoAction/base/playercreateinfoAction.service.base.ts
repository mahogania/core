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
  PlayercreateinfoAction as PrismaPlayercreateinfoAction,
} from "@prisma/client";

export class PlayercreateinfoActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PlayercreateinfoActionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.playercreateinfoAction.count(args);
  }

  async playercreateinfoActions(
    args: Prisma.PlayercreateinfoActionFindManyArgs
  ): Promise<PrismaPlayercreateinfoAction[]> {
    return this.prisma.playercreateinfoAction.findMany(args);
  }
  async playercreateinfoAction(
    args: Prisma.PlayercreateinfoActionFindUniqueArgs
  ): Promise<PrismaPlayercreateinfoAction | null> {
    return this.prisma.playercreateinfoAction.findUnique(args);
  }
  async createPlayercreateinfoAction(
    args: Prisma.PlayercreateinfoActionCreateArgs
  ): Promise<PrismaPlayercreateinfoAction> {
    return this.prisma.playercreateinfoAction.create(args);
  }
  async updatePlayercreateinfoAction(
    args: Prisma.PlayercreateinfoActionUpdateArgs
  ): Promise<PrismaPlayercreateinfoAction> {
    return this.prisma.playercreateinfoAction.update(args);
  }
  async deletePlayercreateinfoAction(
    args: Prisma.PlayercreateinfoActionDeleteArgs
  ): Promise<PrismaPlayercreateinfoAction> {
    return this.prisma.playercreateinfoAction.delete(args);
  }
}
