import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScenarioPoiServiceBase } from "./base/scenarioPoi.service.base";

@Injectable()
export class ScenarioPoiService extends ScenarioPoiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
