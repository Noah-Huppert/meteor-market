# meteor-market
A simple marketplace web app built on top of Meteor JS

# Models
## User
| Key        | Type    | Notes          |
| ---------- | ------- | -------------- |
| id         | Integer | Auto-increment |
| first_name | String  |                |
| last_name  | String  |                |
| email      | String  |                |
| avatar_url | String  |                |

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
| price       | Float   |                |

## Market Item Comment
| Key     | Type    | Notes          |
| ------- | ------- | -------------- |
| user_id | Integer |                |
| item_id | Integer |                |
| id      | Integer | Auto-increment |
| content | String  |                |
