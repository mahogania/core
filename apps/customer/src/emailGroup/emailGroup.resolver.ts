import * as graphql from "@nestjs/graphql";
import { EmailGroupResolverBase } from "./base/emailGroup.resolver.base";
import { EmailGroup } from "./base/EmailGroup";
import { EmailGroupService } from "./emailGroup.service";

@graphql.Resolver(() => EmailGroup)
export class EmailGroupResolver extends EmailGroupResolverBase {
  constructor(protected readonly service: EmailGroupService) {
    super(service);
  }
}
