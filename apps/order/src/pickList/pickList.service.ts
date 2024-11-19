import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PickListServiceBase } from "./base/pickList.service.base";

@Injectable()
export class PickListService extends PickListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
