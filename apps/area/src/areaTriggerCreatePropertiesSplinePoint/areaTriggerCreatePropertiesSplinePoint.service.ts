import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaTriggerCreatePropertiesSplinePointServiceBase } from "./base/areaTriggerCreatePropertiesSplinePoint.service.base";

@Injectable()
export class AreaTriggerCreatePropertiesSplinePointService extends AreaTriggerCreatePropertiesSplinePointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
