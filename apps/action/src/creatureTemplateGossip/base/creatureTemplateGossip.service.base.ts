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
  CreatureTemplateGossip as PrismaCreatureTemplateGossip,
} from "@prisma/client";

export class CreatureTemplateGossipServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CreatureTemplateGossipCountArgs, "select">
  ): Promise<number> {
    return this.prisma.creatureTemplateGossip.count(args);
  }

  async creatureTemplateGossips(
    args: Prisma.CreatureTemplateGossipFindManyArgs
  ): Promise<PrismaCreatureTemplateGossip[]> {
    return this.prisma.creatureTemplateGossip.findMany(args);
  }
  async creatureTemplateGossip(
    args: Prisma.CreatureTemplateGossipFindUniqueArgs
  ): Promise<PrismaCreatureTemplateGossip | null> {
    return this.prisma.creatureTemplateGossip.findUnique(args);
  }
  async createCreatureTemplateGossip(
    args: Prisma.CreatureTemplateGossipCreateArgs
  ): Promise<PrismaCreatureTemplateGossip> {
    return this.prisma.creatureTemplateGossip.create(args);
  }
  async updateCreatureTemplateGossip(
    args: Prisma.CreatureTemplateGossipUpdateArgs
  ): Promise<PrismaCreatureTemplateGossip> {
    return this.prisma.creatureTemplateGossip.update(args);
  }
  async deleteCreatureTemplateGossip(
    args: Prisma.CreatureTemplateGossipDeleteArgs
  ): Promise<PrismaCreatureTemplateGossip> {
    return this.prisma.creatureTemplateGossip.delete(args);
  }
}
