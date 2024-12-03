import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaintenanceTeamMemberServiceBase } from "./base/maintenanceTeamMember.service.base";

@Injectable()
export class MaintenanceTeamMemberService extends MaintenanceTeamMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
