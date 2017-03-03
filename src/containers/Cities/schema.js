const query = `query cities($selector: Selector){
  city(s: $selector){
    getTotal
    getLimit
    getStart
    list{
      id
      title
      skyscrapersCount: numChildren
      map{
        lat
        lng
      }
    }
  }
}`;

export const getQuery = () => query;