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
import { ItemDefaultController } from "../itemDefault.controller";
import { ItemDefaultService } from "../itemDefault.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  buyingCostCenter: "exampleBuyingCostCenter",
  company: "exampleCompany",
  createdAt: new Date(),
  defaultDiscountAccount: "exampleDefaultDiscountAccount",
  defaultPriceList: "exampleDefaultPriceList",
  defaultProvisionalAccount: "exampleDefaultProvisionalAccount",
  defaultSupplier: "exampleDefaultSupplier",
  defaultWarehouse: "exampleDefaultWarehouse",
  deferredExpenseAccount: "exampleDeferredExpenseAccount",
  deferredRevenueAccount: "exampleDeferredRevenueAccount",
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  id: "exampleId",
  idx: 42,
  incomeAccount: "exampleIncomeAccount",
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  sellingCostCenter: "exampleSellingCostCenter",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  buyingCostCenter: "exampleBuyingCostCenter",
  company: "exampleCompany",
  createdAt: new Date(),
  defaultDiscountAccount: "exampleDefaultDiscountAccount",
  defaultPriceList: "exampleDefaultPriceList",
  defaultProvisionalAccount: "exampleDefaultProvisionalAccount",
  defaultSupplier: "exampleDefaultSupplier",
  defaultWarehouse: "exampleDefaultWarehouse",
  deferredExpenseAccount: "exampleDeferredExpenseAccount",
  deferredRevenueAccount: "exampleDeferredRevenueAccount",
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  id: "exampleId",
  idx: 42,
  incomeAccount: "exampleIncomeAccount",
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  sellingCostCenter: "exampleSellingCostCenter",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    buyingCostCenter: "exampleBuyingCostCenter",
    company: "exampleCompany",
    createdAt: new Date(),
    defaultDiscountAccount: "exampleDefaultDiscountAccount",
    defaultPriceList: "exampleDefaultPriceList",
    defaultProvisionalAccount: "exampleDefaultProvisionalAccount",
    defaultSupplier: "exampleDefaultSupplier",
    defaultWarehouse: "exampleDefaultWarehouse",
    deferredExpenseAccount: "exampleDeferredExpenseAccount",
    deferredRevenueAccount: "exampleDeferredRevenueAccount",
    docstatus: 42,
    expenseAccount: "exampleExpenseAccount",
    id: "exampleId",
    idx: 42,
    incomeAccount: "exampleIncomeAccount",
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    sellingCostCenter: "exampleSellingCostCenter",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  buyingCostCenter: "exampleBuyingCostCenter",
  company: "exampleCompany",
  createdAt: new Date(),
  defaultDiscountAccount: "exampleDefaultDiscountAccount",
  defaultPriceList: "exampleDefaultPriceList",
  defaultProvisionalAccount: "exampleDefaultProvisionalAccount",
  defaultSupplier: "exampleDefaultSupplier",
  defaultWarehouse: "exampleDefaultWarehouse",
  deferredExpenseAccount: "exampleDeferredExpenseAccount",
  deferredRevenueAccount: "exampleDeferredRevenueAccount",
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  id: "exampleId",
  idx: 42,
  incomeAccount: "exampleIncomeAccount",
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  sellingCostCenter: "exampleSellingCostCenter",
  updatedAt: new Date(),
};

const service = {
  createItemDefault() {
    return CREATE_RESULT;
  },
  itemDefaults: () => FIND_MANY_RESULT,
  itemDefault: ({ where }: { where: { id: string } }) => {
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

describe("ItemDefault", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ItemDefaultService,
          useValue: service,
        },
      ],
      controllers: [ItemDefaultController],
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

  test("POST /itemDefaults", async () => {
    await request(app.getHttpServer())
      .post("/itemDefaults")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /itemDefaults", async () => {
    await request(app.getHttpServer())
      .get("/itemDefaults")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /itemDefaults/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/itemDefaults"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /itemDefaults/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/itemDefaults"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /itemDefaults existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/itemDefaults")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/itemDefaults")
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
