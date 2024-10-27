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
  QuestTemplateLocale as PrismaQuestTemplateLocale,
  QuestTemplate as PrismaQuestTemplate,
} from "@prisma/client";

export class QuestTemplateLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestTemplateLocaleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questTemplateLocale.count(args);
  }

  async questTemplateLocales(
    args: Prisma.QuestTemplateLocaleFindManyArgs
  ): Promise<PrismaQuestTemplateLocale[]> {
    return this.prisma.questTemplateLocale.findMany(args);
  }
  async questTemplateLocale(
    args: Prisma.QuestTemplateLocaleFindUniqueArgs
  ): Promise<PrismaQuestTemplateLocale | null> {
    return this.prisma.questTemplateLocale.findUnique(args);
  }
  async createQuestTemplateLocale(
    args: Prisma.QuestTemplateLocaleCreateArgs
  ): Promise<PrismaQuestTemplateLocale> {
    return this.prisma.questTemplateLocale.create(args);
  }
  async updateQuestTemplateLocale(
    args: Prisma.QuestTemplateLocaleUpdateArgs
  ): Promise<PrismaQuestTemplateLocale> {
    return this.prisma.questTemplateLocale.update(args);
  }
  async deleteQuestTemplateLocale(
    args: Prisma.QuestTemplateLocaleDeleteArgs
  ): Promise<PrismaQuestTemplateLocale> {
    return this.prisma.questTemplateLocale.delete(args);
  }

  async findQuestTemplates(
    parentId: string,
    args: Prisma.QuestTemplateFindManyArgs
  ): Promise<PrismaQuestTemplate[]> {
    return this.prisma.questTemplateLocale
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .questTemplates(args);
  }
}
