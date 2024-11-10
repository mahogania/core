import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScenarioServiceBase } from "./base/scenario.service.base";

@Injectable()
export class ScenarioService extends ScenarioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
