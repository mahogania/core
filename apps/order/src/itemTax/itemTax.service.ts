import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemTaxServiceBase } from "./base/itemTax.service.base";

@Injectable()
export class ItemTaxService extends ItemTaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
