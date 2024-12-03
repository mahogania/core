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
  JobCardScheduledTime as PrismaJobCardScheduledTime,
} from "@prisma/client";

export class JobCardScheduledTimeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.JobCardScheduledTimeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.jobCardScheduledTime.count(args);
  }

  async jobCardScheduledTimes(
    args: Prisma.JobCardScheduledTimeFindManyArgs
  ): Promise<PrismaJobCardScheduledTime[]> {
    return this.prisma.jobCardScheduledTime.findMany(args);
  }
  async jobCardScheduledTime(
    args: Prisma.JobCardScheduledTimeFindUniqueArgs
  ): Promise<PrismaJobCardScheduledTime | null> {
    return this.prisma.jobCardScheduledTime.findUnique(args);
  }
  async createJobCardScheduledTime(
    args: Prisma.JobCardScheduledTimeCreateArgs
  ): Promise<PrismaJobCardScheduledTime> {
    return this.prisma.jobCardScheduledTime.create(args);
  }
  async updateJobCardScheduledTime(
    args: Prisma.JobCardScheduledTimeUpdateArgs
  ): Promise<PrismaJobCardScheduledTime> {
    return this.prisma.jobCardScheduledTime.update(args);
  }
  async deleteJobCardScheduledTime(
    args: Prisma.JobCardScheduledTimeDeleteArgs
  ): Promise<PrismaJobCardScheduledTime> {
    return this.prisma.jobCardScheduledTime.delete(args);
  }
}
