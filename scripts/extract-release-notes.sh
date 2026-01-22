#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <tag>" >&2
  exit 1
fi

tag="$1"
changelog="CHANGELOG.md"

if [ ! -f "$changelog" ]; then
  echo "CHANGELOG.md not found" >&2
  exit 1
fi

notes=$(awk -v tag="## ${tag}" '
  BEGIN { p=0 }
  $0 == tag { p=1; next }
  /^## / { if (p) exit }
  p { print }
' "$changelog")

if [ -z "${notes// /}" ]; then
  echo "No notes found for ${tag} in CHANGELOG.md" >&2
  exit 1
fi

printf "## %s\n\n%s\n" "$tag" "$notes"