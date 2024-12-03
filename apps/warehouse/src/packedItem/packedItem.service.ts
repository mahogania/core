import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PackedItemServiceBase } from "./base/packedItem.service.base";

@Injectable()
export class PackedItemService extends PackedItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
