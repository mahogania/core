import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesStageServiceBase } from "./base/salesStage.service.base";

@Injectable()
export class SalesStageService extends SalesStageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
