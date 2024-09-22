import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaTriggerCreatePropertiesOrbitServiceBase } from "./base/areaTriggerCreatePropertiesOrbit.service.base";

@Injectable()
export class AreaTriggerCreatePropertiesOrbitService extends AreaTriggerCreatePropertiesOrbitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
