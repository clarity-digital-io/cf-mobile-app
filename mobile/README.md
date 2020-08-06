
# Debug 
Open ios/mobile.xcworkspace

# Auth0 Info
https://dev-gzcou5sg.eu.auth0.com/login/callback

# Improvements

Realm open and close after we get forms, responses (GlobalRealm);

# Querying Salesforce Records

1) Read on Mobile Offline Query Sharing Table for Records User has Access To
2) Have user make request to Salesforce with Access Token
	- As a setting Sync Records 
	- Keep Table of Objects (Account, Case, Contact) and Fields used in a Record Group/Lookup/Connected Objects
	- Id, Name for all sObjects + JSON Field in Realm Schema

# Sync

https://github.com/sfisv-heroku/pe-quickstart-bizorg#installing-heroku-platform-events-quick-start-business-org-using-salesforce-dx

UI Calls Salesforce Org (Maybe go straight to Platform Event)
Creates Platform Event => Salesforce Queries Records Required + Fields
Returns "In Progress" 
After Salesforce Queries => Post to /sync/organizationId/userId <= Creates worker and responds with worker success or fail in creating a worker
Worker will open realm and process records

## Mobile Forms Setting
'Sync Salesforce Records' 
->  

## Apple developer account
- Under Clarity Digital Partners LLC 
- developer@claritydigital.io

## Alpha Version
*1) (Mobile and Builder) Forms should have a Description field and display and FormListItem
2) (Mobile) Search for a form text filter name and description
3) (Mobile and Maybe Builder) Should show form detail (Recent responses (Last Month worth) + Description and Tags in the future)
4) (Mobile) Camera ability to take pictures / select pictures 
5) (Mobile) Display selected images as thumbnail 
6) (Mobile) Should show form name on recent responses with lookup tags for related (connected objects)
7) (Mobile and Builder) Map should have preselect filled in by Account address 
8) (Mobile and Builder) Map should give user ability to select drop point and to create a polygonial area
9) (Mobile) If Dropdown has more than 4 it opens a select list similar to search records
10) (Mobile) Clicking on X on Response and Delete Response / Realm delete response / Realm delete answers
11) (Mobile) Clicking on X on Response and Save & Close / Realm save answers / Update Status on Response
12) (Mobile) Clicking on Check on Response and Save & New / Realm save answers / Update Status on Response / Generate and Navigate to new form 
13) (Mobile) Response List / match form list search styling / On Click Navigate to View/Edit
16) (Mobile) Add feedback form 
17) (Mobile) Redirect to App Review if good review.
18) (Salesforce Org Service) Handle Request / Query for Salesforce Records required by Forms
19) (Heroku Realm Service) Post Salesforce Records and start work that updates Realm Updates
20) (Mobile + Heroku Realm Service) On Response/Answer save + How do we connect back to the correct Salesforce Org to Update + Is this why we have Forms API User?
21) (Wizard) Grant Access to create Custom Metadata
22) (Wizard) Keep Track of Latest Form Syncs through a table with a record inserted everything it's requested and progress and status
23) (Wizard) Keep Track of Users with Mobile Licenses through a table
24) (Mobile) Deep Link Navigation Testing
25) (Mobile) If Form Has a Connection, Grab Connection Record and Pre Populate
26) (Mobile) Allow Camera to be used when searching for a related Salesforce Record (Lookup / Connection) (Qr Code + BarCode)
27) (Mobile) Record Group should show with possible Salesforce Fields + as a template for repeating sections
28) (App) Form Controller to use fflib
*29) (App) Builder to use fflib
30) (App) Strip to basic use of Form Response
31) (Mobile and Builder) Multi Page Forms should Show as drawer navigation + Maybe make it easier to create multi form
32) (Mobile) Should validate and show errors when it's multi page on drawer titles
33) Tests should meet 75% with documented strategy to reach 95%
34) Examine what is the minimum we need to document and do before we can submit again for a security review (We don't need to have the mobile app complete)
35) Clarity Forms Managment design and push to production required
36) (App) Clarity Form Response View requires a White background

* - Complete

## Alpha Version (Security Review Submission + Required Mobile APIs and Connections)
*1) Builder Controller
2) Form Controller
3) Form Response Controller(+)
4) Mobile Forms Sync (Init)
5) Mobile User Sync (Register)
6) Update from Realm Service to Response and Answers using (API User? Possibly follow Listner + Worker Heroku Pattern while storing access token similar to original Clarity Forms / Stripe Integrations)
7) Connected App
8) Basic Design of Clarity Forms Management App
9) Basic Design and Development of Salesforce Records
10) Test Classes

## Beta Version
1) (Mobile) Repeating Sections
2) (Mobile) Ipads should show as split view
3) (Mobile) Show a grouped tab or task tab
4) (Mobile) Show Approvals and Notifications tabs
5) (App) Export as CSV answers
6) (Mobile + App) Generate PDF of Form Response
7) (Mobile + Builder) QR Code for Mobile Preview
8) (Mobile + App) Single User + Field Users can use Different Login (Google/Microsoft)

14) (Builder) Add Picture Choice on Builder 
15) (Mobile and Builder) Picture Choice Images Uploaded and displayed on Mobile










## Checklist Groups
-> On App (sObject / Detail Click)
-> -> View the checklists available
-> -> -> Create checklist / Option to View more info
-> -> -> -> On Create checklist appears as expandable row in 

## Task Management 
-> Somehow needs to be available offline
* Challenges
1. Apps/Accounts/Assets/sObject Checklist won't be available offline
1.a. So we don't really know what checklist groups it has
1.b. Account has a Checklist Group 
1.b.i. We can solve this by storing checklist group in realm table.
1.b.ii. So now we know related sObject/Account for now of Checklist Group and Forms will have Lookup to Checklist Group
* Solutions
1. When user is offline and somehow has maybe downloaded accounts/sobjects then it can:
1.a Create/Start new checklist from Checklist Group assigned to sObject/Account
1.b There may be a need for auto checklist creation but that may be
1.b.i. Apps screen can have a separate section for (Tasks/Checklist) that are for today.
1.c (Tasks/Checklist) are groups of responses
1.c.i When user clicks start new checklist for (sobject/Account) new responses are created
1.d. Checklist is considered complete when (3 or whatever # of forms it has) are submitted (not sure what to do with status of checklist is it an sobject in salesforce)
* Possible Extensions
Ability for Admin to create Checklist automatically daily for accounts or sobjects

* sObjects

Checklist 
-> Checklist_Group__c
-> sObject_Record__c
-> Status__c
-> Start_Date__c
-> Submitted_Date__c

* Realm needs

ChecklistGroup
-> Has Forms
-> Has Checklists

Checklist

* Offer a way to auto create realms on schedule
- Possible metadata object in Realm
- Possible Schedule Object in Salesforce that pushes to Realm




