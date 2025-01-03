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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BattlePetBreedsService } from "../battlePetBreeds.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BattlePetBreedsCreateInput } from "./BattlePetBreedsCreateInput";
import { BattlePetBreeds } from "./BattlePetBreeds";
import { BattlePetBreedsFindManyArgs } from "./BattlePetBreedsFindManyArgs";
import { BattlePetBreedsWhereUniqueInput } from "./BattlePetBreedsWhereUniqueInput";
import { BattlePetBreedsUpdateInput } from "./BattlePetBreedsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BattlePetBreedsControllerBase {
  constructor(
    protected readonly service: BattlePetBreedsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BattlePetBreeds })
  @nestAccessControl.UseRoles({
    resource: "BattlePetBreeds",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: BattlePetBreedsCreateInput,
  })
  async createBattlePetBreeds(
    @common.Body() data: BattlePetBreedsCreateInput
  ): Promise<BattlePetBreeds> {
    return await this.service.createBattlePetBreeds({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [BattlePetBreeds] })
  @ApiNestedQuery(BattlePetBreedsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BattlePetBreeds",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async battlePetBreedsItems(
    @common.Req() request: Request
  ): Promise<BattlePetBreeds[]> {
    const args = plainToClass(BattlePetBreedsFindManyArgs, request.query);
    return this.service.battlePetBreedsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BattlePetBreeds })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BattlePetBreeds",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async battlePetBreeds(
    @common.Param() params: BattlePetBreedsWhereUniqueInput
  ): Promise<BattlePetBreeds | null> {
    const result = await this.service.battlePetBreeds({
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BattlePetBreeds })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BattlePetBreeds",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: BattlePetBreedsUpdateInput,
  })
  async updateBattlePetBreeds(
    @common.Param() params: BattlePetBreedsWhereUniqueInput,
    @common.Body() data: BattlePetBreedsUpdateInput
  ): Promise<BattlePetBreeds | null> {
    try {
      return await this.service.updateBattlePetBreeds({
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
  @swagger.ApiOkResponse({ type: BattlePetBreeds })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BattlePetBreeds",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBattlePetBreeds(
    @common.Param() params: BattlePetBreedsWhereUniqueInput
  ): Promise<BattlePetBreeds | null> {
    try {
      return await this.service.deleteBattlePetBreeds({
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
}
