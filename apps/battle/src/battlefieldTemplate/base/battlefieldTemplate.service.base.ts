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
  BattlefieldTemplate as PrismaBattlefieldTemplate,
} from "@prisma/client";

export class BattlefieldTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BattlefieldTemplateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.battlefieldTemplate.count(args);
  }

  async battlefieldTemplates(
    args: Prisma.BattlefieldTemplateFindManyArgs
  ): Promise<PrismaBattlefieldTemplate[]> {
    return this.prisma.battlefieldTemplate.findMany(args);
  }
  async battlefieldTemplate(
    args: Prisma.BattlefieldTemplateFindUniqueArgs
  ): Promise<PrismaBattlefieldTemplate | null> {
    return this.prisma.battlefieldTemplate.findUnique(args);
  }
  async createBattlefieldTemplate(
    args: Prisma.BattlefieldTemplateCreateArgs
  ): Promise<PrismaBattlefieldTemplate> {
    return this.prisma.battlefieldTemplate.create(args);
  }
  async updateBattlefieldTemplate(
    args: Prisma.BattlefieldTemplateUpdateArgs
  ): Promise<PrismaBattlefieldTemplate> {
    return this.prisma.battlefieldTemplate.update(args);
  }
  async deleteBattlefieldTemplate(
    args: Prisma.BattlefieldTemplateDeleteArgs
  ): Promise<PrismaBattlefieldTemplate> {
    return this.prisma.battlefieldTemplate.delete(args);
  }
}