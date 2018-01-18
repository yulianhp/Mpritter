# Mpritter
A simple micro blogging app

# Deskripsi:
Simple micro blogging yang bisa nge-Mpritt (post tweet), show mpritts, show mpritts by # (hashtags), & delete mpritts.

# How to run:
run client and server with 'npm run dev'
type in your browser 'http://localhost:8080/#/'

# API Endpoints:
Mpritter Endpoints:

| Route | HTTP | Description |
| ----- |:----:| -----------:|
|/api/mpritt/|GET|Menampilkan mpritts user yang sudah login|
|/api/mpritt/|POST|Post mpritt|
|/api/mpritt/?hastags|GET|Menampilkan mpritts berdasarkan # (hashtags)|
|/api/mpritt/:id|DELETE|Menghapus mpritt berdasarkan id mpritt-nya|


User Endpoints:

| Route | HTTP | Description |
| ----- |:----:| -----------:|
|/api/user/|GET|Menampilkan halaman login/register|
|/api/user/register|POST|Register account user|
|/api/user/login|POST|Login account user|
|/api/user/edit/:id|PUT|Update user profile berdasarkan id nya|

