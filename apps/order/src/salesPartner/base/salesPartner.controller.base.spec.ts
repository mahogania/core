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
import { SalesPartnerController } from "../salesPartner.controller";
import { SalesPartnerService } from "../salesPartner.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  commissionRate: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  introduction: "exampleIntroduction",
  logo: "exampleLogo",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  partnerName: "examplePartnerName",
  partnerType: "examplePartnerType",
  partnerWebsite: "examplePartnerWebsite",
  referralCode: "exampleReferralCode",
  route: "exampleRoute",
  showInWebsite: 42,
  territory: "exampleTerritory",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  commissionRate: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  introduction: "exampleIntroduction",
  logo: "exampleLogo",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  partnerName: "examplePartnerName",
  partnerType: "examplePartnerType",
  partnerWebsite: "examplePartnerWebsite",
  referralCode: "exampleReferralCode",
  route: "exampleRoute",
  showInWebsite: 42,
  territory: "exampleTerritory",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    commissionRate: 42.42,
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    introduction: "exampleIntroduction",
    logo: "exampleLogo",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    partnerName: "examplePartnerName",
    partnerType: "examplePartnerType",
    partnerWebsite: "examplePartnerWebsite",
    referralCode: "exampleReferralCode",
    route: "exampleRoute",
    showInWebsite: 42,
    territory: "exampleTerritory",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  commissionRate: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  introduction: "exampleIntroduction",
  logo: "exampleLogo",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  partnerName: "examplePartnerName",
  partnerType: "examplePartnerType",
  partnerWebsite: "examplePartnerWebsite",
  referralCode: "exampleReferralCode",
  route: "exampleRoute",
  showInWebsite: 42,
  territory: "exampleTerritory",
  updatedAt: new Date(),
};

const service = {
  createSalesPartner() {
    return CREATE_RESULT;
  },
  salesPartners: () => FIND_MANY_RESULT,
  salesPartner: ({ where }: { where: { id: string } }) => {
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

describe("SalesPartner", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SalesPartnerService,
          useValue: service,
        },
      ],
      controllers: [SalesPartnerController],
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

  test("POST /salesPartners", async () => {
    await request(app.getHttpServer())
      .post("/salesPartners")
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

  test("GET /salesPartners", async () => {
    await request(app.getHttpServer())
      .get("/salesPartners")
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

  test("GET /salesPartners/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/salesPartners"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /salesPartners/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/salesPartners"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /salesPartners existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/salesPartners")
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
          .post("/salesPartners")
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
