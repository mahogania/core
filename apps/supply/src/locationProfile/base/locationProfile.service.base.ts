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
  LocationProfile as PrismaLocationProfile,
} from "@prisma/client";

export class LocationProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LocationProfileCountArgs, "select">
  ): Promise<number> {
    return this.prisma.locationProfile.count(args);
  }

  async locationProfiles(
    args: Prisma.LocationProfileFindManyArgs
  ): Promise<PrismaLocationProfile[]> {
    return this.prisma.locationProfile.findMany(args);
  }
  async locationProfile(
    args: Prisma.LocationProfileFindUniqueArgs
  ): Promise<PrismaLocationProfile | null> {
    return this.prisma.locationProfile.findUnique(args);
  }
  async createLocationProfile(
    args: Prisma.LocationProfileCreateArgs
  ): Promise<PrismaLocationProfile> {
    return this.prisma.locationProfile.create(args);
  }
  async updateLocationProfile(
    args: Prisma.LocationProfileUpdateArgs
  ): Promise<PrismaLocationProfile> {
    return this.prisma.locationProfile.update(args);
  }
  async deleteLocationProfile(
    args: Prisma.LocationProfileDeleteArgs
  ): Promise<PrismaLocationProfile> {
    return this.prisma.locationProfile.delete(args);
  }
}
