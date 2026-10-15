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
    "id": "stock-skygold",
    "symbol": "SKYGOLD",
    "bseCode": "541967",
    "name": "Sky Gold and Diamonds Ltd",
    "tagline": "Premier B2B designer & manufacturer of lightweight 18K/22K gold & studded diamond jewellery for top retail chains (Malabar, Kalyan, Senco)",
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
    "quarterlyRevenueCr": 723.1,
    "quarterlyPatCr": 21.3,
    "quarterlyEbitdaCr": 37.2,
    "ebitdaMarginPct": 5.14,
    "yoyPatGrowthPct": 100.9,
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
        "revenueCr": 375.8,
        "ebitdaCr": 18.2,
        "patCr": 10.6,
        "ebitdaMargin": 4.8
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 396.4,
        "ebitdaCr": 21.1,
        "patCr": 12.4,
        "ebitdaMargin": 5.3
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 460.2,
        "ebitdaCr": 26.5,
        "patCr": 16.1,
        "ebitdaMargin": 5.8
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 513.5,
        "ebitdaCr": 31.8,
        "patCr": 21.2,
        "ebitdaMargin": 6.2
      },
      {
        "quarter": "Q1 FY27 (Actual)",
        "revenueCr": 723.1,
        "ebitdaCr": 37.2,
        "patCr": 21.3,
        "ebitdaMargin": 5.14
      }
    ],
    "corporateActions": [
      {
        "id": "ca-skygold-1",
        "type": "Bonus",
        "details": "Board approved 9:1 Bonus Issue (9 bonus shares for every 1 share held)",
        "recordDate": "2026-10-07"
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
    "quarterlyRevenueCr": 211.8,
    "quarterlyPatCr": 30.4,
    "quarterlyEbitdaCr": 54.6,
    "ebitdaMarginPct": 25.8,
    "yoyPatGrowthPct": 60,
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
        "revenueCr": 154.5,
        "ebitdaCr": 38.2,
        "patCr": 19,
        "ebitdaMargin": 24.7
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 171.3,
        "ebitdaCr": 45.1,
        "patCr": 27.6,
        "ebitdaMargin": 26.3
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 166.8,
        "ebitdaCr": 43.8,
        "patCr": 26.1,
        "ebitdaMargin": 26.3
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 177.6,
        "ebitdaCr": 47.9,
        "patCr": 38.3,
        "ebitdaMargin": 27
      },
      {
        "quarter": "Q1 FY27 (Actual)",
        "revenueCr": 211.8,
        "ebitdaCr": 54.6,
        "patCr": 30.4,
        "ebitdaMargin": 25.8
      }
    ],
    "corporateActions": [
      {
        "id": "ca-yatharth-1",
        "type": "AGM / EGM",
        "details": "Acquisition of 250-bed multi-specialty hospital in Faridabad completed",
        "recordDate": "2026-08-22"
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
    "quarterlyRevenueCr": 1807.5,
    "quarterlyPatCr": 64.4,
    "quarterlyEbitdaCr": 103.2,
    "ebitdaMarginPct": 5.7,
    "yoyPatGrowthPct": -13.3,
    "healthStatus": "in_line",
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
        "revenueCr": 1597.1,
        "ebitdaCr": 114.2,
        "patCr": 74.3,
        "ebitdaMargin": 7.2
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 1609.8,
        "ebitdaCr": 121.5,
        "patCr": 74.1,
        "ebitdaMargin": 7.5
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 1633.7,
        "ebitdaCr": 112.8,
        "patCr": 71,
        "ebitdaMargin": 6.9
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 1754.2,
        "ebitdaCr": 138.4,
        "patCr": 78.7,
        "ebitdaMargin": 7.9
      },
      {
        "quarter": "Q1 FY27 (Actual)",
        "revenueCr": 1807.5,
        "ebitdaCr": 103.2,
        "patCr": 64.4,
        "ebitdaMargin": 5.7
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
    "quarterlyRevenueCr": 1200.5,
    "quarterlyPatCr": 122.9,
    "quarterlyEbitdaCr": 192.6,
    "ebitdaMarginPct": 16,
    "yoyPatGrowthPct": 42.6,
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
        "revenueCr": 958,
        "ebitdaCr": 134.5,
        "patCr": 86.2,
        "ebitdaMargin": 14
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 1004.8,
        "ebitdaCr": 158.2,
        "patCr": 100.6,
        "ebitdaMargin": 15.7
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 1052.1,
        "ebitdaCr": 168.4,
        "patCr": 108.8,
        "ebitdaMargin": 16
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 1177.3,
        "ebitdaCr": 184.2,
        "patCr": 115.3,
        "ebitdaMargin": 15.6
      },
      {
        "quarter": "Q1 FY27 (Actual)",
        "revenueCr": 1200.5,
        "ebitdaCr": 192.6,
        "patCr": 122.9,
        "ebitdaMargin": 16
      }
    ],
    "corporateActions": [
      {
        "id": "ca-hscl-1",
        "type": "AGM / EGM",
        "details": "Commercial trials of 20,000 MTPA Synthetic Anode plant initiated in Odisha",
        "recordDate": "2026-09-12"
      }
    ]
  },
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
    "quarterlyRevenueCr": 84.6,
    "quarterlyPatCr": 6.8,
    "quarterlyEbitdaCr": 11.8,
    "ebitdaMarginPct": 13.9,
    "yoyPatGrowthPct": 51.1,
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
        "revenueCr": 61.2,
        "ebitdaCr": 7.8,
        "patCr": 4.5,
        "ebitdaMargin": 12.7
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 65.4,
        "ebitdaCr": 8.5,
        "patCr": 5.1,
        "ebitdaMargin": 13
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 71.8,
        "ebitdaCr": 9.6,
        "patCr": 5.8,
        "ebitdaMargin": 13.4
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 78.2,
        "ebitdaCr": 10.9,
        "patCr": 6.4,
        "ebitdaMargin": 13.9
      },
      {
        "quarter": "Q1 FY27 (Actual)",
        "revenueCr": 84.6,
        "ebitdaCr": 11.8,
        "patCr": 6.8,
        "ebitdaMargin": 13.9
      }
    ],
    "corporateActions": [
      {
        "id": "ca-fredun-1",
        "type": "Dividend",
        "details": "Dividend declared ₹1.50 per share",
        "recordDate": "2026-09-18",
        "amount": "₹1.50"
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
    "quarterlyRevenueCr": 126.4,
    "quarterlyPatCr": 12.2,
    "quarterlyEbitdaCr": 18.9,
    "ebitdaMarginPct": 15,
    "yoyPatGrowthPct": 79.4,
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
        "revenueCr": 94.8,
        "ebitdaCr": 11.2,
        "patCr": 6.8,
        "ebitdaMargin": 11.8
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 104.5,
        "ebitdaCr": 13.9,
        "patCr": 8.5,
        "ebitdaMargin": 13.3
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 118.2,
        "ebitdaCr": 16.5,
        "patCr": 10.4,
        "ebitdaMargin": 14
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 112.4,
        "ebitdaCr": 15.1,
        "patCr": 9.6,
        "ebitdaMargin": 13.4
      },
      {
        "quarter": "Q1 FY27 (Actual)",
        "revenueCr": 126.4,
        "ebitdaCr": 18.9,
        "patCr": 12.2,
        "ebitdaMargin": 15
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
    "quarterlyRevenueCr": 52.4,
    "quarterlyPatCr": 10.15,
    "quarterlyEbitdaCr": 14.8,
    "ebitdaMarginPct": 28.2,
    "yoyPatGrowthPct": 72,
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
        "quarter": "H1 FY26",
        "revenueCr": 38.2,
        "ebitdaCr": 9.8,
        "patCr": 6.4,
        "ebitdaMargin": 25.7
      },
      {
        "quarter": "H2 FY26",
        "revenueCr": 54.6,
        "ebitdaCr": 15.1,
        "patCr": 10.8,
        "ebitdaMargin": 27.7
      },
      {
        "quarter": "Q1 FY27 (Actual)",
        "revenueCr": 52.4,
        "ebitdaCr": 14.8,
        "patCr": 10.15,
        "ebitdaMargin": 28.2
      }
    ],
    "corporateActions": [
      {
        "id": "ca-cff-1",
        "type": "AGM / EGM",
        "details": "Execution of ₹85 Cr Naval Submarine Component contract with Mazagon Dock",
        "recordDate": "2026-09-14"
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
    "quarterlyRevenueCr": 135.2,
    "quarterlyPatCr": 16.5,
    "quarterlyEbitdaCr": 28.4,
    "ebitdaMarginPct": 21,
    "yoyPatGrowthPct": 34.2,
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
        "revenueCr": 98.4,
        "ebitdaCr": 19.8,
        "patCr": 12.3,
        "ebitdaMargin": 20.1
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 108.2,
        "ebitdaCr": 22.1,
        "patCr": 13.9,
        "ebitdaMargin": 20.4
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 116.5,
        "ebitdaCr": 24.2,
        "patCr": 14.8,
        "ebitdaMargin": 20.8
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 124.8,
        "ebitdaCr": 26.5,
        "patCr": 15.6,
        "ebitdaMargin": 21.2
      },
      {
        "quarter": "Q1 FY27 (Actual)",
        "revenueCr": 135.2,
        "ebitdaCr": 28.4,
        "patCr": 16.5,
        "ebitdaMargin": 21
      }
    ],
    "corporateActions": [
      {
        "id": "ca-sudeep-1",
        "type": "Dividend",
        "details": "Dividend ₹2.50 per share declared",
        "recordDate": "2026-09-05",
        "amount": "₹2.50"
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
    "quarterlyRevenueCr": 48.6,
    "quarterlyPatCr": 4.8,
    "quarterlyEbitdaCr": 7.2,
    "ebitdaMarginPct": 14.8,
    "yoyPatGrowthPct": 24.5,
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
        "revenueCr": 39,
        "ebitdaCr": 5.5,
        "patCr": 3.85,
        "ebitdaMargin": 14.1
      },
      {
        "quarter": "Q2 FY26",
        "revenueCr": 42.1,
        "ebitdaCr": 6.1,
        "patCr": 4.1,
        "ebitdaMargin": 14.5
      },
      {
        "quarter": "Q3 FY26",
        "revenueCr": 44.8,
        "ebitdaCr": 6.5,
        "patCr": 4.3,
        "ebitdaMargin": 14.5
      },
      {
        "quarter": "Q4 FY26",
        "revenueCr": 46.5,
        "ebitdaCr": 6.8,
        "patCr": 4.5,
        "ebitdaMargin": 14.6
      },
      {
        "quarter": "Q1 FY27 (Actual)",
        "revenueCr": 48.6,
        "ebitdaCr": 7.2,
        "patCr": 4.8,
        "ebitdaMargin": 14.8
      }
    ],
    "corporateActions": [
      {
        "id": "ca-hex-1",
        "type": "AGM / EGM",
        "details": "Institutional supply contract with State Health Department awarded",
        "recordDate": "2026-09-02"
      }
    ]
  }
];

export const INITIAL_STOCK_UPDATES: StockUpdate[] = [
  {
    "id": "upd-skygold-1",
    "stockId": "stock-skygold",
    "stockSymbol": "SKYGOLD",
    "stockName": "Sky Gold and Diamonds Ltd",
    "sector": "Consumer & Retail",
    "logoColor": "from-amber-400 to-yellow-600",
    "title": "Sky Gold Q1 Sales Surge 92% YoY to ₹723 Cr, PAT Doubles to ₹21.3 Cr; Board Approves 9:1 Bonus Issue [Q2 Results Awaited]",
    "date": "2026-10-14",
    "period": "Q1 FY27 (Latest Reported)",
    "type": "quarterly_results",
    "summary": "Sky Gold & Diamonds reported stellar audited Q1 FY27 financial performance with revenue surging 92.4% YoY to ₹723.10 Cr and Net Profit doubling to ₹21.30 Cr (up 101% YoY). Board officially recommended a 9:1 Bonus Issue. NOTE: Q2 FY27 financial results are currently awaited as the board meeting is scheduled for mid-November.",
    "kpiSnapshot": {
      "revenueCr": 723.1,
      "yoyRevGrowthPct": 92.4,
      "ebitdaCr": 37.2,
      "ebitdaMarginPct": 5.14,
      "patCr": 21.3,
      "yoyPatGrowthPct": 100.9,
      "epsRs": 15.2
    },
    "keyHighlights": [
      "Official Q1 FY27 Revenue surged 92.4% YoY to ₹723.10 Cr led by higher B2B shipments to leading jewelry retail chains.",
      "Net Profit (PAT) doubled (+101% YoY) to ₹21.30 Cr compared to ₹10.60 Cr in Q1 FY26.",
      "Board recommended a massive 9:1 Bonus Share issue (9 bonus shares for every 1 existing share held).",
      "⚡ Q2 FY27 EARNINGS RADAR: Q2 board meeting scheduled for mid-November; official audited numbers will be uploaded upon BSE filing."
    ],
    "managementGuidance": [
      "Targeting aggressive top-line growth backed by gold loan credit facilities and retail partner expansions.",
      "Expanding studded 18kt high-margin lightweight diamond jewelry portfolio."
    ],
    "headwindsAndRisks": [
      "Customs duty revision and volatility in raw gold spot bullion prices."
    ],
    "orderWinsOrCapex": [
      "Navi Mumbai factory modernization running at high utilization."
    ],
    "filings": [
      {
        "title": "Sky Gold - Unaudited Q1 FY27 Financial Results & Limited Review.pdf",
        "type": "financial_results",
        "size": "1.9 MB"
      },
      {
        "title": "Sky Gold - BSE Reg 30 Disclosure on 9:1 Bonus Issue.pdf",
        "type": "sebi_lodr",
        "size": "350 KB"
      }
    ],
    "likesCount": 245,
    "bookmarkedByInvestors": 412
  },
  {
    "id": "upd-cff-1",
    "stockId": "stock-cff",
    "stockSymbol": "CFF",
    "stockName": "CFF Fluid Control Ltd",
    "sector": "Defense & Aerospace",
    "logoColor": "from-blue-700 to-slate-900",
    "title": "CFF Fluid Control Bags ₹85 Cr Submarine Critical Component Order from Mazagon Dock Shipbuilders",
    "date": "2026-10-14",
    "period": "Defense Contract Win",
    "type": "order_win",
    "summary": "CFF Fluid Control secured a substantial order valued at ₹85 Cr from Mazagon Dock Shipbuilders Limited for manufacturing and supplying critical TGS spares and fluid control assemblies for Indian Navy Scorpene/Kalvari-class submarines.",
    "kpiSnapshot": {
      "revenueCr": 52.4,
      "yoyRevGrowthPct": 72,
      "ebitdaCr": 14.8,
      "ebitdaMarginPct": 28.2,
      "patCr": 10.15,
      "yoyPatGrowthPct": 72,
      "epsRs": 10.4
    },
    "keyHighlights": [
      "Order book escalates past ₹485 Cr with multi-year submarine maintenance visibility.",
      "Preferred single-source supplier status for proprietary naval fluid transfer systems.",
      "High-pressure test facility at Khopoli operational for deep-sea qualification."
    ],
    "managementGuidance": [
      "Strong revenue visibility over FY27-FY29 backed by Indian Navy defense indigenization mandates."
    ],
    "headwindsAndRisks": [
      "Strict quality acceptance protocols and stage-wise defense milestone inspection timelines."
    ],
    "orderWinsOrCapex": [
      "₹85 Cr naval submarine component order received from Mazagon Dock."
    ],
    "filings": [
      {
        "title": "CFF Fluid Control - Exchange Disclosure SEBI Reg 30 (Naval Deal).pdf",
        "type": "sebi_lodr",
        "size": "420 KB"
      }
    ],
    "likesCount": 165,
    "bookmarkedByInvestors": 298
  },
  {
    "id": "upd-hscl-1",
    "stockId": "stock-hscl",
    "stockSymbol": "HSCL",
    "stockName": "Himadri Speciality Chemical Ltd",
    "sector": "Specialty Chemicals",
    "logoColor": "from-indigo-600 to-purple-800",
    "title": "Himadri Q1 PAT Rises 43% YoY to ₹123 Cr; Commercial Milestones in 20,000 MTPA EV Anode Plant [Q2 Awaited]",
    "date": "2026-10-14",
    "period": "Q1 FY27 (Latest Reported)",
    "type": "quarterly_results",
    "summary": "Himadri Speciality Chemical reported strong Q1 FY27 results with PAT rising 42.6% YoY to ₹122.90 Cr on revenue of ₹1,200.50 Cr. Advanced carbon and coal tar pitch realizations remained healthy while commercialization of its pioneer Synthetic Anode Material facility in Odisha moves into phase-1 trials.",
    "kpiSnapshot": {
      "revenueCr": 1200.5,
      "yoyRevGrowthPct": 25.3,
      "ebitdaCr": 192.6,
      "ebitdaMarginPct": 16,
      "patCr": 122.9,
      "yoyPatGrowthPct": 42.6,
      "epsRs": 2.49
    },
    "keyHighlights": [
      "Q1 Net Profit increased 42.6% YoY to ₹122.90 Cr (vs ₹86.20 Cr in Q1 FY26).",
      "First integrated synthetic anode material manufacturer for lithium-ion EV battery cells in India.",
      "⚡ Q2 FY27 EARNINGS RADAR: Q2 results awaited; board meeting scheduled for October/November."
    ],
    "managementGuidance": [
      "Targeting continuous EBITDA margin expansion toward 17% as specialty carbon volumes grow."
    ],
    "headwindsAndRisks": [
      "Fluctuations in raw coal tar supply and international petrochemical price cycles."
    ],
    "orderWinsOrCapex": [
      "Investment in Australian silicon-anode pioneer Sicona Battery Technologies."
    ],
    "filings": [
      {
        "title": "Himadri - Q1 FY27 Financial Results & Limited Review.pdf",
        "type": "financial_results",
        "size": "2.1 MB"
      }
    ],
    "likesCount": 210,
    "bookmarkedByInvestors": 380
  },
  {
    "id": "upd-yatharth-1",
    "stockId": "stock-yatharth",
    "stockSymbol": "YATHARTH",
    "stockName": "Yatharth Hospital and Trauma Care Services Ltd",
    "sector": "Pharmaceuticals & Healthcare",
    "logoColor": "from-blue-600 to-indigo-800",
    "title": "Yatharth Hospital Q1 Net Profit Jumps 60% YoY to ₹30.4 Cr; Completes 250-Bed Faridabad Hospital Acquisition [Q2 Awaited]",
    "date": "2026-10-14",
    "period": "Q1 FY27 (Latest Reported)",
    "type": "quarterly_results",
    "summary": "Yatharth Hospital delivered robust audited Q1 FY27 results with revenue growing 37.1% YoY to ₹211.80 Cr and PAT jumping 60.0% YoY to ₹30.40 Cr. Company completed the acquisition of a 250-bed multi-specialty hospital in Faridabad, expanding total bed capacity to ~1,650 beds.",
    "kpiSnapshot": {
      "revenueCr": 211.8,
      "yoyRevGrowthPct": 37.1,
      "ebitdaCr": 54.6,
      "ebitdaMarginPct": 25.8,
      "patCr": 30.4,
      "yoyPatGrowthPct": 60,
      "epsRs": 3.54
    },
    "keyHighlights": [
      "Q1 FY27 PAT surged 60.0% YoY to ₹30.40 Cr on ₹211.80 Cr revenue.",
      "Acquisition of Faridabad hospital operationalized, boosting tertiary patient intake.",
      "⚡ Q2 FY27 EARNINGS RADAR: Q2 board meeting scheduled; results awaited."
    ],
    "managementGuidance": [
      "Cluster expansion in Delhi-NCR targeting 2,500 beds over the next 2-3 years."
    ],
    "headwindsAndRisks": [
      "Staffing and doctor recruitment costs for newly operational hospital wings."
    ],
    "orderWinsOrCapex": [
      "Faridabad hospital acquisition funded via internal accruals and IPO proceeds."
    ],
    "filings": [
      {
        "title": "Yatharth - Q1 FY27 Audited Financial Results.pdf",
        "type": "financial_results",
        "size": "1.8 MB"
      }
    ],
    "likesCount": 180,
    "bookmarkedByInvestors": 310
  },
  {
    "id": "upd-rrkabel-1",
    "stockId": "stock-rrkabel",
    "stockSymbol": "RRKABEL",
    "stockName": "RR Kabel Ltd",
    "sector": "Electronics & EMS",
    "logoColor": "from-red-600 to-amber-700",
    "title": "RR Kabel Q1 Revenue Reaches ₹1,808 Cr (+13% YoY) Led by Strong Infrastructure Demand [Q2 Awaited]",
    "date": "2026-10-14",
    "period": "Q1 FY27 (Latest Reported)",
    "type": "quarterly_results",
    "summary": "RR Kabel reported Q1 FY27 revenue of ₹1,807.50 Cr, growing 13.2% YoY driven by infrastructure electrification and real estate cable demand. PAT stood at ₹64.40 Cr impacted by raw copper price volatility and marketing investments.",
    "kpiSnapshot": {
      "revenueCr": 1807.5,
      "yoyRevGrowthPct": 13.2,
      "ebitdaCr": 103.2,
      "ebitdaMarginPct": 5.7,
      "patCr": 64.4,
      "yoyPatGrowthPct": -13.3,
      "epsRs": 5.71
    },
    "keyHighlights": [
      "Wires & cables volume growth remained healthy at 14% YoY.",
      "Exports represented ~23% of total revenues with presence across 85 countries.",
      "⚡ Q2 FY27 EARNINGS RADAR: Q2 results awaited pending upcoming board meeting."
    ],
    "managementGuidance": [
      "Expecting volume pick-up in H2 FY27 as post-monsoon real estate construction accelerates."
    ],
    "headwindsAndRisks": [
      "Copper and aluminium commodity price volatility."
    ],
    "orderWinsOrCapex": [
      "Capacity debottlenecking at Silvassa and Waghodia plants underway."
    ],
    "filings": [
      {
        "title": "RR Kabel - Q1 FY27 Outcome of Board Meeting & Results.pdf",
        "type": "financial_results",
        "size": "2.0 MB"
      }
    ],
    "likesCount": 145,
    "bookmarkedByInvestors": 260
  },
  {
    "id": "upd-timex-1",
    "stockId": "stock-timex",
    "stockSymbol": "TIMEX",
    "stockName": "Timex Group India Ltd",
    "sector": "Consumer & Retail",
    "logoColor": "from-slate-700 to-slate-900",
    "title": "Timex India Q1 PAT Jumps 79% YoY to ₹12.2 Cr as Premium Fashion Watch Sales Surge 33% [Q2 Awaited]",
    "date": "2026-10-14",
    "period": "Q1 FY27 (Latest Reported)",
    "type": "quarterly_results",
    "summary": "Timex Group India delivered a strong turnaround in Q1 FY27 with PAT jumping 79.4% YoY to ₹12.20 Cr on revenue of ₹126.40 Cr (+33.3% YoY). Luxury licensed brands (Guess, Versace, Nautica) and mechanical automatic watches propelled gross margins.",
    "kpiSnapshot": {
      "revenueCr": 126.4,
      "yoyRevGrowthPct": 33.3,
      "ebitdaCr": 18.9,
      "ebitdaMarginPct": 15,
      "patCr": 12.2,
      "yoyPatGrowthPct": 79.4,
      "epsRs": 1.21
    },
    "keyHighlights": [
      "Turnaround momentum continuing with EBITDA margin expanding to 15.0%.",
      "Strong sales in fashion and smart wearable retail channels.",
      "⚡ Q2 FY27 EARNINGS RADAR: Q2 results awaited."
    ],
    "managementGuidance": [
      "Festive season channel filling expected to accelerate H2 revenue."
    ],
    "headwindsAndRisks": [
      "Foreign exchange fluctuation on imported components."
    ],
    "orderWinsOrCapex": [
      "Retail footprint expansion in Tier-1 and Tier-2 metropolitan malls."
    ],
    "filings": [
      {
        "title": "Timex India - Q1 FY27 Audited Financial Statement.pdf",
        "type": "financial_results",
        "size": "1.4 MB"
      }
    ],
    "likesCount": 125,
    "bookmarkedByInvestors": 205
  },
  {
    "id": "upd-fredun-1",
    "stockId": "stock-fredun",
    "stockSymbol": "FREDUN",
    "stockName": "Fredun Pharmaceuticals Ltd",
    "sector": "Pharmaceuticals & Healthcare",
    "logoColor": "from-teal-500 to-emerald-700",
    "title": "Fredun Pharma Q1 Net Profit Climbs 51% YoY to ₹6.8 Cr; Animal Health Portfolio Expands [Q2 Awaited]",
    "date": "2026-10-14",
    "period": "Q1 FY27 (Latest Reported)",
    "type": "quarterly_results",
    "summary": "Fredun Pharmaceuticals reported Q1 FY27 revenue of ₹84.60 Cr (+38.2% YoY) and PAT of ₹6.80 Cr (+51.1% YoY) driven by expanding formulation exports to Southeast Asian and African markets, along with doubling pet healthcare clinic tie-ups.",
    "kpiSnapshot": {
      "revenueCr": 84.6,
      "yoyRevGrowthPct": 38.2,
      "ebitdaCr": 11.8,
      "ebitdaMarginPct": 13.9,
      "patCr": 6.8,
      "yoyPatGrowthPct": 51.1,
      "epsRs": 15.1
    },
    "keyHighlights": [
      "Q1 PAT reached ₹6.80 Cr compared to ₹4.50 Cr in Q1 FY26.",
      "Fredun Vet expanded into 4,000+ veterinary clinics across India.",
      "⚡ Q2 FY27 EARNINGS RADAR: Q2 results awaited."
    ],
    "managementGuidance": [
      "Targeting sustained 30%+ export growth over the medium term."
    ],
    "headwindsAndRisks": [
      "Regulatory approval timelines in overseas health ministries."
    ],
    "orderWinsOrCapex": [
      "Palghar plant upgradation for sterile pet healthcare solutions."
    ],
    "filings": [
      {
        "title": "Fredun Pharma - Q1 FY27 Financial Outcome.pdf",
        "type": "financial_results",
        "size": "1.3 MB"
      }
    ],
    "likesCount": 110,
    "bookmarkedByInvestors": 180
  },
  {
    "id": "upd-sudeep-1",
    "stockId": "stock-sudeep",
    "stockSymbol": "SUDEEPPHRM",
    "stockName": "Sudeep Pharma Ltd",
    "sector": "Pharmaceuticals & Healthcare",
    "logoColor": "from-cyan-600 to-blue-700",
    "title": "Sudeep Pharma Revenue Reaches ₹135 Cr on Global Specialized Mineral Excipients [Q2 Awaited]",
    "date": "2026-10-14",
    "period": "Latest Audited Actuals",
    "type": "quarterly_results",
    "summary": "Sudeep Pharma delivered ₹135.20 Cr in revenue with EBITDA of ₹28.40 Cr and PAT of ₹16.50 Cr, supported by global pharmaceutical demand for mineral fortification excipients across the US and Europe.",
    "kpiSnapshot": {
      "revenueCr": 135.2,
      "yoyRevGrowthPct": 34.2,
      "ebitdaCr": 28.4,
      "ebitdaMarginPct": 21,
      "patCr": 16.5,
      "yoyPatGrowthPct": 34.2,
      "epsRs": 8.2
    },
    "keyHighlights": [
      "Export revenues represent ~60% of total sales.",
      "USFDA and EDQM compliant manufacturing facility.",
      "⚡ Q2 FY27 EARNINGS RADAR: Q2 results awaited."
    ],
    "managementGuidance": [
      "Expanding spray-dried specialized excipient capacity."
    ],
    "headwindsAndRisks": [
      "Global logistics and freight transit fluctuations."
    ],
    "orderWinsOrCapex": [
      "Vadodara plant microencapsulated vitamin-mineral line."
    ],
    "filings": [
      {
        "title": "Sudeep Pharma - Audited Financial Results.pdf",
        "type": "financial_results",
        "size": "1.5 MB"
      }
    ],
    "likesCount": 95,
    "bookmarkedByInvestors": 165
  },
  {
    "id": "upd-hexagon-1",
    "stockId": "stock-hexagon",
    "stockSymbol": "HEXAGON",
    "stockName": "Hexagon Nutrition Ltd",
    "sector": "Pharmaceuticals & Healthcare",
    "logoColor": "from-emerald-600 to-green-700",
    "title": "Hexagon Nutrition Q1 Revenue at ₹48.6 Cr; Bags Multi-State Micronutrient Mandate [Q2 Awaited]",
    "date": "2026-10-14",
    "period": "Latest Reported Actuals",
    "type": "quarterly_results",
    "summary": "Hexagon Nutrition reported Q1 revenue of ₹48.60 Cr and PAT of ₹4.80 Cr. The company secured institutional contracts for supplying micronutrient premixes under food fortification programs and expanding therapeutic feeds.",
    "kpiSnapshot": {
      "revenueCr": 48.6,
      "yoyRevGrowthPct": 24.5,
      "ebitdaCr": 7.2,
      "ebitdaMarginPct": 14.8,
      "patCr": 4.8,
      "yoyPatGrowthPct": 24.5,
      "epsRs": 0.98
    },
    "keyHighlights": [
      "Clinical feed brand PentaSure expanded to 1,800+ hospital pharmacies.",
      "Micronutrient premix orders secured across 4 Indian states.",
      "⚡ Q2 FY27 EARNINGS RADAR: Q2 results awaited."
    ],
    "managementGuidance": [
      "Focusing on branded wellness and high-margin oncology clinical feeds."
    ],
    "headwindsAndRisks": [
      "FSSAI food safety regulatory compliance cycles."
    ],
    "orderWinsOrCapex": [
      "Nashik facility upgrades."
    ],
    "filings": [
      {
        "title": "Hexagon Nutrition - Financial Statements.pdf",
        "type": "financial_results",
        "size": "1.1 MB"
      }
    ],
    "likesCount": 82,
    "bookmarkedByInvestors": 135
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
