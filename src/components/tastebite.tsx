const Tastebite = () => {
    return ( 
        <div>
            <p className="recipes-topic mb-5">Why tastebite</p>
            <div className="space-y-12">
                <div className="flex flex-col md:justify-between md:flex-row items-center">
                    <div className="md:w-80 mx-auto lg:mx-8">
                        <p className="recipes">Discover new recipes and save your favorites.</p>
                        <p className="mt-3">Taste Bite let's you pin your favorite recipes from around the web into an easy to use Web app.</p>
                    </div>
                    <div className="box bg-butter">
                        <img src='/images/why_tastebite_img_1.f1f373dcea14f2079998.png' alt="bbq" />
                    </div>
                </div>

                <div className="flex flex-col md:justify-between md:flex-row-reverse items-center">
                    <div className="md:w-80 mx-auto lg:mx-8">
                        <p className="recipes">Create your own recipe book!</p>
                        <p className="mt-3">Taste Bite helps you to prepare delicious meals. There are also categories of healthy cuisine, vegetarian recipes or desserts on our platform.</p>
                    </div>
                    <div className="box bg-carrot">
                        <img src="/images/why_tastebite_img_2.32e4bc17bee2870e13e2.png" alt="kebab" />
                    </div>
                </div>
                
                <div className="flex flex-col md:justify-between md:flex-row items-center">
                    <div className="md:w-80 mx-auto lg:mx-8">
                        <p className="recipes">Share Your Recipes with the World</p>
                        <p className="mt-3">Discover new recipes with the help of other users and social networks, and share them with friends.</p>
                    </div>
                    <div className="box bg-butter">
                        <img src="/images/why_tastebite_img_3.ecfe8fe942c3b4925328.png" alt="chicken" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Tastebite;