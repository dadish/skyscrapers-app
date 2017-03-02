const query = `query skyscrapers($selector: Selector){
  skyscraper(s: $selector){
    getTotal
    getLimit
    getStart
    list{
      id
      title
      height
      floors
      year
      parentID
      map{
        lat
        lng
      }
      architects{
       	list{
          title
          id
        } 
      }
    }
  }
}`;

export const getQuery = () => query;

export default query;