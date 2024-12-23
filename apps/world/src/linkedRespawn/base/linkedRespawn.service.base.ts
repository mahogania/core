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
  LinkedRespawn as PrismaLinkedRespawn,
  InstanceTemplate as PrismaInstanceTemplate,
} from "@prisma/client";

export class LinkedRespawnServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LinkedRespawnCountArgs, "select">
  ): Promise<number> {
    return this.prisma.linkedRespawn.count(args);
  }

  async linkedRespawns(
    args: Prisma.LinkedRespawnFindManyArgs
  ): Promise<PrismaLinkedRespawn[]> {
    return this.prisma.linkedRespawn.findMany(args);
  }
  async linkedRespawn(
    args: Prisma.LinkedRespawnFindUniqueArgs
  ): Promise<PrismaLinkedRespawn | null> {
    return this.prisma.linkedRespawn.findUnique(args);
  }
  async createLinkedRespawn(
    args: Prisma.LinkedRespawnCreateArgs
  ): Promise<PrismaLinkedRespawn> {
    return this.prisma.linkedRespawn.create(args);
  }
  async updateLinkedRespawn(
    args: Prisma.LinkedRespawnUpdateArgs
  ): Promise<PrismaLinkedRespawn> {
    return this.prisma.linkedRespawn.update(args);
  }
  async deleteLinkedRespawn(
    args: Prisma.LinkedRespawnDeleteArgs
  ): Promise<PrismaLinkedRespawn> {
    return this.prisma.linkedRespawn.delete(args);
  }

  async findInstanceTemplates(
    parentId: string,
    args: Prisma.InstanceTemplateFindManyArgs
  ): Promise<PrismaInstanceTemplate[]> {
    return this.prisma.linkedRespawn
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .instanceTemplates(args);
  }
}
