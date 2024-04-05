// import React, { useState } from "react";
// import axios from "axios";

// export default function UrlInputPage() {
//   const [url, setUrl] = useState("");
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       //   const res = await axios.post(
//       //     "/api/proxy?url=http://tunica.zapto.org:5001/scrape-website",
//       //     {
//       //       url: url,
//       //     },
//       //     {}
//       //   );
//       let data = `" | Recipe Title                          | Submitted By    | Updated On          | Tested By                | Description                                                        | Prep Time (mins) | Cook Time (mins) | Total Time (mins) | Servings |\n|---------------------------------------|------------------|---------------------|--------------------------|-----------------------------|--------------------|---------------|--------------|-----------|\n| Classic Macaroni Salad                | Graden           | February 28, 2024   | Allrecipes Test Kitchen   | This macaroni salad always gets lots of compliments. It's an easy recipe to make and has a pleasing taste that everyone seems to love! | 20              | 10            | 400           | 10         |",
//       " | Category          | Details                                                         |\n| ------------------ | --------------------------------------------------------------- |\n| Dish Name          | Macaroni Salad                                                   |\n| Description       | Easy to make and perfect for picnics or potlucks                |\n| Instructions      | Detailed ingredient list and steps provided in the recipe below   |\n| Ingredients        | [{\"name\": \"Macaroni\"}, {\"name\": \"Mayonnaise\"}, {\"name\": \"Yellow mustard\"}, {\"name\": \"White sugar\"}, {\"name\": \"Vinegar\"}] |",
//       " | Step                           | Instructions                                                                                                    |\n|----------------------------------|---------------------------------------------------------------------------------------------------------------|\n| Prepare the Dressing            | Combine mayonnaise, sugar, vinegar, mustard, and seasonings (salt and ground black pepper) together.              |\n| Chop Vegetables                  | Celery, onion, bell pepper, grated carrots, pimento peppers.                                                    |\n| Cook Macaroni                    | Unspecified.                                                                                               |\n| Combine Ingredients             | Stir in the macaroni and remaining ingredients (dressing, vegetables)                                          |\n| Chill                            | Chill in the refrigerator.                                                                                  |\n| Make-Ahead Time                 | It might actually be better to make it a day or two in advance.                                             |\n| Storage Duration                | This homemade macaroni salad can be stored in an airtight container in the refrigerator for unspecified duration.|",
//       " | Recipe Title                             | Community Reviews                                                                                                                     |\n|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|\n| Fantastic Pasta Salad                      | - Sue Newman: \"This recipe is fantastic, I tasted it when I finished mixing. WOW, can't wait for it to get cold. I did make a couple of changes: I used celery salt instead of just salt and left the green pepper and pimento out.\"<br>- Anonymous: \"Great flavor. I used cellentani pasta and only ⅓ cup sugar. Also used some garlic powder and did not add onions.\" |",
//       " | Reviewer Name | Review |\n| --- | --- |\n| Anonymous | This is a great pasta salad. It's perfect for BBQs, just make sure not to use bell pepper or pimento. |\n| Rebecca Timbers | This is a fantastic pasta salad. The only drawback is that now I am required to bring a big bowl to every family gathering no matter the season or holiday! |\n\n| Ingredients | Quantity |\n| --- | --- |\n| Elbow Macaroni | 4 |\n| Mayonnaise | 1 |\n| Sugar | ⅔ |\n| Distilled White Vinegar | ¼ |\n| Prepared Yellow Mustard | 2 ½ |\n| Salt | 1 ½ |",
//       " | Key              | Value                                                                                                                     |\n|------------------|-------------------------------------------------------------------------------------------------------------------------|\n| ingredients       | [\"nd black pepper\", \"2 stalks celery, chopped\", \"1 large onion, chopped\", \"1 green bell pepper, seeded and chopped\", \"< quarter cup grated carrot (Optional)\", \"2 tablespoons chopped pimento peppers (Optional)\"] |\n| ground_paprika   | ½                                                                                                                      |\n| instructions     | [\"Gather all ingredients.\", \"Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally, until tender yet firm to the bite.\"] |",
//       " | Step Number | Instruction | Image Description |\n| --- | --- | --- |\n| 1 | Bite a cooked macaroni piece, it takes about 8 minutes. Rinse under cold water and drain. | N/A |\n| 2 | Cook macaroni according to package instructions, then cool. | N/A |\n| 3 | Mix mayonnaise, sugar, vinegar, mustard, salt, pepper, and macaroni together in a large bowl. | N/A |\n| 4 | Stir in celery, onion, green pepper, carrot, and pimentos. | Overhead of macaroni salad being stirred in a bowl. |\n| 5 | Refrigerate salad for at least 4 hours before serving. | N/A |",
//       " | Category          | Value                                                | Percentage of Daily Value |\n|-------------------|------------------------------------------------------|----------------------------|\n| Dish Name         | Classic Macaroni Salad                              | N/A                       |\n| Calories          | 390                                                | N/A                       |\n| Fat               | 19g                                                | 24%                      |\n| Carbohydrates      | 49g                                                | N/A                       |\n| Protein           | 7g                                                 | 14% (Saturated Fat)        |\n| Saturated Fat     | 3g                                                 | 14%                      |",
//       " | Nutrient          | Amount | Percentage of Daily Value |\n|--------------------|--------|---------------------------|\n| Cholesterol        | 8      | 3%                       |\n| Sodium             | 529    | 23%                      |\n| Total Carbohydrate  | 49     | 18%                      |\n| Dietary Fiber      | 3      | 10%                      |\n| Total Sugars       | 16     | -                        |\n| Protein            | 7      | 14%                      |\n| Vitamin C          | 13     | 15%                      |\n| Calcium            | 21     | -                        |",
//       " | Nutrient       | Amount  | Percentage of Daily Value | Photographer          | Sequence |\n|----------------|----------|---------------------------|------------------------|----------|\n| Calcium        | 2% of DV | 2%                         | DOTDASH MEREDITH FOOD STUDIOS | 01       |\n| Iron           | 2        | 9%                          | hbcharley             | 02       |\n| Potassium      | 134     | 3%                         | Windsleigher          | 03       |\n|                |          |                           | Greg Tansy            | 04       |\n|                |          |                           | Rochelle Matsel Simon   | 05       |",
//       " | Sequence | Photographer |\n| --- | --- |\n| 05 | - |\n| 06 | soapscrubs |\n| 07 | abrunette2nv |\n| 08 | MEANDGOD |\n| 09 | Allrecipes Member |\n| 10 | Chandra Robbins |",
//       " | Key           | Value                  |\n|---------------|------------------------|\n| id            | \"4000\"                |\n| height        | \"3000\"                |\n| image_description | \"an overhead, close up view of a large bowl of classic macaroni salad\" |"
//   ]
//   has context menu`;
//       setResponse(data);
//     } catch (error) {
//       setError(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <h1 className="text-4xl font-bold mb-8">URL Input Page</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
//       >
//         <label className="block mb-4">
//           URL:
//           <input
//             type="text"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             className="block w-full border border-gray-300 rounded px-3 py-2 mt-1"
//           />
//         </label>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Send URL
//         </button>
//       </form>
//       {response && (
//         <div className="mt-8 w-full max-w-lg bg-white p-8 rounded-lg shadow-lg overflow-x-auto">
//           <h2 className="text-2xl font-bold mb-4">Response:</h2>
//           <table className="table-auto w-full">
//             <thead>
//               <tr>
//                 {Object.keys(response[0]).map((key) => (
//                   <th key={key} className="border px-4 py-2">
//                     {key}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {response.map((row, index) => (
//                 <tr key={index}>
//                   {Object.values(row).map((value, idx) => (
//                     <td key={idx} className="border px-4 py-2">
//                       {value}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//       {error && <p className="text-red-500 mt-8">Error: {error.message}</p>}
//     </div>
//   );
// }

import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function UrlInputPage() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/proxy?url=http://tunica.zapto.org:5001/scrape-website",
        {
          url: url,
        },
        {}
      );
      //   let data = `" | Recipe Title                          | Submitted By    | Updated On          | Tested By                | Description                                                        | Prep Time (mins) | Cook Time (mins) | Total Time (mins) | Servings |\n|---------------------------------------|------------------|---------------------|--------------------------|-----------------------------|--------------------|---------------|--------------|-----------|\n| Classic Macaroni Salad                | Graden           | February 28, 2024   | Allrecipes Test Kitchen   | This macaroni salad always gets lots of compliments. It's an easy recipe to make and has a pleasing taste that everyone seems to love! | 20              | 10            | 400           | 10         |",
      //         " | Category          | Details                                                         |\n| ------------------ | --------------------------------------------------------------- |\n| Dish Name          | Macaroni Salad                                                   |\n| Description       | Easy to make and perfect for picnics or potlucks                |\n| Instructions      | Detailed ingredient list and steps provided in the recipe below   |\n| Ingredients        | [{\"name\": \"Macaroni\"}, {\"name\": \"Mayonnaise\"}, {\"name\": \"Yellow mustard\"}, {\"name\": \"White sugar\"}, {\"name\": \"Vinegar\"}] |",
      //         " | Step                           | Instructions                                                                                                    |\n|----------------------------------|---------------------------------------------------------------------------------------------------------------|\n| Prepare the Dressing            | Combine mayonnaise, sugar, vinegar, mustard, and seasonings (salt and ground black pepper) together.              |\n| Chop Vegetables                  | Celery, onion, bell pepper, grated carrots, pimento peppers.                                                    |\n| Cook Macaroni                    | Unspecified.                                                                                               |\n| Combine Ingredients             | Stir in the macaroni and remaining ingredients (dressing, vegetables)                                          |\n| Chill                            | Chill in the refrigerator.                                                                                  |\n| Make-Ahead Time                 | It might actually be better to make it a day or two in advance.                                             |\n| Storage Duration                | This homemade macaroni salad can be stored in an airtight container in the refrigerator for unspecified duration.|",
      //         " | Recipe Title                             | Community Reviews                                                                                                                     |\n|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|\n| Fantastic Pasta Salad                      | - Sue Newman: \"This recipe is fantastic, I tasted it when I finished mixing. WOW, can't wait for it to get cold. I did make a couple of changes: I used celery salt instead of just salt and left the green pepper and pimento out.\"<br>- Anonymous: \"Great flavor. I used cellentani pasta and only ⅓ cup sugar. Also used some garlic powder and did not add onions.\" |",
      //         " | Reviewer Name | Review |\n| --- | --- |\n| Anonymous | This is a great pasta salad. It's perfect for BBQs, just make sure not to use bell pepper or pimento. |\n| Rebecca Timbers | This is a fantastic pasta salad. The only drawback is that now I am required to bring a big bowl to every family gathering no matter the season or holiday! |\n\n| Ingredients | Quantity |\n| --- | --- |\n| Elbow Macaroni | 4 |\n| Mayonnaise | 1 |\n| Sugar | ⅔ |\n| Distilled White Vinegar | ¼ |\n| Prepared Yellow Mustard | 2 ½ |\n| Salt | 1 ½ |",
      //         " | Key              | Value                                                                                                                     |\n|------------------|-------------------------------------------------------------------------------------------------------------------------|\n| ingredients       | [\"nd black pepper\", \"2 stalks celery, chopped\", \"1 large onion, chopped\", \"1 green bell pepper, seeded and chopped\", \"< quarter cup grated carrot (Optional)\", \"2 tablespoons chopped pimento peppers (Optional)\"] |\n| ground_paprika   | ½                                                                                                                      |\n| instructions     | [\"Gather all ingredients.\", \"Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally, until tender yet firm to the bite.\"] |",
      //         " | Step Number | Instruction | Image Description |\n| --- | --- | --- |\n| 1 | Bite a cooked macaroni piece, it takes about 8 minutes. Rinse under cold water and drain. | N/A |\n| 2 | Cook macaroni according to package instructions, then cool. | N/A |\n| 3 | Mix mayonnaise, sugar, vinegar, mustard, salt, pepper, and macaroni together in a large bowl. | N/A |\n| 4 | Stir in celery, onion, green pepper, carrot, and pimentos. | Overhead of macaroni salad being stirred in a bowl. |\n| 5 | Refrigerate salad for at least 4 hours before serving. | N/A |",
      //         " | Category          | Value                                                | Percentage of Daily Value |\n|-------------------|------------------------------------------------------|----------------------------|\n| Dish Name         | Classic Macaroni Salad                              | N/A                       |\n| Calories          | 390                                                | N/A                       |\n| Fat               | 19g                                                | 24%                      |\n| Carbohydrates      | 49g                                                | N/A                       |\n| Protein           | 7g                                                 | 14% (Saturated Fat)        |\n| Saturated Fat     | 3g                                                 | 14%                      |",
      //         " | Nutrient          | Amount | Percentage of Daily Value |\n|--------------------|--------|---------------------------|\n| Cholesterol        | 8      | 3%                       |\n| Sodium             | 529    | 23%                      |\n| Total Carbohydrate  | 49     | 18%                      |\n| Dietary Fiber      | 3      | 10%                      |\n| Total Sugars       | 16     | -                        |\n| Protein            | 7      | 14%                      |\n| Vitamin C          | 13     | 15%                      |\n| Calcium            | 21     | -                        |",
      //         " | Nutrient       | Amount  | Percentage of Daily Value | Photographer          | Sequence |\n|----------------|----------|---------------------------|------------------------|----------|\n| Calcium        | 2% of DV | 2%                         | DOTDASH MEREDITH FOOD STUDIOS | 01       |\n| Iron           | 2        | 9%                          | hbcharley             | 02       |\n| Potassium      | 134     | 3%                         | Windsleigher          | 03       |\n|                |          |                           | Greg Tansy            | 04       |\n|                |          |                           | Rochelle Matsel Simon   | 05       |",
      //         " | Sequence | Photographer |\n| --- | --- |\n| 05 | - |\n| 06 | soapscrubs |\n| 07 | abrunette2nv |\n| 08 | MEANDGOD |\n| 09 | Allrecipes Member |\n| 10 | Chandra Robbins |",
      //         " | Key           | Value                  |\n|---------------|------------------------|\n| id            | \"4000\"                |\n| height        | \"3000\"                |\n| image_description | \"an overhead, close up view of a large bowl of classic macaroni salad\" |"
      //    `;

      setResponse(response?.data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">URL Input Page</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
      >
        <label className="block mb-4">
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="block w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send URL
        </button>
      </form>
      {response && (
        <div className="mt-8 w-full max-w-5xl bg-white p-8 rounded-lg shadow-md overflow-x-auto prose lg:prose-xl">
          <h2 className="text-2xl font-bold mb-4">Response:</h2>
          <Markdown remarkPlugins={[remarkGfm]}>{response}</Markdown>
        </div>
      )}
      {error && <p className="text-red-500 mt-8">Error: {error.message}</p>}
    </div>
  );
}
