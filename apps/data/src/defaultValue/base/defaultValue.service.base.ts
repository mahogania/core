/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DefaultValue as PrismaDefaultValue } from "@prisma/client";

export class DefaultValueServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DefaultValueCountArgs, "select">
  ): Promise<number> {
    return this.prisma.defaultValue.count(args);
  }

  async defaultValues(
    args: Prisma.DefaultValueFindManyArgs
  ): Promise<PrismaDefaultValue[]> {
    return this.prisma.defaultValue.findMany(args);
  }
  async defaultValue(
    args: Prisma.DefaultValueFindUniqueArgs
  ): Promise<PrismaDefaultValue | null> {
    return this.prisma.defaultValue.findUnique(args);
  }
  async createDefaultValue(
    args: Prisma.DefaultValueCreateArgs
  ): Promise<PrismaDefaultValue> {
    return this.prisma.defaultValue.create(args);
  }
  async updateDefaultValue(
    args: Prisma.DefaultValueUpdateArgs
  ): Promise<PrismaDefaultValue> {
    return this.prisma.defaultValue.update(args);
  }
  async deleteDefaultValue(
    args: Prisma.DefaultValueDeleteArgs
  ): Promise<PrismaDefaultValue> {
    return this.prisma.defaultValue.delete(args);
  }
}
