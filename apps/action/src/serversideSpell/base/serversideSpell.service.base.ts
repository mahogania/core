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
  ServersideSpell as PrismaServersideSpell,
} from "@prisma/client";

export class ServersideSpellServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ServersideSpellCountArgs, "select">
  ): Promise<number> {
    return this.prisma.serversideSpell.count(args);
  }

  async serversideSpells(
    args: Prisma.ServersideSpellFindManyArgs
  ): Promise<PrismaServersideSpell[]> {
    return this.prisma.serversideSpell.findMany(args);
  }
  async serversideSpell(
    args: Prisma.ServersideSpellFindUniqueArgs
  ): Promise<PrismaServersideSpell | null> {
    return this.prisma.serversideSpell.findUnique(args);
  }
  async createServersideSpell(
    args: Prisma.ServersideSpellCreateArgs
  ): Promise<PrismaServersideSpell> {
    return this.prisma.serversideSpell.create(args);
  }
  async updateServersideSpell(
    args: Prisma.ServersideSpellUpdateArgs
  ): Promise<PrismaServersideSpell> {
    return this.prisma.serversideSpell.update(args);
  }
  async deleteServersideSpell(
    args: Prisma.ServersideSpellDeleteArgs
  ): Promise<PrismaServersideSpell> {
    return this.prisma.serversideSpell.delete(args);
  }
}
