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
  EmailQueueRecipient as PrismaEmailQueueRecipient,
} from "@prisma/client";

export class EmailQueueRecipientServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmailQueueRecipientCountArgs, "select">
  ): Promise<number> {
    return this.prisma.emailQueueRecipient.count(args);
  }

  async emailQueueRecipients(
    args: Prisma.EmailQueueRecipientFindManyArgs
  ): Promise<PrismaEmailQueueRecipient[]> {
    return this.prisma.emailQueueRecipient.findMany(args);
  }
  async emailQueueRecipient(
    args: Prisma.EmailQueueRecipientFindUniqueArgs
  ): Promise<PrismaEmailQueueRecipient | null> {
    return this.prisma.emailQueueRecipient.findUnique(args);
  }
  async createEmailQueueRecipient(
    args: Prisma.EmailQueueRecipientCreateArgs
  ): Promise<PrismaEmailQueueRecipient> {
    return this.prisma.emailQueueRecipient.create(args);
  }
  async updateEmailQueueRecipient(
    args: Prisma.EmailQueueRecipientUpdateArgs
  ): Promise<PrismaEmailQueueRecipient> {
    return this.prisma.emailQueueRecipient.update(args);
  }
  async deleteEmailQueueRecipient(
    args: Prisma.EmailQueueRecipientDeleteArgs
  ): Promise<PrismaEmailQueueRecipient> {
    return this.prisma.emailQueueRecipient.delete(args);
  }
}
