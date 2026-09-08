$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

Write-Host "Portfolio v3 foundation validation" -ForegroundColor Cyan

$publicCode = @(
  Join-Path $root "app"
  Join-Path $root "components"
  Join-Path $root "data"
  Join-Path $root "types"
)

$forbidden = @("Columbia", "case study", "Portfolio v0")
foreach ($term in $forbidden) {
  $matches = Get-ChildItem $publicCode -Recurse -File | Select-String -SimpleMatch $term
  if ($matches) {
    Write-Host "FAIL: forbidden/stale term found: $term" -ForegroundColor Red
    $matches | ForEach-Object { Write-Host "  $($_.Path):$($_.LineNumber) $($_.Line.Trim())" }
    exit 1
  }
}

$registry = Get-Content (Join-Path $root "data\projects.ts") -Raw
$required = @(
  'slug: "airline-operations-intelligence"',
  'origin: "Research"',
  'slug: "virtual-ed-independent-study"',
  'origin: "Independent Study"',
  'slug: "weld-quality-classification"',
  'origin: "UIUC Course"',
  'slug: "ship-operations-optimization"',
  'origin: "IIT Madras Course"'
)
foreach ($needle in $required) {
  if (-not $registry.Contains($needle)) {
    Write-Host "FAIL: registry check missing $needle" -ForegroundColor Red
    exit 1
  }
}

Write-Host "PASS: taxonomy and stale-term checks passed." -ForegroundColor Green
Write-Host "Next: npm install; npm run typecheck; npm run dev" -ForegroundColor Yellow
