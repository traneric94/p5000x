User.destroy_all
Photo.destroy_all
 
user0 = User.new(username: "NativeHawaiian", email: "NativeHawaiian@user.com", password: "coconutty", fName: "Maui", lName: "Tidepool")
user1 = User.new(username: "FirstLibrarian" , email:"freebooks@city.net", password: "booklover", fName:"Steven", lName: "Universe" )
user2 = User.new(username: "fashionista", email: "queen@branding.com", password: "gucci&chanel", fName: "Lizard", lName: "Lee")
user3 = User.new(username: "chefD", email:"dessert@explorer.com", password: "creampuffs", fName: "Jasmine", lName:"Eclair")
user4 = User.new(username: "FitnessExpert", email:"push@up.com", password: "slimfit", fName: "Jordan", lName:"Jumper")
user5 = User.new(username: "doggo", email:"good@boy.com", password: "treats", fName: "Corgi", lName:"Curtis")
user6 = User.new(username: "foodie", email:"foodie@favorites.com", password: "nuggets", fName: "McFoodie", lName:"Favorites")
user7 = User.new(username: "HealthBeast", email:"fruity@favorites.com", password: "acaibowls", fName: "Healthy", lName:"Beast")
user8 = User.new(username: "LAvibes", email:"red@carpet.com", password: "hollywood", fName: "LA", lName:"Vibes")
user9 = User.new(username: "DankMemes", email:"dankmemes@readit.com", password: "frogboi", fName: "Dank", lName:"Memes")
user10 = User.new(username: "musiclover", email:"song@lyrics.com", password: "soulsoothing", fName: "Edward", lName:"Cheeran")
user11 = User.new(username: "raveslave", email:"friday@weekend.com", password: "coachella", fName: "Music", lName:"Festivals")
user12 = User.new(username: "BestRanger", email:"ranger@nationalparks.com", password: "yosemite", fName: "Darrel", lName:"Franklin")
user13 = User.new(username: "WildNature", email:"green@nature.com", password: "leaves", fName: "Wilderness", lName:"Explorer")
user14 = User.new(username: "PattythePoet", email:"PattythePoet@writer.com", password: "haikus", fName: "Patty", lName:"Lenard")
user15 = User.new(username: "SeasonsofLove", email:"seasons@nature.com", password: "fallyall", fName: "Frank", lName:"Fall")
user16 = User.new(username: "jeffstyle", email:"hype@fashion.com", password: "streetwear", fName: "Jeff", lName:"Streets")
user17 = User.new(username: "WaysToTravel", email:"flight@plane.com", password: "train", fName: "Alex", lName:"Plain")
user18 = User.new(username: "traveler", email:"urbanization@explorer.com", password: "nosleep", fName: "Mike", lName:"Night")
user19 = User.new(username: "society", email:"different@types.com", password: "people", fName: "Justin", lName:"Interviews")
 
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
 photo50 = Photo.new(
   title: "Light Up",
   description: "Unforgettable",
   author_id: user10.id
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
photo50.image.attach(io: File.open("./app/assets/images/seedpics/concert3.jpg"), filename: "concert3.jpg")
photo51.image.attach(io: File.open("./app/assets/images/seedpics/festival3.jpg"), filename: "festival3.jpg")
photo52.image.attach(io: File.open("./app/assets/images/seedpics/park3.jpg"), filename: "park3.jpg")
photo53.image.attach(io: File.open("./app/assets/images/seedpics/wild3.jpg"), filename: "wild3.jpg")
photo54.image.attach(io: File.open("./app/assets/images/seedpics/NY3.jpg"), filename: "NY3.jpg")
photo55.image.attach(io: File.open("./app/assets/images/seedpics/quote3.jpg"), filename: "quote3.jpg")
photo56.image.attach(io: File.open("./app/assets/images/seedpics/seasons3.jpg"), filename: "seasons3.jpg")
photo57.image.attach(io: File.open("./app/assets/images/seedpics/streetwear3.jpg"), filename: "streetwear3.jpg")
photo58.image.attach(io: File.open("./app/assets/images/seedpics/transportation3.jpg"), filename: "transportation3.jpg")
photo59.image.attach(io: File.open("./app/assets/images/seedpics/travel3.jpg"), filename: "travel3.jpg")
 
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
photo50.save!
photo51.save!
photo52.save!
photo53.save!
photo54.save!
photo55.save!
photo56.save!
photo57.save!
photo58.save!
photo59.save!