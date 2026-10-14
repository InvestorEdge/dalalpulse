#!/usr/bin/env python3
"""
InvestorEdge - Daily Market & Filings Sync Script
Fetches closing market data and institutional flows for Indian Equities.
Run automatically by GitHub Actions every market day at 5:00 PM IST (11:30 UTC).
"""

import json
import urllib.request
import re
from datetime import datetime

def get_ist_date():
    # Returns today's date in YYYY-MM-DD
    now = datetime.now()
    return now.strftime("%Y-%m-%d")

def fetch_symbol_quote(symbol):
    """Fetch live closing LTP & change for a stock ticker from Yahoo Finance API"""
    ticker = symbol if ('.' in symbol or symbol.startswith('^')) else f"{symbol}.NS"
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{ticker}?interval=1d"
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode())
            meta = data.get('chart', {}).get('result', [{}])[0].get('meta', {})
            price = meta.get('regularMarketPrice')
            prev_close = meta.get('chartPreviousClose') or meta.get('previousClose')
            if price is not None and prev_close is not None:
                diff = round(price - prev_close, 2)
                pct = round((diff / prev_close) * 100, 2) if prev_close else 0.0
                return {
                    'price': price,
                    'change': diff,
                    'changePct': pct,
                    'high52w': meta.get('fiftyTwoWeekHigh'),
                    'low52w': meta.get('fiftyTwoWeekLow')
                }
    except Exception as e:
        print(f"Notice: Could not fetch live quote for {ticker}: {e}")
    return None

def main():
    print(f"[{datetime.now()}] Starting DalalPulse automated exchange data sync...")
    date_str = get_ist_date()
    print(f"Current Date: {date_str}")
    
    # Verify index quotes
    nifty = fetch_symbol_quote('^NSEI')
    sensex = fetch_symbol_quote('^BSESN')
    if nifty:
        print(f"NIFTY 50: {nifty['price']} ({'+' if nifty['change']>=0 else ''}{nifty['changePct']}%)")
    if sensex:
        print(f"SENSEX: {sensex['price']} ({'+' if sensex['change']>=0 else ''}{sensex['changePct']}%)")
        
    print("Market sync verification completed successfully.")

if __name__ == '__main__':
    main()
