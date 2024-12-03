import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PickListItemServiceBase } from "./base/pickListItem.service.base";

@Injectable()
export class PickListItemService extends PickListItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
