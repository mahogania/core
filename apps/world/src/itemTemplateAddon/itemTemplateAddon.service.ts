import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemTemplateAddonServiceBase } from "./base/itemTemplateAddon.service.base";

@Injectable()
export class ItemTemplateAddonService extends ItemTemplateAddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
