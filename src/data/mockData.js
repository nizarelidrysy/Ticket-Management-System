export const TEAMS = [
    {
        "id": "MAR",
        "name": "Morocco",
        "group": "Group A",
        "flag": "https://flagcdn.com/w320/ma.png",
        "website": "https://site.frmf.ma/fr/"
    },
    {
        "id": "ESP",
        "name": "Spain",
        "group": "Group A",
        "flag": "https://flagcdn.com/w320/es.png",
        "website": "https://rfef.es/"
    },
    {
        "id": "POR",
        "name": "Portugal",
        "group": "Group B",
        "flag": "https://flagcdn.com/w320/pt.png",
        "website": "https://www.fpf.pt/"
    },
    {
        "id": "FRA",
        "name": "France",
        "group": "Group C",
        "flag": "https://flagcdn.com/w320/fr.png",
        "website": "https://www.fff.fr/"
    },
    {
        "id": "BRA",
        "name": "Brazil",
        "group": "Group D",
        "flag": "https://flagcdn.com/w320/br.png",
        "website": "https://www.cbf.com.br/"
    },
    {
        "id": "ARG",
        "name": "Argentina",
        "group": "Group D",
        "flag": "https://flagcdn.com/w320/ar.png",
        "website": "https://www.afa.com.ar/"
    },
    {
        "id": "ENG",
        "name": "England",
        "group": "Group E",
        "flag": "https://flagcdn.com/w320/gb-eng.png",
        "website": "https://www.englandfootball.com/"
    },
    {
        "id": "USA",
        "name": "USA",
        "group": "Group F",
        "flag": "https://flagcdn.com/w320/us.png",
        "website": "https://www.ussoccer.com/"
    },
    {
        "id": "GER",
        "name": "Germany",
        "group": "Group G",
        "flag": "https://flagcdn.com/w320/de.png",
        "website": "https://www.dfb.de/"
    },
    {
        "id": "ITA",
        "name": "Italy",
        "group": "Group G",
        "flag": "https://flagcdn.com/w320/it.png",
        "website": "https://www.figc.it/"
    },
    {
        "id": "NED",
        "name": "Netherlands",
        "group": "Group H",
        "flag": "https://flagcdn.com/w320/nl.png",
        "website": "https://www.knvb.nl/"
    },
    {
        "id": "BEL",
        "name": "Belgium",
        "group": "Group H",
        "flag": "https://flagcdn.com/w320/be.png",
        "website": "https://www.rbfa.be/"
    },
    {
        "id": "CRO",
        "name": "Croatia",
        "group": "Group F",
        "flag": "https://flagcdn.com/w320/hr.png",
        "website": "https://hns-cff.hr/"
    },
    {
        "id": "URU",
        "name": "Uruguay",
        "group": "Group C",
        "flag": "https://flagcdn.com/w320/uy.png",
        "website": "https://www.auf.org.uy/"
    },
    {
        "id": "SEN",
        "name": "Senegal",
        "group": "Group A",
        "flag": "https://flagcdn.com/w320/sn.png",
        "website": "https://fsfoot.sn/"
    },
    {
        "id": "JPN",
        "name": "Japan",
        "group": "Group E",
        "flag": "https://flagcdn.com/w320/jp.png",
        "website": "https://www.jfa.jp/"
    }
];

export const STADIUMS = [
    {
        "id": 1,
        "name": "Grand Stade de Casablanca",
        "city": "Casablanca",
        "capacity": 115000,
        "image": "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=3538&auto=format&fit=crop",
        "mapLink": "https://www.google.com/maps/search/Grand+Stade+de+Casablanca"
    },
    {
        "id": 2,
        "name": "Stade Ibn Batouta",
        "city": "Tangier",
        "capacity": 65000,
        "image": "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=2676&auto=format&fit=crop",
        "mapLink": "https://www.google.com/maps/search/Stade+Ibn+Batouta"
    },
    {
        "id": 3,
        "name": "Prince Moulay Abdellah",
        "city": "Rabat",
        "capacity": 53000,
        "image": "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2671&auto=format&fit=crop",
        "mapLink": "https://www.google.com/maps/search/Prince+Moulay+Abdellah+Stadium"
    },
    {
        "id": 4,
        "name": "Stade de Marrakech",
        "city": "Marrakech",
        "capacity": 45240,
        "image": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2605&auto=format&fit=crop",
        "mapLink": "https://www.google.com/maps/search/Stade+de+Marrakech"
    },
    {
        "id": 5,
        "name": "Adrar Stadium",
        "city": "Agadir",
        "capacity": 45480,
        "image": "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=2676&auto=format&fit=crop",
        "mapLink": "https://www.google.com/maps/search/Adrar+Stadium"
    },
    {
        "id": 6,
        "name": "Fes Stadium",
        "city": "Fes",
        "capacity": 45000,
        "image": "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2668&auto=format&fit=crop",
        "mapLink": "https://www.google.com/maps/search/Fes+Stadium"
    }
];

export const MATCHES = [
    {
        id: 1,
        teamA: TEAMS.find(t => t.id === 'ITA'),
        teamB: TEAMS.find(t => t.id === 'CRO'),
        stadium: STADIUMS.find(s => s.id === 5),
        date: '2030-06-13',
        time: '21:00',
        price: 241,
        category: 'Group G',
        gradient: 'from-cyan-500 to-blue-500'
    },
    {
        id: 2,
        teamA: TEAMS.find(t => t.id === 'BEL'),
        teamB: TEAMS.find(t => t.id === 'GER'),
        stadium: STADIUMS.find(s => s.id === 1),
        date: '2030-06-13',
        time: '19:00',
        price: 211,
        category: 'Group H',
        gradient: 'from-orange-500 to-red-500'
    },
    {
        id: 3,
        teamA: TEAMS.find(t => t.id === 'ENG'),
        teamB: TEAMS.find(t => t.id === 'MAR'),
        stadium: STADIUMS.find(s => s.id === 6),
        date: '2030-06-13',
        time: '19:00',
        price: 292,
        category: 'Group E',
        gradient: 'from-purple-600 to-pink-600'
    },
    {
        id: 4,
        teamA: TEAMS.find(t => t.id === 'GER'),
        teamB: TEAMS.find(t => t.id === 'CRO'),
        stadium: STADIUMS.find(s => s.id === 5),
        date: '2030-06-14',
        time: '13:00',
        price: 283,
        category: 'Group G',
        gradient: 'from-purple-600 to-pink-600'
    },
    {
        id: 5,
        teamA: TEAMS.find(t => t.id === 'NED'),
        teamB: TEAMS.find(t => t.id === 'ENG'),
        stadium: STADIUMS.find(s => s.id === 3),
        date: '2030-06-14',
        time: '16:00',
        price: 135,
        category: 'Group H',
        gradient: 'from-emerald-600 to-red-600'
    },
    {
        id: 6,
        teamA: TEAMS.find(t => t.id === 'JPN'),
        teamB: TEAMS.find(t => t.id === 'GER'),
        stadium: STADIUMS.find(s => s.id === 5),
        date: '2030-06-14',
        time: '21:00',
        price: 173,
        category: 'Group E',
        gradient: 'from-teal-500 to-emerald-500'
    },
    {
        id: 7,
        teamA: TEAMS.find(t => t.id === 'FRA'),
        teamB: TEAMS.find(t => t.id === 'BEL'),
        stadium: STADIUMS.find(s => s.id === 2),
        date: '2030-06-15',
        time: '19:00',
        price: 148,
        category: 'Group C',
        gradient: 'from-yellow-500 to-blue-600'
    },
    {
        id: 8,
        teamA: TEAMS.find(t => t.id === 'SEN'),
        teamB: TEAMS.find(t => t.id === 'BRA'),
        stadium: STADIUMS.find(s => s.id === 5),
        date: '2030-06-15',
        time: '13:00',
        price: 210,
        category: 'Group A',
        gradient: 'from-teal-500 to-emerald-500'
    },
    {
        id: 9,
        teamA: TEAMS.find(t => t.id === 'ENG'),
        teamB: TEAMS.find(t => t.id === 'BEL'),
        stadium: STADIUMS.find(s => s.id === 6),
        date: '2030-06-15',
        time: '13:00',
        price: 233,
        category: 'Group E',
        gradient: 'from-yellow-500 to-blue-600'
    },
    {
        id: 10,
        teamA: TEAMS.find(t => t.id === 'URU'),
        teamB: TEAMS.find(t => t.id === 'POR'),
        stadium: STADIUMS.find(s => s.id === 6),
        date: '2030-06-16',
        time: '16:00',
        price: 231,
        category: 'Group C',
        gradient: 'from-blue-700 to-red-700'
    },
    {
        id: 11,
        teamA: TEAMS.find(t => t.id === 'POR'),
        teamB: TEAMS.find(t => t.id === 'MAR'),
        stadium: STADIUMS.find(s => s.id === 5),
        date: '2030-06-16',
        time: '19:00',
        price: 260,
        category: 'Group B',
        gradient: 'from-cyan-500 to-blue-500'
    },
    {
        id: 12,
        teamA: TEAMS.find(t => t.id === 'URU'),
        teamB: TEAMS.find(t => t.id === 'ESP'),
        stadium: STADIUMS.find(s => s.id === 3),
        date: '2030-06-16',
        time: '19:00',
        price: 289,
        category: 'Group C',
        gradient: 'from-red-600 to-emerald-600'
    },
    {
        id: 13,
        teamA: TEAMS.find(t => t.id === 'SEN'),
        teamB: TEAMS.find(t => t.id === 'BEL'),
        stadium: STADIUMS.find(s => s.id === 6),
        date: '2030-06-17',
        time: '16:00',
        price: 165,
        category: 'Group A',
        gradient: 'from-purple-600 to-pink-600'
    },
    {
        id: 14,
        teamA: TEAMS.find(t => t.id === 'BRA'),
        teamB: TEAMS.find(t => t.id === 'JPN'),
        stadium: STADIUMS.find(s => s.id === 6),
        date: '2030-06-17',
        time: '21:00',
        price: 171,
        category: 'Group D',
        gradient: 'from-emerald-600 to-red-600'
    },
    {
        id: 15,
        teamA: TEAMS.find(t => t.id === 'URU'),
        teamB: TEAMS.find(t => t.id === 'BEL'),
        stadium: STADIUMS.find(s => s.id === 2),
        date: '2030-06-17',
        time: '13:00',
        price: 280,
        category: 'Group C',
        gradient: 'from-purple-600 to-pink-600'
    },
    {
        id: 16,
        teamA: TEAMS.find(t => t.id === 'USA'),
        teamB: TEAMS.find(t => t.id === 'JPN'),
        stadium: STADIUMS.find(s => s.id === 4),
        date: '2030-06-18',
        time: '19:00',
        price: 244,
        category: 'Group F',
        gradient: 'from-blue-700 to-red-700'
    },
    {
        id: 17,
        teamA: TEAMS.find(t => t.id === 'JPN'),
        teamB: TEAMS.find(t => t.id === 'MAR'),
        stadium: STADIUMS.find(s => s.id === 6),
        date: '2030-06-18',
        time: '16:00',
        price: 167,
        category: 'Group E',
        gradient: 'from-purple-600 to-pink-600'
    },
    {
        id: 18,
        teamA: TEAMS.find(t => t.id === 'URU'),
        teamB: TEAMS.find(t => t.id === 'ARG'),
        stadium: STADIUMS.find(s => s.id === 6),
        date: '2030-06-18',
        time: '21:00',
        price: 299,
        category: 'Group C',
        gradient: 'from-blue-700 to-red-700'
    },
    {
        id: 19,
        teamA: TEAMS.find(t => t.id === 'GER'),
        teamB: TEAMS.find(t => t.id === 'MAR'),
        stadium: STADIUMS.find(s => s.id === 6),
        date: '2030-06-19',
        time: '19:00',
        price: 223,
        category: 'Group G',
        gradient: 'from-orange-500 to-red-500'
    },
    {
        id: 20,
        teamA: TEAMS.find(t => t.id === 'GER'),
        teamB: TEAMS.find(t => t.id === 'URU'),
        stadium: STADIUMS.find(s => s.id === 3),
        date: '2030-06-19',
        time: '21:00',
        price: 160,
        category: 'Group G',
        gradient: 'from-blue-700 to-red-700'
    },
    {
        id: 21,
        teamA: TEAMS.find(t => t.id === 'MAR'),
        teamB: TEAMS.find(t => t.id === 'ITA'),
        stadium: STADIUMS.find(s => s.id === 2),
        date: '2030-06-19',
        time: '21:00',
        price: 289,
        category: 'Group A',
        gradient: 'from-blue-700 to-red-700'
    },
    {
        id: 22,
        teamA: TEAMS.find(t => t.id === 'JPN'),
        teamB: TEAMS.find(t => t.id === 'MAR'),
        stadium: STADIUMS.find(s => s.id === 4),
        date: '2030-06-20',
        time: '16:00',
        price: 154,
        category: 'Group E',
        gradient: 'from-red-600 to-emerald-600'
    },
    {
        id: 23,
        teamA: TEAMS.find(t => t.id === 'ENG'),
        teamB: TEAMS.find(t => t.id === 'MAR'),
        stadium: STADIUMS.find(s => s.id === 2),
        date: '2030-06-20',
        time: '21:00',
        price: 253,
        category: 'Group E',
        gradient: 'from-orange-500 to-red-500'
    },
    {
        id: 24,
        teamA: TEAMS.find(t => t.id === 'POR'),
        teamB: TEAMS.find(t => t.id === 'NED'),
        stadium: STADIUMS.find(s => s.id === 1),
        date: '2030-06-20',
        time: '19:00',
        price: 197,
        category: 'Group B',
        gradient: 'from-blue-700 to-red-700'
    },
    {
        id: 25,
        teamA: TEAMS.find(t => t.id === 'NED'),
        teamB: TEAMS.find(t => t.id === 'BEL'),
        stadium: STADIUMS.find(s => s.id === 2),
        date: '2030-06-21',
        time: '21:00',
        price: 170,
        category: 'Group H',
        gradient: 'from-yellow-500 to-blue-600'
    },
    {
        id: 26,
        teamA: TEAMS.find(t => t.id === 'URU'),
        teamB: TEAMS.find(t => t.id === 'POR'),
        stadium: STADIUMS.find(s => s.id === 1),
        date: '2030-06-21',
        time: '16:00',
        price: 252,
        category: 'Group C',
        gradient: 'from-orange-500 to-red-500'
    },
    {
        id: 27,
        teamA: TEAMS.find(t => t.id === 'ENG'),
        teamB: TEAMS.find(t => t.id === 'MAR'),
        stadium: STADIUMS.find(s => s.id === 1),
        date: '2030-06-21',
        time: '16:00',
        price: 297,
        category: 'Group E',
        gradient: 'from-teal-500 to-emerald-500'
    },
    {
        id: 28,
        teamA: TEAMS.find(t => t.id === 'JPN'),
        teamB: TEAMS.find(t => t.id === 'MAR'),
        stadium: STADIUMS.find(s => s.id === 5),
        date: '2030-06-22',
        time: '13:00',
        price: 127,
        category: 'Group E',
        gradient: 'from-cyan-500 to-blue-500'
    },
    {
        id: 29,
        teamA: TEAMS.find(t => t.id === 'JPN'),
        teamB: TEAMS.find(t => t.id === 'URU'),
        stadium: STADIUMS.find(s => s.id === 5),
        date: '2030-06-22',
        time: '13:00',
        price: 122,
        category: 'Group E',
        gradient: 'from-emerald-600 to-red-600'
    },
    {
        id: 30,
        teamA: TEAMS.find(t => t.id === 'BRA'),
        teamB: TEAMS.find(t => t.id === 'ITA'),
        stadium: STADIUMS.find(s => s.id === 4),
        date: '2030-06-22',
        time: '16:00',
        price: 272,
        category: 'Group D',
        gradient: 'from-blue-700 to-red-700'
    },
    {
        id: 31,
        teamA: TEAMS.find(t => t.id === 'ARG'),
        teamB: TEAMS.find(t => t.id === 'NED'),
        stadium: STADIUMS.find(s => s.id === 2),
        date: '2030-06-23',
        time: '13:00',
        price: 129,
        category: 'Group D',
        gradient: 'from-cyan-500 to-blue-500'
    },
    {
        id: 32,
        teamA: TEAMS.find(t => t.id === 'BEL'),
        teamB: TEAMS.find(t => t.id === 'JPN'),
        stadium: STADIUMS.find(s => s.id === 3),
        date: '2030-06-23',
        time: '21:00',
        price: 227,
        category: 'Group H',
        gradient: 'from-emerald-600 to-red-600'
    },
    {
        id: 33,
        teamA: TEAMS.find(t => t.id === 'URU'),
        teamB: TEAMS.find(t => t.id === 'ENG'),
        stadium: STADIUMS.find(s => s.id === 5),
        date: '2030-06-23',
        time: '16:00',
        price: 274,
        category: 'Group C',
        gradient: 'from-teal-500 to-emerald-500'
    },
    {
        id: 34,
        teamA: TEAMS.find(t => t.id === 'BRA'),
        teamB: TEAMS.find(t => t.id === 'USA'),
        stadium: STADIUMS.find(s => s.id === 3),
        date: '2030-06-24',
        time: '21:00',
        price: 198,
        category: 'Group D',
        gradient: 'from-red-600 to-emerald-600'
    },
    {
        id: 35,
        teamA: TEAMS.find(t => t.id === 'URU'),
        teamB: TEAMS.find(t => t.id === 'BEL'),
        stadium: STADIUMS.find(s => s.id === 5),
        date: '2030-06-24',
        time: '16:00',
        price: 172,
        category: 'Group C',
        gradient: 'from-emerald-600 to-red-600'
    },
    {
        id: 36,
        teamA: TEAMS.find(t => t.id === 'GER'),
        teamB: TEAMS.find(t => t.id === 'USA'),
        stadium: STADIUMS.find(s => s.id === 2),
        date: '2030-06-24',
        time: '13:00',
        price: 198,
        category: 'Group G',
        gradient: 'from-red-600 to-emerald-600'
    },
    {
        id: 37,
        teamA: TEAMS.find(t => t.id === 'GER'),
        teamB: TEAMS.find(t => t.id === 'ESP'),
        stadium: STADIUMS.find(s => s.id === 2),
        date: '2030-06-25',
        time: '21:00',
        price: 231,
        category: 'Group G',
        gradient: 'from-orange-500 to-red-500'
    },
    {
        id: 38,
        teamA: TEAMS.find(t => t.id === 'CRO'),
        teamB: TEAMS.find(t => t.id === 'MAR'),
        stadium: STADIUMS.find(s => s.id === 3),
        date: '2030-06-25',
        time: '21:00',
        price: 225,
        category: 'Group F',
        gradient: 'from-teal-500 to-emerald-500'
    },
    {
        id: 39,
        teamA: TEAMS.find(t => t.id === 'POR'),
        teamB: TEAMS.find(t => t.id === 'ARG'),
        stadium: STADIUMS.find(s => s.id === 2),
        date: '2030-06-25',
        time: '16:00',
        price: 104,
        category: 'Group B',
        gradient: 'from-red-600 to-emerald-600'
    },
    {
        id: 40,
        teamA: TEAMS.find(t => t.id === 'BRA'),
        teamB: TEAMS.find(t => t.id === 'SEN'),
        stadium: STADIUMS.find(s => s.id === 3),
        date: '2030-06-26',
        time: '19:00',
        price: 275,
        category: 'Group D',
        gradient: 'from-cyan-500 to-blue-500'
    },
    {
        id: 41,
        teamA: TEAMS.find(t => t.id === 'URU'),
        teamB: TEAMS.find(t => t.id === 'ITA'),
        stadium: STADIUMS.find(s => s.id === 2),
        date: '2030-06-26',
        time: '16:00',
        price: 167,
        category: 'Group C',
        gradient: 'from-purple-600 to-pink-600'
    },
    {
        id: 42,
        teamA: TEAMS.find(t => t.id === 'USA'),
        teamB: TEAMS.find(t => t.id === 'SEN'),
        stadium: STADIUMS.find(s => s.id === 5),
        date: '2030-06-26',
        time: '19:00',
        price: 211,
        category: 'Group F',
        gradient: 'from-yellow-500 to-blue-600'
    },
    {
        id: 43,
        teamA: TEAMS.find(t => t.id === 'BEL'),
        teamB: TEAMS.find(t => t.id === 'CRO'),
        stadium: STADIUMS.find(s => s.id === 6),
        date: '2030-06-27',
        time: '13:00',
        price: 125,
        category: 'Group H',
        gradient: 'from-yellow-500 to-blue-600'
    },
    {
        id: 44,
        teamA: TEAMS.find(t => t.id === 'JPN'),
        teamB: TEAMS.find(t => t.id === 'URU'),
        stadium: STADIUMS.find(s => s.id === 6),
        date: '2030-06-27',
        time: '13:00',
        price: 202,
        category: 'Group E',
        gradient: 'from-emerald-600 to-red-600'
    },
    {
        id: 45,
        teamA: TEAMS.find(t => t.id === 'URU'),
        teamB: TEAMS.find(t => t.id === 'FRA'),
        stadium: STADIUMS.find(s => s.id === 3),
        date: '2030-06-27',
        time: '16:00',
        price: 149,
        category: 'Group C',
        gradient: 'from-yellow-500 to-blue-600'
    },
    {
        id: 46,
        teamA: TEAMS.find(t => t.id === 'GER'),
        teamB: TEAMS.find(t => t.id === 'ESP'),
        stadium: STADIUMS.find(s => s.id === 3),
        date: '2030-06-28',
        time: '19:00',
        price: 269,
        category: 'Group G',
        gradient: 'from-purple-600 to-pink-600'
    },
    {
        id: 47,
        teamA: TEAMS.find(t => t.id === 'MAR'),
        teamB: TEAMS.find(t => t.id === 'SEN'),
        stadium: STADIUMS.find(s => s.id === 4),
        date: '2030-06-28',
        time: '19:00',
        price: 213,
        category: 'Group A',
        gradient: 'from-red-600 to-emerald-600'
    },
    {
        id: 48,
        teamA: TEAMS.find(t => t.id === 'BRA'),
        teamB: TEAMS.find(t => t.id === 'FRA'),
        stadium: STADIUMS.find(s => s.id === 4),
        date: '2030-06-28',
        time: '13:00',
        price: 103,
        category: 'Group D',
        gradient: 'from-red-600 to-emerald-600'
    },
    {
        id: 49,
        teamA: TEAMS.find(t => t.id === 'SEN'),
        teamB: TEAMS.find(t => t.id === 'MAR'),
        stadium: STADIUMS.find(s => s.id === 2),
        date: '2030-06-29',
        time: '19:00',
        price: 223,
        category: 'Group A',
        gradient: 'from-red-600 to-emerald-600'
    },
    {
        id: 50,
        teamA: TEAMS.find(t => t.id === 'ENG'),
        teamB: TEAMS.find(t => t.id === 'JPN'),
        stadium: STADIUMS.find(s => s.id === 5),
        date: '2030-06-29',
        time: '21:00',
        price: 198,
        category: 'Group E',
        gradient: 'from-red-600 to-emerald-600'
    },
];
