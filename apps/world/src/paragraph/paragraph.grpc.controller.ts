import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParagraphService } from "./paragraph.service";
import { ParagraphGrpcControllerBase } from "./base/paragraph.grpc.controller.base";

@swagger.ApiTags("paragraphs")
@common.Controller("paragraphs")
export class ParagraphGrpcController extends ParagraphGrpcControllerBase {
  constructor(protected readonly service: ParagraphService) {
    super(service);
  }
}
