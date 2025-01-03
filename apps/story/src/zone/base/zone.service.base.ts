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
  Zone as PrismaZone,
  Area as PrismaArea,
  Map as PrismaMap,
} from "@prisma/client";

export class ZoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ZoneCountArgs, "select">): Promise<number> {
    return this.prisma.zone.count(args);
  }

  async zones(args: Prisma.ZoneFindManyArgs): Promise<PrismaZone[]> {
    return this.prisma.zone.findMany(args);
  }
  async zone(args: Prisma.ZoneFindUniqueArgs): Promise<PrismaZone | null> {
    return this.prisma.zone.findUnique(args);
  }
  async createZone(args: Prisma.ZoneCreateArgs): Promise<PrismaZone> {
    return this.prisma.zone.create(args);
  }
  async updateZone(args: Prisma.ZoneUpdateArgs): Promise<PrismaZone> {
    return this.prisma.zone.update(args);
  }
  async deleteZone(args: Prisma.ZoneDeleteArgs): Promise<PrismaZone> {
    return this.prisma.zone.delete(args);
  }

  async findAreas(
    parentId: string,
    args: Prisma.AreaFindManyArgs
  ): Promise<PrismaArea[]> {
    return this.prisma.zone
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .areas(args);
  }

  async getMap(parentId: string): Promise<PrismaMap | null> {
    return this.prisma.zone
      .findUnique({
        where: { id: parentId },
      })
      .map();
  }
}
