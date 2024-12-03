import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedVlutPdlsServiceBase } from "./base/tbClreDedVlutPdls.service.base";

@Injectable()
export class TbClreDedVlutPdlsService extends TbClreDedVlutPdlsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
