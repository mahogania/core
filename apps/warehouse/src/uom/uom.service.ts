import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UomServiceBase } from "./base/uom.service.base";

@Injectable()
export class UomService extends UomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
