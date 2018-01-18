# Mpritter
A simple micro blogging app

# Deskripsi:
Simple micro blogging yang bisa nge-Mpritt (post tweet), show mpritts, show mpritts by # (hashtags), & delete mpritts.

# How to run:


# API Endpoints:
Mpritter Endpoints:

| Route | HTTP | Description |
| ----- |:----:| -----------:|
|/api/mpritt/|GET|Menampilkan mpritts user yang sudah login|
|/api/mpritt/|POST|Post mpritt|
|/api/mpritt/?hastags|GET|Menampilkan mpritts berdasarkan # (hashtags)|
|/api/mpritt/:id|DELETE|Menghapus mpritt berdasarkan id mpritt-nya|

| Route        | HTTP          | Description  |
| ------------- |:-------------:| -----:|
| /api/mpritt/      | GET | Menampilkan mpritts user yang sudah login |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

User Endpoints:

| Route | HTTP | Description |
| ----- |:----:| -----------:|
|/api/user/|GET|Menampilkan halaman login/register|
|/api/user/register|POST|Register account user|
|/api/user/login|POST|Login account user|
|/api/user/edit/:id|PUT|Update user profile berdasarkan id nya|

