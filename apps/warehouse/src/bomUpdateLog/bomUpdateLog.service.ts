import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BomUpdateLogServiceBase } from "./base/bomUpdateLog.service.base";

@Injectable()
export class BomUpdateLogService extends BomUpdateLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
