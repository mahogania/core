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
  MaintenanceVisit as PrismaMaintenanceVisit,
} from "@prisma/client";

export class MaintenanceVisitServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MaintenanceVisitCountArgs, "select">
  ): Promise<number> {
    return this.prisma.maintenanceVisit.count(args);
  }

  async maintenanceVisits(
    args: Prisma.MaintenanceVisitFindManyArgs
  ): Promise<PrismaMaintenanceVisit[]> {
    return this.prisma.maintenanceVisit.findMany(args);
  }
  async maintenanceVisit(
    args: Prisma.MaintenanceVisitFindUniqueArgs
  ): Promise<PrismaMaintenanceVisit | null> {
    return this.prisma.maintenanceVisit.findUnique(args);
  }
  async createMaintenanceVisit(
    args: Prisma.MaintenanceVisitCreateArgs
  ): Promise<PrismaMaintenanceVisit> {
    return this.prisma.maintenanceVisit.create(args);
  }
  async updateMaintenanceVisit(
    args: Prisma.MaintenanceVisitUpdateArgs
  ): Promise<PrismaMaintenanceVisit> {
    return this.prisma.maintenanceVisit.update(args);
  }
  async deleteMaintenanceVisit(
    args: Prisma.MaintenanceVisitDeleteArgs
  ): Promise<PrismaMaintenanceVisit> {
    return this.prisma.maintenanceVisit.delete(args);
  }
}