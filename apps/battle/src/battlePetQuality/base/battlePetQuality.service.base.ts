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
  BattlePetQuality as PrismaBattlePetQuality,
} from "@prisma/client";

export class BattlePetQualityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BattlePetQualityCountArgs, "select">
  ): Promise<number> {
    return this.prisma.battlePetQuality.count(args);
  }

  async battlePetQualities(
    args: Prisma.BattlePetQualityFindManyArgs
  ): Promise<PrismaBattlePetQuality[]> {
    return this.prisma.battlePetQuality.findMany(args);
  }
  async battlePetQuality(
    args: Prisma.BattlePetQualityFindUniqueArgs
  ): Promise<PrismaBattlePetQuality | null> {
    return this.prisma.battlePetQuality.findUnique(args);
  }
  async createBattlePetQuality(
    args: Prisma.BattlePetQualityCreateArgs
  ): Promise<PrismaBattlePetQuality> {
    return this.prisma.battlePetQuality.create(args);
  }
  async updateBattlePetQuality(
    args: Prisma.BattlePetQualityUpdateArgs
  ): Promise<PrismaBattlePetQuality> {
    return this.prisma.battlePetQuality.update(args);
  }
  async deleteBattlePetQuality(
    args: Prisma.BattlePetQualityDeleteArgs
  ): Promise<PrismaBattlePetQuality> {
    return this.prisma.battlePetQuality.delete(args);
  }
}
