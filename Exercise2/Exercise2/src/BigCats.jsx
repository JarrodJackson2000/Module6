/* Create a BigCats component, in its own file, which uses
the cats array (below) to display a styled list of cats.
• Include a unique id and fix the warning about keys
• Create a SingleCat component for rendering each
individual cat, and add an image property for each one. */

import SingleCats from "./SingleCats";

const addImageUrls = (cats) => {
  const imageUrls = {
    Cheetah:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wmHKHAwcv8Z_2ag5ieE-W2qrh_KC_y6KAg&s",
    Cougar:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg",
    Jaguar:
      "https://cdn.britannica.com/09/143609-050-826EA62F/Jaguar-stream-Brazil.jpg",
    Leopard:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/800px-African_leopard_male_%28cropped%29.jpg",
    Lion: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
    "Snow leopard":
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/1200px-Irbis4.JPG",
    Tiger:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1200px-Walking_tiger_female.jpg",
  };
  return cats.map((cat) => ({
    ...cat,
    imageUrl: imageUrls[cat.name],
  }));
};

function BigCats() {
  const cats = [
    { name: "Cheetah", latinName: "Acinonyx jubatus", id: 1 },
    { name: "Cougar", latinName: "Puma concolor", id: 2 },
    { name: "Jaguar", latinName: "Panthera onca", id: 3 },
    { name: "Leopard", latinName: "Panthera pardus", id: 4 },
    { name: "Lion", latinName: "Panthera leo", id: 5 },
    { name: "Snow leopard", latinName: "Panthera uncia", id: 6 },
    { name: "Tiger", latinName: "Panthera tigris", id: 7 },
  ];

  const catsWithImages = addImageUrls(cats);

  return (
    <div className="BigCats componentBox">
      <ul>
        {catsWithImages.map((cat) => (
          <SingleCats
            key={cat.id}
            prop1={cat.name}
            prop2={cat.latinName}
            imageUrl={cat.imageUrl}
          />
        ))}
      </ul>
    </div>
  );
}

export default BigCats;
