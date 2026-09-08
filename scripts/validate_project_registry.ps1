$ErrorActionPreference = "Stop"

$projects = Get-Content "$PSScriptRoot\..\data\projects.ts" -Raw
$details  = Get-Content "$PSScriptRoot\..\data\projectDetails.ts" -Raw

$required = @(
  'airline-operations-intelligence',
  'virtual-ed-independent-study',
  'weld-quality-classification',
  'ship-operations-optimization'
)

foreach ($slug in $required) {
  if (-not $projects.Contains("slug: `"$slug`"")) { throw "Missing canonical project slug: $slug" }
  if (-not $details.Contains("`"$slug`": {")) { throw "Missing detail record: $slug" }
}

if ($projects -match 'Challenge|Competition') { throw "Challenge/competition taxonomy should not be in the active project registry." }
if ($projects -notmatch 'origin: "Research"[\s\S]*?slug: "airline-operations-intelligence"' -and $projects -notmatch 'slug: "airline-operations-intelligence"[\s\S]*?origin: "Research"') {
  Write-Warning "Review Airlines Research classification manually."
}

Write-Host "Portfolio v3 project-registry checks passed." -ForegroundColor Green
