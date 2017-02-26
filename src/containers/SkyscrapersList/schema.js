export const getQuery = (searchTxt) => `{
  skyscraper(s: "title|body*=${searchTxt}"){
    getTotal
    getLimit
    getStart
    list{
      id
      title
      height
      floors
      year
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