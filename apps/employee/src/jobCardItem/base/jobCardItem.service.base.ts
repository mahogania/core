/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, JobCardItem as PrismaJobCardItem } from "@prisma/client";

export class JobCardItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.JobCardItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.jobCardItem.count(args);
  }

  async jobCardItems(
    args: Prisma.JobCardItemFindManyArgs
  ): Promise<PrismaJobCardItem[]> {
    return this.prisma.jobCardItem.findMany(args);
  }
  async jobCardItem(
    args: Prisma.JobCardItemFindUniqueArgs
  ): Promise<PrismaJobCardItem | null> {
    return this.prisma.jobCardItem.findUnique(args);
  }
  async createJobCardItem(
    args: Prisma.JobCardItemCreateArgs
  ): Promise<PrismaJobCardItem> {
    return this.prisma.jobCardItem.create(args);
  }
  async updateJobCardItem(
    args: Prisma.JobCardItemUpdateArgs
  ): Promise<PrismaJobCardItem> {
    return this.prisma.jobCardItem.update(args);
  }
  async deleteJobCardItem(
    args: Prisma.JobCardItemDeleteArgs
  ): Promise<PrismaJobCardItem> {
    return this.prisma.jobCardItem.delete(args);
  }
}
