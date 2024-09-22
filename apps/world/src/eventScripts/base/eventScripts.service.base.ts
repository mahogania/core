/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, EventScripts as PrismaEventScripts } from "@prisma/client";

export class EventScriptsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EventScriptsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.eventScripts.count(args);
  }

  async eventScriptsItems(
    args: Prisma.EventScriptsFindManyArgs
  ): Promise<PrismaEventScripts[]> {
    return this.prisma.eventScripts.findMany(args);
  }
  async eventScripts(
    args: Prisma.EventScriptsFindUniqueArgs
  ): Promise<PrismaEventScripts | null> {
    return this.prisma.eventScripts.findUnique(args);
  }
  async createEventScripts(
    args: Prisma.EventScriptsCreateArgs
  ): Promise<PrismaEventScripts> {
    return this.prisma.eventScripts.create(args);
  }
  async updateEventScripts(
    args: Prisma.EventScriptsUpdateArgs
  ): Promise<PrismaEventScripts> {
    return this.prisma.eventScripts.update(args);
  }
  async deleteEventScripts(
    args: Prisma.EventScriptsDeleteArgs
  ): Promise<PrismaEventScripts> {
    return this.prisma.eventScripts.delete(args);
  }
}
