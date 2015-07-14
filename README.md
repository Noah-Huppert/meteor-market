# meteor-market
A simple marketplace web app built on top of Meteor JS

# Models
## User
User is handled by the [Meteor Accounts Api](http://docs.meteor.com/#/full/accounts_api)

## Market Item
| Key         | Type    | Notes          |
| ----------- | ------- | -------------- |
| user_id     | String  | Auto-increment |
| id          | Integer |                |
| title       | String  |                |
| description | String  |                |
| image_url   | String  |                |
| price       | Float   |                |
