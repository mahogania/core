import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocTypeLayoutFieldServiceBase } from "./base/docTypeLayoutField.service.base";

@Injectable()
export class DocTypeLayoutFieldService extends DocTypeLayoutFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
