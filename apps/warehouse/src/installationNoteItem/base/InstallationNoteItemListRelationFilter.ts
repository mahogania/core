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
import { InstallationNoteItemWhereInput } from "./InstallationNoteItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InstallationNoteItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InstallationNoteItemWhereInput,
  })
  @ValidateNested()
  @Type(() => InstallationNoteItemWhereInput)
  @IsOptional()
  @Field(() => InstallationNoteItemWhereInput, {
    nullable: true,
  })
  every?: InstallationNoteItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => InstallationNoteItemWhereInput,
  })
  @ValidateNested()
  @Type(() => InstallationNoteItemWhereInput)
  @IsOptional()
  @Field(() => InstallationNoteItemWhereInput, {
    nullable: true,
  })
  some?: InstallationNoteItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => InstallationNoteItemWhereInput,
  })
  @ValidateNested()
  @Type(() => InstallationNoteItemWhereInput)
  @IsOptional()
  @Field(() => InstallationNoteItemWhereInput, {
    nullable: true,
  })
  none?: InstallationNoteItemWhereInput;
}
export { InstallationNoteItemListRelationFilter as InstallationNoteItemListRelationFilter };