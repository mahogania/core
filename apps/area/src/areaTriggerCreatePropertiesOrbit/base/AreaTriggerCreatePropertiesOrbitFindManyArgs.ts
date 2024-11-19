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
import { AreaTriggerCreatePropertiesOrbitWhereInput } from "./AreaTriggerCreatePropertiesOrbitWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AreaTriggerCreatePropertiesOrbitOrderByInput } from "./AreaTriggerCreatePropertiesOrbitOrderByInput";

@ArgsType()
class AreaTriggerCreatePropertiesOrbitFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AreaTriggerCreatePropertiesOrbitWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AreaTriggerCreatePropertiesOrbitWhereInput, { nullable: true })
  @Type(() => AreaTriggerCreatePropertiesOrbitWhereInput)
  where?: AreaTriggerCreatePropertiesOrbitWhereInput;

  @ApiProperty({
    required: false,
    type: [AreaTriggerCreatePropertiesOrbitOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AreaTriggerCreatePropertiesOrbitOrderByInput], {
    nullable: true,
  })
  @Type(() => AreaTriggerCreatePropertiesOrbitOrderByInput)
  orderBy?: Array<AreaTriggerCreatePropertiesOrbitOrderByInput>;

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

export { AreaTriggerCreatePropertiesOrbitFindManyArgs as AreaTriggerCreatePropertiesOrbitFindManyArgs };