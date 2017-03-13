const query = `query skyscrapers($selector: Selector){
  skyscraper(s: $selector){
    listTotal: getTotal,
    listLimit: getLimit,
    listStart: getStart,
    list{
      id,
      title,
      height,
      floors,
      year,
      parentID,
      wikipedia_id
      map{
        lat,
        lng
      },
      architects{
       	list{
          title,
          id
        }
      }
    }
  }
}`;

export const getQuery = () => query;

export default query;