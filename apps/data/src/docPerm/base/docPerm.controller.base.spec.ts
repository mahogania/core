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
import { DocPermController } from "../docPerm.controller";
import { DocPermService } from "../docPerm.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amend: 42,
  cancel: 42,
  create: 42,
  createdAt: new Date(),
  creation: new Date(),
  deleteField: 42,
  docstatus: 42,
  email: 42,
  exportField: 42,
  id: "exampleId",
  idx: 42,
  ifOwner: 42,
  importField: 42,
  match: "exampleMatch",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  permlevel: 42,
  print: 42,
  read: 42,
  report: 42,
  role: "exampleRole",
  select: 42,
  share: 42,
  submit: 42,
  updatedAt: new Date(),
  write: 42,
};
const CREATE_RESULT = {
  amend: 42,
  cancel: 42,
  create: 42,
  createdAt: new Date(),
  creation: new Date(),
  deleteField: 42,
  docstatus: 42,
  email: 42,
  exportField: 42,
  id: "exampleId",
  idx: 42,
  ifOwner: 42,
  importField: 42,
  match: "exampleMatch",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  permlevel: 42,
  print: 42,
  read: 42,
  report: 42,
  role: "exampleRole",
  select: 42,
  share: 42,
  submit: 42,
  updatedAt: new Date(),
  write: 42,
};
const FIND_MANY_RESULT = [
  {
    amend: 42,
    cancel: 42,
    create: 42,
    createdAt: new Date(),
    creation: new Date(),
    deleteField: 42,
    docstatus: 42,
    email: 42,
    exportField: 42,
    id: "exampleId",
    idx: 42,
    ifOwner: 42,
    importField: 42,
    match: "exampleMatch",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    permlevel: 42,
    print: 42,
    read: 42,
    report: 42,
    role: "exampleRole",
    select: 42,
    share: 42,
    submit: 42,
    updatedAt: new Date(),
    write: 42,
  },
];
const FIND_ONE_RESULT = {
  amend: 42,
  cancel: 42,
  create: 42,
  createdAt: new Date(),
  creation: new Date(),
  deleteField: 42,
  docstatus: 42,
  email: 42,
  exportField: 42,
  id: "exampleId",
  idx: 42,
  ifOwner: 42,
  importField: 42,
  match: "exampleMatch",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  permlevel: 42,
  print: 42,
  read: 42,
  report: 42,
  role: "exampleRole",
  select: 42,
  share: 42,
  submit: 42,
  updatedAt: new Date(),
  write: 42,
};

const service = {
  createDocPerm() {
    return CREATE_RESULT;
  },
  docPerms: () => FIND_MANY_RESULT,
  docPerm: ({ where }: { where: { id: string } }) => {
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

describe("DocPerm", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DocPermService,
          useValue: service,
        },
      ],
      controllers: [DocPermController],
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

  test("POST /docPerms", async () => {
    await request(app.getHttpServer())
      .post("/docPerms")
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

  test("GET /docPerms", async () => {
    await request(app.getHttpServer())
      .get("/docPerms")
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

  test("GET /docPerms/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/docPerms"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /docPerms/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/docPerms"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /docPerms existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/docPerms")
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
          .post("/docPerms")
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
