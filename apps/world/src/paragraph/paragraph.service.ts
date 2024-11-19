import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParagraphServiceBase } from "./base/paragraph.service.base";

@Injectable()
export class ParagraphService extends ParagraphServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
