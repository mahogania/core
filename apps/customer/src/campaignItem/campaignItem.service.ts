import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CampaignItemServiceBase } from "./base/campaignItem.service.base";

@Injectable()
export class CampaignItemService extends CampaignItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
