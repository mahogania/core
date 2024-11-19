/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, EmailTemplate as PrismaEmailTemplate } from "@prisma/client";

export class EmailTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmailTemplateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.emailTemplate.count(args);
  }

  async emailTemplates(
    args: Prisma.EmailTemplateFindManyArgs
  ): Promise<PrismaEmailTemplate[]> {
    return this.prisma.emailTemplate.findMany(args);
  }
  async emailTemplate(
    args: Prisma.EmailTemplateFindUniqueArgs
  ): Promise<PrismaEmailTemplate | null> {
    return this.prisma.emailTemplate.findUnique(args);
  }
  async createEmailTemplate(
    args: Prisma.EmailTemplateCreateArgs
  ): Promise<PrismaEmailTemplate> {
    return this.prisma.emailTemplate.create(args);
  }
  async updateEmailTemplate(
    args: Prisma.EmailTemplateUpdateArgs
  ): Promise<PrismaEmailTemplate> {
    return this.prisma.emailTemplate.update(args);
  }
  async deleteEmailTemplate(
    args: Prisma.EmailTemplateDeleteArgs
  ): Promise<PrismaEmailTemplate> {
    return this.prisma.emailTemplate.delete(args);
  }
}