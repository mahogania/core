/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Driver as PrismaDriver } from "@prisma/client";

export class DriverServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DriverCountArgs, "select">): Promise<number> {
    return this.prisma.driver.count(args);
  }

  async drivers(args: Prisma.DriverFindManyArgs): Promise<PrismaDriver[]> {
    return this.prisma.driver.findMany(args);
  }
  async driver(
    args: Prisma.DriverFindUniqueArgs
  ): Promise<PrismaDriver | null> {
    return this.prisma.driver.findUnique(args);
  }
  async createDriver(args: Prisma.DriverCreateArgs): Promise<PrismaDriver> {
    return this.prisma.driver.create(args);
  }
  async updateDriver(args: Prisma.DriverUpdateArgs): Promise<PrismaDriver> {
    return this.prisma.driver.update(args);
  }
  async deleteDriver(args: Prisma.DriverDeleteArgs): Promise<PrismaDriver> {
    return this.prisma.driver.delete(args);
  }
}
