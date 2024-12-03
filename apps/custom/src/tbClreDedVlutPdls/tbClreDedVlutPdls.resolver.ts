import * as graphql from "@nestjs/graphql";
import { TbClreDedVlutPdlsResolverBase } from "./base/tbClreDedVlutPdls.resolver.base";
import { TbClreDedVlutPdls } from "./base/TbClreDedVlutPdls";
import { TbClreDedVlutPdlsService } from "./tbClreDedVlutPdls.service";

@graphql.Resolver(() => TbClreDedVlutPdls)
export class TbClreDedVlutPdlsResolver extends TbClreDedVlutPdlsResolverBase {
  constructor(protected readonly service: TbClreDedVlutPdlsService) {
    super(service);
  }
}
