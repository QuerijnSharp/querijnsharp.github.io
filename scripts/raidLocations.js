//Set raidlocations
var RaidLocations = [{
    name: "Langeleenweg Tunnel Èiè mural",
    location: "Fietsers tunnel bij de Gamma (Bossenburg)",
    reaction: "🛹",
    exraid: false
}, {
    name: "Skatebaan Bossenburgh",
    location: "Bossenburgh, bij CSW en Scheldemond",
    reaction: "🛣",
    exraid: true
}, {
    name: "Graffiti skatebaan Bossenburgh",
    location: "Bossenburgh, bij CSW en Scheldemond",
    reaction: "👩🏻‍🎨",
    exraid: true
}, {
    name: "Apostolische gemeenschap",
    location: "Lammerenburg/Rosenburg",
    reaction: "🏚",
    exraid: false
}, {
    name: "Speel waar het kan en mag",
    location: "Sterkenburg, Bossenburgh",
    reaction: "🎮",
    exraid: false
}, {
    name: "Blijdier Saar",
    location: "Nieuw Bonedijkelaan ",
    reaction: "⭕",
    exraid: false
}, {
    name: "Buizen in het gras",
    location: "Rosenburglaan",
    reaction: "🦗",
    exraid: false
}, {
    name: "Playground Lammerenburg",
    location: "Strandwal",
    reaction: "▶",
    exraid: true
}, {
    name: "Mural House",
    location: "Kanariesprenk/Papegaaienburg",
    reaction: "🏡",
    exraid: false
}, {
    name: "Metal Papegaaienburg",
    location: "Kanariesprenk",
    reaction: "🤖",
    exraid: false
}, {
    name: "Weyevliet Mural",
    location: "Weyevlietpad",
    reaction: "👣",
    exraid: false
}, {
    name: "One Wish and a very big Fish",
    location: "President Rooseveltlaan",
    reaction: "🐠",
    exraid: true
}, {
    name: "Scheve blokken",
    location: "Van Dycklaan",
    reaction: "👒",
    exraid: true
}, {
    name: "Straat Mozaïek",
    location: "Gravestraat",
    reaction: "👺",
    exraid: false
}, {
    name: "Vuurtoren/Michieltje",
    location: "Boule",
    reaction: "⚓",
    exraid: false
}, {
    name: "700 Jaar Vlissingen/Timmerfabriek",
    location: "Koningsweg",
    reaction: "💕",
    exraid: false
}, {
    name: "Graffiti",
    location: "President Rooseveltlaan",
    reaction: "🎃",
    exraid: false
}, {
    name: "Balans/Ter Reede",
    location: "Koudekerkseweg",
    reaction: "👵🏻",
    exraid: false
}, {
    name: "Nieuw Apostolische Kerk",
    location: "West Souburg",
    reaction: "⛪",
    exraid: true
}, {
    name: "Kruis Kerk de Schaapskooi ",
    location: "Winkelcentrum Papegaaienburg",
    reaction: "🐑",
    exraid: false
}, {
    name: "Souburg City Windwill",
    location: "Kanaalstraat",
    reaction: "🐶",
    exraid: false
}, {
    name: "Flying Dutchman",
    location: "Stadhuisplein",
    reaction: "🇳🇱",
    exraid: false
}, {
    name: "Badeend Mozaïek",
    location: "Nieuw Bonedijkelaan",
    reaction: "❌",
    exraid: true
}, {
    name: "Papegaai in Glas",
    location: "Papegaaienburg",
    reaction: "🦜",
    exraid: true
}, {
    name: "Speelplastiek",
    location: "Aletta Jacobslaan",
    reaction: "🐝", //DUPLICATE
    exraid: true
}, {
    name: "Kleurige Tegels 2",
    location: "Adriaen Coortelaan",
    reaction: "🥳",
    exraid: false
}, {
    name: "Standbeelden Bambini",
    location: "Bambini",
    reaction: "🌴",
    exraid: false
}, {
    name: "Fire eyes",
    location: "Cirkel Paauwenburg",
    reaction: "🙃", //🤩
    exraid: false
}, {
    name: "Statue Frans Naerebout",
    location: "Boule",
    reaction: "🧦", //DUPLICATE
    exraid: false
}, {
    name: "Adventkerk",
    location: "Kerklaan, West-Souburg",
    reaction: "🧢",
    exraid: false
}, {
    name: "Familie Pilaar",
    location: "Groen van prinksterenlaan",
    reaction: "🤯",
    exraid: true
}, {
    name: "Speelplaats het Fort",
    location: "Pieter Poststraat",
    reaction: "🖤",
    exraid: false
}, {
    name: "Las Vegas",
    location: "Bloemenlaan/Singel",
    reaction: "💋",
    exraid: false
}, {
    name: "Boeiend/Bioscoop",
    location: "Spuikomweg",
    reaction: "🎞",
    exraid: true //Niet zeker
}, {
    name: "Fysiotherapie",
    location: "Burgemeester van Woelderenlaan",
    reaction: "🧘🏻",
    exraid: false
}, {
    name: "The Watertower",
    location: "Badhuisstraat",
    reaction: "💧",
    exraid: false
}, {
    name: "Spider's Web Playground",
    location: "Westerzicht",
    reaction: "🕸",
    exraid: false
}, {
    name: "Scheldestraat Mural",
    location: "Scheldestraat",
    reaction: "💈",
    exraid: false
}, {
    name: "Plaatwerkerij",
    location: "Hellingbaan",
    reaction: "🛡",
    exraid: false
}, {
    name: "Windvaan",
    location: "Walstraat / Coosje Buskenstraat",
    reaction: "🧸",
    exraid: false
}, {
    name: "De Gevangentoren",
    location: "Boulevard de Ruyter",
    reaction: "📖",
    exraid: false
}, {
    name: "Beursgebouw",
    location: "Keizersbolwerk / Beursplein",
    reaction: "📐",
    exraid: false
}, {
    name: "Dichter in het park",
    location: "Hofje de Pauw / Beurstraat",
    reaction: "🧱",
    exraid: false
}, {
    name: "Ergens Ben Ik Anders Ben Ik Ne / Arsenaal toren",
    location: "Arsenaal",
    reaction: "🛠",
    exraid: false
}, {
    name: "Oranjenolen Anno 1699",
    location: "Oranjedijk",
    reaction: "🔨",
    exraid: false
}, {
    name: "Biber (Submarine) 313",
    location: "Oranjedijk",
    reaction: "💎",
    exraid: true
}, {
    name: "Holle Beer Build",
    location: "Commandoweg",
    reaction: "📺",
    exraid: true
}, {
    name: "Brandingssculptuur \"Eruption\"",
    location: "Boulevard Bankert",
    reaction: "📟",
    exraid: false
}, {
    name: "Mosaic Nordsea Fish",
    location: "Boulevard Evertsen",
    reaction: "📞",
    exraid: false
}, {
    name: "Kerk Pinkster Gemeente",
    location: "Vrijdomweg",
    reaction: "📹",
    exraid: false
}, {
    name: "Koopvaardij",
    location: "Nollehoofd / President Rooseveltlaan",
    reaction: "📷",
    exraid: false
}, {
    name: "David Smithson | Tower of impeccable notes",
    location: "Sloeweg / Sportpark Bonedijke",
    reaction: "📼",
    exraid: true
}, {
    name: "Leeuwenkop",
    location: "Falckstraat",
    reaction: "💿",
    exraid: false
}, {
    name: "Regenboogflat Groen",
    location: "Alexander Gogelweg",
    reaction: "💽",
    exraid: false
}, {
    name: "Het Anker",
    location: "Jumbo Pauwenburg",
    reaction: "🖱",
    exraid: false
}, {
    name: "Vlietberg",
    location: "Mozartlaan Pauwenburg",
    reaction: "🖥",
    exraid: false
}, {
    name: "Crazy Blocks",
    location: "Offenbachlaan",
    reaction: "📱",
    exraid: false
}, {
    name: "De Scheldestad",
    location: "Gebrandystraat",
    reaction: "⌚",
    exraid: false
}, {
    name: "Bollen Langs De Weg",
    location: "Albert van dalsumlaan",
    reaction: "📍",
    exraid: true
}];