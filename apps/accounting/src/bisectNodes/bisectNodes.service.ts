import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BisectNodesServiceBase } from "./base/bisectNodes.service.base";

@Injectable()
export class BisectNodesService extends BisectNodesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
