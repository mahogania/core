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
  Trait as PrismaTrait,
  Command as PrismaCommand,
  Fragment as PrismaFragment,
  Template as PrismaTemplate,
} from "@prisma/client";

export class TraitServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TraitCountArgs, "select">): Promise<number> {
    return this.prisma.trait.count(args);
  }

  async traits(args: Prisma.TraitFindManyArgs): Promise<PrismaTrait[]> {
    return this.prisma.trait.findMany(args);
  }
  async trait(args: Prisma.TraitFindUniqueArgs): Promise<PrismaTrait | null> {
    return this.prisma.trait.findUnique(args);
  }
  async createTrait(args: Prisma.TraitCreateArgs): Promise<PrismaTrait> {
    return this.prisma.trait.create(args);
  }
  async updateTrait(args: Prisma.TraitUpdateArgs): Promise<PrismaTrait> {
    return this.prisma.trait.update(args);
  }
  async deleteTrait(args: Prisma.TraitDeleteArgs): Promise<PrismaTrait> {
    return this.prisma.trait.delete(args);
  }

  async findCommands(
    parentId: string,
    args: Prisma.CommandFindManyArgs
  ): Promise<PrismaCommand[]> {
    return this.prisma.trait
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .commands(args);
  }

  async findFragments(
    parentId: string,
    args: Prisma.FragmentFindManyArgs
  ): Promise<PrismaFragment[]> {
    return this.prisma.trait
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .fragments(args);
  }

  async getTemplate(parentId: string): Promise<PrismaTemplate | null> {
    return this.prisma.trait
      .findUnique({
        where: { id: parentId },
      })
      .template();
  }
}