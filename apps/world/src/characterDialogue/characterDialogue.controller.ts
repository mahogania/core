import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CharacterDialogueService } from "./characterDialogue.service";
import { CharacterDialogueControllerBase } from "./base/characterDialogue.controller.base";

@swagger.ApiTags("characterDialogues")
@common.Controller("characterDialogues")
export class CharacterDialogueController extends CharacterDialogueControllerBase {
  constructor(
    protected readonly service: CharacterDialogueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
