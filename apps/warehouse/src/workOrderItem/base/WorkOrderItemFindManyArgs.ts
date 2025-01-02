/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WorkOrderItemWhereInput } from "./WorkOrderItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WorkOrderItemOrderByInput } from "./WorkOrderItemOrderByInput";

@ArgsType()
class WorkOrderItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WorkOrderItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WorkOrderItemWhereInput, { nullable: true })
  @Type(() => WorkOrderItemWhereInput)
  where?: WorkOrderItemWhereInput;

  @ApiProperty({
    required: false,
    type: [WorkOrderItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WorkOrderItemOrderByInput], { nullable: true })
  @Type(() => WorkOrderItemOrderByInput)
  orderBy?: Array<WorkOrderItemOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WorkOrderItemFindManyArgs as WorkOrderItemFindManyArgs };