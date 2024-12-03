import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClosedDocumentService } from "./closedDocument.service";
import { ClosedDocumentControllerBase } from "./base/closedDocument.controller.base";

@swagger.ApiTags("closedDocuments")
@common.Controller("closedDocuments")
export class ClosedDocumentController extends ClosedDocumentControllerBase {
  constructor(protected readonly service: ClosedDocumentService) {
    super(service);
  }
}
