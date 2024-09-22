import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventScriptsServiceBase } from "./base/eventScripts.service.base";

@Injectable()
export class EventScriptsService extends EventScriptsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
