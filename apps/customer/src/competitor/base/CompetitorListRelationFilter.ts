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
import { CompetitorWhereInput } from "./CompetitorWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CompetitorListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CompetitorWhereInput,
  })
  @ValidateNested()
  @Type(() => CompetitorWhereInput)
  @IsOptional()
  @Field(() => CompetitorWhereInput, {
    nullable: true,
  })
  every?: CompetitorWhereInput;

  @ApiProperty({
    required: false,
    type: () => CompetitorWhereInput,
  })
  @ValidateNested()
  @Type(() => CompetitorWhereInput)
  @IsOptional()
  @Field(() => CompetitorWhereInput, {
    nullable: true,
  })
  some?: CompetitorWhereInput;

  @ApiProperty({
    required: false,
    type: () => CompetitorWhereInput,
  })
  @ValidateNested()
  @Type(() => CompetitorWhereInput)
  @IsOptional()
  @Field(() => CompetitorWhereInput, {
    nullable: true,
  })
  none?: CompetitorWhereInput;
}
export { CompetitorListRelationFilter as CompetitorListRelationFilter };
