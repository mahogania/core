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
  SkinningLootTemplate as PrismaSkinningLootTemplate,
} from "@prisma/client";

export class SkinningLootTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SkinningLootTemplateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.skinningLootTemplate.count(args);
  }

  async skinningLootTemplates(
    args: Prisma.SkinningLootTemplateFindManyArgs
  ): Promise<PrismaSkinningLootTemplate[]> {
    return this.prisma.skinningLootTemplate.findMany(args);
  }
  async skinningLootTemplate(
    args: Prisma.SkinningLootTemplateFindUniqueArgs
  ): Promise<PrismaSkinningLootTemplate | null> {
    return this.prisma.skinningLootTemplate.findUnique(args);
  }
  async createSkinningLootTemplate(
    args: Prisma.SkinningLootTemplateCreateArgs
  ): Promise<PrismaSkinningLootTemplate> {
    return this.prisma.skinningLootTemplate.create(args);
  }
  async updateSkinningLootTemplate(
    args: Prisma.SkinningLootTemplateUpdateArgs
  ): Promise<PrismaSkinningLootTemplate> {
    return this.prisma.skinningLootTemplate.update(args);
  }
  async deleteSkinningLootTemplate(
    args: Prisma.SkinningLootTemplateDeleteArgs
  ): Promise<PrismaSkinningLootTemplate> {
    return this.prisma.skinningLootTemplate.delete(args);
  }
}
