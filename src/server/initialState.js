export const initialState = {
    games: [{
        id: 1,
        users: [
            1, 2, 3, 4
        ],
        matches: [
            1, 2, 3, 4
        ],
        scores: [
            1, 2, 3, 4
        ],
        bets: [
            1, 2, 3, 4, 5, 6
        ]
    }],
    scores: [{
        id: 1,
        user: 1,
        points: 3
    },{
        id: 2,
        user: 2,
        points: 2
    },{
        id: 3,
        user: 3,
        points: 2
    },
    {
        id: 4,
        user: 4,
        points: 7
    }],
    users: [{
        id: 1,
        name: 'User A'
    },
    {
        id: 2,
        name: 'User B'
    },
    {
        id: 3,
        name: 'User C'
    },
    {
        id: 4,
        name: 'User D'
    }],
    matches: [{
        id: 1,
        event_datetime: new Date(2020, 12-1, 17, 18, 0, 0, 0),
        homeTeam: 'Śląsk Wrocław',
        awayTeam: 'Warta Poznań',
        goalsHomeTeam: 2,
        goalsAwayTeam: 1
    },
    {
        id: 2,
        event_datetime: new Date(2020, 12-1, 11, 18, 0, 0, 0),
        event_time: '18:00',
        homeTeam: 'Zagłębie Lubin',
        awayTeam: 'Śląsk Wrocław',
        goalsHomeTeam: 2,
        goalsAwayTeam: 1
    },
    {
        id: 3,
        event_datetime: new Date(2021, 2-1, 1, 18, 0, 0, 0),
        event_time: '18:00',
        homeTeam: 'Stal Mielec',
        awayTeam: 'Śląsk Wrocław',
        goalsHomeTeam: null,
        goalsAwayTeam: null
    },
    {
        id: 4,
        event_datetime: new Date(2021, 2-1, 6, 18, 0, 0, 0),
        event_time: '18:00',
        homeTeam: 'Piast Gliwice',
        awayTeam: 'Śląsk Wrocław',
        goalsHomeTeam: null,
        goalsAwayTeam: null
    }],
    bets: [{
        id: 1,
        match: 1,
        owner: 1,
        goalsHomeTeam: 1,
        goalsAwayTeam: 1
    },
    {
        id: 2,
        match: 1,
        owner: 2,
        goalsHomeTeam: 2,
        goalsAwayTeam: 1
    },
    {
        id: 3,
        match: 1,
        owner: 3,
        goalsHomeTeam: 1,
        goalsAwayTeam: 2
    },
    {
        id: 4,
        match: 1,
        owner: 4,
        goalsHomeTeam: 2,
        goalsAwayTeam: 2
    },
    {
        id: 5,
        match: 2,
        owner: 3,
        goalsHomeTeam: 1,
        goalsAwayTeam: 1
    },
    {
        id: 6,
        match: 2,
        owner: 4,
        goalsHomeTeam: 3,
        goalsAwayTeam: 1
    },
    {
        id: 7,
        match: 2,
        owner: 1,
        goalsHomeTeam: 0,
        goalsAwayTeam: 0
    },
    {
        id: 8,
        match: 2,
        owner: 2,
        goalsHomeTeam: 1,
        goalsAwayTeam: 3
    },
    {
        id: 9,
        match: 3,
        owner: 3,
        goalsHomeTeam: 1,
        goalsAwayTeam: 0
    },
    {
        id: 10,
        match: 3,
        owner: 4,
        goalsHomeTeam: 1,
        goalsAwayTeam: 1
    }]
}