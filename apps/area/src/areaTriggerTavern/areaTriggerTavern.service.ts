import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaTriggerTavernServiceBase } from "./base/areaTriggerTavern.service.base";

@Injectable()
export class AreaTriggerTavernService extends AreaTriggerTavernServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
