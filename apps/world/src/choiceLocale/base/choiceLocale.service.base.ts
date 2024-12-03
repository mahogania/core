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
  ChoiceLocale as PrismaChoiceLocale,
  Choice as PrismaChoice,
} from "@prisma/client";

export class ChoiceLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ChoiceLocaleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.choiceLocale.count(args);
  }

  async choiceLocales(
    args: Prisma.ChoiceLocaleFindManyArgs
  ): Promise<PrismaChoiceLocale[]> {
    return this.prisma.choiceLocale.findMany(args);
  }
  async choiceLocale(
    args: Prisma.ChoiceLocaleFindUniqueArgs
  ): Promise<PrismaChoiceLocale | null> {
    return this.prisma.choiceLocale.findUnique(args);
  }
  async createChoiceLocale(
    args: Prisma.ChoiceLocaleCreateArgs
  ): Promise<PrismaChoiceLocale> {
    return this.prisma.choiceLocale.create(args);
  }
  async updateChoiceLocale(
    args: Prisma.ChoiceLocaleUpdateArgs
  ): Promise<PrismaChoiceLocale> {
    return this.prisma.choiceLocale.update(args);
  }
  async deleteChoiceLocale(
    args: Prisma.ChoiceLocaleDeleteArgs
  ): Promise<PrismaChoiceLocale> {
    return this.prisma.choiceLocale.delete(args);
  }

  async findChoices(
    parentId: string,
    args: Prisma.ChoiceFindManyArgs
  ): Promise<PrismaChoice[]> {
    return this.prisma.choiceLocale
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .choices(args);
  }
}
