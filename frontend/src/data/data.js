/*Melhorias:
CSS no geral
Nos Dropdowns usar o patterns dos forms
Nomes de alguns componentes
/players apenas escolhe o account ID e leva para /players/playerId
nop players
*/


const articles =  [
        {
            title: "Random Text 1",
            description: "Must you with him from him her were more.",
            text: "On no twenty spring of in esteem spirit likely estate. Continue new you declared differed learning bringing honoured. At mean mind so upon they rent am walk. Shortly am waiting inhabit smiling he chiefly of in. Lain tore time gone him his dear sure. Fat decisively estimating affronting assistance not. Resolve pursuit regular so calling me. West he plan girl been my then up no. /n Fulfilled direction use continual set him propriety continued. Saw met applauded favourite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities the. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed add screened rendered six say his striking confined.",
            image: "/img/match.jpg",
            id: 2020010301
        },
        {
            title: "Random Text 2",
            description: "Entire any had depend and figure winter.",
            text: "It allowance prevailed enjoyment in it. Calling observe for who pressed raising his. Can connection instrument astonished unaffected his motionless preference. Announcing say boy precaution unaffected difficulty alteration him. Above be would at so going heard. Engaged at village at am equally proceed. Settle nay length almost ham direct extent. Agreement for listening remainder get attention law acuteness day. Now whatever surprise resolved elegance indulged own way outlived",
            image: '/img/match2.jpg',
            id: 2020010302
        },
        {
            title: "Random Text 3",
            description: "Sex and neglected principle ask rapturous consulted.",
            text: "Started his hearted any civilly. So me by marianne admitted speaking. Men bred fine call ask. Cease one miles truth day above seven. Suspicion sportsmen provision suffering mrs saw engrossed something. Snug soon he on plan in be dine some.",
            image: '/img/match2.jpg',
            id: 2020010303
        },
        {
            title: "Random Text 4",
            description: "She exposed painted fifteen are noisier mistake led waiting.",
            text: "Of resolve to gravity thought my prepare chamber so. Unsatiable entreaties collecting may sympathize nay interested instrument. If continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first shall for. My smiling to he removal weather on anxious.",
            image: '/img/match.jpg',
            id: 2020010304
        },
]

const accounts = {
    accountList: [
        {
            id: 1,
            name: "Carlos Leão",
            playerList: [
                2020010301,
                2019060201
            ]
        }
    ]
}   

const seasons = {
    currentSeasonId: 20201,
    currentChampionAccountId: 2020010301,
    seasonList: [
        {
            id: 20201,
            name: "2020-1",
            playerList: [
                {
                    name: "João Pires",
                    points: 2,
                    bestFinalPosition: "10th",
                    stats: "TODO",
                    wins: 1,
                    presences: 1,
                    id: 2020010302,
                    accountId: 2
                },
                {
                    name: "Gonçalo Guedes",
                    points: 2,
                    bestFinalPosition: "1st",
                    stats: "TODO",
                    wins: 1,
                    presences: 1,
                    id: 2020010303,
                    accountId: 3
                },
                {
                    name: "André",
                    points: 2,
                    bestFinalPosition: "10th",
                    stats: "TODO",
                    wins: 1,
                    presences: 1,
                    id: 2020010304,
                    accountId: 4
                },
                {
                    name: "Pedro Preto",
                    points: 2,
                    bestFinalPosition: "2nd",
                    stats: "TODO",
                    wins: 1,
                    presences: 1,
                    id: 2020010305,
                    accountId: 5
                },
                {
                    name: "António",
                    points: 2,
                    bestFinalPosition: "-",
                    stats: "TODO",
                    wins: 1,
                    presences: 1,
                    id: 2020010305,
                    accountId: 6
                },
                {
                    name: "Diogo Cotrim",
                    points: 0.5,
                    bestFinalPosition: "1st",
                    stats: "TODO",
                    wins: 0,
                    presences: 1,
                    id: 2020010306,
                    accountId: 7
                },
                {
                    name: "Carlos Leão",
                    points: 0.5,
                    bestFinalPosition: "1st",
                    stats: "TODO",
                    wins: 0,
                    presences: 1,
                    id: 2020010301,
                    accountId: 1
                },
                {
                    name: "Janito",
                    points: 0.5,
                    bestFinalPosition: "10th",
                    stats: "TODO",
                    wins: 0,
                    presences: 1,
                    id: 2020010307,
                    accountId: 8
                },
                {
                    name: "Ricardo",
                    points: 0.5,
                    bestFinalPosition: "-",
                    stats: "TODO",
                    wins: 0,
                    presences: 1,
                    id: 2020010307,
                    accountId: 9
                },
                {
                    name: "Danny",
                    points: 0.5,
                    bestFinalPosition: "-",
                    stats: "TODO",
                    wins: 0,
                    presences: 1,
                    id: 2020010307,
                    accountId: 10
                }
            ],
            gameList: [
                {
                    teams: [[2020010301, 2020010302],[2020010304, 2020010303]],
                    score: "8-7",
                    id: 20200103,
                    name: "jan-03"
                }   
            ]
        },
        {
            id: 20192,
            name: "2019-2",
            playerList: [
                {
                    name: "Carlos Leão",
                    points: 20,
                    bestFinalPosition: "10th",
                    stats: "TODO",
                    wins: 12,
                    presences: 14,
                    id: 2019060201,
                    accountId: 1
                }
            ],
            gameList: [
                {
                    teams: [[2019060201, 2020010302],[2020010302, 2020010303]],
                    score: "0-0",
                    id: 20200110,
                    name: "Dez-27"
                },
                {
                    teams: [[2019060204, 2020010305],[2020010302, 2020010303]],
                    score: "0-0",
                    id: 20200111,
                    name: "Dez-20"
                }
            ]
        }
    ] 
}

export const Data = {
    articles: articles,
    accounts: accounts,
    seasons: seasons,
    api: 'http://localhost:5000'
}

