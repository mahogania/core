import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CargoDeclarationTrailerServiceBase } from "./base/cargoDeclarationTrailer.service.base";

@Injectable()
export class CargoDeclarationTrailerService extends CargoDeclarationTrailerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
