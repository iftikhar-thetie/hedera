<template>
  <BaseSection :label="'Application News'">
    <BaseCard class="h-[336px]">
      <template #header>Recent News</template>
      <template #controls>
        <BaseToggle v-model="noTweets">
          <template #left>Turn off Tweets</template>
        </BaseToggle>
      </template>
      <div class="bg-neutral-800 space-y-px mx-2">
        <NewsItem v-for="item in newsItems" :key="item.id" :news="item" />
      </div>
    </BaseCard>
  </BaseSection>
</template>
<script setup>
const noTweets = ref(false);
const newsItems = [
  {
    id: 2546722,
    tweet_id: null,
    headline: 'South Korea reiterates ban on crypto ETFs despite US approval: report',
    translated_headline: null,
    date: '2024-01-11T08:19:35.296Z',
    link: 'https://www.theblock.co/post/271837/south-korea-reiterates-crypto-etf-ban',
    timestamp: '2024-01-11T08:19:35.296Z',
    link_hash: '30dcd615d0cd36887eee79f1f462ab2e',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://www.tbstat.com/wp/uploads/2022/05/20220525_News-South-Korea-2-1200x675.jpg',
      description:
        'South Korea’s top financial regulator said that it will stand by its rule that restricts financial institutions from launching crypto ETFs.'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 226,
        name: 'Crypto',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      },
      {
        id: 227,
        name: 'Crypto ETF',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      },
      {
        id: 320,
        name: 'Regulatory',
        tag_subgroup: {
          id: 6,
          name: 'SigDevs'
        }
      }
    ],
    sources: [
      {
        id: 91,
        name: 'The Block',
        collections: [
          {
            id: 5,
            name: 'Crypto Native Publications'
          }
        ]
      }
    ]
  },
  {
    id: 2546720,
    tweet_id: null,
    headline: 'Celebrate Spot Bitcoin ETFs’ Approval, Trade to Split $20,000 Prizes',
    translated_headline: null,
    date: '2024-01-11T08:18:08.739Z',
    link: 'https://www.gate.io/article/33968',
    timestamp: '2024-01-11T08:18:08.739Z',
    link_hash: 'd65abf24903d9b2f1181050500125d0f',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://www.gate.io/images/gateio_share_bg.png',
      description:
        'Earn interest on your idle funds. Principal and return are guaranteed with always over 100% collateral from your counterparties.'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 205,
        name: 'Bitcoin',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'BTC',
          name: 'Bitcoin',
          uid: 'bitcoin'
        }
      },
      {
        id: 227,
        name: 'Crypto ETF',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      },
      {
        id: 320,
        name: 'Regulatory',
        tag_subgroup: {
          id: 6,
          name: 'SigDevs'
        }
      },
      {
        id: 418,
        name: 'Gate.io',
        tag_subgroup: {
          id: 10,
          name: 'Companies'
        }
      }
    ],
    sources: [
      {
        id: 1842,
        name: 'Gate.io Announcements',
        collections: [
          {
            id: 8,
            name: 'Direct from Exchanges'
          }
        ]
      }
    ]
  },
  {
    id: 2546715,
    tweet_id: null,
    headline: 'Announcing Klaytn Docs 2.0: Streamlined, Searchable, and Community-Powered',
    translated_headline: null,
    date: '2024-01-11T08:16:09.223Z',
    link: 'https://medium.com/klaytn/announcing-klaytn-docs-2-0-streamlined-searchable-and-community-powered-237d724f3817',
    timestamp: '2024-01-11T08:16:09.223Z',
    link_hash: '9174a3b04a495e6aa0ccbea8a90dfb38',
    is_starred_by_the_tie: false,
    metadata: {
      image: null,
      description: ''
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 788,
        name: 'Klaytn',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'KLAY',
          name: 'Klaytn',
          uid: 'klaytn'
        }
      },
      {
        id: 187,
        name: 'Announcement',
        tag_subgroup: {
          id: 6,
          name: 'SigDevs'
        }
      }
    ],
    sources: [
      {
        id: 2213,
        name: 'Klaytn Medium',
        collections: [
          {
            id: 7,
            name: 'Direct from Crypto Projects'
          }
        ]
      }
    ]
  },
  {
    id: 2546709,
    tweet_id: null,
    headline: 'Bitcoin is “Not Taking Off” as Mainstream Payment: BoE Governor',
    translated_headline: null,
    date: '2024-01-11T08:12:08.000Z',
    link: 'https://cryptonews.com/news/bitcoin-is-not-taking-off-as-mainstream-payment-boe-governor.htm',
    timestamp: '2024-01-11T08:13:11.044Z',
    link_hash: '2d1b0c5aeb9e2d08735463cd3eb1f5f1',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://cryptonews.com/wp-content/uploads/2024/01/1704960083-brit.jpeg',
      description:
        'Andrew Bailey stressed that cryptos such as Bitcoin are “pretty inefficient” as a payment method as it has not “keep up the momentum.”'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 205,
        name: 'Bitcoin',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'BTC',
          name: 'Bitcoin',
          uid: 'bitcoin'
        }
      }
    ],
    sources: [
      {
        id: 3653,
        name: 'Crypto News Feed',
        collections: [
          {
            id: 5,
            name: 'Crypto Native Publications'
          }
        ]
      }
    ]
  },
  {
    id: 2546692,
    tweet_id: null,
    headline: 'Gate.io Copy Trading New Copier Benefit Pack #2: Opening Gift, Compensation Voucher, and Easy Cash!',
    translated_headline: null,
    date: '2024-01-11T08:10:08.632Z',
    link: 'https://www.gate.io/article/33967',
    timestamp: '2024-01-11T08:10:08.632Z',
    link_hash: 'a58507edf889a15caeb1c4653650eb79',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://www.gate.io/images/gateio_share_bg.png',
      description:
        'Earn interest on your idle funds. Principal and return are guaranteed with always over 100% collateral from your counterparties.'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 418,
        name: 'Gate.io',
        tag_subgroup: {
          id: 10,
          name: 'Companies'
        }
      }
    ],
    sources: [
      {
        id: 1842,
        name: 'Gate.io Announcements',
        collections: [
          {
            id: 8,
            name: 'Direct from Exchanges'
          }
        ]
      }
    ]
  },
  {
    id: 2546688,
    tweet_id: null,
    headline:
      'CoinGecko Faces Brief Compromise as Phishing Scam Targets X Account, Warns Users Against Suspicious Links',
    translated_headline: null,
    date: '2024-01-11T08:06:55.000Z',
    link: 'https://cryptonews.com/news/coingecko-faces-brief-compromise-as-phishing-scam-targets-x-account-warns-users-against-suspicious-links.htm',
    timestamp: '2024-01-11T08:07:11.277Z',
    link_hash: 'f4d007d22c65222d476a6464e97b22ad',
    is_starred_by_the_tie: false,
    metadata: {
      image:
        'https://cryptonews.com/wp-content/uploads/2024/01/1704960306-1698899096-adobestock-sergey-nivens-___media_library_original_1200_765-1.jpg',
      description:
        'Cryptocurrency data aggregator CoinGecko experienced a security breach when their account fell victim to a phishing attack.'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 280,
        name: 'Illicit Activity',
        tag_subgroup: {
          id: 6,
          name: 'SigDevs'
        }
      }
    ],
    sources: [
      {
        id: 3653,
        name: 'Crypto News Feed',
        collections: [
          {
            id: 5,
            name: 'Crypto Native Publications'
          }
        ]
      }
    ]
  },
  {
    id: 2546677,
    tweet_id: null,
    headline: 'Shibarium Backtracks as Crypto Market Scores History',
    translated_headline: null,
    date: '2024-01-11T08:00:00.000Z',
    link: 'https://u.today/shibarium-backtracks-as-crypto-market-scores-history',
    timestamp: '2024-01-11T08:03:09.052Z',
    link_hash: '37916dfa02cec2eafc94ab9a24b37542',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://u.today/sites/default/files/styles/twitter/public/2024-01/43799.jpg',
      description: 'Shibarium transactions drop to four-week low, but SHIB price makes daring comeback'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 618,
        name: 'SHIBA INU',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'SHIB',
          name: 'SHIBA INU',
          uid: 'shibainu'
        }
      },
      {
        id: 226,
        name: 'Crypto',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      }
    ],
    sources: [
      {
        id: 1848,
        name: 'U.today',
        collections: [
          {
            id: 5,
            name: 'Crypto Native Publications'
          }
        ]
      }
    ]
  },
  {
    id: 2546672,
    tweet_id: null,
    headline: 'Social Media Platform X Halts NFT Profile Service, Stirring Mixed Reactions in Crypto Sphere',
    translated_headline: null,
    date: '2024-01-11T08:00:04.000Z',
    link: 'https://news.bitcoin.com/social-media-platform-x-halts-nft-profile-service-stirring-mixed-reactions-in-crypto-sphere/',
    timestamp: '2024-01-11T08:02:09.987Z',
    link_hash: '41d5b1c95efc005a68ef5d87c4820749',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://static.news.bitcoin.com/wp-content/uploads/2024/01/whatjoh.jpg',
      description:
        'The social media platform X has discontinued its non-fungible token (NFT) profile picture service, a feature introduced just last year.'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 226,
        name: 'Crypto',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      },
      {
        id: 665,
        name: 'NFT',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      }
    ],
    sources: [
      {
        id: 161,
        name: 'Bitcoin.com News',
        collections: [
          {
            id: 5,
            name: 'Crypto Native Publications'
          }
        ]
      }
    ]
  },
  {
    id: 2546671,
    tweet_id: null,
    headline: 'Trade BTC on Binance Spot to Grab a Share of 5,000 USDT in Token Vouchers! (2024-01-11)',
    translated_headline: null,
    date: '2024-01-11T08:02:05.566Z',
    link: 'https://www.binance.com/en/support/announcement/trade-btc-on-binance-spot-to-grab-a-share-of-5-000-usdt-in-token-vouchers-2024-01-11-aeaed28866844ab6b18341c5b6cdd9d1',
    timestamp: '2024-01-11T08:02:05.566Z',
    link_hash: 'da83429f00f30bb54fe7dcddfae0df8a',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://public.bnbstatic.com/static/images/cms/announcement-og-1.png',
      description:
        'This is a general announcement. Products and services referred to here may not be available in your region. Fellow Binancians, Binance Spot is launching a promotion for all regular and VIP 1-3 user...'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 201,
        name: 'Binance Coin',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'BNB',
          name: 'Binance Coin',
          uid: 'binancecoin'
        }
      },
      {
        id: 337,
        name: 'Tether',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'USDT',
          name: 'Tether',
          uid: 'tether'
        }
      },
      {
        id: 200,
        name: 'Binance',
        tag_subgroup: {
          id: 10,
          name: 'Companies'
        }
      }
    ],
    sources: [
      {
        id: 481,
        name: 'Binance Announcements',
        collections: [
          {
            id: 8,
            name: 'Direct from Exchanges'
          },
          {
            id: 7,
            name: 'Direct from Crypto Projects'
          }
        ]
      }
    ]
  },
  {
    id: 2546657,
    tweet_id: null,
    headline:
      'Flash News: OKX Lists NMR and JOE on its Perpetual Futures Market, Enables Margin Trading and Simple Earn for the Tokens',
    translated_headline: null,
    date: '2024-01-11T08:01:11.932Z',
    link: 'https://www.globenewswire.com/news-release/2024/01/11/2807661/0/en/Flash-News-OKX-Lists-NMR-and-JOE-on-its-Perpetual-Futures-Market-Enables-Margin-Trading-and-Simple-Earn-for-the-Tokens.html',
    timestamp: '2024-01-11T08:01:11.932Z',
    link_hash: '5168f7af0d860cd6819b48af472ff4b8',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://ml.globenewswire.com/Resource/Download/7d46492f-0db0-46e3-a7a5-a57cc0fb4256',
      description:
        'NASSAU, Bahamas, Jan. 11, 2024 (GLOBE NEWSWIRE) -- OKX, a leading crypto exchange and Web3 technology company, has issued updates for January 11, 2024. ...'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 305,
        name: 'OKX',
        tag_subgroup: {
          id: 10,
          name: 'Companies'
        }
      },
      {
        id: 625,
        name: 'JOE',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'JOE',
          name: 'JOE',
          uid: 'joe'
        }
      },
      {
        id: 304,
        name: 'Numeraire',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'NMR',
          name: 'Numeraire',
          uid: 'numeraire'
        }
      },
      {
        id: 290,
        name: 'Listing',
        tag_subgroup: {
          id: 6,
          name: 'SigDevs'
        }
      }
    ],
    sources: [
      {
        id: 1706,
        name: 'Globe Newswire',
        collections: [
          {
            id: 20,
            name: 'Press Releases'
          }
        ]
      }
    ]
  },
  {
    id: 2546658,
    tweet_id: null,
    headline: 'VirtuWorld Presents Exciting New Features in the Metaverse',
    translated_headline: null,
    date: '2024-01-11T08:01:11.932Z',
    link: 'https://www.globenewswire.com/news-release/2024/01/11/2807663/0/en/VirtuWorld-Presents-Exciting-New-Features-in-the-Metaverse.html',
    timestamp: '2024-01-11T08:01:11.932Z',
    link_hash: '922e895e99bb451e3858b853035ad6e6',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://ml.globenewswire.com/Resource/Download/d892f045-86cf-4bd0-9040-bc454cfe482a',
      description:
        'VirtuWorld is a name growing in popularity in the realm of digital experiences. It is a novel concept in the metaverse domain, offering immersive digital...'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 664,
        name: 'Metaverse',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      }
    ],
    sources: [
      {
        id: 1706,
        name: 'Globe Newswire',
        collections: [
          {
            id: 20,
            name: 'Press Releases'
          }
        ]
      }
    ]
  },
  {
    id: 2546648,
    tweet_id: null,
    headline: 'VirtuWorld Presents Exciting New Features in the Metaverse',
    translated_headline: null,
    date: '2024-01-11T03:00:00.000Z',
    link: 'https://blockchainwire.io/press-release/virtuworld-presents-exciting-new-features-in-the-metaverse',
    timestamp: '2024-01-11T08:00:17.503Z',
    link_hash: 'e7a0542b0ed869b1da33bdda52ed8064',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://api.blockchainwire.io/uploads/VirtuWorld/logo/IMG_41061.png',
      description: 'VirtuWorld Presents Exciting New Features in the Metaverse'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 664,
        name: 'Metaverse',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      }
    ],
    sources: [
      {
        id: 537,
        name: 'Blockchain Wire',
        collections: [
          {
            id: 20,
            name: 'Press Releases'
          }
        ]
      }
    ]
  },
  {
    id: 2546649,
    tweet_id: null,
    headline: '03:00 ET\nOKX Unveils Arabic-Language Website and App For Crypto Trading and Web3',
    translated_headline: null,
    date: '2024-01-11T08:00:17.470Z',
    link: 'https://www.prnewswire.com/news-releases/okx-unveils-arabic-language-website-and-app-for-crypto-trading-and-web3-302031550.html',
    timestamp: '2024-01-11T08:00:17.470Z',
    link_hash: '4fbab7843ab3118594c47eaf9fdcd1af',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://mma.prnewswire.com/media/2014295/OKX_Logo_Logo.jpg?p=facebook',
      description:
        '/PRNewswire/ -- OKX, a leading Web3 technology company, today announced the launch of its Arabic-language website and app for both crypto trading and Web3...'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 305,
        name: 'OKX',
        tag_subgroup: {
          id: 10,
          name: 'Companies'
        }
      },
      {
        id: 677,
        name: 'Web3',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      },
      {
        id: 226,
        name: 'Crypto',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      }
    ],
    sources: [
      {
        id: 549,
        name: 'PR Newswire',
        collections: [
          {
            id: 20,
            name: 'Press Releases'
          }
        ]
      },
      {
        id: 539,
        name: 'PR Newswire RSS',
        collections: [
          {
            id: 20,
            name: 'Press Releases'
          }
        ]
      }
    ]
  },
  {
    id: 2546650,
    tweet_id: null,
    headline: 'ConveGenius Raises $7 Million Funding to Expand Edtech Generative AI Capabilities',
    translated_headline: null,
    date: '2024-01-11T07:59:51.000Z',
    link: 'https://mpost.io/convegenius-raises-7-million-funding-to-expand-edtech-generative-ai-capabilities/',
    timestamp: '2024-01-11T08:00:16.759Z',
    link_hash: 'c6ffb85d3c556130f36539df1d992ac6',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://mpost.io/wp-content/uploads/IMG_8525.jpg',
      description:
        'ConveGenius raised $7 million funding to advance generative AI capabilities and expand into international markets.'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 260,
        name: 'Funding',
        tag_subgroup: {
          id: 6,
          name: 'SigDevs'
        }
      }
    ],
    sources: [
      {
        id: 3443,
        name: 'Metaverse Post RSS Feed',
        collections: [
          {
            id: 45,
            name: 'Technology Publications'
          },
          {
            id: 5,
            name: 'Crypto Native Publications'
          }
        ]
      }
    ]
  },
  {
    id: 2546644,
    tweet_id: null,
    headline: 'China developer Sino-Ocean said to seek yuan bond extensions',
    translated_headline: null,
    date: '2024-01-11T08:00:07.890Z',
    link: 'https://www.businesstimes.com.sg/property/china-developer-sino-ocean-said-seek-yuan-bond-extensions',
    timestamp: '2024-01-11T08:00:07.890Z',
    link_hash: 'e123122e81bb7a9460a8d6e419e7890c',
    is_starred_by_the_tie: false,
    metadata: {
      image: null,
      description: ''
    },
    is_trending_news: false,
    grouped_headline: "China's Sino-Ocean Seeks Yuan Bond Extensions.",
    tags: [
      {
        id: 306,
        name: 'Ocean Protocol',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'OCEAN',
          name: 'Ocean Protocol',
          uid: 'oceanprotocol'
        }
      }
    ],
    sources: [
      {
        id: 506,
        name: 'Business Times Singapore',
        collections: [
          {
            id: 39,
            name: 'Mainstream Media'
          }
        ]
      }
    ]
  },
  {
    id: 2546640,
    tweet_id: null,
    headline: 'Bitcoin ETFs: What to Expect on Day One',
    translated_headline: null,
    date: '2024-01-11T03:35:03.000Z',
    link: 'https://finance.yahoo.com/news/bitcoin-etfs-expect-day-one-033503607.html',
    timestamp: '2024-01-11T08:00:03.894Z',
    link_hash: '2fd7cc62fe1661c1b14492ad53a320b7',
    is_starred_by_the_tie: false,
    metadata: {
      image:
        'https://s.yimg.com/ny/api/res/1.2/Anr6rYBLDdfzugRYrSuIVg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/coindesk_75/800e6fa1f21005e76b973c40c05e305a',
      description:
        "Spot bitcoin ETFs are launching in the U.S. on Thursday. Here's what the issuers and exchanges behind these products have to say."
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 205,
        name: 'Bitcoin',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'BTC',
          name: 'Bitcoin',
          uid: 'bitcoin'
        }
      },
      {
        id: 227,
        name: 'Crypto ETF',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      },
      {
        id: 320,
        name: 'Regulatory',
        tag_subgroup: {
          id: 6,
          name: 'SigDevs'
        }
      }
    ],
    sources: [
      {
        id: 478,
        name: 'Yahoo Finance RSS',
        collections: [
          {
            id: 24,
            name: 'Traditional Finance'
          }
        ]
      }
    ]
  },
  {
    id: 2546634,
    tweet_id: null,
    headline: 'Gate.io Structured Product Launched: Earn up to 14% APR',
    translated_headline: null,
    date: '2024-01-11T07:58:07.036Z',
    link: 'https://www.gate.io/article/33966',
    timestamp: '2024-01-11T07:58:07.036Z',
    link_hash: '12989f54477d55e6964a6e50859899ed',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://www.gate.io/images/gateio_share_bg.png',
      description:
        'Earn interest on your idle funds. Principal and return are guaranteed with always over 100% collateral from your counterparties.'
    },
    is_trending_news: false,
    grouped_headline: 'Gate.io Launches Structured Products Offering up to 14% APR Interest',
    tags: [
      {
        id: 187,
        name: 'Announcement',
        tag_subgroup: {
          id: 6,
          name: 'SigDevs'
        }
      },
      {
        id: 418,
        name: 'Gate.io',
        tag_subgroup: {
          id: 10,
          name: 'Companies'
        }
      }
    ],
    sources: [
      {
        id: 1842,
        name: 'Gate.io Announcements',
        collections: [
          {
            id: 8,
            name: 'Direct from Exchanges'
          }
        ]
      }
    ]
  },
  {
    id: 2546626,
    tweet_id: null,
    headline: 'Bitcoin Rival Ether Jumps on Bets Token Is Next for ETF Approval - Bloomberg',
    translated_headline: null,
    date: '2024-01-11T07:30:17.000Z',
    link: 'https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDI0LTAxLTExL2V0aGVyLWV0aC1qdW1wcy1vbi1iZXRzLXRva2VuLWlzLW5leHQtZm9yLXNlYy1ldGYtYXBwcm92YWzSAQA?oc=5',
    timestamp: '2024-01-11T07:53:08.070Z',
    link_hash: 'e76feee1d6c64aefcdde6951e1c7d48f',
    is_starred_by_the_tie: false,
    metadata: {
      image:
        'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300',
      description: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.'
    },
    is_trending_news: false,
    grouped_headline: 'Ether surges as investors bet on its approval for ETF alongside Bitcoin',
    tags: [
      {
        id: 205,
        name: 'Bitcoin',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'BTC',
          name: 'Bitcoin',
          uid: 'bitcoin'
        }
      },
      {
        id: 247,
        name: 'Ethereum',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'ETH',
          name: 'Ethereum',
          uid: 'ethereum'
        }
      },
      {
        id: 227,
        name: 'Crypto ETF',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      },
      {
        id: 320,
        name: 'Regulatory',
        tag_subgroup: {
          id: 6,
          name: 'SigDevs'
        }
      }
    ],
    sources: [
      {
        id: 1945,
        name: 'Bloomberg',
        collections: [
          {
            id: 24,
            name: 'Traditional Finance'
          }
        ]
      }
    ]
  },
  {
    id: 2546627,
    tweet_id: null,
    headline:
      "Cathie Wood's Ark Invest Teases 'Aren't You A Little Bit Curious' About Bitcoin, Dangles Fee Waiver For Prospective Investors",
    translated_headline: null,
    date: '2024-01-11T07:53:05.895Z',
    link: 'https://www.benzinga.com/markets/cryptocurrency/24/01/36588943/cathie-woods-ark-invest-teases-arent-you-a-little-bit-curious-about-bitcoin-dangles-fee-wa',
    timestamp: '2024-01-11T07:53:05.895Z',
    link_hash: '3e24b121bb5a451d380b7c5dcc790e57',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://cdn.benzinga.com/files/images/story/2024/Cathie-Wood.jpeg?width=1200&height=800&fit=crop',
      description:
        "Cathie Wood's Ark Invest has hinted at developments for its Bitcoin (CRYPTO: BTC) ETF, following a nod of approval from the Se"
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 205,
        name: 'Bitcoin',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'BTC',
          name: 'Bitcoin',
          uid: 'bitcoin'
        }
      }
    ],
    sources: [
      {
        id: 473,
        name: 'Benzinga',
        collections: [
          {
            id: 24,
            name: 'Traditional Finance'
          }
        ]
      }
    ]
  },
  {
    id: 2546621,
    tweet_id: null,
    headline:
      '02:50 ET\nPlavba do budoucnosti kryptoměn: Nejdůležitější momenty z hlavní přednášky #TheCryptoArk společnosti Bybit',
    translated_headline: null,
    date: '2024-01-11T07:50:58.643Z',
    link: 'https://www.prnewswire.com/news-releases/plavba-do-budoucnosti-kryptomn-nejdleitji-momenty-z-hlavni-pednaky-thecryptoark-spolenosti-bybit-302032378.html',
    timestamp: '2024-01-11T07:50:58.643Z',
    link_hash: 'd219bc5734c5f74f808c3dfafca8548e',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://mma.prnewswire.com/media/2315192/Image.jpg?p=facebook',
      description:
        '/PRNewswire/ – Ben Zhou, spoluzakladatel a generální ředitel společnosti Bybit, ve svém projevu osvětlil cestu, kterou se bude ubírat kryptoměnová sféra poté,...'
    },
    is_trending_news: false,
    grouped_headline: "Key Takeaways from Bybit's #TheCryptoArk Keynote: Navigating the Future of Cryptocurrencies",
    tags: [
      {
        id: 226,
        name: 'Crypto',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      },
      {
        id: 881,
        name: 'Bybit',
        tag_subgroup: {
          id: 10,
          name: 'Companies'
        }
      }
    ],
    sources: [
      {
        id: 549,
        name: 'PR Newswire',
        collections: [
          {
            id: 20,
            name: 'Press Releases'
          }
        ]
      },
      {
        id: 539,
        name: 'PR Newswire RSS',
        collections: [
          {
            id: 20,
            name: 'Press Releases'
          }
        ]
      }
    ]
  },
  {
    id: 2546618,
    tweet_id: null,
    headline: 'Nasdaq Plans to Fight Financial Crime With AI Technology',
    translated_headline: null,
    date: '2024-01-11T07:48:04.000Z',
    link: 'https://mpost.io/nasdaq-plans-to-fight-financial-crime-with-ai-technology/',
    timestamp: '2024-01-11T07:48:16.378Z',
    link_hash: '94ede18b3d329108600d1c6d378a9bd3',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://mpost.io/wp-content/uploads/1F415303-C2E4-459F-98F2-4DD872115953.jpg',
      description:
        'Nasdaq enhances anti-crime offerings by incorporating AI to predict criminal behavior, aiding in removal of bad actors within the industry.'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 280,
        name: 'Illicit Activity',
        tag_subgroup: {
          id: 6,
          name: 'SigDevs'
        }
      }
    ],
    sources: [
      {
        id: 3443,
        name: 'Metaverse Post RSS Feed',
        collections: [
          {
            id: 45,
            name: 'Technology Publications'
          },
          {
            id: 5,
            name: 'Crypto Native Publications'
          }
        ]
      }
    ]
  },
  {
    id: 2546616,
    tweet_id: null,
    headline: 'Cryptocurrencies pose risks to EMs, India’s stand remains unchanged: central bank chief',
    translated_headline: null,
    date: '2024-01-11T07:48:07.039Z',
    link: 'https://www.businesstimes.com.sg/international/cryptocurrencies-pose-risks-ems-indias-stand-remains-unchanged-central-bank-chief',
    timestamp: '2024-01-11T07:48:07.039Z',
    link_hash: '18924e59e9e354bf546063b84a9f3d63',
    is_starred_by_the_tie: false,
    metadata: {
      image: null,
      description: ''
    },
    is_trending_news: false,
    grouped_headline:
      "India's Central Bank reiterates their stance on cryptocurrencies, highlighting the risks they pose to emerging markets.",
    tags: [
      {
        id: 226,
        name: 'Crypto',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      },
      {
        id: 320,
        name: 'Regulatory',
        tag_subgroup: {
          id: 6,
          name: 'SigDevs'
        }
      }
    ],
    sources: [
      {
        id: 506,
        name: 'Business Times Singapore',
        collections: [
          {
            id: 39,
            name: 'Mainstream Media'
          }
        ]
      }
    ]
  },
  {
    id: 2546611,
    tweet_id: null,
    headline: 'Shiba Inu (SHIB) Erases Another Zero',
    translated_headline: null,
    date: '2024-01-11T07:41:00.000Z',
    link: 'https://u.today/shiba-inu-shib-erases-another-zero',
    timestamp: '2024-01-11T07:44:09.831Z',
    link_hash: '82ba92e801f5d046303465649778eb1a',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://u.today/sites/default/files/styles/twitter/public/2024-01/43796.jpg',
      description: 'Shiba Inu (SHIB) has once again erased a zero from its price'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 618,
        name: 'SHIBA INU',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'SHIB',
          name: 'SHIBA INU',
          uid: 'shibainu'
        }
      }
    ],
    sources: [
      {
        id: 1848,
        name: 'U.today',
        collections: [
          {
            id: 5,
            name: 'Crypto Native Publications'
          }
        ]
      }
    ]
  },
  {
    id: 2546608,
    tweet_id: null,
    headline: "'Rich Dad Poor Dad' Fame Robert Kiyosaki Says He's Bought 5 More Bitcoin Amid Spot ETF Approval",
    translated_headline: null,
    date: '2024-01-11T07:42:04.950Z',
    link: 'https://www.benzinga.com/markets/cryptocurrency/24/01/36588889/rich-dad-poor-dad-fame-robert-kiyosaki-says-hes-bought-5-more-bitcoin-amid-spot-etf-approv',
    timestamp: '2024-01-11T07:42:04.950Z',
    link_hash: '123cbbd262f510514581c2a9c60ed2f8',
    is_starred_by_the_tie: false,
    metadata: {
      image: 'https://cdn.benzinga.com/files/images/story/2024/Robert-Kiyosaki_2.jpeg?width=1200&height=800&fit=crop',
      description:
        'Bestselling author of “Rich Dad Poor Dad,” Robert Kiyosaki disclosed his purchase of 5 additional Bitcoin (CRYPTO: BTC) on Wednesday, valued at over $230,000 at the time of publishing.'
    },
    is_trending_news: false,
    grouped_headline: null,
    tags: [
      {
        id: 205,
        name: 'Bitcoin',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'BTC',
          name: 'Bitcoin',
          uid: 'bitcoin'
        }
      },
      {
        id: 227,
        name: 'Crypto ETF',
        tag_subgroup: {
          id: 1,
          name: 'General Topics'
        }
      },
      {
        id: 320,
        name: 'Regulatory',
        tag_subgroup: {
          id: 6,
          name: 'SigDevs'
        }
      }
    ],
    sources: [
      {
        id: 473,
        name: 'Benzinga',
        collections: [
          {
            id: 24,
            name: 'Traditional Finance'
          }
        ]
      }
    ]
  },
  {
    id: 2546605,
    tweet_id: null,
    headline: 'CNBC Daily Open: The long-awaited bitcoin stamp of approval',
    translated_headline: null,
    date: '2024-01-11T07:41:14.162Z',
    link: 'https://www.cnbc.com/2024/01/11/stock-markets-the-long-awaited-bitcoin-stamp-of-approval-.html',
    timestamp: '2024-01-11T07:41:14.162Z',
    link_hash: '4a7c6de2691aa711428eefed220bcba6',
    is_starred_by_the_tie: false,
    metadata: {
      image:
        'https://image.cnbcfm.com/api/v1/image/107351668-17036185662023-06-16t141301z_26791512_rc2dk1airw50_rtrmadp_0_fintech-crypto.jpeg?v=1703618757&w=1920&h=1080',
      description:
        'Bitcoin just received its biggest stamp of approval, giving crypto bros their most powerful bragging rights yet.'
    },
    is_trending_news: false,
    grouped_headline: 'CNBC Daily Open: Bitcoin Finally Receives Long-Awaited Stamp of Approval and Badge of Honor',
    tags: [
      {
        id: 205,
        name: 'Bitcoin',
        tag_subgroup: {
          id: 4,
          name: 'Coins'
        },
        coin: {
          ticker: 'BTC',
          name: 'Bitcoin',
          uid: 'bitcoin'
        }
      }
    ],
    sources: [
      {
        id: 493,
        name: 'CNBC',
        collections: [
          {
            id: 39,
            name: 'Mainstream Media'
          }
        ]
      }
    ]
  }
];
</script>
