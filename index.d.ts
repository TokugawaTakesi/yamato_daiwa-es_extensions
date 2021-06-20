import {

  /* === Numbers ==================================================================================================== */
  formatNumberWith4KetaKanji,
  isStringifiedNonNegativeIntegerOfRegularNotation,
  separateEach3DigitsGroupWithComma,
  separateEach4DigitsGroupWithComma,

  /* --- Pagination ------------------------------------------------------------------------------------------------- */
  computeFirstItemNumberForSpecificPaginationPage,
  computeLastItemNumberForSpecificPaginationPage,


  /* === Sets ======================================================================================================= */
  addMultipleElementsToSet,


  /* === Maps ======================================================================================================= */
  addMultiplePairsToMap,
  createMapBasedOnOtherMap,
  filterMap,


  /* === Type guards ================================================================================================ */
  /* --- Numbers ---------------------------------------------------------------------------------------------------- */
  isDecimalFractionOfAnySign,
  isNaturalNumber,
  isNegativeDecimalFraction,
  isNegativeInteger,
  isNegativeIntegerOrZero,
  isNonNegativeInteger,
  isNumber,
  isPositiveDecimalFraction,

  /* --- Strings ---------------------------------------------------------------------------------------------------- */
  isEmptyString,
  isNonEmptyString,
  isString,
  isStringOfLength,
  IsStringOfLengthCheckingOperation,

  /* --- Objects ---------------------------------------------------------------------------------------------------- */
  isEmptyObject,
  isNonEmptyObject,
  isNonNullObject,

  /* --- Arrays ----------------------------------------------------------------------------------------------------- */
  isArrayOfCertainTypeElements,
  isArrayOfLength,
  IsArrayOfLengthCheckingOperation,
  isEmptyArray,
  isNonEmptyArray,

  /* --- undefined/null --------------------------------------------------------------------------------------------- */
  isNeitherUndefinedNorNull,
  isNotNull,
  isNotUndefined,
  isNull,
  isUndefined,

  /* --- Others ----------------------------------------------------------------------------------------------------- */
  isBoolean,
  isElementOfEnumeration,
  isFunctionLike,

  /* === Date & Time ================================================================================================ */
  millisecondsToSeconds,
  secondsToMilliseconds,
  Timer,


  /* === Value transformers ========================================================================================= */
  emptyStringToNull,
  nullToUndefined,
  nullToZero,
  undefinedToEmptyArray,
  undefinedToEmptyString,
  undefinedToNull,


  /* === Default value substituters ================================================================================= */
  substituteWhenNull,
  substituteWhenUndefined
} from "./Distributable"


import type {
  /* === Types ====================================================================================================== */
  ParsedJSON,
  ParsedJSON_Object,
  ParsedJSON_Array,
  ParsedJSON_NestedProperty
} from "./Distributable";


export {

  /* === Numbers ==================================================================================================== */
  formatNumberWith4KetaKanji,
  isStringifiedNonNegativeIntegerOfRegularNotation,
  separateEach3DigitsGroupWithComma,
  separateEach4DigitsGroupWithComma,

  /* --- Pagination ------------------------------------------------------------------------------------------------- */
  computeFirstItemNumberForSpecificPaginationPage,
  computeLastItemNumberForSpecificPaginationPage,


  /* === Sets ======================================================================================================= */
  addMultipleElementsToSet,


  /* === Maps ======================================================================================================= */
  addMultiplePairsToMap,
  createMapBasedOnOtherMap,
  filterMap,


  /* === Type guards ================================================================================================ */
  /* --- Numbers ---------------------------------------------------------------------------------------------------- */
  isDecimalFractionOfAnySign,
  isNaturalNumber,
  isNegativeDecimalFraction,
  isNegativeInteger,
  isNegativeIntegerOrZero,
  isNonNegativeInteger,
  isNumber,
  isPositiveDecimalFraction,

  /* --- Strings ---------------------------------------------------------------------------------------------------- */
  isEmptyString,
  isNonEmptyString,
  isString,
  isStringOfLength,
  IsStringOfLengthCheckingOperation,

  /* --- Objects ---------------------------------------------------------------------------------------------------- */
  isEmptyObject,
  isNonEmptyObject,
  isNonNullObject,

  /* --- Arrays ----------------------------------------------------------------------------------------------------- */
  isArrayOfCertainTypeElements,
  isArrayOfLength,
  IsArrayOfLengthCheckingOperation,
  isEmptyArray,
  isNonEmptyArray,

  /* --- undefined/null --------------------------------------------------------------------------------------------- */
  isNeitherUndefinedNorNull,
  isNotNull,
  isNotUndefined,
  isNull,
  isUndefined,

  /* --- Others ----------------------------------------------------------------------------------------------------- */
  isBoolean,
  isElementOfEnumeration,
  isFunctionLike,


  /* === Date & Time ================================================================================================ */
  millisecondsToSeconds,
  secondsToMilliseconds,
  Timer,


  /* === Value transformers ========================================================================================= */
  emptyStringToNull,
  nullToUndefined,
  nullToZero,
  undefinedToEmptyArray,
  undefinedToEmptyString,
  undefinedToNull,


  /* === Default value substituters ================================================================================= */
  substituteWhenNull,
  substituteWhenUndefined
};


export {
  /* === Random values generators =================================================================================== */
  getRandomArrayElement,
  getRandomBoolean,
  getRandomInteger,
  getRandomLatinSymbol,
  getRandomObjectPropertyValue,
  getSpecificBooleanValueWithProbability,

  /* === Constants and enumerations ================================================================================= */
  HTTP_StatusCodes,
  HTTP_Methods
} from "./Source";


export type {
  /* === Types ====================================================================================================== */
  ParsedJSON,
  ParsedJSON_Object,
  ParsedJSON_Array,
  ParsedJSON_NestedProperty
};
