import * as graphql from "@nestjs/graphql";
import { CustomDocPermResolverBase } from "./base/customDocPerm.resolver.base";
import { CustomDocPerm } from "./base/CustomDocPerm";
import { CustomDocPermService } from "./customDocPerm.service";

@graphql.Resolver(() => CustomDocPerm)
export class CustomDocPermResolver extends CustomDocPermResolverBase {
  constructor(protected readonly service: CustomDocPermService) {
    super(service);
  }
}
