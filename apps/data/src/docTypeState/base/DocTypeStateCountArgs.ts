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
import { DocTypeStateWhereInput } from "./DocTypeStateWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class DocTypeStateCountArgs {
  @ApiProperty({
    required: false,
    type: () => DocTypeStateWhereInput,
  })
  @Field(() => DocTypeStateWhereInput, { nullable: true })
  @Type(() => DocTypeStateWhereInput)
  where?: DocTypeStateWhereInput;
}

export { DocTypeStateCountArgs as DocTypeStateCountArgs };
