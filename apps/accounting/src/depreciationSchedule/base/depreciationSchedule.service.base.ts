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
  DepreciationSchedule as PrismaDepreciationSchedule,
} from "@prisma/client";

export class DepreciationScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DepreciationScheduleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.depreciationSchedule.count(args);
  }

  async depreciationSchedules(
    args: Prisma.DepreciationScheduleFindManyArgs
  ): Promise<PrismaDepreciationSchedule[]> {
    return this.prisma.depreciationSchedule.findMany(args);
  }
  async depreciationSchedule(
    args: Prisma.DepreciationScheduleFindUniqueArgs
  ): Promise<PrismaDepreciationSchedule | null> {
    return this.prisma.depreciationSchedule.findUnique(args);
  }
  async createDepreciationSchedule(
    args: Prisma.DepreciationScheduleCreateArgs
  ): Promise<PrismaDepreciationSchedule> {
    return this.prisma.depreciationSchedule.create(args);
  }
  async updateDepreciationSchedule(
    args: Prisma.DepreciationScheduleUpdateArgs
  ): Promise<PrismaDepreciationSchedule> {
    return this.prisma.depreciationSchedule.update(args);
  }
  async deleteDepreciationSchedule(
    args: Prisma.DepreciationScheduleDeleteArgs
  ): Promise<PrismaDepreciationSchedule> {
    return this.prisma.depreciationSchedule.delete(args);
  }
}