require("../models/database");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

/*

* Get /
* Homepage


*/

exports.homepage = async (req, res) => {
  try {
    const limitnumber = 3;
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitnumber);
    const categories = await Category.find({}).limit(limitnumber);
    const thai = await Recipe.find({ category: "Thai" }).limit(limitnumber);
    const american = await Recipe.find({ category: "American" }).limit(
      limitnumber
    );
    const chinese = await Recipe.find({ category: "Chinese" }).limit(
      limitnumber
    );

    const food = { latest, thai, american, chinese };

    res.render("index", { title: "Cooking Blog-Home", categories, food });
  } catch (error) {
    res.status(500).send({ message: error.message || "error occured" });
  }
};

/*

* Get / categories
*Categories


*/

exports.exploreCategories = async (req, res) => {
  try {
    const limitnumber = 20;
    const categories = await Category.find({}).limit(limitnumber);

    res.render("categories", { title: "Cooking Blog-Categories", categories });
  } catch (error) {
    res.status(500).send({ message: error.message || "error occured" });
  }
};

/*

    * Get / recipe/:id
    *Recipe
    
    
    */
    exports.exploreRecipe = async(req, res) => {
        try {
          let recipeId = req.params.id;
          const recipe = await Recipe.findById(recipeId);
          res.render('recipe', { title: 'Cooking Blog - Recipe', recipe } );
        } catch (error) {
          res.satus(500).send({message: error.message || "Error Occured" });
        }
      } 

// async function insertDummyRecipeData(){

// try {
//     await Recipe.insertMany(

//         [
//             {
//                 "name" : "Recipe name",
//                 "description" : "The earliest known written recipes date to 1730 BC and were recorded on cuneiform tablets found in Mesopotamia.[1] Other early written recipes date from approximately 1600 BC and come from an Akkadian tablet from southern Babylonia.[2] There are also works in ancient Egyptian hieroglyphs depicting the preparation of food.[3]",
//                 "source": "https://en.wikipedia.org/wiki/Main_Page",
//                 "email": "hello@gmail.com",
//                 "ingredients": [
//                     "1",
//                     "2",
//                     "3",
//                     "4",
//                     "5",
//                 ],
//                 "category": "Indian",
//                 "image": "https://purewows3.imgix.net/images/articles/2021_12/traditional-chinese-food-CAT.jpg?auto=format,compress&cs=strip"
//             },

//             {
//                 "name" : "Recipe name",
//                 "description" : "The earliest known written recipes date to 1730 BC and were recorded on cuneiform tablets found in Mesopotamia.[1] Other early written recipes date from approximately 1600 BC and come from an Akkadian tablet from southern Babylonia.[2] There are also works in ancient Egyptian hieroglyphs depicting the preparation of food.[3]",
//                 "source": "https://en.wikipedia.org/wiki/Main_Page",
//                 "email": "hello@gmail.com",
//                 "ingredients": [
//                     "1",
//                     "2",
//                     "3",
//                     "4",
//                     "5",
//                 ],
//                 "category": "American",
//                 "image": "https://purewows3.imgix.net/images/articles/2021_12/traditional-chinese-food-CAT.jpg?auto=format,compress&cs=strip"
//             },

//             ]
//     );
// } catch (error) {
//     console.log('err'+ error)
// }

// }
// insertDummyRecipeData();

// 1:34:00

// async function insertDummyCategoryData(){

// try {
//     await Category.insertMany(

//         [
//             {
//                 "name" : "American",
//                 "image" : "american-food.jpg"
//             },

//             {
//                 "name" : "Thai",
//                 "image" : "thai-food.jpg"
//             },

//             {
//                 "name" : "China",
//                 "image" : "Chinese-food.jpg"
//             },

//             ]
//     );
// } catch (error) {
//     console.log('err'+ error)
// }

// }
// insertDummyCategoryData();
