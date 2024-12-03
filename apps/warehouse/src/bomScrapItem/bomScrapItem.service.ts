import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BomScrapItemServiceBase } from "./base/bomScrapItem.service.base";

@Injectable()
export class BomScrapItemService extends BomScrapItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
