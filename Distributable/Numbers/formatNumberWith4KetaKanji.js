"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseString_1 = require("../Strings/reverseString");
const isUndefined_1 = require("../TypeGuards/Nullables/isUndefined");
function formatNumberWith4KetaKanji(targetNumber) {
    const NUMBER_DIGITS_SEPARATION__SYMBOLS_COUNT = 4;
    let targetNumber__stringified = targetNumber.toString();
    const isNegative = targetNumber__stringified.startsWith("-");
    const decimalPart__stringified = targetNumber__stringified.split(".")[1];
    if (targetNumber__stringified.length < NUMBER_DIGITS_SEPARATION__SYMBOLS_COUNT + 1) {
        return targetNumber__stringified;
    }
    if (isNegative) {
        targetNumber__stringified = targetNumber__stringified.substring(1);
    }
    if (!isUndefined_1.default(decimalPart__stringified)) {
        targetNumber__stringified = targetNumber__stringified.replace(`.${decimalPart__stringified}`, "");
    }
    const targetNumber__reversed = reverseString_1.default(targetNumber__stringified);
    const MANS_FIRST_DIGITS_NUMBER__BEGINNING_FROM_0 = NUMBER_DIGITS_SEPARATION__SYMBOLS_COUNT;
    const OKUS_FIRST_DIGITS_NUMBER__BEGINNING_FROM_0 = MANS_FIRST_DIGITS_NUMBER__BEGINNING_FROM_0 + NUMBER_DIGITS_SEPARATION__SYMBOLS_COUNT;
    const TYOUS_FIRST_DIGITS_NUMBER__BEGINNING_FROM_0 = OKUS_FIRST_DIGITS_NUMBER__BEGINNING_FROM_0 + NUMBER_DIGITS_SEPARATION__SYMBOLS_COUNT;
    const KEIS_FIRST_DIGITS_NUMBER__BEGINNING_FROM_0 = TYOUS_FIRST_DIGITS_NUMBER__BEGINNING_FROM_0 + NUMBER_DIGITS_SEPARATION__SYMBOLS_COUNT;
    const REMAIN_DIGITS_START_POSITION__BEGINNING_FROM_0 = KEIS_FIRST_DIGITS_NUMBER__BEGINNING_FROM_0 + NUMBER_DIGITS_SEPARATION__SYMBOLS_COUNT;
    const lastFourDigits = reverseString_1.default(targetNumber__reversed.substr(0, NUMBER_DIGITS_SEPARATION__SYMBOLS_COUNT));
    const mans__japaneseCalculus = reverseString_1.default(targetNumber__reversed.
        substr(MANS_FIRST_DIGITS_NUMBER__BEGINNING_FROM_0, NUMBER_DIGITS_SEPARATION__SYMBOLS_COUNT));
    const okus__japaneseCalculus = reverseString_1.default(targetNumber__reversed.
        substr(OKUS_FIRST_DIGITS_NUMBER__BEGINNING_FROM_0, NUMBER_DIGITS_SEPARATION__SYMBOLS_COUNT));
    const tyous__japaneseCalculus = reverseString_1.default(targetNumber__reversed.
        substr(TYOUS_FIRST_DIGITS_NUMBER__BEGINNING_FROM_0, NUMBER_DIGITS_SEPARATION__SYMBOLS_COUNT));
    const keis__japaneseCalculus = reverseString_1.default(targetNumber__reversed.
        substr(KEIS_FIRST_DIGITS_NUMBER__BEGINNING_FROM_0, NUMBER_DIGITS_SEPARATION__SYMBOLS_COUNT));
    const remainDigits = reverseString_1.default(targetNumber__reversed.
        substr(REMAIN_DIGITS_START_POSITION__BEGINNING_FROM_0));
    return `${isNegative ? "-" : ""}` +
        `${remainDigits.length > 0 ? `${remainDigits}` : ""}` +
        `${keis__japaneseCalculus.length > 0 ? `${keis__japaneseCalculus}京` : ""}` +
        `${tyous__japaneseCalculus.length > 0 ? `${tyous__japaneseCalculus}兆` : ""}` +
        `${okus__japaneseCalculus.length > 0 ? `${okus__japaneseCalculus}億` : ""}` +
        `${mans__japaneseCalculus.length > 0 ? `${mans__japaneseCalculus}万` : ""}` +
        `${lastFourDigits}` +
        `${isUndefined_1.default(decimalPart__stringified) ? "" : `.${decimalPart__stringified}`}`;
}
exports.default = formatNumberWith4KetaKanji;
