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
import { MaterialRequestItemWhereInput } from "./MaterialRequestItemWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MaterialRequestItemCountArgs {
  @ApiProperty({
    required: false,
    type: () => MaterialRequestItemWhereInput,
  })
  @Field(() => MaterialRequestItemWhereInput, { nullable: true })
  @Type(() => MaterialRequestItemWhereInput)
  where?: MaterialRequestItemWhereInput;
}

export { MaterialRequestItemCountArgs as MaterialRequestItemCountArgs };