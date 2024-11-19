import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ThreatServiceBase } from "./base/threat.service.base";

@Injectable()
export class ThreatService extends ThreatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
