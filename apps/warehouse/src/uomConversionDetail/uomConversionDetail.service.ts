import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UomConversionDetailServiceBase } from "./base/uomConversionDetail.service.base";

@Injectable()
export class UomConversionDetailService extends UomConversionDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
