# list-ში შეგვიძლია ცვლადის დამატება, ხოლო tuple-ში არა



favorite_movies = ("The Shawshank Redemption", "Inception", "The Godfather", "Interstellar", "The Dark Knight")
print("პირველი ფილმი:", favorite_movies[0])
print("ბოლო ფილმი:", favorite_movies[-1])




week_days = ("ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა")


ors = week_days[0]
sam = week_days[1]
otx = week_days[2]
xut = week_days[3]
paraskevi = week_days[4]
shabati = week_days[5]
kvira = week_days[6]

print("პირველი დღე:", ors)
print("მეორე დღე:", sam)
print("მესამე დღე:", otx)
print("მეოთხე დღე:", xut)
print("მეხუთე დღე:", paraskevi)
print("მეექვსე დღე:", shabati)
print("მეშვიდე დღე:", kvira)



fruits = ("ვაშლი", "ბანანი", "ფორთოხალი", "მსხალი", "ანანასი")

if "ბანანი" in fruits:
    print("tuple შეიცავს ელემენტს 'ბანანი'")
else:
    print("tuple არ შეიცავს ელემენტს 'ბანანი'")

if "საზამთრო" in fruits:
    print("tuple შეიცავს ელემენტს 'საზამთრო'")
else:
    print("tuple არ შეიცავს ელემენტს 'საზამთრო'")


fruits = ("banana", "cherry", "strawberry", "raspberry")
(first, *second, third) = fruits

print(first)
print(second)
print(third)

"banana"
['cherry', 'strawberry']
"raspberry"