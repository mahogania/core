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
import { BomController } from "../bom.controller";
import { BomService } from "../bom.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allowAlternativeItem: "true",
  amendedFrom: "exampleAmendedFrom",
  baseOperatingCost: 42.42,
  baseRawMaterialCost: 42.42,
  baseScrapMaterialCost: 42.42,
  baseTotalCost: 42.42,
  bomCreator: "exampleBomCreator",
  bomCreatorItem: "exampleBomCreatorItem",
  buyingPriceList: "exampleBuyingPriceList",
  company: "exampleCompany",
  conversionRate: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  description: "exampleDescription",
  docstatus: 42,
  fgBasedOperatingCost: "true",
  hasVariants: "true",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  inspectionRequired: "true",
  isActive: "true",
  isDefault: "true",
  item: "exampleItem",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  operatingCost: 42.42,
  operatingCostPerBomQuantity: 42.42,
  owner: "exampleOwner",
  plcConversionRate: 42.42,
  priceListCurrency: "examplePriceListCurrency",
  processLossPercentage: 42.42,
  processLossQty: 42.42,
  project: "exampleProject",
  qualityInspectionTemplate: "exampleQualityInspectionTemplate",
  quantity: 42.42,
  rawMaterialCost: 42.42,
  rmCostAsPer: "exampleRmCostAsPer",
  route: "exampleRoute",
  routing: "exampleRouting",
  scrapMaterialCost: 42.42,
  setRateOfSubAssemblyItemBasedOnBom: "true",
  showInWebsite: "true",
  showItems: "true",
  showOperations: "true",
  thumbnail: "exampleThumbnail",
  totalCost: 42.42,
  transferMaterialAgainst: "exampleTransferMaterialAgainst",
  uom: "exampleUom",
  updatedAt: new Date(),
  webLongDescription: "exampleWebLongDescription",
  websiteImage: "exampleWebsiteImage",
  withOperations: "true",
};
const CREATE_RESULT = {
  allowAlternativeItem: "true",
  amendedFrom: "exampleAmendedFrom",
  baseOperatingCost: 42.42,
  baseRawMaterialCost: 42.42,
  baseScrapMaterialCost: 42.42,
  baseTotalCost: 42.42,
  bomCreator: "exampleBomCreator",
  bomCreatorItem: "exampleBomCreatorItem",
  buyingPriceList: "exampleBuyingPriceList",
  company: "exampleCompany",
  conversionRate: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  description: "exampleDescription",
  docstatus: 42,
  fgBasedOperatingCost: "true",
  hasVariants: "true",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  inspectionRequired: "true",
  isActive: "true",
  isDefault: "true",
  item: "exampleItem",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  operatingCost: 42.42,
  operatingCostPerBomQuantity: 42.42,
  owner: "exampleOwner",
  plcConversionRate: 42.42,
  priceListCurrency: "examplePriceListCurrency",
  processLossPercentage: 42.42,
  processLossQty: 42.42,
  project: "exampleProject",
  qualityInspectionTemplate: "exampleQualityInspectionTemplate",
  quantity: 42.42,
  rawMaterialCost: 42.42,
  rmCostAsPer: "exampleRmCostAsPer",
  route: "exampleRoute",
  routing: "exampleRouting",
  scrapMaterialCost: 42.42,
  setRateOfSubAssemblyItemBasedOnBom: "true",
  showInWebsite: "true",
  showItems: "true",
  showOperations: "true",
  thumbnail: "exampleThumbnail",
  totalCost: 42.42,
  transferMaterialAgainst: "exampleTransferMaterialAgainst",
  uom: "exampleUom",
  updatedAt: new Date(),
  webLongDescription: "exampleWebLongDescription",
  websiteImage: "exampleWebsiteImage",
  withOperations: "true",
};
const FIND_MANY_RESULT = [
  {
    allowAlternativeItem: "true",
    amendedFrom: "exampleAmendedFrom",
    baseOperatingCost: 42.42,
    baseRawMaterialCost: 42.42,
    baseScrapMaterialCost: 42.42,
    baseTotalCost: 42.42,
    bomCreator: "exampleBomCreator",
    bomCreatorItem: "exampleBomCreatorItem",
    buyingPriceList: "exampleBuyingPriceList",
    company: "exampleCompany",
    conversionRate: 42.42,
    createdAt: new Date(),
    creation: new Date(),
    currency: "exampleCurrency",
    description: "exampleDescription",
    docstatus: 42,
    fgBasedOperatingCost: "true",
    hasVariants: "true",
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    inspectionRequired: "true",
    isActive: "true",
    isDefault: "true",
    item: "exampleItem",
    itemName: "exampleItemName",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    operatingCost: 42.42,
    operatingCostPerBomQuantity: 42.42,
    owner: "exampleOwner",
    plcConversionRate: 42.42,
    priceListCurrency: "examplePriceListCurrency",
    processLossPercentage: 42.42,
    processLossQty: 42.42,
    project: "exampleProject",
    qualityInspectionTemplate: "exampleQualityInspectionTemplate",
    quantity: 42.42,
    rawMaterialCost: 42.42,
    rmCostAsPer: "exampleRmCostAsPer",
    route: "exampleRoute",
    routing: "exampleRouting",
    scrapMaterialCost: 42.42,
    setRateOfSubAssemblyItemBasedOnBom: "true",
    showInWebsite: "true",
    showItems: "true",
    showOperations: "true",
    thumbnail: "exampleThumbnail",
    totalCost: 42.42,
    transferMaterialAgainst: "exampleTransferMaterialAgainst",
    uom: "exampleUom",
    updatedAt: new Date(),
    webLongDescription: "exampleWebLongDescription",
    websiteImage: "exampleWebsiteImage",
    withOperations: "true",
  },
];
const FIND_ONE_RESULT = {
  allowAlternativeItem: "true",
  amendedFrom: "exampleAmendedFrom",
  baseOperatingCost: 42.42,
  baseRawMaterialCost: 42.42,
  baseScrapMaterialCost: 42.42,
  baseTotalCost: 42.42,
  bomCreator: "exampleBomCreator",
  bomCreatorItem: "exampleBomCreatorItem",
  buyingPriceList: "exampleBuyingPriceList",
  company: "exampleCompany",
  conversionRate: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  description: "exampleDescription",
  docstatus: 42,
  fgBasedOperatingCost: "true",
  hasVariants: "true",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  inspectionRequired: "true",
  isActive: "true",
  isDefault: "true",
  item: "exampleItem",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  operatingCost: 42.42,
  operatingCostPerBomQuantity: 42.42,
  owner: "exampleOwner",
  plcConversionRate: 42.42,
  priceListCurrency: "examplePriceListCurrency",
  processLossPercentage: 42.42,
  processLossQty: 42.42,
  project: "exampleProject",
  qualityInspectionTemplate: "exampleQualityInspectionTemplate",
  quantity: 42.42,
  rawMaterialCost: 42.42,
  rmCostAsPer: "exampleRmCostAsPer",
  route: "exampleRoute",
  routing: "exampleRouting",
  scrapMaterialCost: 42.42,
  setRateOfSubAssemblyItemBasedOnBom: "true",
  showInWebsite: "true",
  showItems: "true",
  showOperations: "true",
  thumbnail: "exampleThumbnail",
  totalCost: 42.42,
  transferMaterialAgainst: "exampleTransferMaterialAgainst",
  uom: "exampleUom",
  updatedAt: new Date(),
  webLongDescription: "exampleWebLongDescription",
  websiteImage: "exampleWebsiteImage",
  withOperations: "true",
};

const service = {
  createBom() {
    return CREATE_RESULT;
  },
  boms: () => FIND_MANY_RESULT,
  bom: ({ where }: { where: { id: string } }) => {
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

describe("Bom", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BomService,
          useValue: service,
        },
      ],
      controllers: [BomController],
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

  test("POST /boms", async () => {
    await request(app.getHttpServer())
      .post("/boms")
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

  test("GET /boms", async () => {
    await request(app.getHttpServer())
      .get("/boms")
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

  test("GET /boms/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/boms"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /boms/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/boms"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /boms existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/boms")
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
          .post("/boms")
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
