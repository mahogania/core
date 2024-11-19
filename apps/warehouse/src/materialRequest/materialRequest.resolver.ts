import * as graphql from "@nestjs/graphql";
import { MaterialRequestResolverBase } from "./base/materialRequest.resolver.base";
import { MaterialRequest } from "./base/MaterialRequest";
import { MaterialRequestService } from "./materialRequest.service";

@graphql.Resolver(() => MaterialRequest)
export class MaterialRequestResolver extends MaterialRequestResolverBase {
  constructor(protected readonly service: MaterialRequestService) {
    super(service);
  }
}
