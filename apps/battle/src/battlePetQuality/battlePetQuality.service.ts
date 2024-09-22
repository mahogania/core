import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BattlePetQualityServiceBase } from "./base/battlePetQuality.service.base";

@Injectable()
export class BattlePetQualityService extends BattlePetQualityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
