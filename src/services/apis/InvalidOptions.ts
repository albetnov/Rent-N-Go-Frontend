export default class InvalidOptions<T> extends Error {
  constructor(type: string, value: T) {
    super(
      `Invalid Argument Exception: tourId is required and expected to be ${type}! ${value} given!`
    )
  }
}
