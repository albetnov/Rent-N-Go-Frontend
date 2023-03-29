export default class HaveOrder extends Error {
  constructor() {
    super('Ups, you already have an order!')
  }
}
