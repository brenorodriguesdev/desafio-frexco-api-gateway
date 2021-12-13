import { Validator } from "../../../../validation/contracts/validator"
import { RequiredFieldValidator } from "../../../../validation/validators/required-field"
import { ValidatorComposite } from "../../../../validation/validators/validator-composite"

export const makeListarProdutoEstoquePorEstoqueValidator = (): ValidatorComposite => {
    const validations: Validator[] = []
    const requiredFields = ['idEstoque']
    for (const field of requiredFields) {
      validations.push(new RequiredFieldValidator(field))
    }
    return new ValidatorComposite(validations)
  }