export default interface RecipesType {
    id:number
    title:string,
    country:string,
    rating:number,
    people_served:number,
    ingredients:string[],
    procedure:string[],
    category:string,
    cooking_time:string,
    image_url:"https://picsum.photos/200/300",
    video_link:"https://picsum.photos/200/300",
    user_id:number,
    user:string
}
