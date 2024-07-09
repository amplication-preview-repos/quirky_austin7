import * as graphql from "@nestjs/graphql";
import { ActionResolverBase } from "./base/action.resolver.base";
import { Action } from "./base/Action";
import { ActionService } from "./action.service";

@graphql.Resolver(() => Action)
export class ActionResolver extends ActionResolverBase {
  constructor(protected readonly service: ActionService) {
    super(service);
  }
}
