const Star = ({stars}:{stars:number}) => {

    const countStars = () => {
        const starElements = [];
        let countEmpty = 5 - stars;

        for (let index = 0; index < stars; index++){ 
            starElements.push(
                <img className="object-cover size-5" src="/images/Star.png" key={index} alt={`star${index}`} />
            ); 
        }
        if (countEmpty!==0){
            for (let i = 0; i < countEmpty; i++){ 
                starElements.push(
                    <img src="/vectors/emptyStar.svg" className="size-5" key={i+5} alt={`empty${i}`} />
                );
            }   
        }

        return starElements; 
    }; 
    
    return ( <div className="flex gap-1"> {countStars()} </div> );

}
 
export default Star;