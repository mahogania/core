import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PhaseNameServiceBase } from "./base/phaseName.service.base";

@Injectable()
export class PhaseNameService extends PhaseNameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
