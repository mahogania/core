import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdvanceTaxServiceBase } from "./base/advanceTax.service.base";

@Injectable()
export class AdvanceTaxService extends AdvanceTaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
