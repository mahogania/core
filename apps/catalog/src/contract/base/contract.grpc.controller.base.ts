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
import { GrpcMethod } from "@nestjs/microservices";
import { ContractService } from "../contract.service";
import { ContractCreateInput } from "./ContractCreateInput";
import { ContractWhereInput } from "./ContractWhereInput";
import { ContractWhereUniqueInput } from "./ContractWhereUniqueInput";
import { ContractFindManyArgs } from "./ContractFindManyArgs";
import { ContractUpdateInput } from "./ContractUpdateInput";
import { Contract } from "./Contract";

export class ContractGrpcControllerBase {
  constructor(protected readonly service: ContractService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Contract })
  @GrpcMethod("ContractService", "createContract")
  async createContract(
    @common.Body() data: ContractCreateInput
  ): Promise<Contract> {
    return await this.service.createContract({
      data: {
        ...data,

        deal: data.deal
          ? {
              connect: data.deal,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        deal: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Contract] })
  @ApiNestedQuery(ContractFindManyArgs)
  @GrpcMethod("ContractService", "contracts")
  async contracts(@common.Req() request: Request): Promise<Contract[]> {
    const args = plainToClass(ContractFindManyArgs, request.query);
    return this.service.contracts({
      ...args,
      select: {
        createdAt: true,

        deal: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ContractService", "contract")
  async contract(
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Contract | null> {
    const result = await this.service.contract({
      where: params,
      select: {
        createdAt: true,

        deal: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ContractService", "updateContract")
  async updateContract(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() data: ContractUpdateInput
  ): Promise<Contract | null> {
    try {
      return await this.service.updateContract({
        where: params,
        data: {
          ...data,

          deal: data.deal
            ? {
                connect: data.deal,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          deal: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ContractService", "deleteContract")
  async deleteContract(
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Contract | null> {
    try {
      return await this.service.deleteContract({
        where: params,
        select: {
          createdAt: true,

          deal: {
            select: {
              id: true,
            },
          },

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
