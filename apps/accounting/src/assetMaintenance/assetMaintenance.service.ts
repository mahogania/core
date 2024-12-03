import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetMaintenanceServiceBase } from "./base/assetMaintenance.service.base";

@Injectable()
export class AssetMaintenanceService extends AssetMaintenanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
