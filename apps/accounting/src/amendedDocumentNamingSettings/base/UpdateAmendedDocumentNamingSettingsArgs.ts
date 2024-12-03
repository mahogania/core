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
import { AmendedDocumentNamingSettingsWhereUniqueInput } from "./AmendedDocumentNamingSettingsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AmendedDocumentNamingSettingsUpdateInput } from "./AmendedDocumentNamingSettingsUpdateInput";

@ArgsType()
class UpdateAmendedDocumentNamingSettingsArgs {
  @ApiProperty({
    required: true,
    type: () => AmendedDocumentNamingSettingsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AmendedDocumentNamingSettingsWhereUniqueInput)
  @Field(() => AmendedDocumentNamingSettingsWhereUniqueInput, {
    nullable: false,
  })
  where!: AmendedDocumentNamingSettingsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AmendedDocumentNamingSettingsUpdateInput,
  })
  @ValidateNested()
  @Type(() => AmendedDocumentNamingSettingsUpdateInput)
  @Field(() => AmendedDocumentNamingSettingsUpdateInput, { nullable: false })
  data!: AmendedDocumentNamingSettingsUpdateInput;
}

export { UpdateAmendedDocumentNamingSettingsArgs as UpdateAmendedDocumentNamingSettingsArgs };
