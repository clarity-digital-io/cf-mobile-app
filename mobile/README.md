Open ios/mobile.xcworkspace


# callback
https://dev-gzcou5sg.eu.auth0.com/login/callback


## curl
curl -v https://test.salesforce.com/services/oauth2/token -d "grant_type=password" -d "client_id=3MVG9Iu66FKeHhIPl0uFlYZBdNU.6Pent1ZGBfmItYa7PSnT6MJi1q1IkELJEieYgazbKz7fC_P5tHVrJCMV1" -d "client_secret=16FAC9BF057CBEDFE79580C95681458F975D9EBA9BE754F7D4213F40E3C562A6" -d "username=test-rogis8qkakwe@example.com" -d "password=^*Wfl%u)E2"

curl -v https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v40.0/ -H 'Authorization: OAuth Ea-Fp3ro5CsSSTzR_i4plIBsBeND7fRW'


curl -v https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v20.0/sobjects/Account/ -H "Authorization: Bearer Ea-Fp3ro5CsSSTzR_i4plIBsBeND7fRW" -H "Content-Type: application/json" 

test-rogis8qkakwe@example.com ^*Wfl%u)E2

{
  "enterprise": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/Soap/c/{version}/00DR0000001pHnB",
  "metadata": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/Soap/m/{version}/00DR0000001pHnB",
  "partner": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/Soap/u/{version}/00DR0000001pHnB",
  "rest": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v{version}/",
  "sobjects": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v{version}/sobjects/",
  "search": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v{version}/search/",
  "query": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v{version}/query/",
  "recent": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v{version}/recent/",
  "tooling_soap": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/Soap/T/{version}/00DR0000001pHnB",
  "tooling_rest": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v{version}/tooling/",
  "profile": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/005R0000006NMJGIA4",
  "feeds": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v{version}/chatter/feeds",
  "groups": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v{version}/chatter/groups",
  "users": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v{version}/chatter/users",
  "feed_items": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v{version}/chatter/feed-items",
  "feed_elements": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com/services/data/v{version}/chatter/feed-elements",
  "custom_domain": "https://agility-innovation-1440-dev-ed.cs2.my.salesforce.com"
}


curl --request GET \
  --url 'https://dev-gzcou5sg.eu.auth0.com/api/v2/users/salesforce-sandbox|005R0000006NMJGIA4' \
  --header 'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFqUXpNVUl6T0RNd09FWXlORFZCUlVFek1UaEdOMFZDTXprM04wWkVOa1UxUmpBME16azBNUSJ9.eyJpc3MiOiJodHRwczovL2Rldi1nemNvdTVzZy5ldS5hdXRoMC5jb20vIiwic3ViIjoibHB4ZGpRQWRvMzdMclRObHh3Qm5hdjR6bFo4NWlHeXFAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LWd6Y291NXNnLmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNTg5NjgzMjM1LCJleHAiOjE1ODk3Njk2MzUsImF6cCI6ImxweGRqUUFkbzM3THJUTmx4d0JuYXY0emxaODVpR3lxIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfaWRwX3Rva2VucyByZWFkOmN1c3RvbV9kb21haW5zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.YZKv47d45DPUvHtqABfKAM1NPezZcVBxmx-XaclxMhzlEtKNmw6dsHuMrYInAngYTuVebRnHZM9MFuQVJuVnKsZoCKjKrNLpQgN3tdvG9H-GKMeOQHSYBfykYOZH8NtjXjXznadVrukDYxahSNfIxaD9i07Yvm-UKp18yfTQjzlpMvfA4hRqlZt7V59h18g3F5i_SEFbG71PoN6ulQvRF_IeGSy7Jmu46HGVk4TGB9LMkoe3dhNETD5uSqAlSnh7gASqDyfUozTw0p0-_TyXvwp26pAGbMllCHw592jLCu6b_GhvAxy_Uu23vFMBfv_-2eOgo0iNa4HNueJBLLHgaw'

    domain: 'dev-gzcou5sg.eu.auth0.com',
	clientId: 'clm2TdSybOc6hM91CsJjTsV6lQaziT3p',