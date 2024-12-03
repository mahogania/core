import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CargoDeclarationTransportServiceBase } from "./base/cargoDeclarationTransport.service.base";

@Injectable()
export class CargoDeclarationTransportService extends CargoDeclarationTransportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
