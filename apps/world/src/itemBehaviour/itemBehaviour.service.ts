import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemBehaviourServiceBase } from "./base/itemBehaviour.service.base";

@Injectable()
export class ItemBehaviourService extends ItemBehaviourServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
