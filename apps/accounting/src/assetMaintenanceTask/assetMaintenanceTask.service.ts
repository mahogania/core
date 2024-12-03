import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetMaintenanceTaskServiceBase } from "./base/assetMaintenanceTask.service.base";

@Injectable()
export class AssetMaintenanceTaskService extends AssetMaintenanceTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
