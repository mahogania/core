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
  Fragment as PrismaFragment,
  Attribute as PrismaAttribute,
  View as PrismaView,
  Trait as PrismaTrait,
} from "@prisma/client";

export class FragmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FragmentCountArgs, "select">): Promise<number> {
    return this.prisma.fragment.count(args);
  }

  async fragments(
    args: Prisma.FragmentFindManyArgs
  ): Promise<PrismaFragment[]> {
    return this.prisma.fragment.findMany(args);
  }
  async fragment(
    args: Prisma.FragmentFindUniqueArgs
  ): Promise<PrismaFragment | null> {
    return this.prisma.fragment.findUnique(args);
  }
  async createFragment(
    args: Prisma.FragmentCreateArgs
  ): Promise<PrismaFragment> {
    return this.prisma.fragment.create(args);
  }
  async updateFragment(
    args: Prisma.FragmentUpdateArgs
  ): Promise<PrismaFragment> {
    return this.prisma.fragment.update(args);
  }
  async deleteFragment(
    args: Prisma.FragmentDeleteArgs
  ): Promise<PrismaFragment> {
    return this.prisma.fragment.delete(args);
  }

  async findAttributes(
    parentId: string,
    args: Prisma.AttributeFindManyArgs
  ): Promise<PrismaAttribute[]> {
    return this.prisma.fragment
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .attributes(args);
  }

  async findViews(
    parentId: string,
    args: Prisma.ViewFindManyArgs
  ): Promise<PrismaView[]> {
    return this.prisma.fragment
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .views(args);
  }

  async getTrait(parentId: string): Promise<PrismaTrait | null> {
    return this.prisma.fragment
      .findUnique({
        where: { id: parentId },
      })
      .trait();
  }
}
