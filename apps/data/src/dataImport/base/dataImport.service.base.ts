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
  DataImport as PrismaDataImport,
  DataImportLog as PrismaDataImportLog,
} from "@prisma/client";

export class DataImportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DataImportCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dataImport.count(args);
  }

  async dataImports(
    args: Prisma.DataImportFindManyArgs
  ): Promise<PrismaDataImport[]> {
    return this.prisma.dataImport.findMany(args);
  }
  async dataImport(
    args: Prisma.DataImportFindUniqueArgs
  ): Promise<PrismaDataImport | null> {
    return this.prisma.dataImport.findUnique(args);
  }
  async createDataImport(
    args: Prisma.DataImportCreateArgs
  ): Promise<PrismaDataImport> {
    return this.prisma.dataImport.create(args);
  }
  async updateDataImport(
    args: Prisma.DataImportUpdateArgs
  ): Promise<PrismaDataImport> {
    return this.prisma.dataImport.update(args);
  }
  async deleteDataImport(
    args: Prisma.DataImportDeleteArgs
  ): Promise<PrismaDataImport> {
    return this.prisma.dataImport.delete(args);
  }

  async findDataImportLogs(
    parentId: string,
    args: Prisma.DataImportLogFindManyArgs
  ): Promise<PrismaDataImportLog[]> {
    return this.prisma.dataImport
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .dataImportLogs(args);
  }
}