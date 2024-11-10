import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaterialRequestServiceBase } from "./base/materialRequest.service.base";

@Injectable()
export class MaterialRequestService extends MaterialRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
