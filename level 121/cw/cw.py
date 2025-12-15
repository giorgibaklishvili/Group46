def vendingMachine(products, balance, Drink):
    for i in products:
        print(i)

    print()
    print(f'your balance is {balance}$')
    print()
    user_input = int(input('Enter a product number: '))
    product = products[user_input][:-3]

    print(f'you got {product}')
    print()
    for i in Drink:
        print(i)
    print()
    user_input1 = int(input('Enter a Drink number: '))
    drink = Drink[user_input1][:-3]
    print(f'you got {product} and {drink}')
    

vendingMachine(['2$ - Snickers (0)', '5$ - Oreo (1)', '2$ - KitKat (2)', '2$ - Bounty (3)', '3$ - Mars (4)', 
     '4$ - Twix (5)', '6$ - Haribo (6)'],10,["2$ - CocaCola (0)", "2$ - Sprite (1)", "3$ - Fanta (2)"])