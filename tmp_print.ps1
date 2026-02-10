(Get-Content 'src/components/RecentArticles.tsx' -Raw) | Out-String | Set-Content -Encoding utf8 'tmp_recent.txt'
