import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UomCategoryServiceBase } from "./base/uomCategory.service.base";

@Injectable()
export class UomCategoryService extends UomCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
