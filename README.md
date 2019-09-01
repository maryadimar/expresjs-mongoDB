# catatan
bcrypt = membuat hash password

body-parser = pusataka membantu untuk memparse request yang akan datang




untuk insert

curl -d "name=masukannama&email=masukanemail&password=masukanpassword" POST localhost:3000/users/register

untuk login

curl -d "&email=masukanemail&password=masukanpassword" POST localhost:3000/users/authenticate

untuk cek postingan setelah login

curl -H "x-access-token:TOKEN_STRING" -X GET http://localhost:3000/notes

untuk get data semua notes

curl -H "x-access-token:TOKEN_STRING" -X GET http://localhost:3000/notes

untuk get data per ID

curl -H "x-access-token:TOKEN_STRING" -X GET http://localhost:3000/notes/noteId

untuk edit

curl -H "x-access-token:TOKEN_STRING" -d "name=catatan2&content=dua" -X PUT http://localhost:3000/notes/:noteId

untuk delete

curl -H "x-access-token:TOKEN_STRING" -X DELETE http://localhost:3000/notes/:noteId

