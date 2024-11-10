import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetMaintenanceTeamServiceBase } from "./base/assetMaintenanceTeam.service.base";

@Injectable()
export class AssetMaintenanceTeamService extends AssetMaintenanceTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
