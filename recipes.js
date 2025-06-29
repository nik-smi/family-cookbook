const recipeData = [
            {
                title: "Apple pancakes",
                image: "Pictures/20.jpg",
                description: "Sweet pancakes with apple peaces inside, ideally for sweet breakfasts. They can be eaten with additional toppings or with just a bit of cinamon.",
                category: "Dessert",
                difficulty: "Easy",
                time: "45min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries",
                    "asfasd",
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries",
                    "asfasd",
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries",
                    "asfasd",
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries",
                    "asfasd"
                ],
                steps: [
                    "Bananen schneiden, mit geschmolzener Schokolade überzogen und danach ins Tiefkühlfach für 30min legen",
                    "Cook on a hot griddle.",
                    "Bananen schneiden, mit geschmolzener Schokolade überzogen und danach ins Tiefkühlfach für 30min legen"
                ]
            },
            {
                title: "Käsespätzle",
                image: "Pictures/19.jpg",
                description: "The swabian pasta with lots of onion",
                category: "Dinner",
                difficulty: "Easy",
                time: "30min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Rigatoni Bolognese Veggie",
                image: "Pictures/1.jpg",
                description: "The classic pasta without meat",
                category: "Dinner",
                difficulty: "Easy",
                time: "30min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Salata od šargarepe i jabuke",
                image: "Pictures/2.jpg",
                description: "Nikola's childhood refreshment. Without sugar.",
                category: "Dessert",
                difficulty: "Easy",
                time: "20min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Sommer Rolls",
                image: "Pictures/3.jpg",
                description: "The perfect dish on a hot day for peanut lovers.",
                category: "Dinner",
                difficulty: "Standard",
                time: "45min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Fakexican Salat",
                image: "Pictures/4.jpg",
                description: "Fluffy pancakes loaded with blueberries.",
                category: "Dinner",
                difficulty: "Easy",
                time: "20min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Kartoffel-Zuchinni-Puffer",
                image: "Pictures/5.jpg",
                description: "Fluffy pancakes loaded with blueberries.",
                category: "Dinner",
                difficulty: "Standard",
                time: "45min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Sendvič sa jajima",
                image: "Pictures/6.jpg",
                description: "Fluffy pancakes loaded with blueberries.",
                category: "Breakfast",
                difficulty: "Easy",
                time: "15min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Obstteller mit Scholokade überzogen",
                image: "Pictures/7.jpg",
                description: "Bananen schneiden, mit geschmolzener Schokolade überzogen und danach ins Tiefkühlfach für 30min legen",
                category: "Dessert",
                difficulty: "Easy",
                time: "20min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Pad Thai",
                image: "Pictures/8.jpg",
                description: "Fluffy pancakes loaded with blueberries.",
                category: "Dinner",
                difficulty: "Difficult",
                time: "45min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Zucchini Risotto",
                image: "Pictures/9.jpg",
                description: "Rich meat sauce with fresh herbs.",
                category: "Dinner",
                difficulty: "Standard",
                time: "45min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Bowl mit Tofu",
                image: "Pictures/10.jpg",
                description: "Fluffy pancakes loaded with blueberries.",
                category: "Dinner",
                difficulty: "Standard",
                time: "30min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Bowl mit Bohnen",
                image: "Pictures/11.jpg",
                description: "Fluffy pancakes loaded with blueberries.",
                category: "Dinner",
                difficulty: "Standard",
                time: "30min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Brokkoli Nudeln mit Köttbullar",
                image: "Pictures/12.jpg",
                description: "Fluffy pancakes loaded with blueberries.",
                category: "Dinner",
                difficulty: "Standard",
                time: "40min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Käseknödel HelloFresh",
                image: "Pictures/13.jpg",
                description: "Rich meat sauce with fresh herbs. This is a very long text to check truncation. This is a very long text to check truncation.",
                category: "Dinner",
                difficulty: "Difficult",
                time: "60min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Blätterteig Stangen mit Gemüsesoße",
                image: "Pictures/14.jpg",
                description: "Fluffy pancakes loaded with blueberries.",
                category: "Dinner",
                difficulty: "Easy",
                time: "30min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Überbackener Rosenkohl",
                image: "Pictures/15.jpg",
                description: "Rich meat sauce with fresh herbs.",
                category: "Dinner",
                difficulty: "Easy",
                time: "60min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Spinat-Ricotta Conchiglioni",
                image: "Pictures/16.jpg",
                description: "Fluffy pancakes loaded with blueberries.",
                category: "Dinner",
                difficulty: "Difficult",
                time: "60min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Reissalat HelloFresh",
                image: "Pictures/17.jpg",
                description: "Fluffy pancakes loaded with blueberries.",
                category: "Dinner",
                difficulty: "Standard",
                time: "45min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            },
            {
                title: "Bandnudeln mit Zitronen-Zucchini Soße",
                image: "Pictures/18.jpg",
                description: "Fluffy pancakes loaded with blueberries.",
                category: "Dinner",
                difficulty: "Standard",
                time: "30min",
                ingredients: [
                    "1 cup flour",
                    "2 eggs",
                    "1/2 cup blueberries"
                ],
                steps: [
                    "Mix all ingredients.",
                    "Cook on a hot griddle.",
                    "Serve with syrup."
                ]
            }
];