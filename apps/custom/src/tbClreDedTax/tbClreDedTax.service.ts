import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedTaxServiceBase } from "./base/tbClreDedTax.service.base";

@Injectable()
export class TbClreDedTaxService extends TbClreDedTaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
