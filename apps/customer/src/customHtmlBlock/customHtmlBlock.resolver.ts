import * as graphql from "@nestjs/graphql";
import { CustomHtmlBlockResolverBase } from "./base/customHtmlBlock.resolver.base";
import { CustomHtmlBlock } from "./base/CustomHtmlBlock";
import { CustomHtmlBlockService } from "./customHtmlBlock.service";

@graphql.Resolver(() => CustomHtmlBlock)
export class CustomHtmlBlockResolver extends CustomHtmlBlockResolverBase {
  constructor(protected readonly service: CustomHtmlBlockService) {
    super(service);
  }
}
