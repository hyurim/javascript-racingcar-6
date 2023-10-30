import TRY_ERROR_MESSAGE from "../../Constants/tryErrorMessage.js";
import SYMBOLS from "../../Constants/symbols.js";

class TryValid {
  // 시도 횟 수 유효값 검증
  tryIsValid(number) {
    if (Number.isNaN(Number(number))) {
      throw new Error(`${TRY_ERROR_MESSAGE.stringError}`);
    }
    if (number === SYMBOLS.space || number === SYMBOLS.emptyString) {
      throw new Error(`${TRY_ERROR_MESSAGE.onlySpaceError}`);
    }
    if (number.includes(SYMBOLS.dot)) {
      throw new Error(`${TRY_ERROR_MESSAGE.pointError}`);
    }
    if (number.includes(SYMBOLS.space)) {
      throw new Error(`${TRY_ERROR_MESSAGE.spaceError}`);
    }
    if (number < 1) {
      throw new Error(`${TRY_ERROR_MESSAGE.oneAboveError}`);
    }
  }
}

export default TryValid;