import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetRepairServiceBase } from "./base/assetRepair.service.base";

@Injectable()
export class AssetRepairService extends AssetRepairServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
