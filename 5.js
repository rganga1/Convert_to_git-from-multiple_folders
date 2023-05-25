//powershell command to remove all whitespaces with "_"

$directoryPath = $PWD.Path

$folders = Get-ChildItem -Path $directoryPath -Directory

foreach ($folder in $folders) {
  $oldFolderPath = $folder.FullName
  $folderName = Split-Path -Path $folder.FullName -Leaf
  $newFolderName = $folderName -replace '\s+', '_'
  $newFolderPath = Join-Path -Path $directoryPath -ChildPath $newFolderName

  Rename-Item -Path $oldFolderPath -NewName $newFolderName -Force
}

// to copy all folders name to clipboard