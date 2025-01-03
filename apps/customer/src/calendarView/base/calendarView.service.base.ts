/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CalendarView as PrismaCalendarView } from "@prisma/client";

export class CalendarViewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CalendarViewCountArgs, "select">
  ): Promise<number> {
    return this.prisma.calendarView.count(args);
  }

  async calendarViews(
    args: Prisma.CalendarViewFindManyArgs
  ): Promise<PrismaCalendarView[]> {
    return this.prisma.calendarView.findMany(args);
  }
  async calendarView(
    args: Prisma.CalendarViewFindUniqueArgs
  ): Promise<PrismaCalendarView | null> {
    return this.prisma.calendarView.findUnique(args);
  }
  async createCalendarView(
    args: Prisma.CalendarViewCreateArgs
  ): Promise<PrismaCalendarView> {
    return this.prisma.calendarView.create(args);
  }
  async updateCalendarView(
    args: Prisma.CalendarViewUpdateArgs
  ): Promise<PrismaCalendarView> {
    return this.prisma.calendarView.update(args);
  }
  async deleteCalendarView(
    args: Prisma.CalendarViewDeleteArgs
  ): Promise<PrismaCalendarView> {
    return this.prisma.calendarView.delete(args);
  }
}
