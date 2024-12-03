/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, HolidayList as PrismaHolidayList } from "@prisma/client";

export class HolidayListServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.HolidayListCountArgs, "select">
  ): Promise<number> {
    return this.prisma.holidayList.count(args);
  }

  async holidayLists(
    args: Prisma.HolidayListFindManyArgs
  ): Promise<PrismaHolidayList[]> {
    return this.prisma.holidayList.findMany(args);
  }
  async holidayList(
    args: Prisma.HolidayListFindUniqueArgs
  ): Promise<PrismaHolidayList | null> {
    return this.prisma.holidayList.findUnique(args);
  }
  async createHolidayList(
    args: Prisma.HolidayListCreateArgs
  ): Promise<PrismaHolidayList> {
    return this.prisma.holidayList.create(args);
  }
  async updateHolidayList(
    args: Prisma.HolidayListUpdateArgs
  ): Promise<PrismaHolidayList> {
    return this.prisma.holidayList.update(args);
  }
  async deleteHolidayList(
    args: Prisma.HolidayListDeleteArgs
  ): Promise<PrismaHolidayList> {
    return this.prisma.holidayList.delete(args);
  }
}
