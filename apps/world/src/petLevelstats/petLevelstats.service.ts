import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PetLevelstatsServiceBase } from "./base/petLevelstats.service.base";

@Injectable()
export class PetLevelstatsService extends PetLevelstatsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
