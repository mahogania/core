import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetMaintenanceLogServiceBase } from "./base/assetMaintenanceLog.service.base";

@Injectable()
export class AssetMaintenanceLogService extends AssetMaintenanceLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
