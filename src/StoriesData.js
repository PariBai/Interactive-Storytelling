// src/data/storiesData.js
const stories = {
    adventure: [
        {
            id: 1,
            title: "The Lost Treasure of the Forgotten Jungle",
            description: "An exciting adventure in the jungle.",
            image: "/src/assets/lost-trasure.jpg",
            category: "adventure",
            chapters: {
                start: {
                    text: "You are a seasoned adventurer named Alex Cartwright, known for your daring expeditions and unyielding thirst for discovery. Tales of a legendary treasure hidden deep within the mysterious Forgotten Jungle have reached your ears, and you can’t resist the lure. With a backpack full of supplies and a heart full of determination, you set off on what could be the most dangerous and rewarding adventure of your life.\n\nAfter days of navigating treacherous terrain and avoiding the perils of the jungle, you finally reach a fork in the road. The dense canopy above casts shifting shadows on the ground, and the air is thick with the scent of earth and vegetation. You know that your decision at this moment could determine the success or failure of your quest.",
                    options: [
                        { text: "Take the left path", nextId: "A1" },
                        { text: "Take the right path", nextId: "B1" }
                    ]
                },
                A1: {
                    text: "You decide to venture deeper into the heart of the jungle, where the vegetation becomes thicker, and the sounds of wildlife grow louder and more ominous. The path is narrow and barely visible, overgrown with vines and roots that threaten to trip you at every step. The deeper you go, the more you feel the weight of the jungle pressing in on you. After an hour of challenging trekking, you stumble upon a hidden cave, partially concealed by a curtain of ivy and moss..",
                    options: [
                        { text: "Enter the cave", nextId: "A1a" },
                        { text: "Continue along the path", nextId: "A1b" }
                    ]
                },
                B1: {
                    text: "You choose the right path, which follows a winding river that glistens in the dappled sunlight. The sound of rushing water is soothing, and the path is easier to navigate. As you follow the river, you notice strange carvings on the rocks that line the banks. They seem to depict ancient symbols and maps. The path eventually leads you to a large waterfall cascading into a crystal-clear pool below.",
                    options: [
                        { text: "Investigate the carvings", nextId: "B1a" },
                        { text: "Swim through the pool", nextId: "B1b" }
                    ]
                },
                A1a: {
                    text: "You push aside the ivy and cautiously enter the cave, your torchlight flickering against the damp stone walls. The cave is cool and dark, with the sound of dripping water echoing around you. As you delve deeper, you discover ancient paintings on the walls, depicting scenes of a lost civilization that once thrived in this jungle. Among the paintings, you notice a map that seems to lead to a treasure hidden within the depths of the jungle.",
                    options: [
                        { text: "Follow the map", nextId: "A1a1" },
                        { text: "Investigate the cave further", nextId: "A1b1" }
                    ]
                },
                A1b:{
                    text:"You are lost in jungle. Come back next time with a fresh thought"
                },
                B1a: {
                    text: "You examine the carvings closely, tracing the symbols with your fingers. They appear to tell the story of an ancient tribe that once guarded a powerful artifact. The carvings suggest that the treasure is hidden beyond the waterfall, protected by a series of traps designed to deter intruders. As you study the carvings, you notice a small, hidden alcove in the rock, just above the waterline.",
                    options: [
                        { text: "Climb up to the alcove", nextId: "B1a1" },
                        { text: "Ignore the alcove and continue toward the waterfall to explore further.", nextId: "B1b1" }
                    ]
                },
                B1b: {
                    text: "You dive into the cool water and swim toward the waterfall, the roar of the falling water growing louder as you approach. As you reach the cascade, you notice a narrow passage behind the curtain of water. Pushing through the waterfall, you find yourself in a hidden grotto, illuminated by shafts of light filtering through cracks in the ceiling. At the far end of the grotto, you see a stone pedestal with a small, ancient chest resting on it.",
                    options: [
                        { text: "Open the chest", nextId: "B1ba1" },
                        { text: "Examine the pedestal", nextId: "B1bb1" }
                    ]
                },
                A1a1:{
                    text:"You are lost in jungle. Come back next time with a fresh thought"
                },
                A1b1: {
                    text: "You explore the cave further, moving deeper into its winding tunnels. The air grows colder, and the silence is oppressive. As you round a corner, you come across a massive stone door, intricately carved with symbols similar to those you saw in the cave paintings. The door appears to be sealed, but you notice a series of pressure plates on the floor in front of it.",
                    options: [
                        { text: "Step on the pressure plates", nextId: "A1b1a1" },
                        { text: "Search the area for clues", nextId: "A1b1b1" }
                    ]
                },
                B1a1: {
                    text: "You carefully climb up to the alcove, using the jagged rocks as handholds. As you peer inside, you find a small stone tablet inscribed with more symbols, and a small leather pouch tucked away behind it. The pouch is surprisingly heavy for its size, and you feel something metallic inside.",
                    options: [
                        { text: "Open the pouch", nextId: "B1a1a1" },
                        { text: "Take the pouch and tablet", nextId: "B1a1b1" }
                    ]
                },
                B1bb1:{
                    text:"You are lost in jungle. Come back next time with a fresh thought"
                },
                A1b1a1:{
                    text:"You are lost in jungle. Come back next time with a fresh thought"
                },
                
                A1b1b1: {
                    text: "You carefully search the area around the stone door, looking for any clues that might help you open it. As you examine the carvings on the walls, you notice a faint pattern in the symbols that seems to match the sequence of the pressure plates. The pattern might be a code or a sequence that could unlock the door.",
                    options: [
                        { text: "Try to decipher the code and input it into the pressure plates.", nextId: "A1b1b1a1" },
                        { text: "Leave the cave and return to the jungle, searching for other clues to solve the mystery.", nextId: "A1b1b1b1" }
                    ]
                },
                A1b1b1a1: {
                    text: "As you entered code in plates door opened and you recieved treasure.    Congratulations",
                    
                },
                B1a1a1:{
                    text:"You are lost in jungle. Come back next time with a fresh thought"
                },
                B1a1b1:{
                    text:"You are lost in jungle. Come back next time with a fresh thought"
                },
                A1b1b1b1: {
                    text: "You  are lost in jungle for the lifetime.",
                  
                }
                
                
                // Add more chapters and options as needed
            }
        }
    ],
    emotional: [
        {
            id: 1,
            title: "The Last Letter",
            description: "A Letter from the Past",

            image: "/src/assets/the-last-letter.jpeg",
            category: "emotional",
            chapters: {
                start: {
                    text: "You are Emma Williams, a young woman dealing with the recent loss of your grandmother, who raised you after your parents passed away. While going through her belongings, you find an old, sealed letter addressed to you. The letter is dated many years ago, but you’ve never seen it before. With trembling hands, you open it and begin to read.\n\nThe letter reveals a secret that your grandmother kept from you, something that could change your life forever. Overwhelmed with emotions, you must decide how to proceed.",
                    options: [
                        { text: "Investigate the secret mentioned in the letter", nextId: "A1" },
                        { text: "Set the letter aside and focus on preserving your grandmother’s memory", nextId: "B1" }
                    ]
                },
                A1: {
                    text: "The letter leads you to a small town where your grandmother grew up, a place she never spoke of. As you arrive, you feel a mix of anticipation and fear. The letter mentioned a person named John, someone who was very important to your grandmother but whom you’ve never heard of before.",
                    options: [
                        { text: "Search for John in the town", nextId: "A1a" },
                        { text: "Visit the old family home", nextId: "A1b" }
                    ]
                },
                A1a: {
                    text: "You find John living in a small cottage on the outskirts of town. He is an elderly man now, but his eyes light up when you mention your grandmother’s name. He invites you in and begins to tell you a story of love, sacrifice, and the choices they made that kept them apart.",
                    options: [
                        { text: "Listen to John’s story and try to understand the decisions your grandmother made", nextId: "A1a1" },
                        { text: "Ask John for any letters or keepsakes he might have kept from their time together", nextId: "A1a2" }
                    ]
                },
                A1b: {
                    text: "The old family home is a shadow of its former self, but as you step inside, you can almost feel your grandmother’s presence. The air is thick with memories, and you start to explore the house, finding traces of her life before she moved away.",
                    options: [
                        { text: "Search the attic for any old letters, photographs, or belongings that might shed light on the past", nextId: "A1b1" },
                        { text: "Sit in the living room and reflect on the life your grandmother led", nextId: "A1b2" }
                    ]
                },
                A1a1: {
                    text: "You listen to John’s story and try to understand the decisions your grandmother made. His story helps you piece together the emotional and practical aspects of her past.",
                    
                },
                A1a2: {
                    text: "John shares some old letters and keepsakes. They provide more context about the love and sacrifice involved, helping you understand your grandmother’s choices better.",
                   
                },
                A1b1: {
                    text: "You search the attic and find old letters, photographs, and belongings that shed light on the past. These discoveries offer new insights into your grandmother’s earlier life.",
                   
                },
                A1b2: {
                    text: "Sitting in the living room, you reflect on the life your grandmother led. You piece together her story from the letter and other findings.",
                    
                },
                B1: {
                    text: "You decide to keep the letter as a memory of your grandmother but choose not to delve into the secrets it holds. Instead, you focus on preserving the life she shared with you—the memories, the love, and the wisdom she imparted. As you go through her belongings, you find a box of old photographs and mementos from your childhood.",
                    options: [
                        { text: "Create a scrapbook to honor your grandmother’s life", nextId: "B1a" },
                        { text: "Write a letter of your own, expressing your feelings and saying goodbye", nextId: "B2" }
                    ]
                },
                B1a: {
                    text: "As you create the scrapbook, you feel a deep connection to your grandmother. Each photograph, each note, each memento brings back memories of the time you spent together.",
                    options: [
                        { text: "Share the scrapbook with family and friends", nextId: "B1a1" },
                        { text: "Keep the scrapbook as a personal treasure", nextId: "B1a2" }
                    ]
                },
                B1a1: {
                    text: "You share the scrapbook with family and friends, keeping her memory alive. It helps everyone remember and celebrate her life.",
                   
                },
                B1a2: {
                    text: "You keep the scrapbook as a personal treasure, something to hold onto in private moments. It helps you remember her in your own way.",
                   
                },
                B2: {
                    text: "You sit down to write your own letter, pouring your heart into every word. You tell your grandmother how much she meant to you, how grateful you are for everything she did, and how much you will miss her.",
                    options: [
                        { text: "Place the letter in your grandmother’s favorite book", nextId: "B2a" },
                        { text: "Bury the letter under a tree in her garden", nextId: "B2b" }
                    ]
                },
                B2a: {
                    text: "You place the letter in your grandmother’s favorite book, keeping it close to her memory. This gesture helps you feel connected to her.",
                   
                },
                B2b: {
                    text: "You bury the letter under a tree in her garden, symbolizing the lasting impact she had on your life. It feels like a fitting tribute.",
                  
                }
            }
        },
        {
            id: 2,
            title: "The Final Goodbye",
            description: "A touching story about farewells.",

            image: "/src/assets/the-final-goodbye.png",
            category: "emotional",
        }
    ],
    mystery: [
        {
            id: 1,
            title: "The Secret Code",
            description: "A thrilling mystery involving hidden codes.",
            image: "/src/assets/the-secret-code.png",
            category: "mystery",
        }
    ],
    romance: [
        {
            id: 1,
            title: "Love in the Air",
            description: "A romantic story about love and fate.",
            image: "/src/assets/the-love-in-the-air.png",
            category: "romance",
        }
    ]
};

export default stories;
