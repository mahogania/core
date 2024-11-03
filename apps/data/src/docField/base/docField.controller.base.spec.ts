import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DocFieldController } from "../docField.controller";
import { DocFieldService } from "../docField.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allowBulkEdit: 42,
  allowInQuickEntry: 42,
  allowOnSubmit: 42,
  bold: 42,
  collapsible: 42,
  collapsibleDependsOn: "exampleCollapsibleDependsOn",
  columns: 42,
  createdAt: new Date(),
  creation: new Date(),
  defaultField: "exampleDefaultField",
  dependsOn: "exampleDependsOn",
  description: "exampleDescription",
  docstatus: 42,
  documentationUrl: "exampleDocumentationUrl",
  fetchFrom: "exampleFetchFrom",
  fetchIfEmpty: 42,
  fieldname: "exampleFieldname",
  fieldtype: "exampleFieldtype",
  hidden: 42,
  hideBorder: 42,
  hideDays: 42,
  hideSeconds: 42,
  id: "exampleId",
  idx: 42,
  ignoreUserPermissions: 42,
  ignoreXssFilter: 42,
  inFilter: 42,
  inGlobalSearch: 42,
  inListView: 42,
  inPreview: 42,
  inStandardFilter: 42,
  isVirtual: 42,
  label: "exampleLabel",
  length: 42,
  mandatoryDependsOn: "exampleMandatoryDependsOn",
  maxHeight: "exampleMaxHeight",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  noCopy: 42,
  nonNegative: 42,
  oldfieldname: "exampleOldfieldname",
  oldfieldtype: "exampleOldfieldtype",
  options: "exampleOptions",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  permlevel: 42,
  precision: "examplePrecision",
  printHide: 42,
  printHideIfNoValue: 42,
  printWidth: "examplePrintWidth",
  readOnly: 42,
  readOnlyDependsOn: "exampleReadOnlyDependsOn",
  rememberLastSelectedValue: 42,
  reportHide: 42,
  reqd: 42,
  searchIndex: 42,
  setOnlyOnce: 42,
  showDashboard: 42,
  showOnTimeline: 42,
  showPreviewPopup: 42,
  sortOptions: 42,
  translatable: 42,
  trigger: "exampleTrigger",
  unique: 42,
  updatedAt: new Date(),
  width: "exampleWidth",
};
const CREATE_RESULT = {
  allowBulkEdit: 42,
  allowInQuickEntry: 42,
  allowOnSubmit: 42,
  bold: 42,
  collapsible: 42,
  collapsibleDependsOn: "exampleCollapsibleDependsOn",
  columns: 42,
  createdAt: new Date(),
  creation: new Date(),
  defaultField: "exampleDefaultField",
  dependsOn: "exampleDependsOn",
  description: "exampleDescription",
  docstatus: 42,
  documentationUrl: "exampleDocumentationUrl",
  fetchFrom: "exampleFetchFrom",
  fetchIfEmpty: 42,
  fieldname: "exampleFieldname",
  fieldtype: "exampleFieldtype",
  hidden: 42,
  hideBorder: 42,
  hideDays: 42,
  hideSeconds: 42,
  id: "exampleId",
  idx: 42,
  ignoreUserPermissions: 42,
  ignoreXssFilter: 42,
  inFilter: 42,
  inGlobalSearch: 42,
  inListView: 42,
  inPreview: 42,
  inStandardFilter: 42,
  isVirtual: 42,
  label: "exampleLabel",
  length: 42,
  mandatoryDependsOn: "exampleMandatoryDependsOn",
  maxHeight: "exampleMaxHeight",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  noCopy: 42,
  nonNegative: 42,
  oldfieldname: "exampleOldfieldname",
  oldfieldtype: "exampleOldfieldtype",
  options: "exampleOptions",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  permlevel: 42,
  precision: "examplePrecision",
  printHide: 42,
  printHideIfNoValue: 42,
  printWidth: "examplePrintWidth",
  readOnly: 42,
  readOnlyDependsOn: "exampleReadOnlyDependsOn",
  rememberLastSelectedValue: 42,
  reportHide: 42,
  reqd: 42,
  searchIndex: 42,
  setOnlyOnce: 42,
  showDashboard: 42,
  showOnTimeline: 42,
  showPreviewPopup: 42,
  sortOptions: 42,
  translatable: 42,
  trigger: "exampleTrigger",
  unique: 42,
  updatedAt: new Date(),
  width: "exampleWidth",
};
const FIND_MANY_RESULT = [
  {
    allowBulkEdit: 42,
    allowInQuickEntry: 42,
    allowOnSubmit: 42,
    bold: 42,
    collapsible: 42,
    collapsibleDependsOn: "exampleCollapsibleDependsOn",
    columns: 42,
    createdAt: new Date(),
    creation: new Date(),
    defaultField: "exampleDefaultField",
    dependsOn: "exampleDependsOn",
    description: "exampleDescription",
    docstatus: 42,
    documentationUrl: "exampleDocumentationUrl",
    fetchFrom: "exampleFetchFrom",
    fetchIfEmpty: 42,
    fieldname: "exampleFieldname",
    fieldtype: "exampleFieldtype",
    hidden: 42,
    hideBorder: 42,
    hideDays: 42,
    hideSeconds: 42,
    id: "exampleId",
    idx: 42,
    ignoreUserPermissions: 42,
    ignoreXssFilter: 42,
    inFilter: 42,
    inGlobalSearch: 42,
    inListView: 42,
    inPreview: 42,
    inStandardFilter: 42,
    isVirtual: 42,
    label: "exampleLabel",
    length: 42,
    mandatoryDependsOn: "exampleMandatoryDependsOn",
    maxHeight: "exampleMaxHeight",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    noCopy: 42,
    nonNegative: 42,
    oldfieldname: "exampleOldfieldname",
    oldfieldtype: "exampleOldfieldtype",
    options: "exampleOptions",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    permlevel: 42,
    precision: "examplePrecision",
    printHide: 42,
    printHideIfNoValue: 42,
    printWidth: "examplePrintWidth",
    readOnly: 42,
    readOnlyDependsOn: "exampleReadOnlyDependsOn",
    rememberLastSelectedValue: 42,
    reportHide: 42,
    reqd: 42,
    searchIndex: 42,
    setOnlyOnce: 42,
    showDashboard: 42,
    showOnTimeline: 42,
    showPreviewPopup: 42,
    sortOptions: 42,
    translatable: 42,
    trigger: "exampleTrigger",
    unique: 42,
    updatedAt: new Date(),
    width: "exampleWidth",
  },
];
const FIND_ONE_RESULT = {
  allowBulkEdit: 42,
  allowInQuickEntry: 42,
  allowOnSubmit: 42,
  bold: 42,
  collapsible: 42,
  collapsibleDependsOn: "exampleCollapsibleDependsOn",
  columns: 42,
  createdAt: new Date(),
  creation: new Date(),
  defaultField: "exampleDefaultField",
  dependsOn: "exampleDependsOn",
  description: "exampleDescription",
  docstatus: 42,
  documentationUrl: "exampleDocumentationUrl",
  fetchFrom: "exampleFetchFrom",
  fetchIfEmpty: 42,
  fieldname: "exampleFieldname",
  fieldtype: "exampleFieldtype",
  hidden: 42,
  hideBorder: 42,
  hideDays: 42,
  hideSeconds: 42,
  id: "exampleId",
  idx: 42,
  ignoreUserPermissions: 42,
  ignoreXssFilter: 42,
  inFilter: 42,
  inGlobalSearch: 42,
  inListView: 42,
  inPreview: 42,
  inStandardFilter: 42,
  isVirtual: 42,
  label: "exampleLabel",
  length: 42,
  mandatoryDependsOn: "exampleMandatoryDependsOn",
  maxHeight: "exampleMaxHeight",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  noCopy: 42,
  nonNegative: 42,
  oldfieldname: "exampleOldfieldname",
  oldfieldtype: "exampleOldfieldtype",
  options: "exampleOptions",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  permlevel: 42,
  precision: "examplePrecision",
  printHide: 42,
  printHideIfNoValue: 42,
  printWidth: "examplePrintWidth",
  readOnly: 42,
  readOnlyDependsOn: "exampleReadOnlyDependsOn",
  rememberLastSelectedValue: 42,
  reportHide: 42,
  reqd: 42,
  searchIndex: 42,
  setOnlyOnce: 42,
  showDashboard: 42,
  showOnTimeline: 42,
  showPreviewPopup: 42,
  sortOptions: 42,
  translatable: 42,
  trigger: "exampleTrigger",
  unique: 42,
  updatedAt: new Date(),
  width: "exampleWidth",
};

const service = {
  createDocField() {
    return CREATE_RESULT;
  },
  docFields: () => FIND_MANY_RESULT,
  docField: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DocField", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DocFieldService,
          useValue: service,
        },
      ],
      controllers: [DocFieldController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /docFields", async () => {
    await request(app.getHttpServer())
      .post("/docFields")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /docFields", async () => {
    await request(app.getHttpServer())
      .get("/docFields")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /docFields/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/docFields"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /docFields/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/docFields"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /docFields existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/docFields")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/docFields")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
