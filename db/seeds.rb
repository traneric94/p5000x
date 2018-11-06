User.destroy_all
Photo.destroy_all
 
user0 = User.new(username: "NativeHawaiian", email: "NativeHawaiian@user.com", password: "password", fName: "Maui", lName: "Tidepool")
user1 = User.new(username: "FirstLibrarian" , email:"freebooks@city.net", password: "password", fName:"Steven", lName: "Universe" )
user2 = User.new(username: "fashionista", email: "queen@branding.com", password: "password&chanel", fName: "Lizard", lName: "Lee")
user3 = User.new(username: "chefD", email:"dessert@explorer.com", password: "password", fName: "Jasmine", lName:"Eclair")
user4 = User.new(username: "FitnessExpert", email:"push@up.com", password: "password", fName: "Jordan", lName:"Jumper")
user5 = User.new(username: "doggo", email:"good@boy.com", password: "password", fName: "Corgi", lName:"Curtis")
user6 = User.new(username: "foodie", email:"foodie@favorites.com", password: "password", fName: "McFoodie", lName:"Favorites")
user7 = User.new(username: "HealthBeast", email:"fruity@favorites.com", password: "password", fName: "Healthy", lName:"Beast")
user8 = User.new(username: "LAvibes", email:"red@carpet.com", password: "password", fName: "LA", lName:"Vibes")
user9 = User.new(username: "DankMemes", email:"dankmemes@readit.com", password: "password", fName: "Dank", lName:"Memes")
user10 = User.new(username: "musiclover", email:"song@lyrics.com", password: "password", fName: "Edward", lName:"Cheeran")
user11 = User.new(username: "raveslave", email:"friday@weekend.com", password: "password", fName: "Music", lName:"Festivals")
user12 = User.new(username: "BestRanger", email:"ranger@nationalparks.com", password: "password", fName: "Darrel", lName:"Franklin")
user13 = User.new(username: "WildNature", email:"green@nature.com", password: "password", fName: "Wilderness", lName:"Explorer")
user14 = User.new(username: "PattythePoet", email:"PattythePoet@writer.com", password: "password", fName: "Patty", lName:"Lenard")
user15 = User.new(username: "SeasonsofLove", email:"seasons@nature.com", password: "password", fName: "Frank", lName:"Fall")
user16 = User.new(username: "jeffstyle", email:"hype@fashion.com", password: "password", fName: "Jeff", lName:"Streets")
user17 = User.new(username: "WaysToTravel", email:"flight@plane.com", password: "password", fName: "Alex", lName:"Plain")
user18 = User.new(username: "traveler", email:"urbanization@explorer.com", password: "password", fName: "Mike", lName:"Night")
user19 = User.new(username: "society", email:"different@types.com", password: "password", fName: "Justin", lName:"Interviews")
 
user0.image.attach(io: File.open("./app/assets/images/seedpics/maui.jpg"), filename: "maui.jpg")
user1.image.attach(io: File.open("./app/assets/images/seedpics/steven.jpg"), filename: "steven.jpg")
user2.image.attach(io: File.open("./app/assets/images/seedpics/lizard.jpg"), filename: "lizard.jpg")
user3.image.attach(io: File.open("./app/assets/images/seedpics/jasmine.jpg"), filename: "jasmine.jpg")
user4.image.attach(io: File.open("./app/assets/images/seedpics/jordan.jpg"), filename: "jordan.jpg")
user5.image.attach(io: File.open("./app/assets/images/seedpics/corgi.jpg"), filename: "corgi.jpg")
user6.image.attach(io: File.open("./app/assets/images/seedpics/mcfoodie.jpg"), filename: "mcfoodie.jpg")
user7.image.attach(io: File.open("./app/assets/images/seedpics/healthy.jpg"), filename: "healthy.jpg")
user8.image.attach(io: File.open("./app/assets/images/seedpics/LA.jpg"), filename: "LA.jpg")
user9.image.attach(io: File.open("./app/assets/images/seedpics/dank.jpg"), filename: "dank.jpg")
user10.image.attach(io: File.open("./app/assets/images/seedpics/edward.jpg"), filename: "edward.jpg")
user11.image.attach(io: File.open("./app/assets/images/seedpics/music.jpg"), filename: "music.jpg")
user12.image.attach(io: File.open("./app/assets/images/seedpics/darrel.jpg"), filename: "darrel.jpg")
user13.image.attach(io: File.open("./app/assets/images/seedpics/wilderness.jpg"), filename: "wilderness.jpg")
user14.image.attach(io: File.open("./app/assets/images/seedpics/patty.jpg"), filename: "patty.jpg")
user15.image.attach(io: File.open("./app/assets/images/seedpics/frank.jpg"), filename: "frank.jpg")
user16.image.attach(io: File.open("./app/assets/images/seedpics/jeff.jpg"), filename: "jeff.jpg")
user17.image.attach(io: File.open("./app/assets/images/seedpics/alex.jpg"), filename: "alex.jpg")
user18.image.attach(io: File.open("./app/assets/images/seedpics/mike.jpg"), filename: "mike.jpg")
user19.image.attach(io: File.open("./app/assets/images/seedpics/justin.jpg"), filename: "justin.jpg")
 
user0.save!
user1.save!
user2.save!
user3.save!
user4.save!
user5.save!
user6.save!
user7.save!
user8.save!
user9.save!
user10.save!
user11.save!
user12.save!
user13.save!
user14.save!
user15.save!
user16.save!
user17.save!
user18.save!
user19.save!
 
photo0 = Photo.new(
  title: "Head in a Book",
  description: "Stare at a book, not people",
  author_id: user1.id
)
photo1 = Photo.new(
  title: "Jump for Happiness",
  description: "Love yourself",
  author_id: user2.id
)
photo2 = Photo.new(
   title: "Creamy Cake",
   description: "This is how you stay fat",
   author_id: user3.id
 )
photo3 = Photo.new(
  title: "Corgi Beach Day",
  description: "2018",
  author_id: user5.id
)
photo4 = Photo.new(
  title: "Strength",
  description: "tattoos & weights",
  author_id: user4.id
)
photo5 = Photo.new(
  title: "Meatballs",
  description: "A new bowl of meatballs",
  author_id: user6.id
)
photo6 = Photo.new(
  title: "A Morning Hike",
  description: "the best view",
  author_id: user0.id
)
photo7 = Photo.new(
  title: "Granola Fun",
  description: "fresh berries",
  author_id: user7.id
)
photo8 = Photo.new(
  title: "Hollywood Sign",
  description: "LA mornings",
  author_id: user8.id
)
photo9 = Photo.new(
  title: "Fallout",
  description: "too real",
  author_id: user9.id
)
photo10 = Photo.new(
  title: "Lights Out",
  description: "best view of the house",
  author_id: user10.id
)
photo11 = Photo.new(
  title: "Odeza",
  description: "once in a lifetime",
  author_id: user11.id
)
photo12 = Photo.new(
  title: "Clear Waters",
  description: "spring is coming",
  author_id: user12.id
)
photo13 = Photo.new(
  title: "Bees",
  description: "will be bees",
  author_id: user13.id
)
photo14 = Photo.new(
  title: "First Day",
  description: "School first",
  author_id: user19.id
)
photo15 = Photo.new(
  title: "Today is the Day",
  description: "tolerable",
  author_id: user14.id
)
photo16 = Photo.new(
  title: "Blossoms",
  description: "in Japan",
  author_id: user15.id
)
photo17 = Photo.new(
  title: "Adidas",
  description: "new style",
  author_id: user16.id
)
photo18 = Photo.new(
  title: "Yellow",
  description: "train transportation",
  author_id: user17.id
)
photo19 = Photo.new(
  title: "Can Tho",
  description: "Vietnam",
  author_id: user18.id
)
photo20 = Photo.new(
  title: "A Fern in a Book",
  description: "forever",
  author_id: user1.id
)
photo21 = Photo.new(
  title: "Orange Day",
  description: "pick a color any color",
  author_id: user2.id
)
photo22 = Photo.new(
  title: "Funnel Cake",
  description: "best food at the fair",
  author_id: user3.id
)
photo23 = Photo.new(
  title: "Four Models",
  description: "good boys",
  author_id: user5.id
)
photo24 = Photo.new(
  title: "A Green Day Hike",
  description: "Stay fit",
  author_id: user4.id
)
photo25 = Photo.new(
  title: "Phat Burger",
  description: "best cheeseburger",
  author_id: user6.id
)
photo26 = Photo.new(
  title: "Fruity Spread",
  description: "be the passion in passionfruit",
  author_id: user0.id
)
photo27 = Photo.new(
  title: "Pineapple Smoothie",
  description: "End plastic straws",
  author_id: user7.id
)
photo28 = Photo.new(
  title: "Griffith Observatory",
  description: "clean slate",
  author_id: user8.id
)
photo29 = Photo.new(
  title: "Extreme Sport",
  description: "the stress is overwhelming atm",
  author_id: user9.id
)
photo30 = Photo.new(
  title: "What a Night",
  description: "finally at Echopark",
  author_id: user10.id
)
photo31 = Photo.new(
  title: "Astronaut",
  description: "cannot remember a thing",
  author_id: user11.id
)
photo32 = Photo.new(
  title: "Oregon Trails",
  description: "everything was bright green for a day",
  author_id: user12.id
)
photo33 = Photo.new(
  title: "Birds",
  description: "Sunset Flight",
  author_id: user13.id
)
photo34 = Photo.new(
  title: "A New Family",
  description: "coming December 2018",
  author_id: user19.id
)
photo35 = Photo.new(
  title: "Swimming or Flying",
  description: "But I hate fish",
  author_id: user14.id
)
photo36 = Photo.new(
  title: "Winter Seasons",
  description: "Christmas is Here",
  author_id: user15.id
)
photo37 = Photo.new(
  title: "Thinking About the Next Day",
  description: "finally alone with my thoughts",
  author_id: user16.id
)
photo38 = Photo.new(
  title: "Station at Home",
  description: "here for the holidays",
  author_id: user17.id
)
photo39 = Photo.new(
  title: "Street Flowers",
  description: "staying in Hanoi",
  author_id: user18.id
)
photo40 = Photo.new(
  title: "Spinning Library",
  description: "I miss this city",
  author_id: user1.id
)
photo41 = Photo.new(
  title: "Dress Up",
  description: "it was too hot",
  author_id: user2.id
)
photo42 = Photo.new(
  title: "Fresh Donuts",
  description: "baked today",
  author_id: user3.id
)
photo43 = Photo.new(
  title: "Blue Bandana",
  description: "he wanted a treat",
  author_id: user5.id
)
photo44 = Photo.new(
  title: "Running Start",
  description: "first position",
  author_id: user4.id
)
photo45 = Photo.new(
  title: "Rack of Meat",
  description: "best salsa",
  author_id: user6.id
)
photo46 = Photo.new(
  title: "Hula Dancing",
  description: "can you keep up",
  author_id: user0.id
)
photo47 = Photo.new(
  title: "Refreshing Salad",
  description: "party starter",
  author_id: user7.id
)
photo48 = Photo.new(
  title: "Venice Beach",
  description: "always 70 degrees",
  author_id: user8.id
)
photo49 = Photo.new(
  title: "Precious Creatures",  
  description: "i love cows",
  author_id: user9.id
)
photo51 = Photo.new(
  title: "Geometric Lights",
  description: "cannot remember a thing",
  author_id: user11.id
)
photo52 = Photo.new(
  title: "Yosemite",
  description: "dawn",
  author_id: user12.id
)
photo53 = Photo.new(
  title: "Buffalo",
  description: "tourist trap",
  author_id: user13.id
)
photo54 = Photo.new(
  title: "Sidewalk Observations",
  description: "three is not a pair",
  author_id: user19.id
)
photo55 = Photo.new(
  title: "Success",
  description: "milk and honey",
  author_id: user14.id
)
photo56 = Photo.new(
  title: "Sunflower Field",
  description: "a dime a dozen",
  author_id: user15.id
)
photo57 = Photo.new(
  title: "Who Are We",
  description: "Tyga",
  author_id: user16.id
)
photo58 = Photo.new(
  title: "Clean Seats",
  description: "the only empty bus",
  author_id: user17.id
)
photo59 = Photo.new(
  title: "Small Street",
  description: "We airdry our clothes",
  author_id: user18.id
)
photo60 = Photo.new(
  title: "Night Reading",
  description: "a 24 hour bookstore",
  author_id: user1.id
)
photo61 = Photo.new(
  title: "Floral Play",
  description: "blooming",
  author_id: user2.id
)
photo62 = Photo.new(
  title: "MNGO",
  description: "delicious cake",
  author_id: user3.id
)
photo63 = Photo.new(
  title: "Wet Fur",
  description: "first time in the lake",
  author_id: user5.id
)
photo64 = Photo.new(
  title: "Stretching",
  description: "how I end my day",
  author_id: user4.id
)
photo65 = Photo.new(
  title: "Seafood",
  description: "butter and lemon please",
  author_id: user6.id
)
photo66 = Photo.new(
  title: "Katsu House",
  description: "not the same as in Japan",
  author_id: user0.id
)

photo67 = Photo.new(
  title: "Clean Sandwich",
  description: "always add avocado",
  author_id: user7.id
)
photo68 = Photo.new(
  title: "Chinatown",
  description: "finally back",
  author_id: user8.id
)
photo69 = Photo.new(
  title: "Sneezing",
  description: "poison damage",
  author_id: user9.id
)
photo70 = Photo.new(
  title: "Raise the Roof",
  description: "0707",
  author_id: user10.id
)
photo71 = Photo.new(
  title: "Just You and Me",
  description: "lights down low",
  author_id: user11.id
)
photo72 = Photo.new(
  title: "Redwoods",
  description: "no small tree",
  author_id: user12.id
)
photo73 = Photo.new(
  title: "Zebra",
  description: "best friend the bird",
  author_id: user13.id
)
photo74 = Photo.new(
  title: "Skater Boy",
  description: "leaving Oasis",
  author_id: user19.id
)
photo75 = Photo.new(
  title: "With You",
  description: "peace of mind",
  author_id: user14.id
)
photo76 = Photo.new(
  title: "Fully Fall",
  description: "everything is orange",
  author_id: user15.id
)
photo77 = Photo.new(
  title: "Miami Fashion",
  description: "she went back to school after",
  author_id: user16.id
)
photo78 = Photo.new(
  title: "Wake Up Call",
  description: "I wanted to be early",
  author_id: user17.id
)
photo79 = Photo.new(
  title: "Road to Japan",
  description: "The path everyone takes",
  author_id: user18.id
)
photo80 = Photo.new(
  title: "Sorted Aisle",
  description: "my city library",
  author_id: user1.id
)
photo81 = Photo.new(
  title: "At the Pier",
  description: "the cleanest seat here",
  author_id: user2.id
)
photo82 = Photo.new(
  title: "Cookie Sandwich",
  description: "with mint chip ice cream",
  author_id: user3.id
)
photo83 = Photo.new(
  title: "Muddy Fur",
  description: "someone needs a bath",
  author_id: user5.id
)
photo84 = Photo.new(
  title: "Against the Wall",
  description: "everyday is leg day",
  author_id: user4.id
)
photo85 = Photo.new(
  title: "In N Out",
  description: "protein style please",
  author_id: user6.id
)
photo86 = Photo.new(
  title: "Heavenly Views",
  description: "hit the top at noon",
  author_id: user0.id
)
photo87 = Photo.new(
  title: "Coffee and Egg Salad",
  description: "the best cracked pepper",
  author_id: user7.id
)
photo88 = Photo.new(
  title: "Coffee Addict",
  description: "but first coffee",
  author_id: user8.id
)
photo89 = Photo.new(
  title: "Heartbreak",
  description: "charge your phone",
  author_id: user9.id
)
photo90 = Photo.new(
  title: "Small Crowds",
  description: "but the best vibes",
  author_id: user10.id
)
photo91 = Photo.new(
  title: "Festivals",
  description: "look at the lights",
  author_id: user11.id
)
photo92 = Photo.new(
  title: "Yosemite from the Road",
  description: "a plesant drive",
  author_id: user12.id
)
photo93 = Photo.new(
  title: "Monkey",
  description: "none of your business",
  author_id: user13.id
)
photo94 = Photo.new(
  title: "Rooftop View",
  description: "no trespassing",
  author_id: user19.id
)
photo95 = Photo.new(
  title: "Coffee and Poetry",
  description: "Release our thoughts",
  author_id: user14.id
)
photo96 = Photo.new(
  title: "A Single Leaf",
  description: "trying to see the light",
  author_id: user15.id
)
photo97 = Photo.new(
  title: "Underground Fashion",
  description: "the door is locked",
  author_id: user16.id
)
photo98 = Photo.new(
  title: "Train Across the US",
  description: "everything is new and empty",
  author_id: user17.id
)
photo99 = Photo.new(
  title: "Supreme Store",
  description: "Exclusive Japanese Apparel at Supreme",
  author_id: user18.id
)
photo100 = Photo.new(
  title: "Some Old Short Stories",
  description: "not sure who reads these still",
  author_id: user1.id
)
photo101 = Photo.new(
  title: "Still Waiting",
  description: "for my coffee",
  author_id: user2.id
)
photo102 = Photo.new(
  title: "Mango times 3",
  description: "everything tastes like mangos",
  author_id: user3.id
)
photo103 = Photo.new(
  title: "Cold Paws",
  description: "first time seeing snow",
  author_id: user5.id
)
photo104 = Photo.new(
  title: "Jumprope",
  description: "since I was a kid",
  author_id: user4.id
)
photo105 = Photo.new(
  title: "Korean Lunch",
  description: "pass me the kimchi",
  author_id: user6.id
)
photo106 = Photo.new(
  title: "Berry Pancake",
  description: "picked the berries myself",
  author_id: user0.id
)
photo107 = Photo.new(
  title: "Morning Breakfast",
  description: "stuffed from the eggs",
  author_id: user7.id
)
photo108 = Photo.new(
  title: "Seize the Day",
  description: "stared at the sun too long for this",
  author_id: user8.id
)
photo109 = Photo.new(
  title: "Say That Again",
  description: "forgive me",
  author_id: user9.id
)
photo110 = Photo.new(
  title: "Silence",
  description: "wait for the first string",
  author_id: user10.id
)
photo111 = Photo.new(
  title: "Neon Lights",
  description: "peace love unity respect",
  author_id: user11.id
)
photo112 = Photo.new(
  title: "Barely Made It",
  description: "woke up at 4 for this",
  author_id: user12.id
)
photo113 = Photo.new(
  title: "Couple of Antlers",
  description: "feed them I dare you",
  author_id: user13.id
)
photo114 = Photo.new(
  title: "Great Heights",
  description: "walk across the open bridge",
  author_id: user19.id
)
photo115 = Photo.new(
  title: "A Growing Quote",
  description: "matching the moss",
  author_id: user14.id
)
photo116 = Photo.new(
  title: "Pile of Wood",
  description: "storage for fall",
  author_id: user15.id
)
photo117 = Photo.new(
  title: "Life Rule",
  description: "carry a backpack and wear a dress",
  author_id: user16.id
)
photo118 = Photo.new(
  title: "Flying Above Me",
  description: "remember to travel more often",
  author_id: user17.id
)
photo119 = Photo.new(
  title: "Inside a Train",
  description: "everything is quiet",
  author_id: user18.id
)
photo120 = Photo.new(
  title: "Winter Snow",
  description: "everyone is still awake and cold",
  author_id: user18.id
)
photo121 = Photo.new(
  title: "Osaka",
  description: "the best ramen is made here",
  author_id: user18.id
)
photo122 = Photo.new(
  title: "Sushi",
  description: "he always knows what you want",
  author_id: user18.id
)
photo123 = Photo.new(
  title: "Welcoming You to Japan",
  description: "with a smile every time",
  author_id: user18.id
)
photo124 = Photo.new(
  title: "Shinjuku",
  description: "the busiest station",
  author_id: user18.id
)
photo125 = Photo.new(
  title: "Part of the Culture",
  description: "there are only a few who dress up these days",
  author_id: user18.id
)
photo126 = Photo.new(
  title: "A Line of Drinks",
  description: "I suggest trying everything",
  author_id: user18.id
)
photo127 = Photo.new(
  title: "Taxi",
  description: "This is the only type of Uber",
  author_id: user18.id
)
photo128 = Photo.new(
  title: "Temple",
  description: "find tranquility",
  author_id: user18.id
)
photo129 = Photo.new(
  title: "Silent Bark",
  description: "stranger danger",
  author_id: user9.id
)
photo130 = Photo.new(
  title: "DJ Who",
  description: "literally every single song",
  author_id: user9.id
)
photo131 = Photo.new(
  title: "Facebook vs Congress",
  description: "do they understand anything",
  author_id: user9.id
)
photo132 = Photo.new(
  title: "New Player",
  description: "noob",
  author_id: user9.id
)
 
 
 
photo0.image.attach(io: File.open("./app/assets/images/seedpics/book1.jpg"), filename: "book1.jpg")
photo1.image.attach(io: File.open("./app/assets/images/seedpics/fashion1.jpg"), filename: "fashion1.jpg")
photo2.image.attach(io: File.open("./app/assets/images/seedpics/dessert1.jpg"), filename: "dessert1.jpg")
photo3.image.attach(io: File.open("./app/assets/images/seedpics/dog1.jpg"), filename: "dog1.jpg")
photo4.image.attach(io: File.open("./app/assets/images/seedpics/fitness1.jpg"), filename: "fitness1.jpg")
photo5.image.attach(io: File.open("./app/assets/images/seedpics/foodie1.jpg"), filename: "foodie1.jpg")
photo6.image.attach(io: File.open("./app/assets/images/seedpics/hawaii1.jpg"), filename: "hawaii1.jpg")
photo7.image.attach(io: File.open("./app/assets/images/seedpics/healthy1.jpg"), filename: "healthy1.jpg")
photo8.image.attach(io: File.open("./app/assets/images/seedpics/LA1.jpg"), filename: "LA1.jpg")
photo9.image.attach(io: File.open("./app/assets/images/seedpics/meme1.jpg"), filename: "meme1.jpg")
photo10.image.attach(io: File.open("./app/assets/images/seedpics/concert1.jpg"), filename: "concert1.jpg")
photo11.image.attach(io: File.open("./app/assets/images/seedpics/festival1.jpg"), filename: "festival1.jpg")
photo12.image.attach(io: File.open("./app/assets/images/seedpics/park1.jpg"), filename: "park1.jpg")
photo13.image.attach(io: File.open("./app/assets/images/seedpics/wild1.jpg"), filename: "wild1.jpg")
photo14.image.attach(io: File.open("./app/assets/images/seedpics/NY1.jpg"), filename: "NY1.jpg")
photo15.image.attach(io: File.open("./app/assets/images/seedpics/quote1.jpg"), filename: "quote1.jpg")
photo16.image.attach(io: File.open("./app/assets/images/seedpics/seasons1.jpg"), filename: "seasons1.jpg")
photo17.image.attach(io: File.open("./app/assets/images/seedpics/streetwear1.jpg"), filename: "streetwear1.jpg")
photo18.image.attach(io: File.open("./app/assets/images/seedpics/transportation1.jpg"), filename: "transportation1.jpg")
photo19.image.attach(io: File.open("./app/assets/images/seedpics/travel1.jpg"), filename: "travel1.jpg")
photo20.image.attach(io: File.open("./app/assets/images/seedpics/book2.jpg"), filename: "book2.jpg")
photo21.image.attach(io: File.open("./app/assets/images/seedpics/fashion2.jpg"), filename: "fashion2.jpg")
photo22.image.attach(io: File.open("./app/assets/images/seedpics/dessert2.jpg"), filename: "dessert2.jpg")
photo23.image.attach(io: File.open("./app/assets/images/seedpics/dog2.jpg"), filename: "dog2.jpg")
photo24.image.attach(io: File.open("./app/assets/images/seedpics/fitness2.jpg"), filename: "fitness2.jpg")
photo25.image.attach(io: File.open("./app/assets/images/seedpics/foodie2.jpg"), filename: "foodie2.jpg")
photo26.image.attach(io: File.open("./app/assets/images/seedpics/hawaii2.jpg"), filename: "hawaii2.jpg")
photo27.image.attach(io: File.open("./app/assets/images/seedpics/healthy2.jpg"), filename: "healthy2.jpg")
photo28.image.attach(io: File.open("./app/assets/images/seedpics/LA2.jpg"), filename: "LA2.jpg")
photo29.image.attach(io: File.open("./app/assets/images/seedpics/meme2.jpg"), filename: "meme2.jpg")
photo30.image.attach(io: File.open("./app/assets/images/seedpics/concert2.jpg"), filename: "concert2.jpg")
photo31.image.attach(io: File.open("./app/assets/images/seedpics/festival2.jpg"), filename: "festival2.jpg")
photo32.image.attach(io: File.open("./app/assets/images/seedpics/park2.jpg"), filename: "park2.jpg")
photo33.image.attach(io: File.open("./app/assets/images/seedpics/wild2.jpg"), filename: "wild2.jpg")
photo34.image.attach(io: File.open("./app/assets/images/seedpics/NY2.jpg"), filename: "NY2.jpg")
photo35.image.attach(io: File.open("./app/assets/images/seedpics/quote2.jpg"), filename: "quote2.jpg")
photo36.image.attach(io: File.open("./app/assets/images/seedpics/seasons2.jpg"), filename: "seasons2.jpg")
photo37.image.attach(io: File.open("./app/assets/images/seedpics/streetwear2.jpg"), filename: "streetwear2.jpg")
photo38.image.attach(io: File.open("./app/assets/images/seedpics/transportation2.jpg"), filename: "transportation2.jpg")
photo39.image.attach(io: File.open("./app/assets/images/seedpics/travel2.jpg"), filename: "travel2.jpg")
photo40.image.attach(io: File.open("./app/assets/images/seedpics/book3.jpg"), filename: "book3.jpg")
photo41.image.attach(io: File.open("./app/assets/images/seedpics/fashion3.jpg"), filename: "fashion3.jpg")
photo42.image.attach(io: File.open("./app/assets/images/seedpics/dessert3.jpg"), filename: "dessert3.jpg")
photo43.image.attach(io: File.open("./app/assets/images/seedpics/dog3.jpg"), filename: "dog3.jpg")
photo44.image.attach(io: File.open("./app/assets/images/seedpics/fitness3.jpg"), filename: "fitness3.jpg")
photo45.image.attach(io: File.open("./app/assets/images/seedpics/foodie3.jpg"), filename: "foodie3.jpg")
photo46.image.attach(io: File.open("./app/assets/images/seedpics/hawaii3.jpg"), filename: "hawaii3.jpg")
photo47.image.attach(io: File.open("./app/assets/images/seedpics/healthy3.jpg"), filename: "healthy3.jpg")
photo48.image.attach(io: File.open("./app/assets/images/seedpics/LA3.jpg"), filename: "LA3.jpg")
photo49.image.attach(io: File.open("./app/assets/images/seedpics/meme3.jpg"), filename: "meme3.jpg")
photo51.image.attach(io: File.open("./app/assets/images/seedpics/festival3.jpg"), filename: "festival3.jpg")
photo52.image.attach(io: File.open("./app/assets/images/seedpics/park3.jpg"), filename: "park3.jpg")
photo53.image.attach(io: File.open("./app/assets/images/seedpics/wild3.jpg"), filename: "wild3.jpg")
photo54.image.attach(io: File.open("./app/assets/images/seedpics/NY3.jpg"), filename: "NY3.jpg")
photo55.image.attach(io: File.open("./app/assets/images/seedpics/quote3.jpg"), filename: "quote3.jpg")
photo56.image.attach(io: File.open("./app/assets/images/seedpics/seasons3.jpg"), filename: "seasons3.jpg")
photo57.image.attach(io: File.open("./app/assets/images/seedpics/streetwear3.jpg"), filename: "streetwear3.jpg")
photo58.image.attach(io: File.open("./app/assets/images/seedpics/transportation3.jpg"), filename: "transportation3.jpg")
photo59.image.attach(io: File.open("./app/assets/images/seedpics/travel3.jpg"), filename: "travel3.jpg")
photo60.image.attach(io: File.open("./app/assets/images/seedpics/book4.jpg"), filename: "book4.jpg")
photo61.image.attach(io: File.open("./app/assets/images/seedpics/fashion4.jpg"), filename: "fashion4.jpg")
photo62.image.attach(io: File.open("./app/assets/images/seedpics/dessert4.jpg"), filename: "dessert4.jpg")
photo63.image.attach(io: File.open("./app/assets/images/seedpics/dog4.jpg"), filename: "dog4.jpg")
photo64.image.attach(io: File.open("./app/assets/images/seedpics/fitness4.jpg"), filename: "fitness4.jpg")
photo65.image.attach(io: File.open("./app/assets/images/seedpics/foodie4.jpg"), filename: "foodie4.jpg")
photo66.image.attach(io: File.open("./app/assets/images/seedpics/hawaii4.jpg"), filename: "hawaii4.jpg")
photo107.image.attach(io: File.open("./app/assets/images/seedpics/healthy4.jpg"), filename: "healthy4.jpg")
photo68.image.attach(io: File.open("./app/assets/images/seedpics/LA4.jpg"), filename: "LA4.jpg")
photo69.image.attach(io: File.open("./app/assets/images/seedpics/meme4.jpg"), filename: "meme4.jpg")
photo70.image.attach(io: File.open("./app/assets/images/seedpics/concert4.jpg"), filename: "concert4.jpg")
photo71.image.attach(io: File.open("./app/assets/images/seedpics/festival4.jpg"), filename: "festival4.jpg")
photo72.image.attach(io: File.open("./app/assets/images/seedpics/park4.jpg"), filename: "park4.jpg")
photo73.image.attach(io: File.open("./app/assets/images/seedpics/wild4.jpg"), filename: "wild4.jpg")
photo74.image.attach(io: File.open("./app/assets/images/seedpics/NY4.jpg"), filename: "NY4.jpg")
photo75.image.attach(io: File.open("./app/assets/images/seedpics/quote4.jpg"), filename: "quote4.jpg")
photo76.image.attach(io: File.open("./app/assets/images/seedpics/seasons4.jpg"), filename: "seasons4.jpg")
photo77.image.attach(io: File.open("./app/assets/images/seedpics/streetwear4.jpg"), filename: "streetwear4.jpg")
photo78.image.attach(io: File.open("./app/assets/images/seedpics/transportation4.jpg"), filename: "transportation4.jpg")
photo79.image.attach(io: File.open("./app/assets/images/seedpics/travel4.jpg"), filename: "travel4.jpg")
photo80.image.attach(io: File.open("./app/assets/images/seedpics/book5.jpg"), filename: "book5.jpg")
photo81.image.attach(io: File.open("./app/assets/images/seedpics/fashion5.jpg"), filename: "fashion5.jpg")
photo82.image.attach(io: File.open("./app/assets/images/seedpics/dessert5.jpg"), filename: "dessert5.jpg")
photo83.image.attach(io: File.open("./app/assets/images/seedpics/dog5.jpg"), filename: "dog5.jpg")
photo84.image.attach(io: File.open("./app/assets/images/seedpics/fitness5.jpg"), filename: "fitness5.jpg")
photo85.image.attach(io: File.open("./app/assets/images/seedpics/foodie5.jpg"), filename: "foodie5.jpg")
photo86.image.attach(io: File.open("./app/assets/images/seedpics/hawaii5.jpg"), filename: "hawaii5.jpg")
photo87.image.attach(io: File.open("./app/assets/images/seedpics/healthy5.jpg"), filename: "healthy5.jpg")
photo88.image.attach(io: File.open("./app/assets/images/seedpics/LA5.jpg"), filename: "LA5.jpg")
photo89.image.attach(io: File.open("./app/assets/images/seedpics/meme5.jpg"), filename: "meme5.jpg")
photo90.image.attach(io: File.open("./app/assets/images/seedpics/concert5.jpg"), filename: "concert5.jpg")
photo91.image.attach(io: File.open("./app/assets/images/seedpics/festival5.jpg"), filename: "festival5.jpg")
photo92.image.attach(io: File.open("./app/assets/images/seedpics/park5.jpg"), filename: "park5.jpg")
photo93.image.attach(io: File.open("./app/assets/images/seedpics/wild5.jpg"), filename: "wild5.jpg")
photo94.image.attach(io: File.open("./app/assets/images/seedpics/NY5.jpg"), filename: "NY5.jpg")
photo95.image.attach(io: File.open("./app/assets/images/seedpics/quote5.jpg"), filename: "quote5.jpg")
photo96.image.attach(io: File.open("./app/assets/images/seedpics/seasons5.jpg"), filename: "seasons5.jpg")
photo97.image.attach(io: File.open("./app/assets/images/seedpics/streetwear5.jpg"), filename: "streetwear5.jpg")
photo98.image.attach(io: File.open("./app/assets/images/seedpics/transportation5.jpg"), filename: "transportation5.jpg")
photo99.image.attach(io: File.open("./app/assets/images/seedpics/travel5.jpg"), filename: "travel5.jpg")
photo100.image.attach(io: File.open("./app/assets/images/seedpics/book6.jpg"), filename: "book6.jpg")
photo101.image.attach(io: File.open("./app/assets/images/seedpics/fashion6.jpg"), filename: "fashion6.jpg")
photo102.image.attach(io: File.open("./app/assets/images/seedpics/dessert6.jpg"), filename: "dessert6.jpg")
photo103.image.attach(io: File.open("./app/assets/images/seedpics/dog6.jpg"), filename: "dog6.jpg")
photo104.image.attach(io: File.open("./app/assets/images/seedpics/fitness6.jpg"), filename: "fitness6.jpg")
photo105.image.attach(io: File.open("./app/assets/images/seedpics/foodie6.jpg"), filename: "foodie6.jpg")
photo106.image.attach(io: File.open("./app/assets/images/seedpics/hawaii6.jpg"), filename: "hawaii6.jpg")
photo67.image.attach(io: File.open("./app/assets/images/seedpics/healthy6.jpg"), filename: "healthy6.jpg")
photo108.image.attach(io: File.open("./app/assets/images/seedpics/LA6.jpg"), filename: "LA6.jpg")
photo109.image.attach(io: File.open("./app/assets/images/seedpics/meme6.jpg"), filename: "meme6.jpg")
photo110.image.attach(io: File.open("./app/assets/images/seedpics/concert6.jpg"), filename: "concert6.jpg")
photo111.image.attach(io: File.open("./app/assets/images/seedpics/festival6.jpg"), filename: "festival6.jpg")
photo112.image.attach(io: File.open("./app/assets/images/seedpics/park6.jpg"), filename: "park6.jpg")
photo113.image.attach(io: File.open("./app/assets/images/seedpics/wild6.jpg"), filename: "wild6.jpg")
photo114.image.attach(io: File.open("./app/assets/images/seedpics/NY6.jpg"), filename: "NY6.jpg")
photo115.image.attach(io: File.open("./app/assets/images/seedpics/quote6.jpg"), filename: "quote6.jpg")
photo116.image.attach(io: File.open("./app/assets/images/seedpics/seasons6.jpg"), filename: "seasons6.jpg")
photo117.image.attach(io: File.open("./app/assets/images/seedpics/streetwear6.jpg"), filename: "streetwear6.jpg")
photo118.image.attach(io: File.open("./app/assets/images/seedpics/transportation6.jpg"), filename: "transportation6.jpg")
photo119.image.attach(io: File.open("./app/assets/images/seedpics/travel6.jpg"), filename: "travel6.jpg")
photo120.image.attach(io: File.open("./app/assets/images/seedpics/travel7.jpg"), filename: "travel7.jpg")
photo121.image.attach(io: File.open("./app/assets/images/seedpics/travel8.jpg"), filename: "travel8.jpg")
photo122.image.attach(io: File.open("./app/assets/images/seedpics/travel9.jpg"), filename: "travel9.jpg")
photo123.image.attach(io: File.open("./app/assets/images/seedpics/travel10.jpg"), filename: "travel10.jpg")
photo124.image.attach(io: File.open("./app/assets/images/seedpics/travel11.jpg"), filename: "travel11.jpg")
photo125.image.attach(io: File.open("./app/assets/images/seedpics/travel12.jpg"), filename: "travel12.jpg")
photo126.image.attach(io: File.open("./app/assets/images/seedpics/travel13.jpg"), filename: "travel13.jpg")
photo127.image.attach(io: File.open("./app/assets/images/seedpics/travel14.jpg"), filename: "travel14.jpg")
photo128.image.attach(io: File.open("./app/assets/images/seedpics/travel15.jpg"), filename: "travel15.jpg")
photo129.image.attach(io: File.open("./app/assets/images/seedpics/meme7.jpg"), filename: "meme7.jpg")
photo130.image.attach(io: File.open("./app/assets/images/seedpics/meme8.jpg"), filename: "meme8.jpg")
photo131.image.attach(io: File.open("./app/assets/images/seedpics/meme9.jpg"), filename: "meme9.jpg")
photo132.image.attach(io: File.open("./app/assets/images/seedpics/meme10.jpg"), filename: "meme10.jpg")
 
 
photo0.save!
photo1.save!
photo2.save!
photo3.save!
photo4.save!
photo5.save!
photo6.save!
photo7.save!
photo8.save!
photo9.save!
photo10.save!
photo11.save!
photo12.save!
photo13.save!
photo14.save!
photo15.save!
photo16.save!
photo17.save!
photo18.save!
photo19.save!
photo20.save!
photo21.save!
photo22.save!
photo23.save!
photo24.save!
photo25.save!
photo26.save!
photo27.save!
photo28.save!
photo29.save!
photo30.save!
photo31.save!
photo32.save!
photo33.save!
photo34.save!
photo35.save!
photo36.save!
photo37.save!
photo38.save!
photo39.save!
photo40.save!
photo41.save!
photo42.save!
photo43.save!
photo44.save!
photo45.save!
photo46.save!
photo47.save!
photo48.save!
photo49.save!
photo51.save!
photo52.save!
photo53.save!
photo54.save!
photo55.save!
photo56.save!
photo57.save!
photo58.save!
photo59.save!
photo60.save!
photo61.save!
photo62.save!
photo63.save!
photo64.save!
photo65.save!
photo66.save!
photo67.save!
photo68.save!
photo69.save!
photo70.save!
photo71.save!
photo72.save!
photo73.save!
photo74.save!
photo75.save!
photo76.save!
photo77.save!
photo78.save!
photo79.save!
photo80.save!
photo81.save!
photo82.save!
photo83.save!
photo84.save!
photo85.save!
photo86.save!
photo87.save!
photo88.save!
photo89.save!
photo90.save!
photo91.save!
photo92.save!
photo93.save!
photo94.save!
photo95.save!
photo96.save!
photo97.save!
photo98.save!
photo99.save!
photo100.save!
photo101.save!
photo102.save!
photo103.save!
photo104.save!
photo105.save!
photo106.save!
photo107.save!
photo108.save!
photo109.save!
photo110.save!
photo111.save!
photo112.save!
photo113.save!
photo114.save!
photo115.save!
photo116.save!
photo117.save!
photo118.save!
photo119.save!
photo120.save!
photo121.save!
photo122.save!
photo123.save!
photo124.save!
photo125.save!
photo126.save!
photo127.save!
photo128.save!
photo129.save!
photo130.save!
photo131.save!
photo132.save!