# Measurement (Plan 12, item 10)

## Search Console: non-brand filter
Property: `sc-domain:recordio.io`. In Performance, add a Query filter, choose "Custom (regex)" and "Doesn't match regex":

```
record.?io|recorderio|recordi
```

Save the view as "Non-brand" (bookmark the URL; Search Console does not persist filters). Add the Page dimension to see clicks per landing page.

## Baseline, 25 Aug to 22 Sep 2026 (non-brand, verified through the API on 22 Sep)
| Landing page | Clicks | Impressions | Avg position |
|---|---|---|---|
| / | 0 | 43 | 39.0 |
| /for/linux/ | 0 | 30 | 21.6 |
| /compare/ | 0 | 26 | 80.2 |
| /for/ | 0 | 9 | 65.2 |
| **Total** | **0** | **108** | |

Only four pages received any non-brand impressions. Every other page had none in the period.

## Weekly routine (Monday, 10 minutes)
1. Open the saved Non-brand view, last 28 days, compare with the previous 28 days, Page dimension.
2. Record clicks, impressions and position per landing page in the tracking sheet (columns: week, page, clicks, impressions, position, notes).
3. Note any page that gained impressions but has a click-through rate under 1% at position 10 or better. Those need a title or description rewrite.
4. Check Coverage for new pages published that week: submit any that are "Discovered, not indexed" through URL Inspection.

## GA4: installs by landing page
Property G-KMQRSWNLV2. Build one Exploration and save it:
- Technique: Free form. Rows: Landing page + query string. Values: Event count. Filter: Event name exactly matches `install_extension_click`.
- Secondary: add `event_label` (the CTA location passed by `trackInstallExtension`) as a breakdown to compare which CTA on a page converts.
- Optional second tab for `open_app_click`.

## Off-site tracking
Keep one row per placement in the tracking sheet: date, site, URL, type (listing, guest post, podcast, partner, newsletter, PH, HN), link status (live / nofollow / pending), referral sessions after 30 days (GA4 Acquisition, Session source). Review monthly alongside the Search Console Links report to confirm Google has picked the link up.
