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
import { CompetitorDetailWhereInput } from "./CompetitorDetailWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CompetitorDetailListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CompetitorDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => CompetitorDetailWhereInput)
  @IsOptional()
  @Field(() => CompetitorDetailWhereInput, {
    nullable: true,
  })
  every?: CompetitorDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => CompetitorDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => CompetitorDetailWhereInput)
  @IsOptional()
  @Field(() => CompetitorDetailWhereInput, {
    nullable: true,
  })
  some?: CompetitorDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => CompetitorDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => CompetitorDetailWhereInput)
  @IsOptional()
  @Field(() => CompetitorDetailWhereInput, {
    nullable: true,
  })
  none?: CompetitorDetailWhereInput;
}
export { CompetitorDetailListRelationFilter as CompetitorDetailListRelationFilter };
