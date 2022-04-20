import { ClassRedundantSubsequentInitializationError } from "@yamato-daiwa/es-extensions";


const ClassRedundantSubsequentInitializationErrorLocalizationRussian:
    ClassRedundantSubsequentInitializationError.Localization =
{
  defaultTitle: "Ненужная повторная инициализация класса",
  generateDescription:
    (namedParameters: ClassRedundantSubsequentInitializationError.Localization.GenericDescriptionPartTemplateParameters): string =>
        `Класс '${namedParameters.className}' должен быть инициализирован только один раз.`
};


export default ClassRedundantSubsequentInitializationErrorLocalizationRussian;
