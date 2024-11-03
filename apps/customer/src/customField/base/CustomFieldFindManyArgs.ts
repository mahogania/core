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
import { CustomFieldWhereInput } from "./CustomFieldWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomFieldOrderByInput } from "./CustomFieldOrderByInput";

@ArgsType()
class CustomFieldFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomFieldWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomFieldWhereInput, { nullable: true })
  @Type(() => CustomFieldWhereInput)
  where?: CustomFieldWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomFieldOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomFieldOrderByInput], { nullable: true })
  @Type(() => CustomFieldOrderByInput)
  orderBy?: Array<CustomFieldOrderByInput>;

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

export { CustomFieldFindManyArgs as CustomFieldFindManyArgs };
