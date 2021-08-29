import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Firebase database 인증 및 앱 초기화
cred = credentials.Certificate('./share-diary-63ba7-firebase-adminsdk-nk27a-1c2c37e865.json')
firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://share-diary-63ba7-default-rtdb.firebaseio.com/',
})

dir = db.reference()
dir.update({'we' : 'werwerwerwerwerwer'})