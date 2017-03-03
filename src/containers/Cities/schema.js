const query = `query cities($selector: Selector){
  city(s: $selector){
    getTotal
    getLimit
    getStart
    list{
      id
      title
      map{
        lat
        lng
      }
    }
  }
}`;

export const getQuery = () => query;