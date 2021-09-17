const cardsInformation = [
  {
    recipe_name: "Grandma's Rice, Beans and Pork Chops.",
    recipe_source: "Grandma",
    category: "Dinner",
    description: "This my grandma's old recipe past down to her from her Mom and now to me.",
    ingredients: "Rice, beans and pork.",
    instructions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    recipe_name: "Awesome Toast",
    recipe_source: "Shariq",
    category: "Breakfast",
    description: "The recipe of gods, having been passed down from a number of generations your fingers cannot count!",
    ingredients: "Lorem ipsum dolor sit amet",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat mi enim, id aliquam quam pharetra at. Ut sapien elit, luctus nec cursus in, semper eu ligula. Quisque fermentum porta suscipit. Quisque pulvinar condimentum maximus. Suspendisse sed sodales est. Vestibulum ullamcorper magna lectus, a euismod orci scelerisque tempus. Curabitur a tincidunt mi. Mauris tincidunt a diam et efficitur. Integer sed neque augue. Phasellus congue id ex sed sollicitudin.",
  },
  {
    recipe_name: "Aenean tincidunt gravida egestas",
    recipe_source: "Anean",
    category: "Snacks",
    description: "Suspendisse at lorem et neque laoreet tincidunt. Curabitur tincidunt eu urna placerat tincidunt. Ut aliquet urna ut elit lobortis molestie.",
    ingredients: "Nam ut lectus sodales, mattis neque eget, iaculis magna.",
    instructions: "Sed a erat ut metus eleifend congue quis quis risus. Nunc metus est, lacinia id porta eget, facilisis in arcu.",
  },
  {
    recipe_name: "Lorem ipsum dolor sit amet consectetur",
    recipe_source: "Odit",
    category: "Dessert",
    description: "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?",
    ingredients: "Rice, beans and pork.",
    instructions: "Etiam fermentum est quis bibendum sollicitudin. Praesent in tellus libero. Duis tincidunt dolor ac commodo tincidunt. Donec ornare nec tortor maximus fermentum. Fusce nec porttitor sapien.",
  },
  {
    recipe_name: "Etiam et efficitur erat",
    recipe_source: "Etiam",
    category: "Lunch",
    description: "Donec sed tellus vitae turpis hendrerit aliquam. Proin fermentum ullamcorper efficitur. Aenean semper fringilla orci non ullamcorper.",
    ingredients: "Lorem ipsum dolor sit amet",
    instructions:
      "Mauris eu bibendum justo. In interdum massa nec laoreet blandit. Duis scelerisque semper lectus, quis vestibulum ligula. Suspendisse volutpat fermentum purus in feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus nec consectetur enim.",
  },
  {
    recipe_name: "Pellentesque",
    recipe_source: "Convallis",
    category: "Dessert",
    description: "Maecenas et consectetur ex. Proin eget urna id erat porttitor congue. Ut sit amet risus molestie, bibendum erat vel, luctus ligula. Nulla facilisi.",
    ingredients: "Vivamus ornare arcu nisl, in sollicitudin dolor lacinia ut. Mauris suscipit ut ex id elementum. Fusce auctor cursus felis, quis consequat ante eleifend luctus.",
    instructions:
      "Sed sit amet leo laoreet, aliquam nisi eget, lobortis massa. Pellentesque sed finibus libero. Nam maximus eleifend est eget porttitor. Cras vulputate lacus eget tincidunt vulputate. Nam gravida convallis neque sit amet tempus. Integer malesuada lectus vel arcu ultricies semper.",
  },
  {
    recipe_name: "Grandma's Rice, Beans and Pork Chops.",
    recipe_source: "Grandma",
    category: "Dinner",
    description: "This my grandma's old recipe past down to her from her Mom and now to me.",
    ingredients: "Rice, beans and pork.",
    instructions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    recipe_name: "Awesome Toast",
    recipe_source: "Shariq",
    category: "Breakfast",
    description: "The recipe of gods, having been passed down from a number of generations your fingers cannot count!",
    ingredients: "Lorem ipsum dolor sit amet",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat mi enim, id aliquam quam pharetra at. Ut sapien elit, luctus nec cursus in, semper eu ligula. Quisque fermentum porta suscipit. Quisque pulvinar condimentum maximus. Suspendisse sed sodales est. Vestibulum ullamcorper magna lectus, a euismod orci scelerisque tempus. Curabitur a tincidunt mi. Mauris tincidunt a diam et efficitur. Integer sed neque augue. Phasellus congue id ex sed sollicitudin.",
  },
  {
    recipe_name: "Aenean tincidunt gravida egestas",
    recipe_source: "Anean",
    category: "Snacks",
    description: "Suspendisse at lorem et neque laoreet tincidunt. Curabitur tincidunt eu urna placerat tincidunt. Ut aliquet urna ut elit lobortis molestie.",
    ingredients: "Nam ut lectus sodales, mattis neque eget, iaculis magna.",
    instructions: "Sed a erat ut metus eleifend congue quis quis risus. Nunc metus est, lacinia id porta eget, facilisis in arcu.",
  },
  {
    recipe_name: "Lorem ipsum dolor sit amet consectetur",
    recipe_source: "Odit",
    category: "Dessert",
    description: "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?",
    ingredients: "Rice, beans and pork.",
    instructions: "Etiam fermentum est quis bibendum sollicitudin. Praesent in tellus libero. Duis tincidunt dolor ac commodo tincidunt. Donec ornare nec tortor maximus fermentum. Fusce nec porttitor sapien.",
  },
  {
    recipe_name: "Etiam et efficitur erat",
    recipe_source: "Etiam",
    category: "Lunch",
    description: "Donec sed tellus vitae turpis hendrerit aliquam. Proin fermentum ullamcorper efficitur. Aenean semper fringilla orci non ullamcorper.",
    ingredients: "Lorem ipsum dolor sit amet",
    instructions:
      "Mauris eu bibendum justo. In interdum massa nec laoreet blandit. Duis scelerisque semper lectus, quis vestibulum ligula. Suspendisse volutpat fermentum purus in feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus nec consectetur enim.",
  },
  {
    recipe_name: "Pellentesque",
    recipe_source: "Convallis",
    category: "Dessert",
    description: "Maecenas et consectetur ex. Proin eget urna id erat porttitor congue. Ut sit amet risus molestie, bibendum erat vel, luctus ligula. Nulla facilisi.",
    ingredients: "Vivamus ornare arcu nisl, in sollicitudin dolor lacinia ut. Mauris suscipit ut ex id elementum. Fusce auctor cursus felis, quis consequat ante eleifend luctus.",
    instructions:
      "Sed sit amet leo laoreet, aliquam nisi eget, lobortis massa. Pellentesque sed finibus libero. Nam maximus eleifend est eget porttitor. Cras vulputate lacus eget tincidunt vulputate. Nam gravida convallis neque sit amet tempus. Integer malesuada lectus vel arcu ultricies semper.",
  },
];

export { cardsInformation };
