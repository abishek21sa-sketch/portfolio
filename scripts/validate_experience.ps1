$ErrorActionPreference = 'Stop'
Write-Host '=== Portfolio v3 Experience Validation ==='

$arrow = [char]0x2192
$emdash = [char]0x2014

$required = @(
  'University of Illinois Urbana-Champaign',
  "Teaching Assistant $emdash IE 360: Facilities Planning and Design",
  'VDart',
  'Tractor and Farm Equipment Ltd. (TAFE)',
  'University of Illinois Dining',
  "6 $arrow 16",
  "68.75 h $arrow 23.4 h"
)

$text = Get-Content -Raw -Encoding UTF8 '.\data\experience.ts'
foreach ($item in $required) {
  if (-not $text.Contains($item)) { throw "Missing expected experience content: $item" }
}

$all = Get-ChildItem '.\app','.\data','.\components' -Recurse -File | Get-Content -Raw -Encoding UTF8
if (($all -join "`n") -match 'Columbia') { throw 'Unexpected Columbia reference found.' }

Write-Host 'Experience registry checks: PASS'
