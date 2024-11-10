import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompetitorDetailServiceBase } from "./base/competitorDetail.service.base";

@Injectable()
export class CompetitorDetailService extends CompetitorDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
