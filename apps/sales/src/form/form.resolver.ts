import * as graphql from "@nestjs/graphql";
import { FormResolverBase } from "./base/form.resolver.base";
import { Form } from "./base/Form";
import { FormService } from "./form.service";

@graphql.Resolver(() => Form)
export class FormResolver extends FormResolverBase {
  constructor(protected readonly service: FormService) {
    super(service);
  }
}
