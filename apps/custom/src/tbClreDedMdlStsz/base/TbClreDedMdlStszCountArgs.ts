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
import { TbClreDedMdlStszWhereInput } from "./TbClreDedMdlStszWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class TbClreDedMdlStszCountArgs {
  @ApiProperty({
    required: false,
    type: () => TbClreDedMdlStszWhereInput,
  })
  @Field(() => TbClreDedMdlStszWhereInput, { nullable: true })
  @Type(() => TbClreDedMdlStszWhereInput)
  where?: TbClreDedMdlStszWhereInput;
}

export { TbClreDedMdlStszCountArgs as TbClreDedMdlStszCountArgs };