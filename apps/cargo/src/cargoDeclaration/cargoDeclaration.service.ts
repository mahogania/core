import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CargoDeclarationServiceBase } from "./base/cargoDeclaration.service.base";

@Injectable()
export class CargoDeclarationService extends CargoDeclarationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
