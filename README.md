# meteor-market
A simple marketplace web app built on top of Meteor JS

# Models
## User
User is handled by the [Meteor Accounts Api](http://docs.meteor.com/#/full/accounts_api)

## Provider Access Token
| Key           | Type      | Notes |
| ------------- | --------- | ----- |
| user_id       | Integer   |       |
| provider      | String    |       |
| access_token  | String    |       |
| expires_on    | Timestamp |       |
| refresh_token | String    |       |

## Market Item
| Key         | Type    | Notes          |
| ----------- | ------- | -------------- |
| user_id     | Integer | Auto-increment |
| id          | Integer |                |
| title       | String  |                |
| description | String  |                |
| image_url   | String  |                |
| price       | Float   |                |

## Market Item Comment
| Key     | Type    | Notes          |
| ------- | ------- | -------------- |
| user_id | Integer |                |
| item_id | Integer |                |
| id      | Integer | Auto-increment |
| content | String  |                |
