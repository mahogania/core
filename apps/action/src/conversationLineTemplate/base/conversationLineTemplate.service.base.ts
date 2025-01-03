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
  ConversationLineTemplate as PrismaConversationLineTemplate,
} from "@prisma/client";

export class ConversationLineTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ConversationLineTemplateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.conversationLineTemplate.count(args);
  }

  async conversationLineTemplates(
    args: Prisma.ConversationLineTemplateFindManyArgs
  ): Promise<PrismaConversationLineTemplate[]> {
    return this.prisma.conversationLineTemplate.findMany(args);
  }
  async conversationLineTemplate(
    args: Prisma.ConversationLineTemplateFindUniqueArgs
  ): Promise<PrismaConversationLineTemplate | null> {
    return this.prisma.conversationLineTemplate.findUnique(args);
  }
  async createConversationLineTemplate(
    args: Prisma.ConversationLineTemplateCreateArgs
  ): Promise<PrismaConversationLineTemplate> {
    return this.prisma.conversationLineTemplate.create(args);
  }
  async updateConversationLineTemplate(
    args: Prisma.ConversationLineTemplateUpdateArgs
  ): Promise<PrismaConversationLineTemplate> {
    return this.prisma.conversationLineTemplate.update(args);
  }
  async deleteConversationLineTemplate(
    args: Prisma.ConversationLineTemplateDeleteArgs
  ): Promise<PrismaConversationLineTemplate> {
    return this.prisma.conversationLineTemplate.delete(args);
  }
}
