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
import { DocPermWhereUniqueInput } from "./DocPermWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteDocPermArgs {
  @ApiProperty({
    required: true,
    type: () => DocPermWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocPermWhereUniqueInput)
  @Field(() => DocPermWhereUniqueInput, { nullable: false })
  where!: DocPermWhereUniqueInput;
}

export { DeleteDocPermArgs as DeleteDocPermArgs };