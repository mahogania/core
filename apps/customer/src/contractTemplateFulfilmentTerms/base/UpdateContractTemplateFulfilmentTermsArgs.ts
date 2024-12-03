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
import { ContractTemplateFulfilmentTermsWhereUniqueInput } from "./ContractTemplateFulfilmentTermsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ContractTemplateFulfilmentTermsUpdateInput } from "./ContractTemplateFulfilmentTermsUpdateInput";

@ArgsType()
class UpdateContractTemplateFulfilmentTermsArgs {
  @ApiProperty({
    required: true,
    type: () => ContractTemplateFulfilmentTermsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContractTemplateFulfilmentTermsWhereUniqueInput)
  @Field(() => ContractTemplateFulfilmentTermsWhereUniqueInput, {
    nullable: false,
  })
  where!: ContractTemplateFulfilmentTermsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ContractTemplateFulfilmentTermsUpdateInput,
  })
  @ValidateNested()
  @Type(() => ContractTemplateFulfilmentTermsUpdateInput)
  @Field(() => ContractTemplateFulfilmentTermsUpdateInput, { nullable: false })
  data!: ContractTemplateFulfilmentTermsUpdateInput;
}

export { UpdateContractTemplateFulfilmentTermsArgs as UpdateContractTemplateFulfilmentTermsArgs };
