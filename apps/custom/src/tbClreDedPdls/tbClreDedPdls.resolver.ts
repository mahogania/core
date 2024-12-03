import * as graphql from "@nestjs/graphql";
import { TbClreDedPdlsResolverBase } from "./base/tbClreDedPdls.resolver.base";
import { TbClreDedPdls } from "./base/TbClreDedPdls";
import { TbClreDedPdlsService } from "./tbClreDedPdls.service";

@graphql.Resolver(() => TbClreDedPdls)
export class TbClreDedPdlsResolver extends TbClreDedPdlsResolverBase {
  constructor(protected readonly service: TbClreDedPdlsService) {
    super(service);
  }
}
