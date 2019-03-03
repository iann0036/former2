$(document).ready(function() {
    var countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
        "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma",
        "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad",
        "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the",
        "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
        "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
        "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea",
        "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
        "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
        "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
        "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
        "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco",
        "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
        "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
        "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
        "Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone",
        "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
        "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
        "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
        "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
        "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    var capitals = [
        "Abu Dhabi", "Abuja", "Accra", "Adamstown", "Addis Ababa", "Algiers", "Alofi", "Amman", "Amsterdam",
        "Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Ashgabat", "Asmara", "Astana", "Asunción", "Athens",
        "Avarua", "Baghdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangkok", "Bangui", "Banjul", "Basseterre",
        "Beijing", "Beirut", "Belgrade", "Belmopan", "Berlin", "Bern", "Bishkek", "Bissau", "Bogotá", "Brasília",
        "Bratislava", "Brazzaville", "Bridgetown", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Bujumbura",
        "Cairo", "Canberra", "Caracas", "Castries", "Cayenne", "Charlotte Amalie", "Chisinau", "Cockburn Town",
        "Conakry", "Copenhagen", "Dakar", "Damascus", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha", "Douglas",
        "Dublin", "Dushanbe", "Edinburgh of the Seven Seas", "El Aaiún", "Episkopi Cantonment", "Flying Fish Cove",
        "Freetown", "Funafuti", "Gaborone", "George Town", "Georgetown", "Georgetown", "Gibraltar", "King Edward Point",
        "Guatemala City", "Gustavia", "Hagåtña", "Hamilton", "Hanga Roa", "Hanoi", "Harare", "Hargeisa", "Havana",
        "Helsinki", "Honiara", "Islamabad", "Jakarta", "Jamestown", "Jerusalem", "Juba", "Kabul", "Kampala",
        "Kathmandu", "Khartoum", "Kiev", "Kigali", "Kingston", "Kingston", "Kingstown", "Kinshasa", "Kuala Lumpur",
        "Kuwait City", "Libreville", "Lilongwe", "Lima", "Lisbon", "Ljubljana", "Lomé", "London", "Luanda", "Lusaka",
        "Luxembourg", "Madrid", "Majuro", "Malabo", "Malé", "Managua", "Manama", "Manila", "Maputo", "Marigot",
        "Maseru", "Mata-Utu", "Mbabane Lobamba", "Melekeok Ngerulmud", "Mexico City", "Minsk", "Mogadishu", "Monaco",
        "Monrovia", "Montevideo", "Moroni", "Moscow", "Muscat", "Nairobi", "Nassau", "Naypyidaw", "N'Djamena",
        "New Delhi", "Niamey", "Nicosia", "Nicosia", "Nouakchott", "Nouméa", "Nukuʻalofa", "Nuuk", "Oranjestad",
        "Oslo", "Ottawa", "Ouagadougou", "Pago Pago", "Palikir", "Panama City", "Papeete", "Paramaribo", "Paris",
        "Philipsburg", "Phnom Penh", "Plymouth Brades Estate", "Podgorica Cetinje", "Port Louis", "Port Moresby",
        "Port Vila", "Port-au-Prince", "Port of Spain", "Porto-Novo Cotonou", "Prague", "Praia", "Cape Town",
        "Pristina", "Pyongyang", "Quito", "Rabat", "Reykjavík", "Riga", "Riyadh", "Road Town", "Rome", "Roseau",
        "Saipan", "San José", "San Juan", "San Marino", "San Salvador", "Sana'a", "Santiago", "Santo Domingo",
        "São Tomé", "Sarajevo", "Seoul", "Singapore", "Skopje", "Sofia", "Sri Jayawardenepura Kotte", "St. George's",
        "St. Helier", "St. John's", "St. Peter Port", "St. Pierre", "Stanley", "Stepanakert", "Stockholm", "Sucre",
        "Sukhumi", "Suva", "Taipei", "Tallinn", "Tarawa Atoll", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran",
        "Thimphu", "Tirana", "Tiraspol", "Tokyo", "Tórshavn", "Tripoli", "Tskhinvali", "Tunis", "Ulan Bator", "Vaduz",
        "Valletta", "The Valley", "Vatican City", "Victoria", "Vienna", "Vientiane", "Vilnius", "Warsaw",
        "Washington, D.C.", "Wellington", "West Island", "Willemstad", "Windhoek", "Yamoussoukro", "Yaoundé", "Yaren",
        "Yerevan", "Zagreb"
    ];

    $.typeahead({
        input: "#typeahead-search-country-v1",
        order: "asc",
        minLength: 1,
        source: {
            data: countries
        }
    });

    $('#typeahead-search-country-v2').on('keyup', function() {
        if ($.trim($(this).val()) == '') {
            $('#result-container').text('No results matching');
        }
    });

    $.typeahead({
        input: "#typeahead-search-country-v2",
        order: "asc",
        minLength: 1,
        maxItem: 10,
        template: "{{display}} <small style='color:#999;'>{{group}}</small>",
        source: {
            country: {
                data: countries
            },
            capital: {
                data: capitals
            }
        },
        callback: {
            onResult: function (node, query, result, resultCount) {
                if (query === "")  {
                    $('#result-container').html('');

                    return;
                }

                var text = "";
                if (result.length > 0 && result.length < resultCount) {
                    text = "Showing <strong>" + result.length + "</strong> of <strong>" + resultCount + '</strong> elements matching "' + query + '"';
                } else if (result.length > 0) {
                    text = 'Showing <strong>' + result.length + '</strong> elements matching "' + query + '"';
                } else {
                    text = 'No results matching "' + query + '"';
                }
                $('#result-container').html(text);
            },
            onMouseEnter: function (node, a, item, event) {
                if (item.group === "country") {
                    $(a).append('<span class="flag-chart flag-' + item.display.replace(' ', '-').toLowerCase() + '"></span>')
                }
            },
            onMouseLeave: function (node, a, item, event) {
                $(a).find('.flag-chart').remove();
            }
        }
    });

    var words = [
        "aberdeen-angus", "Abominablement", "abaca", "aberrance", "abominant", "abachi", "aberrant", "abomination", "aback",
        "aberration", "abomination de la désolation", "abacus", "aberration chromatique", "abominé", "abadir",
        "aberration chromosomique", "abominer", "abaissant", "aberration optique", "abondamment", "abaisse",
        "aberration sphérique", "abondance", "abaissé", "aberré", "abondance de biens ne nuit pas", "abaisse-langue",
        "abet", "abondant", "abaissement", "abêti", "abondé", "abaisser", "abêtir", "abondement", "abaisseur", "abêtissant",
        "abonder", "abajoue", "Abêtissement", "abonnant", "abalone", "abeyance", "abonné", "abalourdir", "abgal",
        "abonnement", "abamectine", "ab hoc", "abonner", "abandon", "abhor", "abonnir", "abandon de caddie", "abhorrant",
        "aboral", "abandon de créance", "abhorré", "abord", "abandon de poste", "abhorrence", "abordable", "abandonnant",
        "abhorrent", "abordage", "abandonné", "abhorrer", "abordant", "abandonner", "abide", "abordé", "abandonnique",
        "abiding", "aborder", "abaque", "abidjanais", "aborder un vaisseau ennemi", "abase", "abidjanaise", "abords",
        "abasie", "abies", "aborigène", "abasourdi", "abies alba", "aboriginal", "abasourdir", "abies fraseri", "aborigine",
        "abasourdissant", "abies numidica", "abornement", "abat", "abiétacée", "aborner", "abatage", "ability", "abort",
        "abâtardi", "abîmant", "abortif", "abâtardir", "abîme", "abortion", "abâtardissant", "abîmé", "abortive", "abate",
        "abimer", "abot", "abatellement", "abîmer", "abouchant", "abatement", "abouché", "abat-faim",
        "abiogenèse", "aboucher", "abatis", "abiose", "aboulant", "abat-jour", "abiotique", "aboulé", "abator", "ABIR",
        "abouler", "abats", "ab irato", "aboulie", "abat-son", "abject", "aboulique", "Abattable", "Abjectement", "abound",
        "abattage", "abjection", "about", "abattant", "abjurant", "aboutage", "abatte", "Abjuration", "aboutant",
        "abattement", "abjuratoire", "abouté", "abattement fiscal", "abjure", "aboutement", "Abatteur", "abjuré", "abouter",
        "abattis", "abjurer", "about-face", "abattoir", "abkhaze", "abouti", "abattre", "ablactation", "aboutir", "abattu",
        "ablatant", "aboutissant", "abattue", "ablaté", "aboutissants", "Abat-vent", "ablatif", "aboutissement", "abat-voix",
        "ablation", "above", "abave", "ablatir", "aboveboard", "abaxial", "ablative", "Above the line", "abbasside",
        "ablativo", "aboyant", "abbatial", "ablaze", "aboyé", "abbatiale", "able", "aboyer", "abbatiat", "ablégat",
        "aboyeur", "abbaye", "ablégation", "Abracadabra", "Abbaye de Westminster", "ableret", "abracadabrant", "abbé",
        "ablet", "abracadabresque", "abbess", "ablette", "abradant", "abbesse", "ablier", "abrasant", "abbevillien",
        "abloquant", "abrasé", "abbey", "abloqué", "abraser", "abbot", "abluant", "abrasif", "abbreviation", "abluer",
        "abrasimètre", "abc", "ablution", "abrasion", "abcès", "ablutions", "abrasive", "Abcès dentaire", "ablutophobie",
        "abréaction", "ABD", "ably", "abréagir", "abdicate", "abnegation", "abreast", "abdication", "abnégation", "abrégé",
        "abdiquant", "abnormal", "abrégeant", "abdiqué", "abnormality", "abrégement", "abdiquer", "abnormally", "abrègement",
        "abdomen", "aboard", "abrégément", "abdominal", "abode", "abréger", "abdominaux", "aboi", "abreuvage", "abduct",
        "aboiement", "abreuvant", "abducteur", "abois", "abreuvé", "abduction", "aboli", "Abreuvement", "abductor", "abolir",
        "abreuver", "abécédaire", "abolish", "abreuvoir", "abée", "abolissant", "abréviatif", "abeillage", "abolissement",
        "abréviation", "abeille", "abolition", "abréviativement", "abeille charpentière", "abolitionism", "abréviature",
        "abeiller", "abolitionist", "abrévié", "abeillère", "abolitionnisme", "abri", "abélien", "Abolitionniste", "abribus",
        "abelisaurus", "abomasum", "abricot", "aber", "abominable", "abricotant", "abricoté", "abricoter", "abricotier",
        "abricotier du japon", "abricot sec", "abrictosaurus", "abri de jardin", "abridge", "abrier", "abri météorologique",
        "abri-sous-roche", "abritant", "abrité", "abriter", "abrivent", "abroad", "abrogate", "abrogatif", "abrogation",
        "abrogé", "abrogeable", "abrogeant", "abroger", "abronia graminea", "abrosaurus", "abrouti", "abroutir", "abrupt",
        "abruptement", "abruptly", "abruti", "abrutir", "abrutissant", "abrutissement", "abrutisseur", "ABS", "ABSA",
        "abscess", "abscissa", "abscisse", "abscission", "abscond", "absconder", "absconding", "abscons", "absconse",
        "abseil", "abseiling", "absence", "absent", "absentant", "absenté", "absentee", "absenteeism", "absentéisme",
        "absentéiste", "absenter", "absentia", "absidal", "abside", "absidial", "absidiole", "absinth", "absinthe",
        "absinthé", "absolu", "absoluité", "absolument", "absolute", "absolutely", "absolutif", "absolution", "absolutism",
        "absolutisme", "absolutist", "absolutiste", "absolutoire", "absolvant", "absolve", "absorb", "absorbable",
        "absorbant", "absorbé", "absorbement", "absorbent", "absorber", "absorbeur", "Absorbeur de vapeurs d'essence",
        "absorptiométrie", "absorption", "absorption intestinale", "absorption racinaire", "absorptivité", "absoudre",
        "absous", "absoute", "abstain", "abstème", "abstemious", "abstenant", "abstention", "abstentionnisme",
        "abstentionniste", "abstenu", "abstergent", "absterger", "abstersif", "abstersion", "abstinence", "abstinent",
        "abstracteur", "abstractif", "abstraction", "abstractivement", "abstraire", "abstrait", "abstraitement",
        "abstrayant", "abstrus", "abstruse", "absurd", "absurde", "absurdement", "absurdité", "absurdity", "abundance",
        "abundant", "abundantly", "abus", "abusant", "abus de bien social", "abus de biens sociaux", "abus de confiance",
        "abus de droit", "abus de faiblesse", "abus de langage", "abus de majorité", "abus de minorité", "abuse", "abusé",
        "abuser", "abuser d'une personne", "abuseur", "abusif", "abusive", "abusivement", "abusus", "abut", "abuter",
        "abutilon", "abutment", "abyme", "abysmal", "abyss", "abyssal", "abysse", "abyssin", "Abyssinian", "abyssinien", "abyssinienne"
    ];

    $('#words').typeahead({
        minLength: 0,
        maxItem: 10,
        order: "asc",
        hint: true,
        accent: true,
        searchOnFocus: true,
        backdrop: {
            "background-color": "#3879d9",
            "opacity": "0.1",
            "filter": "alpha(opacity=10)"
        },
        source: words
    });

    var categories = {
        ale: [
            "Affligem Blonde", "Amsterdam Big Wheel", "Amsterdam Boneshaker IPA", "Amsterdam Downtown Brown", "Amsterdam Oranje Summer White",
            "Anchor Liberty Ale", "Beaus Lug Tread Lagered Ale", "Beerded Lady", "Belhaven Best Ale", "Big Rock Grasshopper Wheat",
            "Big Rock India Pale Ale", "Big Rock Traditional Ale", "Big Rock Warthog Ale", "Black Oak Nut Brown Ale", "Black Oak Pale Ale",
            "Boddingtons Pub Ale", "Boundary Ale", "Caffreys", "Camerons Auburn Ale", "Camerons Cream Ale", "Camerons Rye Pale Ale", "Ceres Strong Ale",
            "Cheval Blanc", "Crazy Canuck Pale Ale", "Creemore Springs Altbier", "Crosswind Pale Ale", "De Koninck", "Delirium Tremens",
            "Erdinger Dunkel Weissbier", "Erdinger Weissbier", "Export", "Flying Monkeys Amber Ale", "Flying Monkeys Antigravity",
            "Flying Monkeys Hoptical", "Flying Monkeys Netherworld", "Flying Monkeys Smashbomb", "Fruli", "Fullers Extra Spec Bitter",
            "Fullers London Pride", "Granville English Bay Pale", "Granville Robson Hefeweizen", "Griffon Pale Ale", "Griffon Red Ale",
            "Hacker-Pschorr Hefe Weisse", "Hacker-Pschorr Munchen Gold", "Hockley Dark Ale", "Hoegaarden", "Hops & Robbers IPA", "Houblon Chouffe",
            "James Ready Original Ale", "Kawartha Cream Ale", "Kawartha Nut Brown Ale", "Kawartha Premium Pale Ale", "Kawartha Raspberry Wheat",
            "Keiths", "Keiths Cascade Hop Ale", "Keiths Galaxy Hop Ale", "Keiths Hallertauer Hop Ale", "Keiths Hop Series Mixer",
            "Keiths Premium White", "Keiths Red", "Kilkenny Cream Ale", "Konig Ludwig Weissbier", "Kronenbourg 1664 Blanc", "La Chouffe",
            "La Messager Red Gluten Free", "Labatt 50 Ale", "Labatt Bass Pale Ale", "Lakeport Ale", "Leffe Blonde", "Leffe Brune",
            "Legendary Muskoka Oddity", "Liefmans Fruitesse", "Lions Winter Ale", "Maclays", "Mad Tom IPA", "Maisels Weisse Dunkel",
            "Maisels Weisse Original"
        ],
        lager: [
            "AC-DC Premium Lager", "Alpine Lager", "Amstel Light", "Amsterdam (416) Local Lager", "Amsterdam Natural Blonde", "Anchor Steam Beer",
            "Barking Squirrel Lager", "Bavaria 8.6", "Bavaria 8.6 Red", "Bavaria Grapefruit Radler", "Bavaria Premium Beer", "Bavik Pils",
            "Baysville Rock Cut Lager", "Becks", "Belle Gueule", "Big Rock Brewmasters Selection", "Big Rock Light Lime", "Big Rock Saaz Republic Pilz",
            "Birra Castello", "Birra Moretti", "Bitburger", "Black Ice", "Black Label", "Blue", "Blue Light", "Bohemian", "Boris Beer",
            "Boris Bold Strong Beer", "Boxer Ice", "Boxer Lager", "Brava", "Brava 5.5", "Brava Light", "Brouczech Premium Lager", "Bud Light",
            "Bud Light Lime", "Bud Light Lime Labatt", "Bud Light Platinum", "Budweiser", "Budweiser Crown", "Budweiser Shot Labatt", "Busch Ice",
            "Busch Lager", "Busch Light", "Camerons Dark266", "Camerons Lager", "Canadian", "Canadian 67", "Canadian 67 Sublime", "Canadian Coldshots",
            "Carib Lager", "Carling Ice", "Carling Lager", "Carling Light", "Carlsberg", "Carlsberg Lite", "Cool Beer Lager", "Coors Banquet", "Coors Light",
            "Corona", "Corona Light", "Cracked Canoe", "Creemore Collection", "Creemore Kellerbier", "Creemore Lager", "Creemore Springs Combo Pack",
            "Creemore Trad Pilsner", "Creemore Urbock", "Crest Super", "Crystal", "Czechvar", "Dab Maibock", "Dab Original Lager", "Dead Frog Mixed Pack",
            "Desperados Tequila Beer", "Dos Equis Amber", "Dos Equis Lager", "Dunkel Weihenstephaner", "Faxe Amber Lager", "Faxe Extra Strong - 10",
            "Faxe Premium Lager - 5", "Faxe Red", "Faxe Strong", "Formosa Springs Draft", "Fosters Import", "Fuerstenberg Prem Pilsener", "Get2gether",
            "Granville Summer Mingler", "Grolsch Lager 450ml", "Grolsch Premium Lager", "Guinness Black Lager", "Hacker-Pschorr Kellerbier", "Harbin Beer",
            "Harp Lager", "Heineken", "Henninger Premium Lager", "Hockley Taster Pack", "Hofbraeu Muenchen Original", "Hogsback Vintage Lager",
            "Hollandia Pilsner", "Holsten Festbock", "Holsten Maibock", "Holsten Premium Bier", "Hopf Weisse", "Hops Bolts India Pale Lager",
            "James Ready 5.5"
        ],
        "stout and porter": [
            "Belhaven Black Scottish Stout", "Guinness Draught Bottle", "Guinness Extra Stout", "Guinness Pub Draught", "Murphys Irish Stout",
            "Muskoka Chocolate Cranberry", "Sleeman Fine Porter"
        ],
        malt: [
            "Boxer Watermelon", "Bud Light Lime Lime-a-rita", "Bud Light Lime Mang-o-rita", "Bud Light Lime Straw-ber-rita", "Colt 45",
            "DJ Trotters Flirty Daiquiri", "DJ Trotters Lolita", "Four Loko Black Cherry", "Four Loko Fruit Punch", "Four Loko Grape", "Four Loko Lemonade",
            "Four Loko Peach", "Four Loko Watermelon", "Kensington Watermelon Wheat", "Mad Jack", "Mickeys", "Mojo Fruit Punch", "Mojo Shot Blue Lagoon",
            "Mojo Shot Melon Ball", "Mojo Shot Sourberry", "Mojo Strawberry & Kiwi", "Mons Abbey Blonde", "Mons Abbey Witte", "Olde English 800",
            "Pepito Sangria", "Poppers Cran Ice", "Poppers Hard Ice", "Poppers Orange Smoothie", "Poppers Pink", "Poppers Ricco Sangria", "Poppers Wild Ice",
            "Seagram Iced Lemon Tea", "Seagram Lemon Lime", "Seagram Orange Mango", "Seagram Wildberry", "Seagram Wildberry Extra 6.9", "Twisted Tea", "Wellington Iron Duke"
        ]
    };

    $('#categories').typeahead({
        minLength: 1,
        maxItem: 15,
        order: "asc",
        hint: true,
        group: [true, "{{group}} beers!"],
        maxItemPerGroup: 5,
        dropdownFilter: "all beers",
        emptyTemplate: 'No result for "{{query}}"',
        source: {
            ale: {
                data: categories.ale
            },
            lager: {
                data: categories.lager
            },
            "stout and porter": {
                data: categories['stout and porter']
            },
            malt: {
                data: categories.malt
            }
        }
    });

    $('#users').typeahead({
        minLength: 1,
        order: "asc",
        dynamic: true,
        delay: 500,
        template: function (query, item) {
            var color = "#777";
            if (item.status === "owner") {
                color = "#ff1493";
            }

            return '<span class="row">' +
                '<span class="avatar">' +
                '<img src="{{avatar}}" width="32" height="32">' +
                "</span>" +
                '<span class="username">{{username}} <small style="color: ' + color + ';">({{status}})</small></span>' +
                '<span class="id">({{id}})</span>' +
                "</span>"
        },
        source: {
            user: {
                display: "username",
                href: "https://www.github.com/{{username}}",
                data: [{
                    "id": 415849,
                    "username": "an inserted user that is not inside the database",
                    "avatar": "https://avatars3.githubusercontent.com/u/415849",
                    "status":  "contributor"
                }],
                url: [{
                    type: "GET",
                    url: "http://themesanytime.com/startui/data/typeahead/users.php",

                    data: {
                        q: "{{query}}"
                    },
                    callback: {
                        done: function (data) {
                            for (var i = 0; i < data.data.user.length; i++) {
                                if (data.data.user[i].username === 'running-coder') {
                                    data.data.user[i].status = 'owner';
                                } else {
                                    data.data.user[i].status = 'contributor';
                                }
                            }
                            return data;
                        }
                    }
                }, "data.user"]
            },
            project: {
                display: "project",
                href: function (item) {
                    return '/' + item.project.replace(/\s+/g, '').toLowerCase() + '/documentation/'
                },
                url: [{
                    type: "GET",
                    url: "http://themesanytime.com/startui/data/typeahead/users.php",
                    data: {
                        q: "{{query}}"
                    }
                }, "data.project"],
                template: '<span>' +
                '<span class="project-logo">' +
                '<img src="{{image}}" width="32" height="32">' +
                '</span>' +
                '<span class="project-information">' +
                '<span class="project">{{project}} <small>{{version}}</small></span>' +
                '<ul>' +
                '<li>{{demo}} Demos</li>' +
                '<li>{{option}}+ Options</li>' +
                '<li>{{callback}}+ Callbacks</li>' +
                '</ul>' +
                '</span>' +
                '</span>'
            }
        },
        callback: {
            onClick: function (node, a, item, event) {
                // You can do a simple window.location of the item.href
                //alert(JSON.stringify(item));
            },
            onSendRequest: function (node, query) {
                console.log('request is sent, perhaps add a loading animation?')
            },
            onReceiveRequest: function (node, query) {
                console.log('request is received, stop the loading animation?')
            }
        }
    });

    function formatRepo (repo) {
        if (repo.loading) return repo.text;

        var markup = "<div class='select2-result-repository clearfix'>" +
            "<div class='select2-result-repository__avatar'><img src='" + repo.owner.avatar_url + "' /></div>" +
            "<div class='select2-result-repository__meta'>" +
            "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";

        if (repo.description) {
            markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
        }

        markup += "<div class='select2-result-repository__statistics'>" +
            "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.forks_count + " Forks</div>" +
            "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.stargazers_count + " Stars</div>" +
            "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " + repo.watchers_count + " Watchers</div>" +
            "</div>" +
            "</div></div>";

        return markup;
    }

    function formatRepoSelection (repo) {
        return repo.full_name || repo.text;
    }

    $("#js-data-example-ajax").select2({
        ajax: {
            url: "https://api.github.com/search/repositories",
            dataType: 'json',
            delay: 250,
            data: function (params) {
                console.log(params);

                return {
                    q: params.term, // search term
                    page: params.page
                };
            },
            processResults: function (data, params) {
                // parse the results into the format expected by Select2
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data, except to indicate that infinite
                // scrolling can be used
                params.page = params.page || 1;

                return {
                    results: data.items,
                    pagination: {
                        more: (params.page * 30) < data.total_count
                    }
                };
            },
            cache: false
        },
        escapeMarkup: function (markup) { return markup; },
        minimumInputLength: 1,
        templateResult: formatRepo,
        templateSelection: formatRepoSelection
    });
});
