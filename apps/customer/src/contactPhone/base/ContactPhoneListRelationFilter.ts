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
import { ContactPhoneWhereInput } from "./ContactPhoneWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContactPhoneListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContactPhoneWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactPhoneWhereInput)
  @IsOptional()
  @Field(() => ContactPhoneWhereInput, {
    nullable: true,
  })
  every?: ContactPhoneWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactPhoneWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactPhoneWhereInput)
  @IsOptional()
  @Field(() => ContactPhoneWhereInput, {
    nullable: true,
  })
  some?: ContactPhoneWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactPhoneWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactPhoneWhereInput)
  @IsOptional()
  @Field(() => ContactPhoneWhereInput, {
    nullable: true,
  })
  none?: ContactPhoneWhereInput;
}
export { ContactPhoneListRelationFilter as ContactPhoneListRelationFilter };
