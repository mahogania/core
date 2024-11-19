import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesTeamServiceBase } from "./base/salesTeam.service.base";

@Injectable()
export class SalesTeamService extends SalesTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
