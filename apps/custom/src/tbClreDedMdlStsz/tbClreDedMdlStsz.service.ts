import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedMdlStszServiceBase } from "./base/tbClreDedMdlStsz.service.base";

@Injectable()
export class TbClreDedMdlStszService extends TbClreDedMdlStszServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
