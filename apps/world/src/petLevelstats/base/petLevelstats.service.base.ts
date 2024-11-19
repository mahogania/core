/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PetLevelstats as PrismaPetLevelstats } from "@prisma/client";

export class PetLevelstatsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PetLevelstatsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.petLevelstats.count(args);
  }

  async petLevelstatsItems(
    args: Prisma.PetLevelstatsFindManyArgs
  ): Promise<PrismaPetLevelstats[]> {
    return this.prisma.petLevelstats.findMany(args);
  }
  async petLevelstats(
    args: Prisma.PetLevelstatsFindUniqueArgs
  ): Promise<PrismaPetLevelstats | null> {
    return this.prisma.petLevelstats.findUnique(args);
  }
  async createPetLevelstats(
    args: Prisma.PetLevelstatsCreateArgs
  ): Promise<PrismaPetLevelstats> {
    return this.prisma.petLevelstats.create(args);
  }
  async updatePetLevelstats(
    args: Prisma.PetLevelstatsUpdateArgs
  ): Promise<PrismaPetLevelstats> {
    return this.prisma.petLevelstats.update(args);
  }
  async deletePetLevelstats(
    args: Prisma.PetLevelstatsDeleteArgs
  ): Promise<PrismaPetLevelstats> {
    return this.prisma.petLevelstats.delete(args);
  }
}
