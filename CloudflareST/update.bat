@echo off

set APP_PATH=%~dp0app
set ZIP_PATH=%~dp0data\release.zip
set URL=https://github.com/XIU2/CloudflareSpeedTest/releases/latest/download/CloudflareST_windows_amd64.zip

curl -L -o %ZIP_PATH% %URL%

7z x -y -o%APP_PATH% %ZIP_PATH%

pause >nul
