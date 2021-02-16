const { RESTDataSource } = require("apollo-datasource-rest");
class Coindata extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.coinlore.net/api/tickers/";
  }
  async getResult(id = "all") {
    const results = await this.get(`/?id=${id}`);
    return results.data[0];
  }
  async getResults(people = 3, id = "all") {
    const results = await this.get(`/?data=${people}&id=${id}`);
    return results.data;
  }
}
module.exports = Coindata;