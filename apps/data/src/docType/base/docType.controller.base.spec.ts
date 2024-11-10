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
import { DocTypeController } from "../docType.controller";
import { DocTypeService } from "../docType.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allowAutoRepeat: 42,
  allowCopy: 42,
  allowEventsInTimeline: 42,
  allowGuestToView: 42,
  allowImport: 42,
  allowRename: 42,
  appField: "exampleAppField",
  autoname: "exampleAutoname",
  beta: 42,
  color: "exampleColor",
  colour: "exampleColour",
  createdAt: new Date(),
  creation: new Date(),
  custom: 42,
  defaultEmailTemplate: "exampleDefaultEmailTemplate",
  defaultPrintFormat: "exampleDefaultPrintFormat",
  defaultView: "exampleDefaultView",
  description: "exampleDescription",
  docstatus: 42,
  documentType: "exampleDocumentType",
  documentation: "exampleDocumentation",
  editableGrid: 42,
  emailAppendTo: 42,
  engine: "exampleEngine",
  forceReRouteToDefaultView: 42,
  hasWebView: 42,
  hideToolbar: 42,
  icon: "exampleIcon",
  id: "exampleId",
  idx: 42,
  imageField: "exampleImageField",
  inCreate: 42,
  indexWebPagesForSearch: 42,
  isCalendarAndGantt: 42,
  isPublishedField: "exampleIsPublishedField",
  isSubmittable: 42,
  isTree: 42,
  isVirtual: 42,
  issingle: 42,
  istable: 42,
  lastUpdate: "exampleLastUpdate",
  makeAttachmentsPublic: 42,
  maxAttachments: 42,
  menuIndex: 42,
  migrationHash: "exampleMigrationHash",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  moduleField: "exampleModuleField",
  name: "exampleName",
  namingRule: "exampleNamingRule",
  nsmParentField: "exampleNsmParentField",
  owner: "exampleOwner",
  parentNode: "exampleParentNode",
  printOutline: "examplePrintOutline",
  queueInBackground: 42,
  quickEntry: 42,
  readOnly: 42,
  restrictToDomain: "exampleRestrictToDomain",
  route: "exampleRoute",
  searchFields: "exampleSearchFields",
  senderField: "exampleSenderField",
  senderNameField: "exampleSenderNameField",
  showNameInGlobalSearch: 42,
  showPreviewPopup: 42,
  showTitleFieldInLink: 42,
  smallicon: "exampleSmallicon",
  sortField: "exampleSortField",
  sortOrder: "exampleSortOrder",
  subject: "exampleSubject",
  subjectField: "exampleSubjectField",
  tagFields: "exampleTagFields",
  timelineField: "exampleTimelineField",
  titleField: "exampleTitleField",
  trackChanges: 42,
  trackSeen: 42,
  trackViews: 42,
  translatedDoctype: 42,
  updatedAt: new Date(),
  userTags: "exampleUserTags",
  websiteSearchField: "exampleWebsiteSearchField",
};
const CREATE_RESULT = {
  allowAutoRepeat: 42,
  allowCopy: 42,
  allowEventsInTimeline: 42,
  allowGuestToView: 42,
  allowImport: 42,
  allowRename: 42,
  appField: "exampleAppField",
  autoname: "exampleAutoname",
  beta: 42,
  color: "exampleColor",
  colour: "exampleColour",
  createdAt: new Date(),
  creation: new Date(),
  custom: 42,
  defaultEmailTemplate: "exampleDefaultEmailTemplate",
  defaultPrintFormat: "exampleDefaultPrintFormat",
  defaultView: "exampleDefaultView",
  description: "exampleDescription",
  docstatus: 42,
  documentType: "exampleDocumentType",
  documentation: "exampleDocumentation",
  editableGrid: 42,
  emailAppendTo: 42,
  engine: "exampleEngine",
  forceReRouteToDefaultView: 42,
  hasWebView: 42,
  hideToolbar: 42,
  icon: "exampleIcon",
  id: "exampleId",
  idx: 42,
  imageField: "exampleImageField",
  inCreate: 42,
  indexWebPagesForSearch: 42,
  isCalendarAndGantt: 42,
  isPublishedField: "exampleIsPublishedField",
  isSubmittable: 42,
  isTree: 42,
  isVirtual: 42,
  issingle: 42,
  istable: 42,
  lastUpdate: "exampleLastUpdate",
  makeAttachmentsPublic: 42,
  maxAttachments: 42,
  menuIndex: 42,
  migrationHash: "exampleMigrationHash",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  moduleField: "exampleModuleField",
  name: "exampleName",
  namingRule: "exampleNamingRule",
  nsmParentField: "exampleNsmParentField",
  owner: "exampleOwner",
  parentNode: "exampleParentNode",
  printOutline: "examplePrintOutline",
  queueInBackground: 42,
  quickEntry: 42,
  readOnly: 42,
  restrictToDomain: "exampleRestrictToDomain",
  route: "exampleRoute",
  searchFields: "exampleSearchFields",
  senderField: "exampleSenderField",
  senderNameField: "exampleSenderNameField",
  showNameInGlobalSearch: 42,
  showPreviewPopup: 42,
  showTitleFieldInLink: 42,
  smallicon: "exampleSmallicon",
  sortField: "exampleSortField",
  sortOrder: "exampleSortOrder",
  subject: "exampleSubject",
  subjectField: "exampleSubjectField",
  tagFields: "exampleTagFields",
  timelineField: "exampleTimelineField",
  titleField: "exampleTitleField",
  trackChanges: 42,
  trackSeen: 42,
  trackViews: 42,
  translatedDoctype: 42,
  updatedAt: new Date(),
  userTags: "exampleUserTags",
  websiteSearchField: "exampleWebsiteSearchField",
};
const FIND_MANY_RESULT = [
  {
    allowAutoRepeat: 42,
    allowCopy: 42,
    allowEventsInTimeline: 42,
    allowGuestToView: 42,
    allowImport: 42,
    allowRename: 42,
    appField: "exampleAppField",
    autoname: "exampleAutoname",
    beta: 42,
    color: "exampleColor",
    colour: "exampleColour",
    createdAt: new Date(),
    creation: new Date(),
    custom: 42,
    defaultEmailTemplate: "exampleDefaultEmailTemplate",
    defaultPrintFormat: "exampleDefaultPrintFormat",
    defaultView: "exampleDefaultView",
    description: "exampleDescription",
    docstatus: 42,
    documentType: "exampleDocumentType",
    documentation: "exampleDocumentation",
    editableGrid: 42,
    emailAppendTo: 42,
    engine: "exampleEngine",
    forceReRouteToDefaultView: 42,
    hasWebView: 42,
    hideToolbar: 42,
    icon: "exampleIcon",
    id: "exampleId",
    idx: 42,
    imageField: "exampleImageField",
    inCreate: 42,
    indexWebPagesForSearch: 42,
    isCalendarAndGantt: 42,
    isPublishedField: "exampleIsPublishedField",
    isSubmittable: 42,
    isTree: 42,
    isVirtual: 42,
    issingle: 42,
    istable: 42,
    lastUpdate: "exampleLastUpdate",
    makeAttachmentsPublic: 42,
    maxAttachments: 42,
    menuIndex: 42,
    migrationHash: "exampleMigrationHash",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    moduleField: "exampleModuleField",
    name: "exampleName",
    namingRule: "exampleNamingRule",
    nsmParentField: "exampleNsmParentField",
    owner: "exampleOwner",
    parentNode: "exampleParentNode",
    printOutline: "examplePrintOutline",
    queueInBackground: 42,
    quickEntry: 42,
    readOnly: 42,
    restrictToDomain: "exampleRestrictToDomain",
    route: "exampleRoute",
    searchFields: "exampleSearchFields",
    senderField: "exampleSenderField",
    senderNameField: "exampleSenderNameField",
    showNameInGlobalSearch: 42,
    showPreviewPopup: 42,
    showTitleFieldInLink: 42,
    smallicon: "exampleSmallicon",
    sortField: "exampleSortField",
    sortOrder: "exampleSortOrder",
    subject: "exampleSubject",
    subjectField: "exampleSubjectField",
    tagFields: "exampleTagFields",
    timelineField: "exampleTimelineField",
    titleField: "exampleTitleField",
    trackChanges: 42,
    trackSeen: 42,
    trackViews: 42,
    translatedDoctype: 42,
    updatedAt: new Date(),
    userTags: "exampleUserTags",
    websiteSearchField: "exampleWebsiteSearchField",
  },
];
const FIND_ONE_RESULT = {
  allowAutoRepeat: 42,
  allowCopy: 42,
  allowEventsInTimeline: 42,
  allowGuestToView: 42,
  allowImport: 42,
  allowRename: 42,
  appField: "exampleAppField",
  autoname: "exampleAutoname",
  beta: 42,
  color: "exampleColor",
  colour: "exampleColour",
  createdAt: new Date(),
  creation: new Date(),
  custom: 42,
  defaultEmailTemplate: "exampleDefaultEmailTemplate",
  defaultPrintFormat: "exampleDefaultPrintFormat",
  defaultView: "exampleDefaultView",
  description: "exampleDescription",
  docstatus: 42,
  documentType: "exampleDocumentType",
  documentation: "exampleDocumentation",
  editableGrid: 42,
  emailAppendTo: 42,
  engine: "exampleEngine",
  forceReRouteToDefaultView: 42,
  hasWebView: 42,
  hideToolbar: 42,
  icon: "exampleIcon",
  id: "exampleId",
  idx: 42,
  imageField: "exampleImageField",
  inCreate: 42,
  indexWebPagesForSearch: 42,
  isCalendarAndGantt: 42,
  isPublishedField: "exampleIsPublishedField",
  isSubmittable: 42,
  isTree: 42,
  isVirtual: 42,
  issingle: 42,
  istable: 42,
  lastUpdate: "exampleLastUpdate",
  makeAttachmentsPublic: 42,
  maxAttachments: 42,
  menuIndex: 42,
  migrationHash: "exampleMigrationHash",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  moduleField: "exampleModuleField",
  name: "exampleName",
  namingRule: "exampleNamingRule",
  nsmParentField: "exampleNsmParentField",
  owner: "exampleOwner",
  parentNode: "exampleParentNode",
  printOutline: "examplePrintOutline",
  queueInBackground: 42,
  quickEntry: 42,
  readOnly: 42,
  restrictToDomain: "exampleRestrictToDomain",
  route: "exampleRoute",
  searchFields: "exampleSearchFields",
  senderField: "exampleSenderField",
  senderNameField: "exampleSenderNameField",
  showNameInGlobalSearch: 42,
  showPreviewPopup: 42,
  showTitleFieldInLink: 42,
  smallicon: "exampleSmallicon",
  sortField: "exampleSortField",
  sortOrder: "exampleSortOrder",
  subject: "exampleSubject",
  subjectField: "exampleSubjectField",
  tagFields: "exampleTagFields",
  timelineField: "exampleTimelineField",
  titleField: "exampleTitleField",
  trackChanges: 42,
  trackSeen: 42,
  trackViews: 42,
  translatedDoctype: 42,
  updatedAt: new Date(),
  userTags: "exampleUserTags",
  websiteSearchField: "exampleWebsiteSearchField",
};

const service = {
  createDocType() {
    return CREATE_RESULT;
  },
  docTypes: () => FIND_MANY_RESULT,
  docType: ({ where }: { where: { id: string } }) => {
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

describe("DocType", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DocTypeService,
          useValue: service,
        },
      ],
      controllers: [DocTypeController],
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

  test("POST /docTypes", async () => {
    await request(app.getHttpServer())
      .post("/docTypes")
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

  test("GET /docTypes", async () => {
    await request(app.getHttpServer())
      .get("/docTypes")
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

  test("GET /docTypes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/docTypes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /docTypes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/docTypes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /docTypes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/docTypes")
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
          .post("/docTypes")
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
