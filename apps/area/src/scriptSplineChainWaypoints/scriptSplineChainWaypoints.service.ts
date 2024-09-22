import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScriptSplineChainWaypointsServiceBase } from "./base/scriptSplineChainWaypoints.service.base";

@Injectable()
export class ScriptSplineChainWaypointsService extends ScriptSplineChainWaypointsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
