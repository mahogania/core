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
  Choice as PrismaChoice,
  ChoiceLocale as PrismaChoiceLocale,
  Response as PrismaResponse,
} from "@prisma/client";

export class ChoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ChoiceCountArgs, "select">): Promise<number> {
    return this.prisma.choice.count(args);
  }

  async choices(args: Prisma.ChoiceFindManyArgs): Promise<PrismaChoice[]> {
    return this.prisma.choice.findMany(args);
  }
  async choice(
    args: Prisma.ChoiceFindUniqueArgs
  ): Promise<PrismaChoice | null> {
    return this.prisma.choice.findUnique(args);
  }
  async createChoice(args: Prisma.ChoiceCreateArgs): Promise<PrismaChoice> {
    return this.prisma.choice.create(args);
  }
  async updateChoice(args: Prisma.ChoiceUpdateArgs): Promise<PrismaChoice> {
    return this.prisma.choice.update(args);
  }
  async deleteChoice(args: Prisma.ChoiceDeleteArgs): Promise<PrismaChoice> {
    return this.prisma.choice.delete(args);
  }

  async getChoiceLocales(parentId: string): Promise<PrismaChoiceLocale | null> {
    return this.prisma.choice
      .findUnique({
        where: { id: parentId },
      })
      .choiceLocales();
  }

  async getResponses(parentId: string): Promise<PrismaResponse | null> {
    return this.prisma.choice
      .findUnique({
        where: { id: parentId },
      })
      .responses();
  }
}
