import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Наушники Air pro 2 белый',
      description: 'Беспроводные наушники с сенсорным кейсом-экраном обеспечивают чистый звук, активное шумоподавление и стабильное подключение по Bluetooth 5.3. Умный дисплей на кейсе позволяет управлять музыкой, просматривать уровень заряда и менять режимы без использования телефона.',
      price: 28990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he4/h13/85730021834782.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/ha2/85730021900318.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE'
    },

    {
      id: 2,
      name: 'Наушники HYDRA Home Minor бежевый',
      description: 'Представляем вам наушники HYDRA Minor — идеальный выбор для тех, кто ценит комфорт и высокое качество звука в любом месте и в любое время. Эти беспроводные наушники обеспечивают чистый звук и долгую работу без проводов.',
      price: 49990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8b/p7f/46750477.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6f/p7f/46750478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/p7c/46750482.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-hydra-home-minor-bezhevyi-120724130/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE'
    },

    {
      id: 3,
      name: 'Наушники Apple AirPods 4 белый',
      description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни. Функция динамического отслеживания точно реагирует на каждое движение головы и создает трехмерное живое звучание, сравнимое с воспроизведением в настоящем концертном зале. Обновленные алгоритмы сенсорного управления дают возможность максимально точно регулировать громкость. Более мощный аккумулятор позволяет слушать музыку до 5 часов без подзарядки, и ты сможешь еще до 5 раз подзарядиться от зарядного кейса.',
      price: 59939,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE'
    },

    {
      id: 4,
      name: 'Наушники Remax PD-BT101 белый',
      description: 'Наушники Remax PD-BT101 — идеальный выбор для тех, кто ценит комфорт и качество звука в любом месте. Эти беспроводные наушники обеспечивают отличное звучание и удобство использования, что делает их идеальными для повседневного использования.',
      price: 15400,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p73/p2a/32211847.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdd/p2d/32211848.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p47/p31/32211849.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-remax-pd-bt101-belyi-136902528/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE'
    },

    {
      id: 5,
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
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-yndx-00025-fioletovyi-101870266/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE'
    },

    {
      id: 6,
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
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE'
    },

    {
      id: 7,
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
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-rozovyi-122679840/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE'
    },

    {
      id: 8,
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
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-zelenyi-130192872/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE'
    },

    {
      id: 9,
      name: 'Телевизор Xiaomi A Pro 2026 L50MB-APRU 127 см черный',
      description: 'Поддержка повышенной частоты обновления экрана 120Гц* вместо 60Гц при получении HDMI-сигнала обеспечивает более четкое изображение при движении и плавное отображение во время игр. *120Гц доступны только при разрешении 1080p.',
      price: 189990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p31/p2b/99130047.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8c/p28/99130050.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p38/p28/99130053.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pff/p27/99130055.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-a-pro-2026-l50mb-apru-127-sm-chernyi-146846746/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE'
    },
    
    {
      id: 10,
      name: 'Игровая приставка Steam Deck OLED 1 ТБ Valve Steam Deck',
      description: 'team Deck OLED 1 ТБ — портативная игровая приставка, которая объединяет мощность, компактность и высокое качество графики. Идеальный выбор для геймеров, стремящихся к свободе и удобству в игре.',
      price: 424000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h4d/84654918139934.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/h4d/84654918139934.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/h4d/84654918139934.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/h4d/84654918139934.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/steam-deck-oled-1-tb-valve-steam-deck-115152244/?c=234230100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiAncvMBhBEEiwA9GU_fjIKX5XhLjjrixt80GV2wr4PAmCRRX_igRiwll3AUZBTdC5z3zbbARoC_xcQAvD_BwE'
    },
  ]
}