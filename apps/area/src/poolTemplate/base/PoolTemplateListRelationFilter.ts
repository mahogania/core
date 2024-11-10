/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PoolTemplateWhereInput } from "./PoolTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PoolTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PoolTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => PoolTemplateWhereInput)
  @IsOptional()
  @Field(() => PoolTemplateWhereInput, {
    nullable: true,
  })
  every?: PoolTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => PoolTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => PoolTemplateWhereInput)
  @IsOptional()
  @Field(() => PoolTemplateWhereInput, {
    nullable: true,
  })
  some?: PoolTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => PoolTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => PoolTemplateWhereInput)
  @IsOptional()
  @Field(() => PoolTemplateWhereInput, {
    nullable: true,
  })
  none?: PoolTemplateWhereInput;
}
export { PoolTemplateListRelationFilter as PoolTemplateListRelationFilter };
