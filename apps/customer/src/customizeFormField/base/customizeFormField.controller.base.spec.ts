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
import { CustomizeFormFieldController } from "../customizeFormField.controller";
import { CustomizeFormFieldService } from "../customizeFormField.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allowBulkEdit: "true",
  allowInQuickEntry: "true",
  allowOnSubmit: "true",
  bold: "true",
  collapsible: "true",
  collapsibleDependsOn: "exampleCollapsibleDependsOn",
  columns: 42,
  createdAt: new Date(),
  creation: new Date(),
  defaultField: "exampleDefaultField",
  dependsOn: "exampleDependsOn",
  description: "exampleDescription",
  docstatus: 42,
  fetchFrom: "exampleFetchFrom",
  fetchIfEmpty: "true",
  fieldname: "exampleFieldname",
  fieldtype: "exampleFieldtype",
  hidden: "true",
  hideBorder: "true",
  hideDays: "true",
  hideSeconds: "true",
  id: "exampleId",
  idx: 42,
  ignoreUserPermissions: "true",
  ignoreXssFilter: "true",
  inFilter: "true",
  inGlobalSearch: "true",
  inListView: "true",
  inPreview: "true",
  inStandardFilter: "true",
  isCustomField: "true",
  isSystemGenerated: "true",
  isVirtual: "true",
  label: "exampleLabel",
  length: 42,
  mandatoryDependsOn: "exampleMandatoryDependsOn",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  noCopy: "true",
  nonNegative: "true",
  options: "exampleOptions",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  permlevel: 42,
  precision: "examplePrecision",
  printHide: "true",
  printHideIfNoValue: "true",
  printWidth: "examplePrintWidth",
  readOnly: "true",
  readOnlyDependsOn: "exampleReadOnlyDependsOn",
  rememberLastSelectedValue: "true",
  reportHide: "true",
  reqd: "true",
  showDashboard: "true",
  sortOptions: "true",
  translatable: "true",
  unique: "true",
  updatedAt: new Date(),
  width: "exampleWidth",
};
const CREATE_RESULT = {
  allowBulkEdit: "true",
  allowInQuickEntry: "true",
  allowOnSubmit: "true",
  bold: "true",
  collapsible: "true",
  collapsibleDependsOn: "exampleCollapsibleDependsOn",
  columns: 42,
  createdAt: new Date(),
  creation: new Date(),
  defaultField: "exampleDefaultField",
  dependsOn: "exampleDependsOn",
  description: "exampleDescription",
  docstatus: 42,
  fetchFrom: "exampleFetchFrom",
  fetchIfEmpty: "true",
  fieldname: "exampleFieldname",
  fieldtype: "exampleFieldtype",
  hidden: "true",
  hideBorder: "true",
  hideDays: "true",
  hideSeconds: "true",
  id: "exampleId",
  idx: 42,
  ignoreUserPermissions: "true",
  ignoreXssFilter: "true",
  inFilter: "true",
  inGlobalSearch: "true",
  inListView: "true",
  inPreview: "true",
  inStandardFilter: "true",
  isCustomField: "true",
  isSystemGenerated: "true",
  isVirtual: "true",
  label: "exampleLabel",
  length: 42,
  mandatoryDependsOn: "exampleMandatoryDependsOn",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  noCopy: "true",
  nonNegative: "true",
  options: "exampleOptions",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  permlevel: 42,
  precision: "examplePrecision",
  printHide: "true",
  printHideIfNoValue: "true",
  printWidth: "examplePrintWidth",
  readOnly: "true",
  readOnlyDependsOn: "exampleReadOnlyDependsOn",
  rememberLastSelectedValue: "true",
  reportHide: "true",
  reqd: "true",
  showDashboard: "true",
  sortOptions: "true",
  translatable: "true",
  unique: "true",
  updatedAt: new Date(),
  width: "exampleWidth",
};
const FIND_MANY_RESULT = [
  {
    allowBulkEdit: "true",
    allowInQuickEntry: "true",
    allowOnSubmit: "true",
    bold: "true",
    collapsible: "true",
    collapsibleDependsOn: "exampleCollapsibleDependsOn",
    columns: 42,
    createdAt: new Date(),
    creation: new Date(),
    defaultField: "exampleDefaultField",
    dependsOn: "exampleDependsOn",
    description: "exampleDescription",
    docstatus: 42,
    fetchFrom: "exampleFetchFrom",
    fetchIfEmpty: "true",
    fieldname: "exampleFieldname",
    fieldtype: "exampleFieldtype",
    hidden: "true",
    hideBorder: "true",
    hideDays: "true",
    hideSeconds: "true",
    id: "exampleId",
    idx: 42,
    ignoreUserPermissions: "true",
    ignoreXssFilter: "true",
    inFilter: "true",
    inGlobalSearch: "true",
    inListView: "true",
    inPreview: "true",
    inStandardFilter: "true",
    isCustomField: "true",
    isSystemGenerated: "true",
    isVirtual: "true",
    label: "exampleLabel",
    length: 42,
    mandatoryDependsOn: "exampleMandatoryDependsOn",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    noCopy: "true",
    nonNegative: "true",
    options: "exampleOptions",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    permlevel: 42,
    precision: "examplePrecision",
    printHide: "true",
    printHideIfNoValue: "true",
    printWidth: "examplePrintWidth",
    readOnly: "true",
    readOnlyDependsOn: "exampleReadOnlyDependsOn",
    rememberLastSelectedValue: "true",
    reportHide: "true",
    reqd: "true",
    showDashboard: "true",
    sortOptions: "true",
    translatable: "true",
    unique: "true",
    updatedAt: new Date(),
    width: "exampleWidth",
  },
];
const FIND_ONE_RESULT = {
  allowBulkEdit: "true",
  allowInQuickEntry: "true",
  allowOnSubmit: "true",
  bold: "true",
  collapsible: "true",
  collapsibleDependsOn: "exampleCollapsibleDependsOn",
  columns: 42,
  createdAt: new Date(),
  creation: new Date(),
  defaultField: "exampleDefaultField",
  dependsOn: "exampleDependsOn",
  description: "exampleDescription",
  docstatus: 42,
  fetchFrom: "exampleFetchFrom",
  fetchIfEmpty: "true",
  fieldname: "exampleFieldname",
  fieldtype: "exampleFieldtype",
  hidden: "true",
  hideBorder: "true",
  hideDays: "true",
  hideSeconds: "true",
  id: "exampleId",
  idx: 42,
  ignoreUserPermissions: "true",
  ignoreXssFilter: "true",
  inFilter: "true",
  inGlobalSearch: "true",
  inListView: "true",
  inPreview: "true",
  inStandardFilter: "true",
  isCustomField: "true",
  isSystemGenerated: "true",
  isVirtual: "true",
  label: "exampleLabel",
  length: 42,
  mandatoryDependsOn: "exampleMandatoryDependsOn",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  noCopy: "true",
  nonNegative: "true",
  options: "exampleOptions",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  permlevel: 42,
  precision: "examplePrecision",
  printHide: "true",
  printHideIfNoValue: "true",
  printWidth: "examplePrintWidth",
  readOnly: "true",
  readOnlyDependsOn: "exampleReadOnlyDependsOn",
  rememberLastSelectedValue: "true",
  reportHide: "true",
  reqd: "true",
  showDashboard: "true",
  sortOptions: "true",
  translatable: "true",
  unique: "true",
  updatedAt: new Date(),
  width: "exampleWidth",
};

const service = {
  createCustomizeFormField() {
    return CREATE_RESULT;
  },
  customizeFormFields: () => FIND_MANY_RESULT,
  customizeFormField: ({ where }: { where: { id: string } }) => {
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

describe("CustomizeFormField", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CustomizeFormFieldService,
          useValue: service,
        },
      ],
      controllers: [CustomizeFormFieldController],
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

  test("POST /customizeFormFields", async () => {
    await request(app.getHttpServer())
      .post("/customizeFormFields")
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

  test("GET /customizeFormFields", async () => {
    await request(app.getHttpServer())
      .get("/customizeFormFields")
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

  test("GET /customizeFormFields/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customizeFormFields"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /customizeFormFields/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customizeFormFields"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /customizeFormFields existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/customizeFormFields")
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
          .post("/customizeFormFields")
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
