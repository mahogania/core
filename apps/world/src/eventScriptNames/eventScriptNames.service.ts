import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventScriptNamesServiceBase } from "./base/eventScriptNames.service.base";

@Injectable()
export class EventScriptNamesService extends EventScriptNamesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
