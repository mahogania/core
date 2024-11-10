import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemTaxTemplateDetailServiceBase } from "./base/itemTaxTemplateDetail.service.base";

@Injectable()
export class ItemTaxTemplateDetailService extends ItemTaxTemplateDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
