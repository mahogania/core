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
  ChequePrintTemplate as PrismaChequePrintTemplate,
} from "@prisma/client";

export class ChequePrintTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ChequePrintTemplateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.chequePrintTemplate.count(args);
  }

  async chequePrintTemplates(
    args: Prisma.ChequePrintTemplateFindManyArgs
  ): Promise<PrismaChequePrintTemplate[]> {
    return this.prisma.chequePrintTemplate.findMany(args);
  }
  async chequePrintTemplate(
    args: Prisma.ChequePrintTemplateFindUniqueArgs
  ): Promise<PrismaChequePrintTemplate | null> {
    return this.prisma.chequePrintTemplate.findUnique(args);
  }
  async createChequePrintTemplate(
    args: Prisma.ChequePrintTemplateCreateArgs
  ): Promise<PrismaChequePrintTemplate> {
    return this.prisma.chequePrintTemplate.create(args);
  }
  async updateChequePrintTemplate(
    args: Prisma.ChequePrintTemplateUpdateArgs
  ): Promise<PrismaChequePrintTemplate> {
    return this.prisma.chequePrintTemplate.update(args);
  }
  async deleteChequePrintTemplate(
    args: Prisma.ChequePrintTemplateDeleteArgs
  ): Promise<PrismaChequePrintTemplate> {
    return this.prisma.chequePrintTemplate.delete(args);
  }
}
