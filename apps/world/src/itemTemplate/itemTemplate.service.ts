import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemTemplateServiceBase } from "./base/itemTemplate.service.base";

@Injectable()
export class ItemTemplateService extends ItemTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
