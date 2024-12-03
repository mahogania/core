import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaTeleportTriggerServiceBase } from "./base/areaTeleportTrigger.service.base";

@Injectable()
export class AreaTeleportTriggerService extends AreaTeleportTriggerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
