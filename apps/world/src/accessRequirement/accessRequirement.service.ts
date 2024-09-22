import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccessRequirementServiceBase } from "./base/accessRequirement.service.base";

@Injectable()
export class AccessRequirementService extends AccessRequirementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
