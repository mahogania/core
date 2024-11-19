/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, EmployeeGroup as PrismaEmployeeGroup } from "@prisma/client";

export class EmployeeGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmployeeGroupCountArgs, "select">
  ): Promise<number> {
    return this.prisma.employeeGroup.count(args);
  }

  async employeeGroups(
    args: Prisma.EmployeeGroupFindManyArgs
  ): Promise<PrismaEmployeeGroup[]> {
    return this.prisma.employeeGroup.findMany(args);
  }
  async employeeGroup(
    args: Prisma.EmployeeGroupFindUniqueArgs
  ): Promise<PrismaEmployeeGroup | null> {
    return this.prisma.employeeGroup.findUnique(args);
  }
  async createEmployeeGroup(
    args: Prisma.EmployeeGroupCreateArgs
  ): Promise<PrismaEmployeeGroup> {
    return this.prisma.employeeGroup.create(args);
  }
  async updateEmployeeGroup(
    args: Prisma.EmployeeGroupUpdateArgs
  ): Promise<PrismaEmployeeGroup> {
    return this.prisma.employeeGroup.update(args);
  }
  async deleteEmployeeGroup(
    args: Prisma.EmployeeGroupDeleteArgs
  ): Promise<PrismaEmployeeGroup> {
    return this.prisma.employeeGroup.delete(args);
  }
}