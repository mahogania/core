import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CharacterDialogueService } from "./characterDialogue.service";
import { CharacterDialogueGrpcControllerBase } from "./base/characterDialogue.grpc.controller.base";

@swagger.ApiTags("characterDialogues")
@common.Controller("characterDialogues")
export class CharacterDialogueGrpcController extends CharacterDialogueGrpcControllerBase {
  constructor(protected readonly service: CharacterDialogueService) {
    super(service);
  }
}
