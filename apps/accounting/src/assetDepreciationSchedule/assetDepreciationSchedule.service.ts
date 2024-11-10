import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetDepreciationScheduleServiceBase } from "./base/assetDepreciationSchedule.service.base";

@Injectable()
export class AssetDepreciationScheduleService extends AssetDepreciationScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
