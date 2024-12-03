import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaterialRequestItemServiceBase } from "./base/materialRequestItem.service.base";

@Injectable()
export class MaterialRequestItemService extends MaterialRequestItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
