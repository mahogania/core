import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UomConversionFactorServiceBase } from "./base/uomConversionFactor.service.base";

@Injectable()
export class UomConversionFactorService extends UomConversionFactorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
