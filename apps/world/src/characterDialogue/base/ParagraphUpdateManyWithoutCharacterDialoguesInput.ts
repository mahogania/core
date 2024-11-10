/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ParagraphWhereUniqueInput } from "../../paragraph/base/ParagraphWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ParagraphUpdateManyWithoutCharacterDialoguesInput {
  @Field(() => [ParagraphWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ParagraphWhereUniqueInput],
  })
  connect?: Array<ParagraphWhereUniqueInput>;

  @Field(() => [ParagraphWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ParagraphWhereUniqueInput],
  })
  disconnect?: Array<ParagraphWhereUniqueInput>;

  @Field(() => [ParagraphWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ParagraphWhereUniqueInput],
  })
  set?: Array<ParagraphWhereUniqueInput>;
}

export { ParagraphUpdateManyWithoutCharacterDialoguesInput as ParagraphUpdateManyWithoutCharacterDialoguesInput };
