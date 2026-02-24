import { inject, Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { Category } from './models/category.model';

@Injectable({
  providedIn: 'root',
})

export class Productservices {

  categories: Category[] = [
    {
      id: 1,
      name: "Smartphones",
    },
     
    {
      id: 2,
      name: "Laptops",
    },

     {
      id: 3,
      name: "Headphones",
    },

     {
      id: 4,
      name: "Yandex_Alice",
    },
  ]
   
  products: Product[] = [
    {
      id: 1,
      name: 'Умная колонка Яндекс Станция Лайт YNDX-00025 фиолетовый',
      description: 'Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками. Она здорово украсит интерьер и сможет развлечь ребенка: матовый корпус приятно держать в руках, а расцветка порадует глаз. У Алисы в Станции Лайт свой характер — он зависит от цвета устройства. Чтобы пользоваться Станцией Лайт, нужны подключение к интернету по Wi-Fi и уч. запись на Яндексе.',
      price: 55000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/haa/h8e/64362957799454.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h05/64362960617502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h36/64362963599390.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-yndx-00025-fioletovyi-101870266/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE',
      likes: 5,
      categoryId: 4,
    },

    {
      id: 2,
      name: 'Умная колонка Яндекс Станция Лайт 2 фиолетовый',
      description: 'Умная колонка Яндекс. Станция Лайт 2 фиолетового цвета ориентирована на детей. Она использует нейросеть YandexGPT, поэтому может отвечать на любые вопросы, находить информацию, рассказывать сказки и включать музыку по настроению. Ассистент реагирует на эмоции, по интонации определяет, в каком настроении находится ребенок. Все «эмоции» Алисы отображаются на информативном экране. Он включает в себя 36 элементов и демонстрирует температуру, время, параметры громкости и другие показатели',
      price: 34818,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h2d/86887758069790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h60/hbc/86887758135326.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h3d/86887758200862.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE',
      likes: 5,
      categoryId: 4,
    },

    {
      id: 3,
      name: 'Умная колонка Яндекс Станция Лайт 2 розовый',
      description: 'Умная колонка Яндекс. Станция Лайт 2 рассчитана на детскую аудиторию. Компактная колонка выполнена в розовом корпусе с покрытием soft-touch. Благодаря дну с силиконовой накладкой она устойчива на любой поверхности. Модель использует для подключения Wi-Fi, запоминает несколько сетей, а также автоматически синхронизируется с ними. Также предусмотрено подключение при помощи Bluetooth. Питание колонки происходит через разъем USB Type C.',
      price: 35690,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p45/pf0/32889824.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p28/pf0/32889825.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/pf0/32889826.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/pef/32889828.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-rozovyi-122679840/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE',
      likes: 5,
      categoryId: 4,
    },

    {
      id: 4,
      name: 'Умная колонка Яндекс Станция Лайт 2 зеленый',
      description: 'Яндекс Станция Лайт 2 — новая умная колонка для детей и тех, кто не перестаёт ими быть. Внутри живёт более эмоциональная и функциональная Алиса, с которой никогда не бывает скучно: с ней можно веселиться, делиться секретами, играть и общаться дни напролёт — она найдет ответы на миллионы вопросов, придумает идеи, предложит классные игры, включит любимую музыку. Теперь виртуальный ассистент №1⁵ подстраивает интонацию под ваше настроение и показывает свои эмоции с помощью глазок на LED-экране Станции. В наборе — классные стикеры и маски, чтобы у ребёнка было пространство для творчества',
      price: 49990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p81/8857749.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p74/p7f/8857750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p57/p7f/8857751.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1f/p7f/8857753.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-zelenyi-130192872/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE',
      likes: 5,
      categoryId: 4,
    },

    {
      id: 5,
      name: 'Умная колонка Яндекс Станция Лайт YNDX-00025 фиолетовый',
      description: 'Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками. Она здорово украсит интерьер и сможет развлечь ребенка: матовый корпус приятно держать в руках, а расцветка порадует глаз. У Алисы в Станции Лайт свой характер — он зависит от цвета устройства. Чтобы пользоваться Станцией Лайт, нужны подключение к интернету по Wi-Fi и уч. запись на Яндексе.',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/haa/h8e/64362957799454.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-yndx-00025-fioletovyi-101870266/?c=234230100',
      likes: 5,
      categoryId: 4,
    },


    //след категория
    {
      id: 6,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb темно-синий',
      description: 'Телефон как телефон, перешел с 14 про макс, не ощутил такой сильной разницы, когда переходил с 11 на 14 было вау, а тут не особо. Но не жалею, камера реально лучше, заряд держит хорошо.',
      price: 833380,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p65/p0f/64476280.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-temno-sinii-145440732/?c=234230100',
      likes: 5,
      categoryId: 1,
    },

    {
      id: 7,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro Max 256Gb — это воплощение инноваций и стиля, предлагающее безупречную производительность и непревзойденные возможности для тех, кто всегда в движении',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ped/p29/64476207.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/?c=234230100',
      likes: 5,
      categoryId: 1,
    },

    {
      id: 8,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=234230100',
      likes: 5,
      categoryId: 1,
    },

    {
      id: 9,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb темно-синий',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе передовые технологии, непревзойденную производительность и элегантный дизайн.',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=234230100',
      likes: 5,
      categoryId: 1,
    },

    {
      id: 10,
      name: 'Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ черный',
      description: 'Samsung Galaxy A07 6 ГБ/128 ГБ — это универсальный смартфон для тех, кто ценит производительность и большой объем памяти для хранения ваших данных',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/pd7/61291243.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=234230100',
      likes: 5,
      categoryId: 1,
    },

    //след категория
    {
      id: 11,
      name: 'Ноутбук PRYME N5095 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / FHK14BK25',
      description: 'PRYME N5095 идеально подойдёт для студентов, офисных сотрудников и всех, кто ценит баланс между производительностью и мобильностью. Он легко справляется с повседневными задачами — будь то работа с документами, интернет-сёрфинг, онлайн-обучение или просмотр фильмов',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/pfb/45122460.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=234230100',
      likes: 5,
      categoryId: 2,
    },

    {
      id: 12,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description: 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. Чип Apple M1 позволяет использовать на Mac уникальные технологии и обеспечивает невероятную производи­тельность в сочетании с лучшей в отрасли энергоэффективностью. Это не просто ещё один шаг для Mac — это принципиально новый уровень возможностей.',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=234230100',
      likes: 5,
      categoryId: 2,
    },

    {
      id: 13,
      name: 'Ноутбук HYDRA Home H20 15.6" / 12 Гб / SSD 512 Гб / Win 11 / MKII',
      description: 'Ноутбуки HYDRA это Казахстанский бренд электроники и гаджетов для дома. HYDRA H20 стоит, как обычный ноутбук для повседневного использования, однако это устройство достаточно мощное. Данная модель, оснащенная полноценным 4-х ядерным процессором Intel N4200, оперативной памятью объемом 12 ГБ и SSD накопителем емкостью 512 ГБ.',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p46/69607282.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=234230100',
      likes: 5,
      categoryId: 2,
    },

    {
      id: 14,
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
      description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=234230100',
      likes: 5,
      categoryId: 2,
    },

    {
      id: 15,
      name: 'Ноутбук Oyan Lite X14 14.1" / 8 Гб / SSD 512 Гб / Win 11 Home / R1526',
      description: 'Внимание: ноутбук не для игр или работы с ресурсоемкими приложениями. Встроенная видеокарта Intel UHD Graphics 600 справляется только с базовыми задачами, такими как просмотр видео и работа в офисных программах.',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe1/p49/48619239.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/oyan-lite-x14-14-1-8-gb-ssd-512-gb-win-11-home-r1526-115724796/?c=234230100',
      likes: 5,
      categoryId: 2,
    },

    //след категория
    {
      id: 16,
      name: 'Наушники JBL Tune 510BT черный',
      description: 'аушники JBL Tune 510BT позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов. Эти простые в использовании наушники работают до 40 часов на одном заряде аккумулятора, а, подключив зарядный кабель USB-C всего на пять минут к сети питания, вы получите еще 2 часа воспроизведения.',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=234230100',
      likes: 5,
      categoryId: 3,
    },

    {
      id: 17,
      name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
      description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. Вы будете чётко слышать весь спектр — от глубоких, насыщенных басов до кристально чистых высоких нот.',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=234230100',
      likes: 5,
      categoryId: 3,
    },

    {
      id: 18,
      name: 'Наушники Samsung Galaxy Buds core черный',
      description: 'Беспроводные наушники Samsung Galaxy Buds core — компактное и стильное решение для тех, кто ценит качество звука и удобство использования',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/p7d/53123420.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p02/p7d/53123421.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-core-chernyi-142551258/?c=234230100',
      likes: 5,
      categoryId: 3,
    },

    {
      id: 19,
      name: 'Наушники WIWU Earbuds 303 белый',
      description: '**WIWU Earbuds 303** — это универсальные наушники для тех, кто ценит качественный звук и удобство использования в повседневной жизни.',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p01/pf1/9210783.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/pf1/9210784.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-wiwu-earbuds-303-belyi-118287281/?c=234230100',
      likes: 5,
      categoryId: 3,
    },

    {
      id: 20,
      name: 'Наушники GERLAX A4 белый',
      description: 'Наушники GERLAX A4 — идеальный выбор для тех, кто ценит комфорт и качество звука в любых условиях. Эти беспроводные наушники обеспечивают активное шумоподавление и высокую чувствительность, что делает их отличным решением для работы, учёбы или отдыха.',
      price: 54299,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0f/p48/24051765.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa6/p44/24051766.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-gerlax-a4-belyi-132159948/?c=234230100',
      likes: 5,
      categoryId: 3,
    },
  ];

  getProductsByCategory(categoryId: number): Product[]{
    return this.products.filter(p => p.categoryId == categoryId);
  }
}