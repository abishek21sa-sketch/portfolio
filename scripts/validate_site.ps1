$ErrorActionPreference = "Stop"

Write-Host "=== Portfolio v3 site hardening validation ==="

$root = Split-Path -Parent $PSScriptRoot
$required = @(
  "app\layout.tsx",
  "app\not-found.tsx",
  "components\Nav.tsx",
  "components\ProjectExplorer.tsx",
  "public\robots.txt",
  "DEPLOYMENT.md"
)

foreach ($file in $required) {
  $path = Join-Path $root $file
  if (-not (Test-Path $path)) { throw "Missing required file: $file" }
}

$source = Get-ChildItem $root -Recurse -Include *.tsx,*.ts,*.css | Get-Content -Raw
if ($source -match "Columbia") { throw "Stale Columbia reference found." }
if ($source -cmatch '\bASK\b') { throw "Stale ASK brand found; ASA is required." }

$pages = @(
  "app\page.tsx",
  "app\projects\page.tsx",
  "app\experience\page.tsx",
  "app\research\page.tsx",
  "app\education\page.tsx",
  "app\about\page.tsx"
)
foreach ($page in $pages) {
  $text = Get-Content (Join-Path $root $page) -Raw
  if ($text -notmatch 'id="main-content"') { throw "Skip-link target missing in $page" }
}

Write-Host "PASS: required hardening files present"
Write-Host "PASS: ASA brand / no Columbia"
Write-Host "PASS: skip-link targets present"
Write-Host "Run npm.cmd run typecheck and npm.cmd run build for compiler/build acceptance."
