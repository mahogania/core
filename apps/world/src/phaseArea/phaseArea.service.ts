import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PhaseAreaServiceBase } from "./base/phaseArea.service.base";

@Injectable()
export class PhaseAreaService extends PhaseAreaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
