async function getCategories() {
  const apiResponse = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  );
  const data = apiResponse.json();
  return data;
  //   try {
  //     const apiResponse = await fetch({
  //       url: "http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const categories = await apiResponse.json();
  //     return categories;
  //   } catch (error) {
  //     console.log("Errpor: " + error);
  //   }
}

getCategories().then((data) => console.log(data));
