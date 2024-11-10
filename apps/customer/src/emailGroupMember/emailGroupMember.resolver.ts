import * as graphql from "@nestjs/graphql";
import { EmailGroupMemberResolverBase } from "./base/emailGroupMember.resolver.base";
import { EmailGroupMember } from "./base/EmailGroupMember";
import { EmailGroupMemberService } from "./emailGroupMember.service";

@graphql.Resolver(() => EmailGroupMember)
export class EmailGroupMemberResolver extends EmailGroupMemberResolverBase {
  constructor(protected readonly service: EmailGroupMemberService) {
    super(service);
  }
}
