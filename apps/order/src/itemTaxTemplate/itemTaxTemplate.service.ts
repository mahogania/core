import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemTaxTemplateServiceBase } from "./base/itemTaxTemplate.service.base";

@Injectable()
export class ItemTaxTemplateService extends ItemTaxTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
