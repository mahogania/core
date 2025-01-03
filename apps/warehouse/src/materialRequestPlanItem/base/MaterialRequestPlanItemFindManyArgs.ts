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
import { MaterialRequestPlanItemWhereInput } from "./MaterialRequestPlanItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MaterialRequestPlanItemOrderByInput } from "./MaterialRequestPlanItemOrderByInput";

@ArgsType()
class MaterialRequestPlanItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MaterialRequestPlanItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MaterialRequestPlanItemWhereInput, { nullable: true })
  @Type(() => MaterialRequestPlanItemWhereInput)
  where?: MaterialRequestPlanItemWhereInput;

  @ApiProperty({
    required: false,
    type: [MaterialRequestPlanItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MaterialRequestPlanItemOrderByInput], { nullable: true })
  @Type(() => MaterialRequestPlanItemOrderByInput)
  orderBy?: Array<MaterialRequestPlanItemOrderByInput>;

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

export { MaterialRequestPlanItemFindManyArgs as MaterialRequestPlanItemFindManyArgs };
