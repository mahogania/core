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
import { DynamicLinkWhereInput } from "./DynamicLinkWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DynamicLinkListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DynamicLinkWhereInput,
  })
  @ValidateNested()
  @Type(() => DynamicLinkWhereInput)
  @IsOptional()
  @Field(() => DynamicLinkWhereInput, {
    nullable: true,
  })
  every?: DynamicLinkWhereInput;

  @ApiProperty({
    required: false,
    type: () => DynamicLinkWhereInput,
  })
  @ValidateNested()
  @Type(() => DynamicLinkWhereInput)
  @IsOptional()
  @Field(() => DynamicLinkWhereInput, {
    nullable: true,
  })
  some?: DynamicLinkWhereInput;

  @ApiProperty({
    required: false,
    type: () => DynamicLinkWhereInput,
  })
  @ValidateNested()
  @Type(() => DynamicLinkWhereInput)
  @IsOptional()
  @Field(() => DynamicLinkWhereInput, {
    nullable: true,
  })
  none?: DynamicLinkWhereInput;
}
export { DynamicLinkListRelationFilter as DynamicLinkListRelationFilter };
