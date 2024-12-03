import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BomExplosionItemServiceBase } from "./base/bomExplosionItem.service.base";

@Injectable()
export class BomExplosionItemService extends BomExplosionItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
