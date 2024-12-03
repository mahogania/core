import * as graphql from "@nestjs/graphql";
import { PipelineResolverBase } from "./base/pipeline.resolver.base";
import { Pipeline } from "./base/Pipeline";
import { PipelineService } from "./pipeline.service";

@graphql.Resolver(() => Pipeline)
export class PipelineResolver extends PipelineResolverBase {
  constructor(protected readonly service: PipelineService) {
    super(service);
  }
}
