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
  JumpChargeParams as PrismaJumpChargeParams,
} from "@prisma/client";

export class JumpChargeParamsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.JumpChargeParamsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.jumpChargeParams.count(args);
  }

  async jumpChargeParamsItems(
    args: Prisma.JumpChargeParamsFindManyArgs
  ): Promise<PrismaJumpChargeParams[]> {
    return this.prisma.jumpChargeParams.findMany(args);
  }
  async jumpChargeParams(
    args: Prisma.JumpChargeParamsFindUniqueArgs
  ): Promise<PrismaJumpChargeParams | null> {
    return this.prisma.jumpChargeParams.findUnique(args);
  }
  async createJumpChargeParams(
    args: Prisma.JumpChargeParamsCreateArgs
  ): Promise<PrismaJumpChargeParams> {
    return this.prisma.jumpChargeParams.create(args);
  }
  async updateJumpChargeParams(
    args: Prisma.JumpChargeParamsUpdateArgs
  ): Promise<PrismaJumpChargeParams> {
    return this.prisma.jumpChargeParams.update(args);
  }
  async deleteJumpChargeParams(
    args: Prisma.JumpChargeParamsDeleteArgs
  ): Promise<PrismaJumpChargeParams> {
    return this.prisma.jumpChargeParams.delete(args);
  }
}
