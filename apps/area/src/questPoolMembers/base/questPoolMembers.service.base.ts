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
  QuestPoolMembers as PrismaQuestPoolMembers,
} from "@prisma/client";

export class QuestPoolMembersServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestPoolMembersCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questPoolMembers.count(args);
  }

  async questPoolMembersItems(
    args: Prisma.QuestPoolMembersFindManyArgs
  ): Promise<PrismaQuestPoolMembers[]> {
    return this.prisma.questPoolMembers.findMany(args);
  }
  async questPoolMembers(
    args: Prisma.QuestPoolMembersFindUniqueArgs
  ): Promise<PrismaQuestPoolMembers | null> {
    return this.prisma.questPoolMembers.findUnique(args);
  }
  async createQuestPoolMembers(
    args: Prisma.QuestPoolMembersCreateArgs
  ): Promise<PrismaQuestPoolMembers> {
    return this.prisma.questPoolMembers.create(args);
  }
  async updateQuestPoolMembers(
    args: Prisma.QuestPoolMembersUpdateArgs
  ): Promise<PrismaQuestPoolMembers> {
    return this.prisma.questPoolMembers.update(args);
  }
  async deleteQuestPoolMembers(
    args: Prisma.QuestPoolMembersDeleteArgs
  ): Promise<PrismaQuestPoolMembers> {
    return this.prisma.questPoolMembers.delete(args);
  }
}