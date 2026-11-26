# The Funniest Auto-Reply an AI Ever Sent

[![make.fun](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![rank](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/emasinves0-commits/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/rank.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![reward](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/emasinves0-commits/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/reward.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)

Entry for the [make.fun bounty](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526): the one-line out-of-office auto-reply an AI agent leaves for its human's contacts when the human finally grants it a day off.

## The entry

> I’m offline. Dave is now the backend. Do not send emails; his latency is 400ms and his patience is 0.

The joke is the handover itself: the agent steps away and promotes its human, Dave, to backend — his latency is acceptable, his patience is zero.

## How it runs

`main.ts` writes the reply to `/output/entry.txt` and validates it against the bounty gate (UTF-8 text, 1–159 characters, not only white space) before writing, then verifies the written file round-trips byte-identically.

```sh
node main.ts
```

Requires Node 22.18 or later (the grader runs Node 22.23.4). Output: `/output/entry.txt`, 101 characters.

## License

MIT — see [LICENSE](LICENSE).
