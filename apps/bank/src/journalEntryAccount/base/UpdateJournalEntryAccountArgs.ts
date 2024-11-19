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
import { JournalEntryAccountWhereUniqueInput } from "./JournalEntryAccountWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { JournalEntryAccountUpdateInput } from "./JournalEntryAccountUpdateInput";

@ArgsType()
class UpdateJournalEntryAccountArgs {
  @ApiProperty({
    required: true,
    type: () => JournalEntryAccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JournalEntryAccountWhereUniqueInput)
  @Field(() => JournalEntryAccountWhereUniqueInput, { nullable: false })
  where!: JournalEntryAccountWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => JournalEntryAccountUpdateInput,
  })
  @ValidateNested()
  @Type(() => JournalEntryAccountUpdateInput)
  @Field(() => JournalEntryAccountUpdateInput, { nullable: false })
  data!: JournalEntryAccountUpdateInput;
}

export { UpdateJournalEntryAccountArgs as UpdateJournalEntryAccountArgs };