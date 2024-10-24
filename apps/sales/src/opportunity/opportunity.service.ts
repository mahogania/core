import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OpportunityServiceBase } from "./base/opportunity.service.base";

@Injectable()
export class OpportunityService extends OpportunityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
