/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ConsoleLog as PrismaConsoleLog } from "@prisma/client";

export class ConsoleLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ConsoleLogCountArgs, "select">
  ): Promise<number> {
    return this.prisma.consoleLog.count(args);
  }

  async consoleLogs(
    args: Prisma.ConsoleLogFindManyArgs
  ): Promise<PrismaConsoleLog[]> {
    return this.prisma.consoleLog.findMany(args);
  }
  async consoleLog(
    args: Prisma.ConsoleLogFindUniqueArgs
  ): Promise<PrismaConsoleLog | null> {
    return this.prisma.consoleLog.findUnique(args);
  }
  async createConsoleLog(
    args: Prisma.ConsoleLogCreateArgs
  ): Promise<PrismaConsoleLog> {
    return this.prisma.consoleLog.create(args);
  }
  async updateConsoleLog(
    args: Prisma.ConsoleLogUpdateArgs
  ): Promise<PrismaConsoleLog> {
    return this.prisma.consoleLog.update(args);
  }
  async deleteConsoleLog(
    args: Prisma.ConsoleLogDeleteArgs
  ): Promise<PrismaConsoleLog> {
    return this.prisma.consoleLog.delete(args);
  }
}
