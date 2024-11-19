import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaTriggerScriptServiceBase } from "./base/areaTriggerScript.service.base";

@Injectable()
export class AreaTriggerScriptService extends AreaTriggerScriptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
