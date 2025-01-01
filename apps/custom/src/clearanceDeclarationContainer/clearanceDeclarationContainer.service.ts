import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClearanceDeclarationContainerServiceBase } from "./base/clearanceDeclarationContainer.service.base";

@Injectable()
export class ClearanceDeclarationContainerService extends ClearanceDeclarationContainerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
