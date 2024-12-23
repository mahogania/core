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
  ItemBehaviour as PrismaItemBehaviour,
  ItemTemplate as PrismaItemTemplate,
} from "@prisma/client";

export class ItemBehaviourServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ItemBehaviourCountArgs, "select">
  ): Promise<number> {
    return this.prisma.itemBehaviour.count(args);
  }

  async itemBehaviours(
    args: Prisma.ItemBehaviourFindManyArgs
  ): Promise<PrismaItemBehaviour[]> {
    return this.prisma.itemBehaviour.findMany(args);
  }
  async itemBehaviour(
    args: Prisma.ItemBehaviourFindUniqueArgs
  ): Promise<PrismaItemBehaviour | null> {
    return this.prisma.itemBehaviour.findUnique(args);
  }
  async createItemBehaviour(
    args: Prisma.ItemBehaviourCreateArgs
  ): Promise<PrismaItemBehaviour> {
    return this.prisma.itemBehaviour.create(args);
  }
  async updateItemBehaviour(
    args: Prisma.ItemBehaviourUpdateArgs
  ): Promise<PrismaItemBehaviour> {
    return this.prisma.itemBehaviour.update(args);
  }
  async deleteItemBehaviour(
    args: Prisma.ItemBehaviourDeleteArgs
  ): Promise<PrismaItemBehaviour> {
    return this.prisma.itemBehaviour.delete(args);
  }

  async findItemTemplates(
    parentId: string,
    args: Prisma.ItemTemplateFindManyArgs
  ): Promise<PrismaItemTemplate[]> {
    return this.prisma.itemBehaviour
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .itemTemplates(args);
  }
}
