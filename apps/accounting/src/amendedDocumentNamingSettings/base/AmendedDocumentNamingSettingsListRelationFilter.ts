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
import { AmendedDocumentNamingSettingsWhereInput } from "./AmendedDocumentNamingSettingsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AmendedDocumentNamingSettingsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AmendedDocumentNamingSettingsWhereInput,
  })
  @ValidateNested()
  @Type(() => AmendedDocumentNamingSettingsWhereInput)
  @IsOptional()
  @Field(() => AmendedDocumentNamingSettingsWhereInput, {
    nullable: true,
  })
  every?: AmendedDocumentNamingSettingsWhereInput;

  @ApiProperty({
    required: false,
    type: () => AmendedDocumentNamingSettingsWhereInput,
  })
  @ValidateNested()
  @Type(() => AmendedDocumentNamingSettingsWhereInput)
  @IsOptional()
  @Field(() => AmendedDocumentNamingSettingsWhereInput, {
    nullable: true,
  })
  some?: AmendedDocumentNamingSettingsWhereInput;

  @ApiProperty({
    required: false,
    type: () => AmendedDocumentNamingSettingsWhereInput,
  })
  @ValidateNested()
  @Type(() => AmendedDocumentNamingSettingsWhereInput)
  @IsOptional()
  @Field(() => AmendedDocumentNamingSettingsWhereInput, {
    nullable: true,
  })
  none?: AmendedDocumentNamingSettingsWhereInput;
}
export { AmendedDocumentNamingSettingsListRelationFilter as AmendedDocumentNamingSettingsListRelationFilter };
