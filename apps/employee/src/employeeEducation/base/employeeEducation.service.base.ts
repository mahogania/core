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
  EmployeeEducation as PrismaEmployeeEducation,
} from "@prisma/client";

export class EmployeeEducationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmployeeEducationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.employeeEducation.count(args);
  }

  async employeeEducations(
    args: Prisma.EmployeeEducationFindManyArgs
  ): Promise<PrismaEmployeeEducation[]> {
    return this.prisma.employeeEducation.findMany(args);
  }
  async employeeEducation(
    args: Prisma.EmployeeEducationFindUniqueArgs
  ): Promise<PrismaEmployeeEducation | null> {
    return this.prisma.employeeEducation.findUnique(args);
  }
  async createEmployeeEducation(
    args: Prisma.EmployeeEducationCreateArgs
  ): Promise<PrismaEmployeeEducation> {
    return this.prisma.employeeEducation.create(args);
  }
  async updateEmployeeEducation(
    args: Prisma.EmployeeEducationUpdateArgs
  ): Promise<PrismaEmployeeEducation> {
    return this.prisma.employeeEducation.update(args);
  }
  async deleteEmployeeEducation(
    args: Prisma.EmployeeEducationDeleteArgs
  ): Promise<PrismaEmployeeEducation> {
    return this.prisma.employeeEducation.delete(args);
  }
}
