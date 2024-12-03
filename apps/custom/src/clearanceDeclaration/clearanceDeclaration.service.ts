import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClearanceDeclarationServiceBase } from "./base/clearanceDeclaration.service.base";

@Injectable()
export class ClearanceDeclarationService extends ClearanceDeclarationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
