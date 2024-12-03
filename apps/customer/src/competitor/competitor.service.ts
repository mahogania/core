import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompetitorServiceBase } from "./base/competitor.service.base";

@Injectable()
export class CompetitorService extends CompetitorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
