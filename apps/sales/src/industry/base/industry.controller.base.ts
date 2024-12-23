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
import { IndustryService } from "../industry.service";
import { IndustryCreateInput } from "./IndustryCreateInput";
import { Industry } from "./Industry";
import { IndustryFindManyArgs } from "./IndustryFindManyArgs";
import { IndustryWhereUniqueInput } from "./IndustryWhereUniqueInput";
import { IndustryUpdateInput } from "./IndustryUpdateInput";
import { BusinessFindManyArgs } from "../../business/base/BusinessFindManyArgs";
import { Business } from "../../business/base/Business";
import { BusinessWhereUniqueInput } from "../../business/base/BusinessWhereUniqueInput";
import { RelationFindManyArgs } from "../../relation/base/RelationFindManyArgs";
import { Relation } from "../../relation/base/Relation";
import { RelationWhereUniqueInput } from "../../relation/base/RelationWhereUniqueInput";

export class IndustryControllerBase {
  constructor(protected readonly service: IndustryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Industry })
  @swagger.ApiBody({
    type: IndustryCreateInput,
  })
  async createIndustry(
    @common.Body() data: IndustryCreateInput
  ): Promise<Industry> {
    return await this.service.createIndustry({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Industry] })
  @ApiNestedQuery(IndustryFindManyArgs)
  async industries(@common.Req() request: Request): Promise<Industry[]> {
    const args = plainToClass(IndustryFindManyArgs, request.query);
    return this.service.industries({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Industry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async industry(
    @common.Param() params: IndustryWhereUniqueInput
  ): Promise<Industry | null> {
    const result = await this.service.industry({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: Industry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: IndustryUpdateInput,
  })
  async updateIndustry(
    @common.Param() params: IndustryWhereUniqueInput,
    @common.Body() data: IndustryUpdateInput
  ): Promise<Industry | null> {
    try {
      return await this.service.updateIndustry({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: Industry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteIndustry(
    @common.Param() params: IndustryWhereUniqueInput
  ): Promise<Industry | null> {
    try {
      return await this.service.deleteIndustry({
        where: params,
        select: {
          createdAt: true,
          id: true,
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

  @common.Get("/:id/businesses")
  @ApiNestedQuery(BusinessFindManyArgs)
  async findBusinesses(
    @common.Req() request: Request,
    @common.Param() params: IndustryWhereUniqueInput
  ): Promise<Business[]> {
    const query = plainToClass(BusinessFindManyArgs, request.query);
    const results = await this.service.findBusinesses(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/businesses")
  async connectBusinesses(
    @common.Param() params: IndustryWhereUniqueInput,
    @common.Body() body: BusinessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      businesses: {
        connect: body,
      },
    };
    await this.service.updateIndustry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/businesses")
  async updateBusinesses(
    @common.Param() params: IndustryWhereUniqueInput,
    @common.Body() body: BusinessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      businesses: {
        set: body,
      },
    };
    await this.service.updateIndustry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/businesses")
  async disconnectBusinesses(
    @common.Param() params: IndustryWhereUniqueInput,
    @common.Body() body: BusinessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      businesses: {
        disconnect: body,
      },
    };
    await this.service.updateIndustry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/relations")
  @ApiNestedQuery(RelationFindManyArgs)
  async findRelations(
    @common.Req() request: Request,
    @common.Param() params: IndustryWhereUniqueInput
  ): Promise<Relation[]> {
    const query = plainToClass(RelationFindManyArgs, request.query);
    const results = await this.service.findRelations(params.id, {
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

  @common.Post("/:id/relations")
  async connectRelations(
    @common.Param() params: IndustryWhereUniqueInput,
    @common.Body() body: RelationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      relations: {
        connect: body,
      },
    };
    await this.service.updateIndustry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/relations")
  async updateRelations(
    @common.Param() params: IndustryWhereUniqueInput,
    @common.Body() body: RelationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      relations: {
        set: body,
      },
    };
    await this.service.updateIndustry({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/relations")
  async disconnectRelations(
    @common.Param() params: IndustryWhereUniqueInput,
    @common.Body() body: RelationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      relations: {
        disconnect: body,
      },
    };
    await this.service.updateIndustry({
      where: params,
      data,
      select: { id: true },
    });
  }
}
