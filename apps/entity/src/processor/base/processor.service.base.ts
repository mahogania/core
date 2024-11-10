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
  Processor as PrismaProcessor,
  Command as PrismaCommand,
  View as PrismaView,
} from "@prisma/client";

export class ProcessorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProcessorCountArgs, "select">
  ): Promise<number> {
    return this.prisma.processor.count(args);
  }

  async processors(
    args: Prisma.ProcessorFindManyArgs
  ): Promise<PrismaProcessor[]> {
    return this.prisma.processor.findMany(args);
  }
  async processor(
    args: Prisma.ProcessorFindUniqueArgs
  ): Promise<PrismaProcessor | null> {
    return this.prisma.processor.findUnique(args);
  }
  async createProcessor(
    args: Prisma.ProcessorCreateArgs
  ): Promise<PrismaProcessor> {
    return this.prisma.processor.create(args);
  }
  async updateProcessor(
    args: Prisma.ProcessorUpdateArgs
  ): Promise<PrismaProcessor> {
    return this.prisma.processor.update(args);
  }
  async deleteProcessor(
    args: Prisma.ProcessorDeleteArgs
  ): Promise<PrismaProcessor> {
    return this.prisma.processor.delete(args);
  }

  async findCommands(
    parentId: string,
    args: Prisma.CommandFindManyArgs
  ): Promise<PrismaCommand[]> {
    return this.prisma.processor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .commands(args);
  }

  async findViews(
    parentId: string,
    args: Prisma.ViewFindManyArgs
  ): Promise<PrismaView[]> {
    return this.prisma.processor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .views(args);
  }
}
