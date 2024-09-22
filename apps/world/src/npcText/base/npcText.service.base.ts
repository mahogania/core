/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, NpcText as PrismaNpcText } from "@prisma/client";

export class NpcTextServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.NpcTextCountArgs, "select">): Promise<number> {
    return this.prisma.npcText.count(args);
  }

  async npcTexts(args: Prisma.NpcTextFindManyArgs): Promise<PrismaNpcText[]> {
    return this.prisma.npcText.findMany(args);
  }
  async npcText(
    args: Prisma.NpcTextFindUniqueArgs
  ): Promise<PrismaNpcText | null> {
    return this.prisma.npcText.findUnique(args);
  }
  async createNpcText(args: Prisma.NpcTextCreateArgs): Promise<PrismaNpcText> {
    return this.prisma.npcText.create(args);
  }
  async updateNpcText(args: Prisma.NpcTextUpdateArgs): Promise<PrismaNpcText> {
    return this.prisma.npcText.update(args);
  }
  async deleteNpcText(args: Prisma.NpcTextDeleteArgs): Promise<PrismaNpcText> {
    return this.prisma.npcText.delete(args);
  }
}
