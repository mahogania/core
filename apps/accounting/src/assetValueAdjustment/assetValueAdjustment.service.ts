import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetValueAdjustmentServiceBase } from "./base/assetValueAdjustment.service.base";

@Injectable()
export class AssetValueAdjustmentService extends AssetValueAdjustmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
