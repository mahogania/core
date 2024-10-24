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
import { BusinessWhereUniqueInput } from "../../business/base/BusinessWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { ProposalListRelationFilter } from "../../proposal/base/ProposalListRelationFilter";

@InputType()
class ThreatWhereInput {
  @ApiProperty({
    required: false,
    type: () => BusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BusinessWhereUniqueInput)
  @IsOptional()
  @Field(() => BusinessWhereUniqueInput, {
    nullable: true,
  })
  competitor?: BusinessWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProposalListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProposalListRelationFilter)
  @IsOptional()
  @Field(() => ProposalListRelationFilter, {
    nullable: true,
  })
  proposals?: ProposalListRelationFilter;
}

export { ThreatWhereInput as ThreatWhereInput };
