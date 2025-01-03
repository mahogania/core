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
import { ContractFulfilmentChecklistService } from "../contractFulfilmentChecklist.service";
import { ContractFulfilmentChecklistCreateInput } from "./ContractFulfilmentChecklistCreateInput";
import { ContractFulfilmentChecklist } from "./ContractFulfilmentChecklist";
import { ContractFulfilmentChecklistFindManyArgs } from "./ContractFulfilmentChecklistFindManyArgs";
import { ContractFulfilmentChecklistWhereUniqueInput } from "./ContractFulfilmentChecklistWhereUniqueInput";
import { ContractFulfilmentChecklistUpdateInput } from "./ContractFulfilmentChecklistUpdateInput";

export class ContractFulfilmentChecklistControllerBase {
  constructor(protected readonly service: ContractFulfilmentChecklistService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ContractFulfilmentChecklist })
  async createContractFulfilmentChecklist(
    @common.Body() data: ContractFulfilmentChecklistCreateInput
  ): Promise<ContractFulfilmentChecklist> {
    return await this.service.createContractFulfilmentChecklist({
      data: data,
      select: {
        amendedFrom: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        fulfilled: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        notes: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        requirement: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ContractFulfilmentChecklist] })
  @ApiNestedQuery(ContractFulfilmentChecklistFindManyArgs)
  async contractFulfilmentChecklists(
    @common.Req() request: Request
  ): Promise<ContractFulfilmentChecklist[]> {
    const args = plainToClass(
      ContractFulfilmentChecklistFindManyArgs,
      request.query
    );
    return this.service.contractFulfilmentChecklists({
      ...args,
      select: {
        amendedFrom: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        fulfilled: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        notes: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        requirement: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ContractFulfilmentChecklist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async contractFulfilmentChecklist(
    @common.Param() params: ContractFulfilmentChecklistWhereUniqueInput
  ): Promise<ContractFulfilmentChecklist | null> {
    const result = await this.service.contractFulfilmentChecklist({
      where: params,
      select: {
        amendedFrom: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        fulfilled: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        notes: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        requirement: true,
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
  @swagger.ApiOkResponse({ type: ContractFulfilmentChecklist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateContractFulfilmentChecklist(
    @common.Param() params: ContractFulfilmentChecklistWhereUniqueInput,
    @common.Body() data: ContractFulfilmentChecklistUpdateInput
  ): Promise<ContractFulfilmentChecklist | null> {
    try {
      return await this.service.updateContractFulfilmentChecklist({
        where: params,
        data: data,
        select: {
          amendedFrom: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          fulfilled: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          notes: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          requirement: true,
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
  @swagger.ApiOkResponse({ type: ContractFulfilmentChecklist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteContractFulfilmentChecklist(
    @common.Param() params: ContractFulfilmentChecklistWhereUniqueInput
  ): Promise<ContractFulfilmentChecklist | null> {
    try {
      return await this.service.deleteContractFulfilmentChecklist({
        where: params,
        select: {
          amendedFrom: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          fulfilled: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          notes: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          requirement: true,
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
