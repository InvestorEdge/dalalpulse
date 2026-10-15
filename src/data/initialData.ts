import { IndianStock, StockUpdate, MarketIndex, InstitutionalFlowDay } from '../types/investor';

export const INDIAN_MARKET_INDICES: MarketIndex[] = [
  { name: 'NIFTY 50', value: 22622.70, change: -99.25, changePct: -0.44 },
  { name: 'SENSEX', value: 72781.89, change: -251.89, changePct: -0.35 },
  { name: 'NIFTY BANK', value: 55316.00, change: -165.05, changePct: -0.30 },
  { name: 'NIFTY IT', value: 30171.00, change: 340.90, changePct: 1.14 },
  { name: 'NIFTY AUTO', value: 25156.75, change: -235.10, changePct: -0.93 },
  { name: 'INDIA VIX', value: 14.63, change: 0.51, changePct: 3.58 }
];

export const INITIAL_INDIAN_STOCKS: IndianStock[] = [
  {
    "id": "stock-fredun",
    "symbol": "FREDUN",
    "bseCode": "539730",
    "name": "Fredun Pharmaceuticals Ltd",
    "tagline": "Fast-growing Indian pharma formulations and animal healthcare exporter across Southeast Asia, Africa, and CIS",
    "sector": "Pharmaceuticals & Healthcare",
    "marketCapCategory": "Small Cap",
    "exchange": "BSE",
    "cmp": 1509.65,
    "changeRs": 12.4,
    "changePct": 0.83,
    "high52w": 1666.35,
    "low52w": 454.05,
    "marketCapCr": 852,
    "peRatio": 32.4,
    "industryPe": 38.5,
    "pbRatio": 5.6,
    "roe": 21.2,
    "roce": 24.8,
    "dividendYield": 0.25,
    "debtToEquity": 0.35,
    "quarterlyRevenueCr": 88.4,
    "quarterlyPatCr": 7.95,
    "quarterlyEbitdaCr": 13.2,
    "ebitdaMarginPct": 14.9,
    "yoyPatGrowthPct": 48.2,
    "healthStatus": "high_growth",
    "logoColor": "from-teal-500 to-emerald-700",
    "website": "https://fredungroup.com",
    "isWatchlist": true,
    "shareholding": {
      "promoter": 52.4,
      "fii": 4.8,
      "dii": 6.2,
      "publicRetail": 36.6
    },
    "quarterlyHistory": [
      {
        "quarter": "Q1 FY26",
        "revenueCr": 58.2,
        "ebitdaCr": 8.1,
        "patCr": 4.8,
        "ebitdaMargin": 13.9
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 62.4,
        "ebitdaCr": 8.9,
        "patCr": 5.36,
        "ebitdaMargin": 14.3
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 69.1,
        "ebitdaCr": 10.2,
        "patCr": 6.1,
        "ebitdaMargin": 14.8
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 76.5,
        "ebitdaCr": 11.4,
        "patCr": 6.9,
        "ebitdaMargin": 14.9
      },
      {
        "quarter": "Q1 FY27",
        "revenueCr": 81.2,
        "ebitdaCr": 12.1,
        "patCr": 7.2,
        "ebitdaMargin": 14.9
      },
      {
        "quarter": "Q2 FY27",
        "revenueCr": 88.4,
        "ebitdaCr": 13.2,
        "patCr": 7.95,
        "ebitdaMargin": 14.9
      }
    ],
    "corporateActions": [
      {
        "id": "ca-fredun-1",
        "type": "Dividend",
        "details": "Final Dividend declared ₹1.50 per share",
        "recordDate": "2026-09-18",
        "amount": "₹1.50"
      }
    ]
  },
  {
    "id": "stock-yatharth",
    "symbol": "YATHARTH",
    "bseCode": "543950",
    "name": "Yatharth Hospital and Trauma Care Services Ltd",
    "tagline": "Leading multi-specialty tertiary care hospital chain across Delhi-NCR, Noida, Greater Noida, and Northern India",
    "sector": "Pharmaceuticals & Healthcare",
    "marketCapCategory": "Small Cap",
    "exchange": "NSE & BSE",
    "cmp": 981,
    "changeRs": -2.9,
    "changePct": -0.29,
    "high52w": 1184,
    "low52w": 538.25,
    "marketCapCr": 8420,
    "peRatio": 44.5,
    "industryPe": 46.2,
    "pbRatio": 5.2,
    "roe": 16.4,
    "roce": 18.6,
    "dividendYield": 0.35,
    "debtToEquity": 0.08,
    "quarterlyRevenueCr": 214.5,
    "quarterlyPatCr": 32.8,
    "quarterlyEbitdaCr": 56.2,
    "ebitdaMarginPct": 26.2,
    "yoyPatGrowthPct": 36.5,
    "healthStatus": "outperforming",
    "logoColor": "from-blue-600 to-indigo-800",
    "website": "https://yatharthhospitals.com",
    "isWatchlist": true,
    "shareholding": {
      "promoter": 66.8,
      "fii": 12.4,
      "dii": 14.1,
      "publicRetail": 6.7
    },
    "quarterlyHistory": [
      {
        "quarter": "Q1 FY26",
        "revenueCr": 145.2,
        "ebitdaCr": 37.1,
        "patCr": 21.8,
        "ebitdaMargin": 25.5
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 158.4,
        "ebitdaCr": 41.2,
        "patCr": 24.02,
        "ebitdaMargin": 26
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 169.8,
        "ebitdaCr": 44.5,
        "patCr": 26.3,
        "ebitdaMargin": 26.2
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 184.5,
        "ebitdaCr": 48.2,
        "patCr": 28.9,
        "ebitdaMargin": 26.1
      },
      {
        "quarter": "Q1 FY27",
        "revenueCr": 198.1,
        "ebitdaCr": 51.6,
        "patCr": 30.4,
        "ebitdaMargin": 26
      },
      {
        "quarter": "Q2 FY27",
        "revenueCr": 214.5,
        "ebitdaCr": 56.2,
        "patCr": 32.8,
        "ebitdaMargin": 26.2
      }
    ],
    "corporateActions": [
      {
        "id": "ca-yatharth-1",
        "type": "AGM / EGM",
        "details": "EGM approves acquisition of 250-bed multi-specialty hospital in Faridabad",
        "recordDate": "2026-08-22"
      }
    ]
  },
  {
    "id": "stock-sudeep",
    "symbol": "SUDEEPPHRM",
    "bseCode": "543888",
    "name": "Sudeep Pharma Ltd",
    "tagline": "Global pioneer in calcium, iron & mineral-based active pharmaceutical ingredients and specialty excipients",
    "sector": "Pharmaceuticals & Healthcare",
    "marketCapCategory": "Small Cap",
    "exchange": "BSE",
    "cmp": 1059.8,
    "changeRs": 3.05,
    "changePct": 0.29,
    "high52w": 1376,
    "low52w": 524.95,
    "marketCapCr": 2150,
    "peRatio": 28.5,
    "industryPe": 34.2,
    "pbRatio": 4.1,
    "roe": 19.5,
    "roce": 22.1,
    "dividendYield": 0.5,
    "debtToEquity": 0.18,
    "quarterlyRevenueCr": 142.6,
    "quarterlyPatCr": 18.4,
    "quarterlyEbitdaCr": 31.8,
    "ebitdaMarginPct": 22.3,
    "yoyPatGrowthPct": 41.8,
    "healthStatus": "outperforming",
    "logoColor": "from-cyan-600 to-blue-700",
    "website": "https://sudeepgroup.com",
    "isWatchlist": true,
    "shareholding": {
      "promoter": 71.2,
      "fii": 6.4,
      "dii": 8.5,
      "publicRetail": 13.9
    },
    "quarterlyHistory": [
      {
        "quarter": "Q1 FY26",
        "revenueCr": 94.5,
        "ebitdaCr": 19.8,
        "patCr": 11.2,
        "ebitdaMargin": 20.9
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 102.8,
        "ebitdaCr": 22.4,
        "patCr": 12.98,
        "ebitdaMargin": 21.8
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 114.2,
        "ebitdaCr": 25.1,
        "patCr": 14.6,
        "ebitdaMargin": 22
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 126.8,
        "ebitdaCr": 28,
        "patCr": 16.2,
        "ebitdaMargin": 22.1
      },
      {
        "quarter": "Q1 FY27",
        "revenueCr": 133.5,
        "ebitdaCr": 29.6,
        "patCr": 17.1,
        "ebitdaMargin": 22.2
      },
      {
        "quarter": "Q2 FY27",
        "revenueCr": 142.6,
        "ebitdaCr": 31.8,
        "patCr": 18.4,
        "ebitdaMargin": 22.3
      }
    ],
    "corporateActions": [
      {
        "id": "ca-sudeep-1",
        "type": "Dividend",
        "details": "Interim Dividend ₹2.50 per share declared",
        "recordDate": "2026-09-05",
        "amount": "₹2.50"
      }
    ]
  },
  {
    "id": "stock-rrkabel",
    "symbol": "RRKABEL",
    "bseCode": "543990",
    "name": "RR Kabel Ltd",
    "tagline": "India's 4th largest wires & cables company and fast-emerging consumer electricals (FMEG) powerhouse",
    "sector": "Electronics & EMS",
    "marketCapCategory": "Mid Cap",
    "exchange": "NSE & BSE",
    "cmp": 2634.6,
    "changeRs": -29.5,
    "changePct": -1.11,
    "high52w": 2983.8,
    "low52w": 1218.9,
    "marketCapCr": 29750,
    "peRatio": 52.8,
    "industryPe": 48.6,
    "pbRatio": 7.2,
    "roe": 20.8,
    "roce": 23.4,
    "dividendYield": 0.65,
    "debtToEquity": 0.12,
    "quarterlyRevenueCr": 1890.4,
    "quarterlyPatCr": 98.6,
    "quarterlyEbitdaCr": 152.8,
    "ebitdaMarginPct": 8.1,
    "yoyPatGrowthPct": 32.4,
    "healthStatus": "outperforming",
    "logoColor": "from-red-600 to-amber-700",
    "website": "https://rrkabel.com",
    "isWatchlist": true,
    "shareholding": {
      "promoter": 62.8,
      "fii": 16.5,
      "dii": 12.9,
      "publicRetail": 7.8
    },
    "quarterlyHistory": [
      {
        "quarter": "Q1 FY26",
        "revenueCr": 1390.2,
        "ebitdaCr": 104.5,
        "patCr": 68.2,
        "ebitdaMargin": 7.5
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 1495.6,
        "ebitdaCr": 118.2,
        "patCr": 74.47,
        "ebitdaMargin": 7.9
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 1610.4,
        "ebitdaCr": 129.5,
        "patCr": 82.3,
        "ebitdaMargin": 8
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 1754.2,
        "ebitdaCr": 142.1,
        "patCr": 91.2,
        "ebitdaMargin": 8.1
      },
      {
        "quarter": "Q1 FY27",
        "revenueCr": 1795.8,
        "ebitdaCr": 144.8,
        "patCr": 92.5,
        "ebitdaMargin": 8.1
      },
      {
        "quarter": "Q2 FY27",
        "revenueCr": 1890.4,
        "ebitdaCr": 152.8,
        "patCr": 98.6,
        "ebitdaMargin": 8.1
      }
    ],
    "corporateActions": [
      {
        "id": "ca-rrkabel-1",
        "type": "Dividend",
        "details": "Dividend declared ₹6.00 per share",
        "recordDate": "2026-08-10",
        "amount": "₹6.00"
      }
    ]
  },
  {
    "id": "stock-skygold",
    "symbol": "SKYGOLD",
    "bseCode": "541967",
    "name": "Sky Gold and Diamonds Ltd",
    "tagline": "Premier B2B designer and manufacturer of lightweight 18K/22K gold & studded diamond jewellery for top retail chains",
    "sector": "Consumer & Retail",
    "marketCapCategory": "Small Cap",
    "exchange": "NSE & BSE",
    "cmp": 1001.3,
    "changeRs": 33.6,
    "changePct": 3.47,
    "high52w": 1004.95,
    "low52w": 285,
    "marketCapCr": 4120,
    "peRatio": 38.6,
    "industryPe": 45.2,
    "pbRatio": 6.8,
    "roe": 27.2,
    "roce": 29.5,
    "dividendYield": 0.3,
    "debtToEquity": 0.45,
    "quarterlyRevenueCr": 680.5,
    "quarterlyPatCr": 38.2,
    "quarterlyEbitdaCr": 54.8,
    "ebitdaMarginPct": 8.1,
    "yoyPatGrowthPct": 96.4,
    "healthStatus": "high_growth",
    "logoColor": "from-amber-400 to-yellow-600",
    "website": "https://skygold.co.in",
    "isWatchlist": true,
    "shareholding": {
      "promoter": 60.5,
      "fii": 14.2,
      "dii": 11.4,
      "publicRetail": 13.9
    },
    "quarterlyHistory": [
      {
        "quarter": "Q1 FY26",
        "revenueCr": 320.4,
        "ebitdaCr": 24.1,
        "patCr": 16.5,
        "ebitdaMargin": 7.5
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 355.2,
        "ebitdaCr": 27.8,
        "patCr": 19.45,
        "ebitdaMargin": 7.8
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 440.8,
        "ebitdaCr": 35.2,
        "patCr": 24.8,
        "ebitdaMargin": 8
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 512.6,
        "ebitdaCr": 41.5,
        "patCr": 29.2,
        "ebitdaMargin": 8.1
      },
      {
        "quarter": "Q1 FY27",
        "revenueCr": 595.4,
        "ebitdaCr": 47.9,
        "patCr": 33.6,
        "ebitdaMargin": 8
      },
      {
        "quarter": "Q2 FY27",
        "revenueCr": 680.5,
        "ebitdaCr": 54.8,
        "patCr": 38.2,
        "ebitdaMargin": 8.1
      }
    ],
    "corporateActions": [
      {
        "id": "ca-skygold-1",
        "type": "Bonus",
        "details": "Bonus Issue 9:1 approved by board",
        "recordDate": "2026-09-26"
      }
    ]
  },
  {
    "id": "stock-hscl",
    "symbol": "HSCL",
    "bseCode": "524669",
    "name": "Himadri Speciality Chemical Ltd",
    "tagline": "Global leader in coal pitch & specialized carbon chemicals, pioneering Li-ion battery anode & cathode materials in India",
    "sector": "Specialty Chemicals",
    "marketCapCategory": "Mid Cap",
    "exchange": "NSE & BSE",
    "cmp": 666.2,
    "changeRs": 2.25,
    "changePct": 0.34,
    "high52w": 819.5,
    "low52w": 418.5,
    "marketCapCr": 32900,
    "peRatio": 54.2,
    "industryPe": 46.5,
    "pbRatio": 7.8,
    "roe": 22.8,
    "roce": 24.6,
    "dividendYield": 0.25,
    "debtToEquity": 0.15,
    "quarterlyRevenueCr": 1240.8,
    "quarterlyPatCr": 148.5,
    "quarterlyEbitdaCr": 218.4,
    "ebitdaMarginPct": 17.6,
    "yoyPatGrowthPct": 42.1,
    "healthStatus": "outperforming",
    "logoColor": "from-indigo-600 to-purple-800",
    "website": "https://himadri.com",
    "isWatchlist": true,
    "shareholding": {
      "promoter": 44.8,
      "fii": 11.6,
      "dii": 14.8,
      "publicRetail": 28.8
    },
    "quarterlyHistory": [
      {
        "quarter": "Q1 FY26",
        "revenueCr": 885.2,
        "ebitdaCr": 139.8,
        "patCr": 94.2,
        "ebitdaMargin": 15.8
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 978.4,
        "ebitdaCr": 161.4,
        "patCr": 104.5,
        "ebitdaMargin": 16.5
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 1052.1,
        "ebitdaCr": 179.2,
        "patCr": 119.8,
        "ebitdaMargin": 17
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 1145.6,
        "ebitdaCr": 198.5,
        "patCr": 134.1,
        "ebitdaMargin": 17.3
      },
      {
        "quarter": "Q1 FY27",
        "revenueCr": 1188.4,
        "ebitdaCr": 206.8,
        "patCr": 141.2,
        "ebitdaMargin": 17.4
      },
      {
        "quarter": "Q2 FY27",
        "revenueCr": 1240.8,
        "ebitdaCr": 218.4,
        "patCr": 148.5,
        "ebitdaMargin": 17.6
      }
    ],
    "corporateActions": [
      {
        "id": "ca-hscl-1",
        "type": "AGM / EGM",
        "details": "AGM approves commercial capitalization of Phase 1 Synthetic Anode plant",
        "recordDate": "2026-09-12"
      }
    ]
  },
  {
    "id": "stock-timex",
    "symbol": "TIMEX",
    "bseCode": "500414",
    "name": "Timex Group India Ltd",
    "tagline": "Iconic global horology and lifestyle watch brand with accelerating domestic retail and e-commerce turnaround",
    "sector": "Consumer & Retail",
    "marketCapCategory": "Small Cap",
    "exchange": "BSE",
    "cmp": 715.65,
    "changeRs": 1,
    "changePct": 0.14,
    "high52w": 758.8,
    "low52w": 237.2,
    "marketCapCr": 3650,
    "peRatio": 48.2,
    "industryPe": 52.4,
    "pbRatio": 6.4,
    "roe": 24.5,
    "roce": 28.4,
    "dividendYield": 0.4,
    "debtToEquity": 0.05,
    "quarterlyRevenueCr": 138.2,
    "quarterlyPatCr": 16.4,
    "quarterlyEbitdaCr": 24.1,
    "ebitdaMarginPct": 17.4,
    "yoyPatGrowthPct": 68.4,
    "healthStatus": "high_growth",
    "logoColor": "from-slate-700 to-slate-900",
    "website": "https://timexindia.com",
    "isWatchlist": true,
    "shareholding": {
      "promoter": 74.93,
      "fii": 2.4,
      "dii": 3.1,
      "publicRetail": 19.57
    },
    "quarterlyHistory": [
      {
        "quarter": "Q1 FY26",
        "revenueCr": 82.4,
        "ebitdaCr": 11.5,
        "patCr": 7.2,
        "ebitdaMargin": 14
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 91.2,
        "ebitdaCr": 13.8,
        "patCr": 9.74,
        "ebitdaMargin": 15.1
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 108.5,
        "ebitdaCr": 17.9,
        "patCr": 12.4,
        "ebitdaMargin": 16.5
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 118.4,
        "ebitdaCr": 20.1,
        "patCr": 13.9,
        "ebitdaMargin": 17
      },
      {
        "quarter": "Q1 FY27",
        "revenueCr": 124.6,
        "ebitdaCr": 21.4,
        "patCr": 14.8,
        "ebitdaMargin": 17.2
      },
      {
        "quarter": "Q2 FY27",
        "revenueCr": 138.2,
        "ebitdaCr": 24.1,
        "patCr": 16.4,
        "ebitdaMargin": 17.4
      }
    ],
    "corporateActions": [
      {
        "id": "ca-timex-1",
        "type": "Dividend",
        "details": "Dividend ₹2.00 per share approved",
        "recordDate": "2026-08-28",
        "amount": "₹2.00"
      }
    ]
  },
  {
    "id": "stock-hexagon",
    "symbol": "HEXAGON",
    "bseCode": "543444",
    "name": "Hexagon Nutrition Ltd",
    "tagline": "Research-oriented nutrition leader delivering clinical feeds, therapeutic nutrition, and micronutrient fortification premixes",
    "sector": "Pharmaceuticals & Healthcare",
    "marketCapCategory": "Micro Cap",
    "exchange": "BSE",
    "cmp": 71.88,
    "changeRs": 0.56,
    "changePct": 0.79,
    "high52w": 78.69,
    "low52w": 48,
    "marketCapCr": 485,
    "peRatio": 21.4,
    "industryPe": 35.8,
    "pbRatio": 2.6,
    "roe": 14.5,
    "roce": 16.8,
    "dividendYield": 0.85,
    "debtToEquity": 0.22,
    "quarterlyRevenueCr": 54.2,
    "quarterlyPatCr": 5.6,
    "quarterlyEbitdaCr": 8.4,
    "ebitdaMarginPct": 15.5,
    "yoyPatGrowthPct": 28.4,
    "healthStatus": "in_line",
    "logoColor": "from-emerald-600 to-green-700",
    "website": "https://hexagonnutrition.com",
    "isWatchlist": true,
    "shareholding": {
      "promoter": 68.4,
      "fii": 3.2,
      "dii": 5.8,
      "publicRetail": 22.6
    },
    "quarterlyHistory": [
      {
        "quarter": "Q1 FY26",
        "revenueCr": 38.5,
        "ebitdaCr": 5.4,
        "patCr": 3.8,
        "ebitdaMargin": 14
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 42.1,
        "ebitdaCr": 6.2,
        "patCr": 4.36,
        "ebitdaMargin": 14.7
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 46.8,
        "ebitdaCr": 7.1,
        "patCr": 4.8,
        "ebitdaMargin": 15.2
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 49.5,
        "ebitdaCr": 7.6,
        "patCr": 5.1,
        "ebitdaMargin": 15.4
      },
      {
        "quarter": "Q1 FY27",
        "revenueCr": 51.4,
        "ebitdaCr": 7.9,
        "patCr": 5.3,
        "ebitdaMargin": 15.4
      },
      {
        "quarter": "Q2 FY27",
        "revenueCr": 54.2,
        "ebitdaCr": 8.4,
        "patCr": 5.6,
        "ebitdaMargin": 15.5
      }
    ],
    "corporateActions": [
      {
        "id": "ca-hex-1",
        "type": "AGM / EGM",
        "details": "AGM approves institutional supply contract execution with State Health Department",
        "recordDate": "2026-09-02"
      }
    ]
  },
  {
    "id": "stock-cff",
    "symbol": "CFF",
    "bseCode": "543920",
    "name": "CFF Fluid Control Ltd",
    "tagline": "Critical naval defense equipment manufacturer supplying stealth submarine propulsion & fluid control systems to the Indian Navy",
    "sector": "Defense & Aerospace",
    "marketCapCategory": "Small Cap",
    "exchange": "BSE",
    "cmp": 1090,
    "changeRs": 1.75,
    "changePct": 0.16,
    "high52w": 1148,
    "low52w": 445,
    "marketCapCr": 2130,
    "peRatio": 56.4,
    "industryPe": 68.2,
    "pbRatio": 12.4,
    "roe": 28.6,
    "roce": 32.5,
    "dividendYield": 0.2,
    "debtToEquity": 0.08,
    "quarterlyRevenueCr": 62.4,
    "quarterlyPatCr": 11.2,
    "quarterlyEbitdaCr": 16.8,
    "ebitdaMarginPct": 26.9,
    "yoyPatGrowthPct": 84.5,
    "orderBookCr": 485,
    "healthStatus": "high_growth",
    "logoColor": "from-blue-700 to-slate-900",
    "website": "https://cfffluidcontrol.biz",
    "isWatchlist": true,
    "shareholding": {
      "promoter": 73.2,
      "fii": 5.6,
      "dii": 6.8,
      "publicRetail": 14.4
    },
    "quarterlyHistory": [
      {
        "quarter": "Q1 FY26",
        "revenueCr": 28.4,
        "ebitdaCr": 6.8,
        "patCr": 4.5,
        "ebitdaMargin": 23.9
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 33.8,
        "ebitdaCr": 8.5,
        "patCr": 6.07,
        "ebitdaMargin": 25.1
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 42.6,
        "ebitdaCr": 11.2,
        "patCr": 7.9,
        "ebitdaMargin": 26.3
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 51.5,
        "ebitdaCr": 13.8,
        "patCr": 9.4,
        "ebitdaMargin": 26.8
      },
      {
        "quarter": "Q1 FY27",
        "revenueCr": 56.8,
        "ebitdaCr": 15.2,
        "patCr": 10.1,
        "ebitdaMargin": 26.8
      },
      {
        "quarter": "Q2 FY27",
        "revenueCr": 62.4,
        "ebitdaCr": 16.8,
        "patCr": 11.2,
        "ebitdaMargin": 26.9
      }
    ],
    "corporateActions": [
      {
        "id": "ca-cff-1",
        "type": "AGM / EGM",
        "details": "AGM approves execution of ₹85 Cr Naval Submarine Component contract with Mazagon Dock",
        "recordDate": "2026-10-14"
      }
    ]
  }
];

export const INITIAL_STOCK_UPDATES: StockUpdate[] = [
  {
    "id": "upd-cff-1",
    "stockId": "stock-cff",
    "stockSymbol": "CFF",
    "stockName": "CFF Fluid Control Ltd",
    "sector": "Defense & Aerospace",
    "logoColor": "from-blue-700 to-slate-900",
    "title": "CFF Fluid Control Bags ₹85 Cr Naval Submarine Contract from Mazagon Dock Shipbuilders",
    "date": "2026-10-14",
    "period": "Q2 FY27",
    "type": "order_win",
    "summary": "CFF Fluid Control receives a major contract worth ₹85 Cr for manufacturing, testing, and lifecycle maintenance of critical fluid control systems for Kalvari-class (Scorpene) submarines and upcoming Project 75I naval fleet.",
    "kpiSnapshot": {
      "revenueCr": 62.4,
      "yoyRevGrowthPct": 84.6,
      "ebitdaCr": 16.8,
      "ebitdaMarginPct": 26.9,
      "patCr": 11.2,
      "yoyPatGrowthPct": 84.5,
      "epsRs": 11.45
    },
    "keyHighlights": [
      "Order book expands to record ₹485 Cr (~3.5x annual revenue).",
      "Over 90% indigenous content achieved in high-pressure naval valves and fluid transfer mechanics.",
      "Defense ministry indigenization list grants CFF preferred single-source status on select submarine systems."
    ],
    "managementGuidance": [
      "Aiming for 50%+ revenue CAGR over FY26-FY28 backed by naval modernization orders.",
      "Exploring defense export opportunities with friendly foreign navies in the Indo-Pacific region."
    ],
    "headwindsAndRisks": [
      "Long testing cycles and rigorous defense ministry audit milestones."
    ],
    "orderWinsOrCapex": [
      "₹85 Cr Mazagon Dock contract awarded for submarine stealth components.",
      "Commissioned expanded testing bunker facility in Raigad, Maharashtra."
    ],
    "filings": [
      {
        "title": "CFF Fluid Control - Exchange Disclosure SEBI Reg 30 (Naval Deal).pdf",
        "type": "sebi_lodr",
        "size": "420 KB"
      },
      {
        "title": "CFF Q2 FY27 Investor Presentation.pdf",
        "type": "presentation",
        "size": "1.9 MB"
      }
    ],
    "likesCount": 142,
    "bookmarkedByInvestors": 265
  },
  {
    "id": "upd-skygold-1",
    "stockId": "stock-skygold",
    "stockSymbol": "SKYGOLD",
    "stockName": "Sky Gold and Diamonds Ltd",
    "sector": "Consumer & Retail",
    "logoColor": "from-amber-400 to-yellow-600",
    "title": "Q2 PAT Skyrockets 96% YoY to ₹38.2 Cr; Revenue Reaches ₹680 Cr on B2B Diamond Jewellery Demand",
    "date": "2026-10-14",
    "period": "Q2 FY27",
    "type": "quarterly_results",
    "summary": "Sky Gold and Diamonds reports stellar Q2 FY27 financial performance with consolidated PAT surging 96.4% YoY to ₹38.20 Cr. Revenue surged 91.5% YoY to ₹680.50 Cr fueled by capacity expansion at its modern Navi Mumbai plant and aggressive B2B orders from top retail chains (Malabar, Kalyan, Joyalukkas).",
    "kpiSnapshot": {
      "revenueCr": 680.5,
      "yoyRevGrowthPct": 91.5,
      "ebitdaCr": 54.8,
      "ebitdaMarginPct": 8.1,
      "patCr": 38.2,
      "yoyPatGrowthPct": 96.4,
      "epsRs": 26.8
    },
    "keyHighlights": [
      "Consolidated revenue expanded 91.5% YoY to ₹680.50 Cr with 18K & diamond-studded jewellery volumes rising 65%.",
      "Board recommended a 9:1 Bonus Share issue following record operational cash flow.",
      "Export footprint expanded to Dubai, Singapore, and the US retail jewelry chains."
    ],
    "managementGuidance": [
      "Targeting ₹3,000 Cr annual revenue run-rate by FY27 with 8.5% blended EBITDA margin.",
      "Working capital cycle compressed by 14 days due to gold metal loan optimization."
    ],
    "headwindsAndRisks": [
      "International gold spot price fluctuations and customs duty revisions."
    ],
    "orderWinsOrCapex": [
      "Navi Mumbai 500 kg/month advanced casting unit running at 92% capacity utilization."
    ],
    "filings": [
      {
        "title": "Sky Gold - Q2 FY27 Outcome of Board Meeting & Financial Results.pdf",
        "type": "financial_results",
        "size": "2.1 MB"
      },
      {
        "title": "Sky Gold - SEBI Reg 30 Bonus Issue Disclosure.pdf",
        "type": "sebi_lodr",
        "size": "380 KB"
      }
    ],
    "likesCount": 198,
    "bookmarkedByInvestors": 340
  },
  {
    "id": "upd-hscl-1",
    "stockId": "stock-hscl",
    "stockSymbol": "HSCL",
    "stockName": "Himadri Speciality Chemical Ltd",
    "sector": "Specialty Chemicals",
    "logoColor": "from-indigo-600 to-purple-800",
    "title": "Himadri Commissions Phase 1 Synthetic Anode Plant; Q2 PAT Rises 42% YoY to ₹148.5 Cr",
    "date": "2026-10-14",
    "period": "Q2 FY27",
    "type": "quarterly_results",
    "summary": "Himadri Speciality Chemical reports robust Q2 FY27 results with PAT surging 42.1% YoY to ₹148.50 Cr on revenue of ₹1,240.80 Cr. The company formally commenced trial commercial batches at its pioneering 20,000 MTPA Synthetic Anode Material facility for EV lithium-ion batteries.",
    "kpiSnapshot": {
      "revenueCr": 1240.8,
      "yoyRevGrowthPct": 26.8,
      "ebitdaCr": 218.4,
      "ebitdaMarginPct": 17.6,
      "patCr": 148.5,
      "yoyPatGrowthPct": 42.1,
      "epsRs": 3.01
    },
    "keyHighlights": [
      "Pioneer status as India's first integrated synthetic anode supplier for electric vehicle cell manufacturers.",
      "Coal tar pitch realization and specialty carbon black exports witnessed firm European and Japanese demand.",
      "Net debt to equity declined to 0.15x with healthy interest coverage ratio exceeding 14x."
    ],
    "managementGuidance": [
      "Full capacity ramp-up of Anode Phase 1 scheduled across H2 FY27 with global tier-1 cell maker qualifications.",
      "Sustained 17-18% EBITDA margin corridor maintained."
    ],
    "headwindsAndRisks": [
      "Crude oil and thermal coal feedstock price volatility."
    ],
    "orderWinsOrCapex": [
      "Phase 1 Synthetic Anode capex of ₹1,200 Cr capitalized; Phase 2 planning initiated."
    ],
    "filings": [
      {
        "title": "Himadri - Q2 FY27 Financial Results & Limited Review.pdf",
        "type": "financial_results",
        "size": "2.4 MB"
      },
      {
        "title": "Himadri Investor Presentation - Carbon & EV Anode Progress.pdf",
        "type": "presentation",
        "size": "3.6 MB"
      }
    ],
    "likesCount": 220,
    "bookmarkedByInvestors": 410
  },
  {
    "id": "upd-yatharth-1",
    "stockId": "stock-yatharth",
    "stockSymbol": "YATHARTH",
    "stockName": "Yatharth Hospital and Trauma Care Services Ltd",
    "sector": "Pharmaceuticals & Healthcare",
    "logoColor": "from-blue-600 to-indigo-800",
    "title": "Yatharth Hospital Q2 Net Profit Grows 36.5% YoY to ₹32.8 Cr; Bed Occupancy Crosses 78%",
    "date": "2026-10-14",
    "period": "Q2 FY27",
    "type": "quarterly_results",
    "summary": "Consolidated revenue for Q2 FY27 grew 35.4% YoY to ₹214.50 Cr with PAT surging 36.5% YoY to ₹32.80 Cr. Average Revenue Per Occupied Bed (ARPOB) increased 14% to ₹32,400 per day led by oncology, cardiology, and robotic neuro-surgeries.",
    "kpiSnapshot": {
      "revenueCr": 214.5,
      "yoyRevGrowthPct": 35.4,
      "ebitdaCr": 56.2,
      "ebitdaMarginPct": 26.2,
      "patCr": 32.8,
      "yoyPatGrowthPct": 36.5,
      "epsRs": 3.82
    },
    "keyHighlights": [
      "Blended bed occupancy reached 78% across Noida, Greater Noida, and Jhansi units.",
      "Completed commercial integration of newly acquired 250-bed hospital in Faridabad, Haryana.",
      "Robotic surgical oncology department commissioned at Noida Extension super-specialty facility."
    ],
    "managementGuidance": [
      "Targeting 2,500 total operational beds by end of FY28 via brownfield cluster acquisitions.",
      "Maintaining 26%+ EBITDA margins on strong tertiary care surgical case-mix."
    ],
    "headwindsAndRisks": [
      "Doctor attrition in specialized fields and medical equipment import duty inflation."
    ],
    "orderWinsOrCapex": [
      "₹140 Cr capex earmarked for Noida Extension phase-2 expansion."
    ],
    "filings": [
      {
        "title": "Yatharth Hospital - Q2 FY27 Outcome of Board Meeting.pdf",
        "type": "financial_results",
        "size": "1.8 MB"
      },
      {
        "title": "Yatharth Earnings Presentation Q2.pdf",
        "type": "presentation",
        "size": "2.5 MB"
      }
    ],
    "likesCount": 175,
    "bookmarkedByInvestors": 290
  },
  {
    "id": "upd-rrkabel-1",
    "stockId": "stock-rrkabel",
    "stockSymbol": "RRKABEL",
    "stockName": "RR Kabel Ltd",
    "sector": "Electronics & EMS",
    "logoColor": "from-red-600 to-amber-700",
    "title": "RR Kabel Reports 32% YoY PAT Growth to ₹98.6 Cr on Booming Infrastructure & Real Estate Electrification",
    "date": "2026-10-14",
    "period": "Q2 FY27",
    "type": "quarterly_results",
    "summary": "Consolidated Q2 FY27 revenue rose 26.4% YoY to ₹1,890.40 Cr with operating PAT rising 32.4% YoY to ₹98.60 Cr. High-margin fire-resistant cables and global UL/CE certified wire exports supported profitability.",
    "kpiSnapshot": {
      "revenueCr": 1890.4,
      "yoyRevGrowthPct": 26.4,
      "ebitdaCr": 152.8,
      "ebitdaMarginPct": 8.1,
      "patCr": 98.6,
      "yoyPatGrowthPct": 32.4,
      "epsRs": 8.74
    },
    "keyHighlights": [
      "Domestic wire & cable volumes grew 18% YoY outpacing broader industry growth.",
      "Consumer electricals (FMEG) division turned EBITDA positive driven by smart BLDC fans and switches.",
      "Export revenues accounted for 24% of overall sales with robust shipments to the US, Europe, and GCC."
    ],
    "managementGuidance": [
      "Targeting 20% volume growth in wires & cables in FY27.",
      "FMEG profitability margin expected to expand towards 5-6% over the next 18 months."
    ],
    "headwindsAndRisks": [
      "LME Copper and Aluminium raw material volatility."
    ],
    "orderWinsOrCapex": [
      "Waghodia (Gujarat) extra high-voltage cable facility expansion on track for Q4 FY27 commissioning."
    ],
    "filings": [
      {
        "title": "RR Kabel - Outcome of Board Meeting & Q2 FY27 Results.pdf",
        "type": "financial_results",
        "size": "2.2 MB"
      },
      {
        "title": "RR Kabel Q2 FY27 Investor Presentation.pdf",
        "type": "presentation",
        "size": "3.1 MB"
      }
    ],
    "likesCount": 160,
    "bookmarkedByInvestors": 275
  },
  {
    "id": "upd-fredun-1",
    "stockId": "stock-fredun",
    "stockSymbol": "FREDUN",
    "stockName": "Fredun Pharmaceuticals Ltd",
    "sector": "Pharmaceuticals & Healthcare",
    "logoColor": "from-teal-500 to-emerald-700",
    "title": "Fredun Pharma Receives 14 Product Registrations across ASEAN; Pet Healthcare Division Jumps 110%",
    "date": "2026-10-14",
    "period": "Q2 FY27",
    "type": "concall_guidance",
    "summary": "Fredun Pharmaceuticals secures 14 new medicine formulation registrations in Vietnam, Philippines, and Kenya. Pet healthcare business (Fredun Vet) expands retail presence to over 4,500 vet clinics across India.",
    "kpiSnapshot": {
      "revenueCr": 88.4,
      "yoyRevGrowthPct": 41.7,
      "ebitdaCr": 13.2,
      "ebitdaMarginPct": 14.9,
      "patCr": 7.95,
      "yoyPatGrowthPct": 48.2,
      "epsRs": 17.6
    },
    "keyHighlights": [
      "Q2 FY27 Net Profit surged 48.2% YoY to ₹7.95 Cr on revenue of ₹88.40 Cr.",
      "Export order book stands at over ₹160 Cr spanning 28 emerging market countries.",
      "Animal nutrition and nutraceutical product basket expanded by 18 new SKUs."
    ],
    "managementGuidance": [
      "Targeting ₹400 Cr annual revenue milestone with 16% sustainable EBITDA margin.",
      "Exploring CDMO partnerships with European generic distributors."
    ],
    "headwindsAndRisks": [
      "Foreign exchange currency fluctuations in African export destinations."
    ],
    "orderWinsOrCapex": [
      "Palghar manufacturing facility expansion received WHO-GMP re-certification."
    ],
    "filings": [
      {
        "title": "Fredun Pharma - SEBI Reg 30 Regulatory Filings & Registrations.pdf",
        "type": "sebi_lodr",
        "size": "510 KB"
      },
      {
        "title": "Fredun Financial Results Q2 FY27.pdf",
        "type": "financial_results",
        "size": "1.4 MB"
      }
    ],
    "likesCount": 115,
    "bookmarkedByInvestors": 188
  },
  {
    "id": "upd-timex-1",
    "stockId": "stock-timex",
    "stockSymbol": "TIMEX",
    "stockName": "Timex Group India Ltd",
    "sector": "Consumer & Retail",
    "logoColor": "from-slate-700 to-slate-900",
    "title": "Timex India Q2 PAT Jumps 68.4% YoY to ₹16.4 Cr; Premium Fashion & Automatic Watches Drive Margin Surge",
    "date": "2026-10-14",
    "period": "Q2 FY27",
    "type": "quarterly_results",
    "summary": "Timex Group India posts accelerated turnaround with Q2 FY27 PAT jumping 68.4% YoY to ₹16.40 Cr. Premium brand license portfolio (Guess, Versace, Nautica, Ted Baker) along with viral automatic watches drove gross margin expansion to 54%.",
    "kpiSnapshot": {
      "revenueCr": 138.2,
      "yoyRevGrowthPct": 51.5,
      "ebitdaCr": 24.1,
      "ebitdaMarginPct": 17.4,
      "patCr": 16.4,
      "yoyPatGrowthPct": 68.4,
      "epsRs": 1.62
    },
    "keyHighlights": [
      "Domestic retail sell-through rose 44% during festive pre-booking channel fill.",
      "E-commerce and D2C website sales accounted for 31% of total quarterly watch volume.",
      "Company remains virtually debt-free with cash reserves of ₹78 Cr."
    ],
    "managementGuidance": [
      "Expanding exclusive brand outlets (EBOs) in Tier-1 and Tier-2 shopping malls.",
      "Sustaining double-digit EBITDA margin through premium product mix."
    ],
    "headwindsAndRisks": [
      "Import dependency for high-end automatic movements."
    ],
    "orderWinsOrCapex": [
      "Expanded assembly facility in Baddi, Himachal Pradesh for localized smart wearables."
    ],
    "filings": [
      {
        "title": "Timex Group India - Outcome of Board Meeting & Q2 FY27 Results.pdf",
        "type": "financial_results",
        "size": "1.7 MB"
      }
    ],
    "likesCount": 130,
    "bookmarkedByInvestors": 215
  },
  {
    "id": "upd-sudeep-1",
    "stockId": "stock-sudeep",
    "stockSymbol": "SUDEEPPHRM",
    "stockName": "Sudeep Pharma Ltd",
    "sector": "Pharmaceuticals & Healthcare",
    "logoColor": "from-cyan-600 to-blue-700",
    "title": "Sudeep Pharma Expands Specialized Mineral Excipients; Q2 Net Profit Grows 41.8% to ₹18.4 Cr",
    "date": "2026-10-14",
    "period": "Q2 FY27",
    "type": "quarterly_results",
    "summary": "Sudeep Pharma delivers strong Q2 performance with revenue growing 38.7% YoY to ₹142.60 Cr and PAT rising 41.8% YoY to ₹18.40 Cr. High demand for iron-fortification premixes and clean-label calcium phosphate excipients drove global export margins.",
    "kpiSnapshot": {
      "revenueCr": 142.6,
      "yoyRevGrowthPct": 38.7,
      "ebitdaCr": 31.8,
      "ebitdaMarginPct": 22.3,
      "patCr": 18.4,
      "yoyPatGrowthPct": 41.8,
      "epsRs": 9.1
    },
    "keyHighlights": [
      "Export revenues contributed 62% of total turnover across North America, Europe, and Japan.",
      "USFDA and EDQM approved Vadodara manufacturing facility operating at 86% capacity.",
      "Robust operating cash flow generation of ₹36 Cr for H1 FY27."
    ],
    "managementGuidance": [
      "Targeting 25% revenue CAGR over the next 3 years.",
      "Commissioning high-purity microencapsulated vitamin-mineral line by Q4 FY27."
    ],
    "headwindsAndRisks": [
      "Ocean freight shipping rates and global supply chain transit times."
    ],
    "orderWinsOrCapex": [
      "₹65 Cr capex on high-speed spray drying facility near completion."
    ],
    "filings": [
      {
        "title": "Sudeep Pharma - Q2 FY27 Unaudited Financial Statements.pdf",
        "type": "financial_results",
        "size": "1.6 MB"
      }
    ],
    "likesCount": 108,
    "bookmarkedByInvestors": 195
  },
  {
    "id": "upd-hexagon-1",
    "stockId": "stock-hexagon",
    "stockSymbol": "HEXAGON",
    "stockName": "Hexagon Nutrition Ltd",
    "sector": "Pharmaceuticals & Healthcare",
    "logoColor": "from-emerald-600 to-green-700",
    "title": "Hexagon Nutrition Bags Multi-State Micronutrient Fortification Mandate; Q2 PAT at ₹5.6 Cr",
    "date": "2026-10-14",
    "period": "Q2 FY27",
    "type": "order_win",
    "summary": "Hexagon Nutrition secures institutional supply contracts for staple food fortification premixes and medical therapeutic nutrition formulas across 4 Indian states, ensuring stable order visibility through FY28.",
    "kpiSnapshot": {
      "revenueCr": 54.2,
      "yoyRevGrowthPct": 28.7,
      "ebitdaCr": 8.4,
      "ebitdaMarginPct": 15.5,
      "patCr": 5.6,
      "yoyPatGrowthPct": 28.4,
      "epsRs": 1.15
    },
    "keyHighlights": [
      "Institutional order book for therapeutic clinical nutrition expands past ₹120 Cr.",
      "Exports to international relief agencies and global NGOs grew 22% YoY.",
      "Clinical feeds brand (PentaSure) expands distribution across 1,800 hospital pharmacies."
    ],
    "managementGuidance": [
      "Targeting expansion into branded adult wellness and oncology clinical nutrition.",
      "Expected debt reduction over H2 FY27."
    ],
    "headwindsAndRisks": [
      "Regulatory compliance requirements for specialized food safety and premix blending."
    ],
    "orderWinsOrCapex": [
      "Nashik facility upgrades completed to comply with enhanced FSSAI standards."
    ],
    "filings": [
      {
        "title": "Hexagon Nutrition - Outcome of Board Meeting & Q2 FY27 Results.pdf",
        "type": "financial_results",
        "size": "1.2 MB"
      }
    ],
    "likesCount": 88,
    "bookmarkedByInvestors": 140
  }
];

export const INITIAL_FII_DII_FLOWS: InstitutionalFlowDay[] = [
  {
    id: 'fii-dii-2026-10-14',
    date: '2026-10-14',
    formattedDate: '14 Oct 2026',
    fiiGrossBuyCr: 12450.80,
    fiiGrossSellCr: 14293.40,
    fiiNetCr: -1842.60,
    diiGrossBuyCr: 15320.15,
    diiGrossSellCr: 12909.30,
    diiNetCr: 2410.85,
    totalNetCr: 568.25,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'Domestic institutional mutual funds absorbed foreign portfolio selling with ₹2,410 Cr net infusion, supported by monthly SIP inflows.'
  },
  {
    id: 'fii-dii-2026-10-13',
    date: '2026-10-13',
    formattedDate: '13 Oct 2026',
    fiiGrossBuyCr: 10820.50,
    fiiGrossSellCr: 12935.90,
    fiiNetCr: -2115.40,
    diiGrossBuyCr: 14850.60,
    diiGrossSellCr: 11960.50,
    diiNetCr: 2890.10,
    totalNetCr: 774.70,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'DIIs continued steady accumulation in high-growth manufacturing, auto components, and defense electronics.'
  },
  {
    id: 'fii-dii-2026-10-10',
    date: '2026-10-10',
    formattedDate: '10 Oct 2026',
    fiiGrossBuyCr: 16210.40,
    fiiGrossSellCr: 15365.20,
    fiiNetCr: 845.20,
    diiGrossBuyCr: 13540.20,
    diiGrossSellCr: 12309.70,
    diiNetCr: 1230.50,
    totalNetCr: 2075.70,
    category: 'Cash Market',
    marketImpact: 'Both Buying (Bullish)',
    notes: 'Dual institutional buying triggered broad-based rally across Nifty 50 and BSE Sensex.'
  },
  {
    id: 'fii-dii-2026-10-09',
    date: '2026-10-09',
    formattedDate: '09 Oct 2026',
    fiiGrossBuyCr: 11400.00,
    fiiGrossSellCr: 12320.30,
    fiiNetCr: -920.30,
    diiGrossBuyCr: 12980.40,
    diiGrossSellCr: 11330.40,
    diiNetCr: 1650.00,
    totalNetCr: 729.70,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'Mild foreign rebalancing in IT sector was comfortably offset by domestic mutual fund buying.'
  },
  {
    id: 'fii-dii-2026-10-08',
    date: '2026-10-08',
    formattedDate: '08 Oct 2026',
    fiiGrossBuyCr: 15890.30,
    fiiGrossSellCr: 14459.50,
    fiiNetCr: 1430.80,
    diiGrossBuyCr: 11240.60,
    diiGrossSellCr: 10420.20,
    diiNetCr: 820.40,
    totalNetCr: 2251.20,
    category: 'Cash Market',
    marketImpact: 'Both Buying (Bullish)',
    notes: 'Risk-on global sentiment supported strong foreign inflows into Indian blue-chips and private banking majors.'
  },
  {
    id: 'fii-dii-2026-10-07',
    date: '2026-10-07',
    formattedDate: '07 Oct 2026',
    fiiGrossBuyCr: 13200.00,
    fiiGrossSellCr: 16610.00,
    fiiNetCr: -3410.00,
    diiGrossBuyCr: 17850.50,
    diiGrossSellCr: 13930.00,
    diiNetCr: 3920.50,
    totalNetCr: 510.50,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'High foreign selling absorbed entirely by record single-day domestic fund buying of ₹3,920 Cr.'
  },
  {
    id: 'fii-dii-2026-10-06',
    date: '2026-10-06',
    formattedDate: '06 Oct 2026',
    fiiGrossBuyCr: 10950.20,
    fiiGrossSellCr: 12190.70,
    fiiNetCr: -1240.50,
    diiGrossBuyCr: 13620.00,
    diiGrossSellCr: 11839.80,
    diiNetCr: 1780.20,
    totalNetCr: 539.70,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'DIIs provided downside support near key moving averages amid global oil price volatility.'
  },
  {
    id: 'fii-dii-2026-10-03',
    date: '2026-10-03',
    formattedDate: '03 Oct 2026',
    fiiGrossBuyCr: 14750.60,
    fiiGrossSellCr: 12600.30,
    fiiNetCr: 2150.30,
    diiGrossBuyCr: 10540.00,
    diiGrossSellCr: 10130.00,
    diiNetCr: 410.00,
    totalNetCr: 2560.30,
    category: 'Cash Market',
    marketImpact: 'Both Buying (Bullish)',
    notes: 'Substantial foreign capital deployment in green energy and capital goods themes.'
  },
  {
    id: 'fii-dii-2026-10-01',
    date: '2026-10-01',
    formattedDate: '01 Oct 2026',
    fiiGrossBuyCr: 11800.40,
    fiiGrossSellCr: 13360.60,
    fiiNetCr: -1560.20,
    diiGrossBuyCr: 14320.80,
    diiGrossSellCr: 12220.00,
    diiNetCr: 2100.80,
    totalNetCr: 540.60,
    category: 'Cash Market',
    marketImpact: 'Strong DII Absorption',
    notes: 'Monthly opening trading session with strong institutional participation across mid & large caps.'
  }
];
