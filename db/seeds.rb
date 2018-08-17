# User (username, password)
# Photo (title, description, author_id)
# Photo attach
User.destroy_all
Photo.destroy_all

user0 = User.create!(username: "UserMcUserface", password: "password")
user1 = User.create!(username: "@RealDonaldTrump", password: "password")
user2 = User.create!(username: "ThirdWorldBeanFarmer", password: "password")

photo0 = Photo.new(
  title: "BØRNS",
  description: "OSL 2018",
  author_id: user0.id
)
photo1 = Photo.new(
  title: "Thnks fr th Mmrs Pt2",
  description: "Coming Soon",
  author_id: user0.id
)
photo2 = Photo.new(
  title: "Ryan Mapa",
  description: "Keepin it TAIT since \'87'",
  author_id: user0.id
)
photo3 = Photo.new(
  title: "\"This water\'s cold\" - this lady",
  description: "-Eric Tran",
  author_id: user0.id
)

photo4 = Photo.new(
  title: "Doge",
  description: "Biscuit",
  author_id: user0.id
)
photo5 = Photo.new(
  title: "Moon",
  description: "Lunar Eclipse",
  author_id: user1.id
)
photo6 = Photo.new(
  title: "Cautionary Words",
  description: "Safety First",
  author_id: user1.id
)
photo61 = Photo.new(
  title: "Wedding Bouquet",
  description: "",
  author_id: user1.id
)
photo7 = Photo.new(
  title: "Statue of Liberty",
  description: "SF Mornings",
  author_id: user0.id
)
photo8 = Photo.new(
  title: "Reina",
  description: "Baby!",
  author_id: user0.id
)
photo9 = Photo.new(
  title: "Who Let The Dogs Out",
  description: "Me and My DAWGS (My Dogs and I?)",
  author_id: user2.id
)
photo10 = Photo.new(
  title: "Japan",
  description: "Shinjuku",
  author_id: user2.id
)
photo11 = Photo.new(
  title: "Banjo Lizard",
  description: "Blue Moon over Kentucky",
  author_id: user2.id
)
photo12 = Photo.new(
  title: "Elijah Wood",
  description: "",
  author_id: user0.id
)
photo13 = Photo.new(
  title: "Rebel without a Cause",
  description: "",
  author_id: user0.id
)

photo0.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/borns.jpg"), filename: "borns.jpg")
photo1.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/monkey.jpg"), filename: "monkey.jpg")
photo2.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/ryan.jpg"), filename: "ryan.jpg")
photo3.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/lady.jpg"), filename: "lady.jpg")
photo4.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/dog.jpg"), filename: "dog.jpg")
photo5.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/lunar.jpg"), filename: "lunar.jpg")
photo6.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/words.jpg"), filename: "words.jpg")
photo61.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/bouquet.jpg"), filename: "bouquet.jpg")
photo7.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/statue.jpg"), filename: "statue.jpg")
photo8.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/baby.jpg"), filename: "baby.jpg")
photo9.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/animal.jpg"), filename: "animal.jpg")
photo10.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/japan.jpg"), filename: "japan.jpg")
photo11.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/banjo.jpg"), filename: "banjo.jpg")
photo12.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/wood.jpg"), filename: "wood.jpg")
photo13.image.attach(io: File.open("/Users/eric_tran/Desktop/pictures/dogg.jpg"), filename: "dogg.jpg")

photo0.save!
photo1.save!
photo2.save!
photo3.save!
photo4.save!
photo5.save!
photo61.save!
photo7.save!
photo8.save!
photo9.save!
photo10.save!
photo11.save!
photo12.save!
photo13.save!
