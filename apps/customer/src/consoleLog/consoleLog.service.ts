import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsoleLogServiceBase } from "./base/consoleLog.service.base";

@Injectable()
export class ConsoleLogService extends ConsoleLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
