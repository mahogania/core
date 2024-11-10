import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetRepairConsumedItemServiceBase } from "./base/assetRepairConsumedItem.service.base";

@Injectable()
export class AssetRepairConsumedItemService extends AssetRepairConsumedItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
