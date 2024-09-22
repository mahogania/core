import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaTriggerInvolvedRelationServiceBase } from "./base/areaTriggerInvolvedRelation.service.base";

@Injectable()
export class AreaTriggerInvolvedRelationService extends AreaTriggerInvolvedRelationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
