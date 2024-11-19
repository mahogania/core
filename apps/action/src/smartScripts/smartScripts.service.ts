import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SmartScriptsServiceBase } from "./base/smartScripts.service.base";

@Injectable()
export class SmartScriptsService extends SmartScriptsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
