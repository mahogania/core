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
  AreaTriggerScript as PrismaAreaTriggerScript,
} from "@prisma/client";

export class AreaTriggerScriptServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AreaTriggerScriptCountArgs, "select">
  ): Promise<number> {
    return this.prisma.areaTriggerScript.count(args);
  }

  async areaTriggerScripts(
    args: Prisma.AreaTriggerScriptFindManyArgs
  ): Promise<PrismaAreaTriggerScript[]> {
    return this.prisma.areaTriggerScript.findMany(args);
  }
  async areaTriggerScript(
    args: Prisma.AreaTriggerScriptFindUniqueArgs
  ): Promise<PrismaAreaTriggerScript | null> {
    return this.prisma.areaTriggerScript.findUnique(args);
  }
  async createAreaTriggerScript(
    args: Prisma.AreaTriggerScriptCreateArgs
  ): Promise<PrismaAreaTriggerScript> {
    return this.prisma.areaTriggerScript.create(args);
  }
  async updateAreaTriggerScript(
    args: Prisma.AreaTriggerScriptUpdateArgs
  ): Promise<PrismaAreaTriggerScript> {
    return this.prisma.areaTriggerScript.update(args);
  }
  async deleteAreaTriggerScript(
    args: Prisma.AreaTriggerScriptDeleteArgs
  ): Promise<PrismaAreaTriggerScript> {
    return this.prisma.areaTriggerScript.delete(args);
  }
}
