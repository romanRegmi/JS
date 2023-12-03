const data = {
    status: 'ok',
    totalResults: 9532,
    articles: [
      {
        source: {"id":null,"name":"3dnews.ru"},
        author: null,
        title: 'Nikola начала серийное производство электрических грузовиков',
        description: 'Американская Nikola Corp заявила о начале массового производства электрических грузовиков. Выяснилось, что выпуск моделей Tre начат в Аризоне уже 21 марта текущего года — компании удалось опередить Tesla, намеревающуюся производить собственные электромодели а…',
        url: 'https://3dnews.ru/1062623/publikatsiya-1062623',
        urlToImage: 'https://3dnews.ru/assets/external/illustrations/2022/03/24/1062623/105555983tre1.jpg',
        publishedAt: '2022-03-24T04:35:00Z',
        content: 'Nikola Corp . , Tre 21 — Tesla, .\r\n' +
          ': Nikola Motor Company\r\n' +
          ', . , Nikola 4 %.\r\n' +
          ' Tre ( 560 ). Nikola , 300-500 , 2023 .\r\n' +
          'Nikola (Trevor Milton) 2020 .\r\n' +
          ' Nikola Tre 800 , 2025 , 1500 . , 2023 .\r\n' +
          ', Nikol… [+7 chars]'
      },
      {
        source: {"id":"the-times-of-india","name":"The Times of India"},
        author: 'NYT News Service',
        title: 'Bitcoin miners want to recast themselves as eco-friendly',
        description: 'Facing intense criticism, the crypto mining industry is trying to change the view that its energy-guzzling computers are harmful to the climate.',
        url: 'https://economictimes.indiatimes.com/tech/technology/bitcoin-miners-want-to-recast-themselves-as-eco-friendly/articleshow/90411376.cms',
        urlToImage: 'https://img.etimg.com/thumb/msid-90411345,width-1070,height-580,imgsize-61264,overlay-ettech/photo.jpg',
        publishedAt: '2022-03-24T04:32:38Z',
        content: 'Along a dirt-covered road deep in Texas farm country, the cryptocurrency company Argo Blockchain is building a power plant for the internet age: a crypto "mining," site stocked with computers that ge… [+8246 chars]'
      },
      {
        source: {"id":"the-times-of-india","name":"The Times of India"},
        author: 'NYT News Service',
        title: 'Bitcoin miners want to recast themselves as eco-friendly',
        description: 'Facing intense criticism, the crypto mining industry is trying to change the view that its energy-guzzling computers are harmful to the climate.',
        url: 'https://economictimes.indiatimes.com/tech/technology/bitcoin-miners-want-to-recast-themselves-as-eco-friendly/articleshow/90411223.cms',
        urlToImage: 'https://img.etimg.com/thumb/msid-90411345,width-1070,height-580,imgsize-61264,overlay-ettech/photo.jpg',
        publishedAt: '2022-03-24T04:32:38Z',
        content: 'Along a dirt-covered road deep in Texas farm country, the cryptocurrency company Argo Blockchain is building a power plant for the internet age: a crypto "mining," site stocked with computers that ge… [+8246 chars]'
      },
      {
        source: {"id":null,"name":"Www.waz.de"},
        author: 'Tobias Kisling und Alexander Klay',
        title: 'Klimaschutz: Energiewende: Verbände schlagen wegen Bürokratie Alarm',
        description: 'Deutschland will sich unabhängiger von Energielieferungen machen. Doch beim Ausbau der Erneuerbaren steht die eigene Bürokratie im Weg.',
        url: 'https://www.waz.de/politik/klimakrise-energiewende-ampel-habeck-tesla-id234897943.html',
        urlToImage: 'https://img.morgenpost.de/img/politik/crop234897941/6682607247-w820-cv16_9-q85/420786c8-aa9c-11ec-8ade-30e952b2c605.jpg',
        publishedAt: '2022-03-24T04:30:00Z',
        content: 'Berlin. Deutschland kann schnell sein. Bundeskanzler Olaf Scholz (SPD) klingt entschlossen, als er mit fester, lauter Stimme diesen Satz ins Mikrofon sagt. Neben ihm steht Elon Musk, Starunternehmer,… [+8653 chars]'
      }
    ]
  }

var result = [];


function formatNewsData(res){
    result = res.map((item, index)=>{
        let id = `new_${index+1}`;
        let date = new Date(item.publishedAt).toDateString()
        let name = item.source.name;
        return { ...item, id: id, name: name, date: date}
    })
}



formatNewsData(data.articles);

console.log(result[0].id);