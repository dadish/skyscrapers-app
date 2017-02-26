import { List, Map } from 'immutable';
import {
  AJAX_SEARCH_END,
} from '../constants';

export const initialState = new List([
  {
    "id": "4176",
    "title": "191 Peachtree Tower",
    "url": "/cities/atlanta/191-peachtree-tower/",
    "height": 771,
    "floors": 50,
    "images": [
      {
        "url": "/site/assets/files/4176/191peachtree3.jpg",
        "width": 379,
        "height": 640
      },
      {
        "url": "/site/assets/files/4176/191peachtree.jpg",
        "width": 640,
        "height": 437
      },
      {
        "url": "/site/assets/files/4176/191peachtree2.jpg",
        "width": 640,
        "height": 452
      }
    ]
  },
  {
    "id": "4177",
    "title": "One Atlantic Center",
    "url": "/cities/atlanta/one-atlantic-center/",
    "height": 820,
    "floors": 50,
    "images": [
      {
        "url": "/site/assets/files/4177/midtown2.jpg",
        "width": 692,
        "height": 900
      },
      {
        "url": "/site/assets/files/4177/1atlantic1.jpg",
        "width": 563,
        "height": 640
      }
    ]
  },
  {
    "id": "4179",
    "title": "Westin Peachtree Plaza",
    "url": "/cities/atlanta/westin-peachtree-plaza/",
    "height": 722,
    "floors": 73,
    "images": [
      {
        "url": "/site/assets/files/4179/westin1.jpg",
        "width": 561,
        "height": 640
      },
      {
        "url": "/site/assets/files/4179/westin2.jpg",
        "width": 515,
        "height": 640
      },
      {
        "url": "/site/assets/files/4179/westin.jpg",
        "width": 598,
        "height": 900
      }
    ]
  },
  {
    "id": "4181",
    "title": "SunTrust Plaza",
    "url": "/cities/atlanta/suntrust-plaza/",
    "height": 869,
    "floors": 60,
    "images": [
      {
        "url": "/site/assets/files/4181/suntrust11.jpg",
        "width": 500,
        "height": 766
      },
      {
        "url": "/site/assets/files/4181/suntrust1.jpg",
        "width": 516,
        "height": 640
      },
      {
        "url": "/site/assets/files/4181/suntrust.jpg",
        "width": 480,
        "height": 534
      },
      {
        "url": "/site/assets/files/4181/suntrust2.jpg",
        "width": 584,
        "height": 420
      }
    ]
  },
  {
    "id": "4182",
    "title": "Peachtree Summit",
    "url": "/cities/atlanta/peachtree-summit/",
    "height": 410,
    "floors": 31,
    "images": [
      {
        "url": "/site/assets/files/4182/peachsummit.jpg",
        "width": 480,
        "height": 671
      }
    ]
  },
  {
    "id": "4183",
    "title": "Symphony Tower",
    "url": "/cities/atlanta/symphony-tower/",
    "height": 657,
    "floors": 41,
    "images": [
      {
        "url": "/site/assets/files/4183/1180a1.jpg",
        "width": 480,
        "height": 677
      },
      {
        "url": "/site/assets/files/4183/1180a.jpg",
        "width": 640,
        "height": 518
      },
      {
        "url": "/site/assets/files/4183/midtown.jpg",
        "width": 1024,
        "height": 681
      },
      {
        "url": "/site/assets/files/4183/1180promenade.jpg",
        "width": 500,
        "height": 581
      }
    ]
  },
  {
    "id": "4184",
    "title": "Bank of America Plaza",
    "url": "/cities/atlanta/bank-of-america-plaza/",
    "height": 1024,
    "floors": 55,
    "images": [
      {
        "url": "/site/assets/files/4184/boa1.jpg",
        "width": 480,
        "height": 612
      },
      {
        "url": "/site/assets/files/4184/boa2.jpg",
        "width": 400,
        "height": 560
      }
    ]
  },
  {
    "id": "4186",
    "title": "Georgia-Pacific Tower",
    "url": "/cities/atlanta/georgia-pacific-tower/",
    "height": 697,
    "floors": 52,
    "images": [
      {
        "url": "/site/assets/files/4186/gapac.jpg",
        "width": 441,
        "height": 640
      }
    ]
  },
  {
    "id": "4188",
    "title": "Promenade II",
    "url": "/cities/atlanta/promenade-ii/",
    "height": 691,
    "floors": 40,
    "images": [
      {
        "url": "/site/assets/files/4188/promenade2a.jpg",
        "width": 480,
        "height": 652
      },
      {
        "url": "/site/assets/files/4188/promenade2b.jpg",
        "width": 566,
        "height": 397
      },
      {
        "url": "/site/assets/files/4188/promenade2c.jpg",
        "width": 480,
        "height": 599
      }
    ]
  },
  {
    "id": "4189",
    "title": "Atlantic Center Plaza",
    "url": "/cities/atlanta/atlantic-center-plaza/",
    "height": 850,
    "floors": 24,
    "images": [
      {
        "url": "/site/assets/files/4189/1atlantic3.jpg",
        "width": 473,
        "height": 601
      }
    ]
  },
  {
    "id": "4190",
    "title": "Marriott Marquis",
    "url": "/cities/atlanta/marriott-marquis/",
    "height": 554,
    "floors": 52,
    "images": [
      {
        "url": "/site/assets/files/4190/marriott3.jpg",
        "width": 495,
        "height": 640
      },
      {
        "url": "/site/assets/files/4190/marriott1.jpg",
        "width": 640,
        "height": 429
      },
      {
        "url": "/site/assets/files/4190/marriott2.jpg",
        "width": 640,
        "height": 453
      }
    ]
  },
  {
    "id": "4191",
    "title": "Equitable Building",
    "url": "/cities/atlanta/equitable-building/",
    "height": 453,
    "floors": 35,
    "images": [
      {
        "url": "/site/assets/files/4191/equitable2.jpg",
        "width": 409,
        "height": 555
      },
      {
        "url": "/site/assets/files/4191/equitable.jpg",
        "width": 640,
        "height": 448
      }
    ]
  },
  {
    "id": "4192",
    "title": "One Park Tower",
    "url": "/cities/atlanta/one-park-tower/",
    "height": 439,
    "floors": 32,
    "images": [
      {
        "url": "/site/assets/files/4192/1parktower1.jpg",
        "width": 500,
        "height": 772
      },
      {
        "url": "/site/assets/files/4192/1parktower2.jpg",
        "width": 500,
        "height": 728
      }
    ]
  },
  {
    "id": "4193",
    "title": "Flatiron Building",
    "url": "/cities/atlanta/flatiron-building/",
    "height": 0,
    "floors": 11,
    "images": [
      {
        "url": "/site/assets/files/4193/atl-flatiron.jpg",
        "width": 500,
        "height": 680
      }
    ]
  },
  {
    "id": "4195",
    "title": "1100 Peachtree",
    "url": "/cities/atlanta/1100-peachtree/",
    "height": 428,
    "floors": 28,
    "images": []
  },
  {
    "id": "4196",
    "title": "ViewPoint",
    "url": "/cities/atlanta/viewpoint/",
    "height": 480,
    "floors": 36,
    "images": [
      {
        "url": "/site/assets/files/4196/viewpointspire2.jpg",
        "width": 642,
        "height": 900
      }
    ]
  },
  {
    "id": "4197",
    "title": "Atlanta Plaza",
    "url": "/cities/atlanta/atlanta-plaza/",
    "height": 425,
    "floors": 32,
    "images": []
  },
  {
    "id": "4198",
    "title": "Park Place",
    "url": "/cities/atlanta/park-place/",
    "height": 419,
    "floors": 40,
    "images": []
  },
  {
    "id": "4199",
    "title": "Park Avenue Condominiums",
    "url": "/cities/atlanta/park-avenue-condominiums/",
    "height": 486,
    "floors": 44,
    "images": []
  },
  {
    "id": "4200",
    "title": "Spire",
    "url": "/cities/atlanta/spire/",
    "height": 453,
    "floors": 27,
    "images": [
      {
        "url": "/site/assets/files/4200/viewpointspire2.jpg",
        "width": 642,
        "height": 900
      }
    ]
  },
  {
    "id": "4201",
    "title": "The Mansion on Peachtree",
    "url": "/cities/atlanta/the-mansion-on-peachtree/",
    "height": 580,
    "floors": 42,
    "images": []
  },
  {
    "id": "4203",
    "title": "IDS Center",
    "url": "/cities/minneapolis/ids-center/",
    "height": 791,
    "floors": 55,
    "images": [
      {
        "url": "/site/assets/files/4203/ids.jpg",
        "width": 477,
        "height": 685
      }
    ]
  },
  {
    "id": "4204",
    "title": "Wells Fargo Center",
    "url": "/cities/minneapolis/wells-fargo-center/",
    "height": 771,
    "floors": 57,
    "images": []
  },
  {
    "id": "4206",
    "title": "225 South Sixth",
    "url": "/cities/minneapolis/225-south-sixth/",
    "height": 778,
    "floors": 56,
    "images": []
  },
  {
    "id": "4208",
    "title": "Qwest Building",
    "url": "/cities/minneapolis/qwest-building/",
    "height": 346,
    "floors": 0,
    "images": []
  },
  {
    "id": "4209",
    "title": "Midwest Plaza",
    "url": "/cities/minneapolis/midwest-plaza/",
    "height": 320,
    "floors": 20,
    "images": []
  },
  {
    "id": "4210",
    "title": "Foshay Tower",
    "url": "/cities/minneapolis/foshay-tower/",
    "height": 447,
    "floors": 32,
    "images": []
  },
  {
    "id": "4211",
    "title": "Rand Tower",
    "url": "/cities/minneapolis/rand-tower/",
    "height": 0,
    "floors": 26,
    "images": []
  },
  {
    "id": "4212",
    "title": "Bank of the West Tower",
    "url": "/cities/albuquerque/bank-of-the-west-tower/",
    "height": 213,
    "floors": 17,
    "images": []
  },
  {
    "id": "4214",
    "title": "Bank of Albuquerque Tower",
    "url": "/cities/albuquerque/bank-of-albuquerque-tower/",
    "height": 351,
    "floors": 22,
    "images": []
  },
  {
    "id": "4215",
    "title": "Dennis Chavez Federal Building",
    "url": "/cities/albuquerque/dennis-chavez-federal-building/",
    "height": 197,
    "floors": 13,
    "images": []
  },
  {
    "id": "4216",
    "title": "Pete V. Domenici United States Courthouse",
    "url": "/cities/albuquerque/pete-v-domenici-united-states-courthouse/",
    "height": 176,
    "floors": 7,
    "images": []
  },
  {
    "id": "4217",
    "title": "Albuquerque Petroleum Building",
    "url": "/cities/albuquerque/albuquerque-petroleum-building/",
    "height": 235,
    "floors": 15,
    "images": []
  },
  {
    "id": "4218",
    "title": "Gold Building",
    "url": "/cities/albuquerque/gold-building/",
    "height": 203,
    "floors": 14,
    "images": []
  },
  {
    "id": "4219",
    "title": "PNM Building",
    "url": "/cities/albuquerque/pnm-building/",
    "height": 184,
    "floors": 12,
    "images": []
  },
  {
    "id": "4220",
    "title": "Simms Building",
    "url": "/cities/albuquerque/simms-building/",
    "height": 180,
    "floors": 13,
    "images": []
  },
  {
    "id": "4221",
    "title": "La Posada de Albuquerque",
    "url": "/cities/albuquerque/la-posada-de-albuquerque/",
    "height": 135,
    "floors": 10,
    "images": []
  },
  {
    "id": "4222",
    "title": "Metropolitan Courthouse",
    "url": "/cities/albuquerque/metropolitan-courthouse/",
    "height": 175,
    "floors": 9,
    "images": []
  },
  {
    "id": "4223",
    "title": "Compass Bank Building",
    "url": "/cities/albuquerque/compass-bank-building/",
    "height": 238,
    "floors": 18,
    "images": []
  },
  {
    "id": "4224",
    "title": "The Residences at Packard Place",
    "url": "/cities/albuquerque/the-residences-at-packard-place/",
    "height": 351,
    "floors": 8,
    "images": []
  },
  {
    "id": "4225",
    "title": "Chant Tower",
    "url": "/cities/albuquerque/chant-tower/",
    "height": 351,
    "floors": 30,
    "images": []
  },
  {
    "id": "4226",
    "title": "W. E. B. DuBois Library",
    "url": "/cities/amherst/w-e-b-dubois-library/",
    "height": 296,
    "floors": 26,
    "images": []
  },
  {
    "id": "4227",
    "title": "John W. Lederle Graduate Research Center",
    "url": "/cities/amherst/john-w-lederle-graduate-research-center/",
    "height": 210,
    "floors": 16,
    "images": []
  },
  {
    "id": "4228",
    "title": "Coolidge Hall",
    "url": "/cities/amherst/coolidge-hall/",
    "height": 276,
    "floors": 22,
    "images": []
  },
  {
    "id": "4229",
    "title": "John Adams Hall",
    "url": "/cities/amherst/john-adams-hall/",
    "height": 276,
    "floors": 22,
    "images": []
  },
  {
    "id": "4230",
    "title": "John Quincy Adams Hall",
    "url": "/cities/amherst/john-quincy-adams-hall/",
    "height": 276,
    "floors": 22,
    "images": []
  },
  {
    "id": "4231",
    "title": "Kennedy Hall",
    "url": "/cities/amherst/kennedy-hall/",
    "height": 276,
    "floors": 22,
    "images": []
  },
  {
    "id": "4232",
    "title": "Washington Hall",
    "url": "/cities/amherst/washington-hall/",
    "height": 276,
    "floors": 22,
    "images": []
  },
  {
    "id": "4233",
    "title": "Murray D. Lincoln Campus Center",
    "url": "/cities/amherst/murray-d-lincoln-campus-center/",
    "height": 205,
    "floors": 14,
    "images": []
  },
  {
    "id": "4234",
    "title": "Southwest (North) Dormitory III",
    "url": "/cities/amherst/southwest-north-dormitory-iii/",
    "height": 205,
    "floors": 22,
    "images": []
  }
].map(item => new Map(item)));

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AJAX_SEARCH_END:
      return new List(payload.data.skyscraper.list.map(item => new Map(item)));
    default:
      return state;
  }
};

export default reducer;