/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, EmailCampaign as PrismaEmailCampaign } from "@prisma/client";

export class EmailCampaignServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmailCampaignCountArgs, "select">
  ): Promise<number> {
    return this.prisma.emailCampaign.count(args);
  }

  async emailCampaigns(
    args: Prisma.EmailCampaignFindManyArgs
  ): Promise<PrismaEmailCampaign[]> {
    return this.prisma.emailCampaign.findMany(args);
  }
  async emailCampaign(
    args: Prisma.EmailCampaignFindUniqueArgs
  ): Promise<PrismaEmailCampaign | null> {
    return this.prisma.emailCampaign.findUnique(args);
  }
  async createEmailCampaign(
    args: Prisma.EmailCampaignCreateArgs
  ): Promise<PrismaEmailCampaign> {
    return this.prisma.emailCampaign.create(args);
  }
  async updateEmailCampaign(
    args: Prisma.EmailCampaignUpdateArgs
  ): Promise<PrismaEmailCampaign> {
    return this.prisma.emailCampaign.update(args);
  }
  async deleteEmailCampaign(
    args: Prisma.EmailCampaignDeleteArgs
  ): Promise<PrismaEmailCampaign> {
    return this.prisma.emailCampaign.delete(args);
  }
}
