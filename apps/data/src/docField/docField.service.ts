import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocFieldServiceBase } from "./base/docField.service.base";

@Injectable()
export class DocFieldService extends DocFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
