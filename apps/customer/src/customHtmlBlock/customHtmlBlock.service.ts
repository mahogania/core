import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomHtmlBlockServiceBase } from "./base/customHtmlBlock.service.base";

@Injectable()
export class CustomHtmlBlockService extends CustomHtmlBlockServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
