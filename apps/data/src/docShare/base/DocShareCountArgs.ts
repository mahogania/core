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
import { DocShareWhereInput } from "./DocShareWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class DocShareCountArgs {
  @ApiProperty({
    required: false,
    type: () => DocShareWhereInput,
  })
  @Field(() => DocShareWhereInput, { nullable: true })
  @Type(() => DocShareWhereInput)
  where?: DocShareWhereInput;
}

export { DocShareCountArgs as DocShareCountArgs };
