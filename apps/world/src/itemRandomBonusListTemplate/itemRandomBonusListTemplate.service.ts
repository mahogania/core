import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemRandomBonusListTemplateServiceBase } from "./base/itemRandomBonusListTemplate.service.base";

@Injectable()
export class ItemRandomBonusListTemplateService extends ItemRandomBonusListTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
