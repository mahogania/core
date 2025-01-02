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
import { ResponseLocaleWhereInput } from "./ResponseLocaleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ResponseLocaleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ResponseLocaleWhereInput,
  })
  @ValidateNested()
  @Type(() => ResponseLocaleWhereInput)
  @IsOptional()
  @Field(() => ResponseLocaleWhereInput, {
    nullable: true,
  })
  every?: ResponseLocaleWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResponseLocaleWhereInput,
  })
  @ValidateNested()
  @Type(() => ResponseLocaleWhereInput)
  @IsOptional()
  @Field(() => ResponseLocaleWhereInput, {
    nullable: true,
  })
  some?: ResponseLocaleWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResponseLocaleWhereInput,
  })
  @ValidateNested()
  @Type(() => ResponseLocaleWhereInput)
  @IsOptional()
  @Field(() => ResponseLocaleWhereInput, {
    nullable: true,
  })
  none?: ResponseLocaleWhereInput;
}
export { ResponseLocaleListRelationFilter as ResponseLocaleListRelationFilter };