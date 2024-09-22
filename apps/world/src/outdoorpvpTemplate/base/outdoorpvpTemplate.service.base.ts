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
  OutdoorpvpTemplate as PrismaOutdoorpvpTemplate,
} from "@prisma/client";

export class OutdoorpvpTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OutdoorpvpTemplateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.outdoorpvpTemplate.count(args);
  }

  async outdoorpvpTemplates(
    args: Prisma.OutdoorpvpTemplateFindManyArgs
  ): Promise<PrismaOutdoorpvpTemplate[]> {
    return this.prisma.outdoorpvpTemplate.findMany(args);
  }
  async outdoorpvpTemplate(
    args: Prisma.OutdoorpvpTemplateFindUniqueArgs
  ): Promise<PrismaOutdoorpvpTemplate | null> {
    return this.prisma.outdoorpvpTemplate.findUnique(args);
  }
  async createOutdoorpvpTemplate(
    args: Prisma.OutdoorpvpTemplateCreateArgs
  ): Promise<PrismaOutdoorpvpTemplate> {
    return this.prisma.outdoorpvpTemplate.create(args);
  }
  async updateOutdoorpvpTemplate(
    args: Prisma.OutdoorpvpTemplateUpdateArgs
  ): Promise<PrismaOutdoorpvpTemplate> {
    return this.prisma.outdoorpvpTemplate.update(args);
  }
  async deleteOutdoorpvpTemplate(
    args: Prisma.OutdoorpvpTemplateDeleteArgs
  ): Promise<PrismaOutdoorpvpTemplate> {
    return this.prisma.outdoorpvpTemplate.delete(args);
  }
}
