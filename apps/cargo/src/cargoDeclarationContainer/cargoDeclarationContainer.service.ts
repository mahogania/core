import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CargoDeclarationContainerServiceBase } from "./base/cargoDeclarationContainer.service.base";

@Injectable()
export class CargoDeclarationContainerService extends CargoDeclarationContainerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
