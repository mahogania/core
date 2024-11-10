import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemAttributeValueServiceBase } from "./base/itemAttributeValue.service.base";

@Injectable()
export class ItemAttributeValueService extends ItemAttributeValueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
