import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BomCreatorItemServiceBase } from "./base/bomCreatorItem.service.base";

@Injectable()
export class BomCreatorItemService extends BomCreatorItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
