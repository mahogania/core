/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BusinessService } from "../business.service";
import { BusinessCreateInput } from "./BusinessCreateInput";
import { Business } from "./Business";
import { BusinessFindManyArgs } from "./BusinessFindManyArgs";
import { BusinessWhereUniqueInput } from "./BusinessWhereUniqueInput";
import { BusinessUpdateInput } from "./BusinessUpdateInput";
import { UnitFindManyArgs } from "../../unit/base/UnitFindManyArgs";
import { Unit } from "../../unit/base/Unit";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";
import { RelationFindManyArgs } from "../../relation/base/RelationFindManyArgs";
import { Relation } from "../../relation/base/Relation";
import { RelationWhereUniqueInput } from "../../relation/base/RelationWhereUniqueInput";
import { StrengthFindManyArgs } from "../../strength/base/StrengthFindManyArgs";
import { Strength } from "../../strength/base/Strength";
import { StrengthWhereUniqueInput } from "../../strength/base/StrengthWhereUniqueInput";
import { WeaknessFindManyArgs } from "../../weakness/base/WeaknessFindManyArgs";
import { Weakness } from "../../weakness/base/Weakness";
import { WeaknessWhereUniqueInput } from "../../weakness/base/WeaknessWhereUniqueInput";

export class BusinessControllerBase {
  constructor(protected readonly service: BusinessService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Business })
  @swagger.ApiBody({
    type: BusinessCreateInput,
  })
  async createBusiness(
    @common.Body() data: BusinessCreateInput
  ): Promise<Business> {
    return await this.service.createBusiness({
      data: {
        ...data,

        industry: data.industry
          ? {
              connect: data.industry,
            }
          : undefined,

        succesorRelations: data.succesorRelations
          ? {
              connect: data.succesorRelations,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        industry: {
          select: {
            id: true,
          },
        },

        name: true,

        succesorRelations: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Business] })
  @ApiNestedQuery(BusinessFindManyArgs)
  async businesses(@common.Req() request: Request): Promise<Business[]> {
    const args = plainToClass(BusinessFindManyArgs, request.query);
    return this.service.businesses({
      ...args,
      select: {
        createdAt: true,
        id: true,

        industry: {
          select: {
            id: true,
          },
        },

        name: true,

        succesorRelations: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Business })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async business(
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<Business | null> {
    const result = await this.service.business({
      where: params,
      select: {
        createdAt: true,
        id: true,

        industry: {
          select: {
            id: true,
          },
        },

        name: true,

        succesorRelations: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Business })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: BusinessUpdateInput,
  })
  async updateBusiness(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() data: BusinessUpdateInput
  ): Promise<Business | null> {
    try {
      return await this.service.updateBusiness({
        where: params,
        data: {
          ...data,

          industry: data.industry
            ? {
                connect: data.industry,
              }
            : undefined,

          succesorRelations: data.succesorRelations
            ? {
                connect: data.succesorRelations,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          industry: {
            select: {
              id: true,
            },
          },

          name: true,

          succesorRelations: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Business })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBusiness(
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<Business | null> {
    try {
      return await this.service.deleteBusiness({
        where: params,
        select: {
          createdAt: true,
          id: true,

          industry: {
            select: {
              id: true,
            },
          },

          name: true,

          succesorRelations: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/businessUnits")
  @ApiNestedQuery(UnitFindManyArgs)
  async findBusinessUnits(
    @common.Req() request: Request,
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<Unit[]> {
    const query = plainToClass(UnitFindManyArgs, request.query);
    const results = await this.service.findBusinessUnits(params.id, {
      ...query,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        competitor: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/businessUnits")
  async connectBusinessUnits(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: UnitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      businessUnits: {
        connect: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/businessUnits")
  async updateBusinessUnits(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: UnitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      businessUnits: {
        set: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/businessUnits")
  async disconnectBusinessUnits(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: UnitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      businessUnits: {
        disconnect: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/predecessorRelations")
  @ApiNestedQuery(RelationFindManyArgs)
  async findPredecessorRelations(
    @common.Req() request: Request,
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<Relation[]> {
    const query = plainToClass(RelationFindManyArgs, request.query);
    const results = await this.service.findPredecessorRelations(params.id, {
      ...query,
      select: {
        ascendantBusiness: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        descendantBusiness: {
          select: {
            id: true,
          },
        },

        id: true,

        industry: {
          select: {
            id: true,
          },
        },

        kind: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/predecessorRelations")
  async connectPredecessorRelations(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: RelationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      predecessorRelations: {
        connect: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/predecessorRelations")
  async updatePredecessorRelations(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: RelationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      predecessorRelations: {
        set: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/predecessorRelations")
  async disconnectPredecessorRelations(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: RelationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      predecessorRelations: {
        disconnect: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/strengths")
  @ApiNestedQuery(StrengthFindManyArgs)
  async findStrengths(
    @common.Req() request: Request,
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<Strength[]> {
    const query = plainToClass(StrengthFindManyArgs, request.query);
    const results = await this.service.findStrengths(params.id, {
      ...query,
      select: {
        competitor: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/strengths")
  async connectStrengths(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: StrengthWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      strengths: {
        connect: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/strengths")
  async updateStrengths(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: StrengthWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      strengths: {
        set: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/strengths")
  async disconnectStrengths(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: StrengthWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      strengths: {
        disconnect: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/weaknesses")
  @ApiNestedQuery(WeaknessFindManyArgs)
  async findWeaknesses(
    @common.Req() request: Request,
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<Weakness[]> {
    const query = plainToClass(WeaknessFindManyArgs, request.query);
    const results = await this.service.findWeaknesses(params.id, {
      ...query,
      select: {
        competitor: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/weaknesses")
  async connectWeaknesses(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: WeaknessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weaknesses: {
        connect: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/weaknesses")
  async updateWeaknesses(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: WeaknessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weaknesses: {
        set: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/weaknesses")
  async disconnectWeaknesses(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: WeaknessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      weaknesses: {
        disconnect: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }
}
