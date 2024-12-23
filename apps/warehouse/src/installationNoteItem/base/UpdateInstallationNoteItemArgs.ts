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
import { InstallationNoteItemWhereUniqueInput } from "./InstallationNoteItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InstallationNoteItemUpdateInput } from "./InstallationNoteItemUpdateInput";

@ArgsType()
class UpdateInstallationNoteItemArgs {
  @ApiProperty({
    required: true,
    type: () => InstallationNoteItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InstallationNoteItemWhereUniqueInput)
  @Field(() => InstallationNoteItemWhereUniqueInput, { nullable: false })
  where!: InstallationNoteItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InstallationNoteItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => InstallationNoteItemUpdateInput)
  @Field(() => InstallationNoteItemUpdateInput, { nullable: false })
  data!: InstallationNoteItemUpdateInput;
}

export { UpdateInstallationNoteItemArgs as UpdateInstallationNoteItemArgs };
