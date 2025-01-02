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
import { CariCagDcshBlTrnpController } from "../cariCagDcshBlTrnp.controller";
import { CariCagDcshBlTrnpService } from "../cariCagDcshBlTrnp.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  chssNo: "exampleChssNo",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  drvrNm: "exampleDrvrNm",
  drvrPsprNo: "exampleDrvrPsprNo",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mrn: "exampleMrn",
  trnpMethNatCd: "exampleTrnpMethNatCd",
  updatedAt: new Date(),
  vhclMnurCd: "exampleVhclMnurCd",
  vhclNttn: 42.42,
  vhclPtCd: "exampleVhclPtCd",
  vhclRgsrNo: "exampleVhclRgsrNo",
  vhclSrno: 42,
  vhclTtn: 42.42,
};
const CREATE_RESULT = {
  chssNo: "exampleChssNo",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  drvrNm: "exampleDrvrNm",
  drvrPsprNo: "exampleDrvrPsprNo",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mrn: "exampleMrn",
  trnpMethNatCd: "exampleTrnpMethNatCd",
  updatedAt: new Date(),
  vhclMnurCd: "exampleVhclMnurCd",
  vhclNttn: 42.42,
  vhclPtCd: "exampleVhclPtCd",
  vhclRgsrNo: "exampleVhclRgsrNo",
  vhclSrno: 42,
  vhclTtn: 42.42,
};
const FIND_MANY_RESULT = [
  {
    chssNo: "exampleChssNo",
    createdAt: new Date(),
    delYn: "exampleDelYn",
    drvrNm: "exampleDrvrNm",
    drvrPsprNo: "exampleDrvrPsprNo",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    id: "exampleId",
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    mrn: "exampleMrn",
    trnpMethNatCd: "exampleTrnpMethNatCd",
    updatedAt: new Date(),
    vhclMnurCd: "exampleVhclMnurCd",
    vhclNttn: 42.42,
    vhclPtCd: "exampleVhclPtCd",
    vhclRgsrNo: "exampleVhclRgsrNo",
    vhclSrno: 42,
    vhclTtn: 42.42,
  },
];
const FIND_ONE_RESULT = {
  chssNo: "exampleChssNo",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  drvrNm: "exampleDrvrNm",
  drvrPsprNo: "exampleDrvrPsprNo",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mrn: "exampleMrn",
  trnpMethNatCd: "exampleTrnpMethNatCd",
  updatedAt: new Date(),
  vhclMnurCd: "exampleVhclMnurCd",
  vhclNttn: 42.42,
  vhclPtCd: "exampleVhclPtCd",
  vhclRgsrNo: "exampleVhclRgsrNo",
  vhclSrno: 42,
  vhclTtn: 42.42,
};

const service = {
  createCariCagDcshBlTrnp() {
    return CREATE_RESULT;
  },
  cariCagDcshBlTrnps: () => FIND_MANY_RESULT,
  cariCagDcshBlTrnp: ({ where }: { where: { id: string } }) => {
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

describe("CariCagDcshBlTrnp", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CariCagDcshBlTrnpService,
          useValue: service,
        },
      ],
      controllers: [CariCagDcshBlTrnpController],
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

  test("POST /cariCagDcshBlTrnps", async () => {
    await request(app.getHttpServer())
      .post("/cariCagDcshBlTrnps")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: CREATE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: CREATE_RESULT.lastChgDttm.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /cariCagDcshBlTrnps", async () => {
    await request(app.getHttpServer())
      .get("/cariCagDcshBlTrnps")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          frstRgsrDttm: FIND_MANY_RESULT[0].frstRgsrDttm.toISOString(),
          lastChgDttm: FIND_MANY_RESULT[0].lastChgDttm.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /cariCagDcshBlTrnps/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cariCagDcshBlTrnps"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cariCagDcshBlTrnps/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cariCagDcshBlTrnps"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /cariCagDcshBlTrnps existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/cariCagDcshBlTrnps")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: CREATE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: CREATE_RESULT.lastChgDttm.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/cariCagDcshBlTrnps")
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
