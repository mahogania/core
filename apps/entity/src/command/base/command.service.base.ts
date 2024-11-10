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
  Command as PrismaCommand,
  Processor as PrismaProcessor,
  Trait as PrismaTrait,
} from "@prisma/client";

export class CommandServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CommandCountArgs, "select">): Promise<number> {
    return this.prisma.command.count(args);
  }

  async commands(args: Prisma.CommandFindManyArgs): Promise<PrismaCommand[]> {
    return this.prisma.command.findMany(args);
  }
  async command(
    args: Prisma.CommandFindUniqueArgs
  ): Promise<PrismaCommand | null> {
    return this.prisma.command.findUnique(args);
  }
  async createCommand(args: Prisma.CommandCreateArgs): Promise<PrismaCommand> {
    return this.prisma.command.create(args);
  }
  async updateCommand(args: Prisma.CommandUpdateArgs): Promise<PrismaCommand> {
    return this.prisma.command.update(args);
  }
  async deleteCommand(args: Prisma.CommandDeleteArgs): Promise<PrismaCommand> {
    return this.prisma.command.delete(args);
  }

  async getProcessor(parentId: string): Promise<PrismaProcessor | null> {
    return this.prisma.command
      .findUnique({
        where: { id: parentId },
      })
      .processor();
  }

  async getTrait(parentId: string): Promise<PrismaTrait | null> {
    return this.prisma.command
      .findUnique({
        where: { id: parentId },
      })
      .trait();
  }
}
