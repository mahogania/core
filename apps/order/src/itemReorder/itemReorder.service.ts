import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemReorderServiceBase } from "./base/itemReorder.service.base";

@Injectable()
export class ItemReorderService extends ItemReorderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
