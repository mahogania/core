import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CargoDeclarationVehicleServiceBase } from "./base/cargoDeclarationVehicle.service.base";

@Injectable()
export class CargoDeclarationVehicleService extends CargoDeclarationVehicleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
