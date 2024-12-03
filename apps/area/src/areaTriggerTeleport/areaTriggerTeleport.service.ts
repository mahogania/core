import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaTriggerTeleportServiceBase } from "./base/areaTriggerTeleport.service.base";

@Injectable()
export class AreaTriggerTeleportService extends AreaTriggerTeleportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
