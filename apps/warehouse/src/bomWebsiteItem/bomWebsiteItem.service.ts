import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BomWebsiteItemServiceBase } from "./base/bomWebsiteItem.service.base";

@Injectable()
export class BomWebsiteItemService extends BomWebsiteItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
