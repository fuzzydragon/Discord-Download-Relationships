# Download-Discord-Relationships
A quick script for piping your discord relationships to a json file. 


### Usage

`node Index.js TOKEN`

### A relationship object looks something like this: 

```
  {
    "id": "DISCORD_ID",
    "type": RELATIONSHIP_TYPE,
    "nickname": "NICK_NAME",
    "user": {
      "id": "DISCORD_ID",
      "username": "USER_NAME",
      "avatar": "AVATAR_HASH",
      "discriminator": "DISCRIMINATOR",
      "public_flags": PUBLIC_FLAGS
    }
```

_(More information can be found here: https://discord.com/developers/docs/resources/user)_

#### `type` determines your relationship with this person: 
* `1` indicates this person is your `friend`.
* `2` indicates this person is `blocked`

#### `user.public_flags` 
* `0`	indicates `None`
* `1` indicates	`Discord Employee`
* `2` indicates	`Partnered Server Owner`
* `4` indicates `HypeSquad Events`
* `8` indicates	`Bug Hunter Level 1`
* `64` indicates `House Bravery`
* `128` indicates `House Brilliance`
* `256` indicates	`House Balance`
* `512`	indicates `Early Supporter`
* `1024` indicates `Team User`
* `4096` indicates `System`
* `16384` indicates `Bug Hunter Level 2`
* `65536` indicates	`Verified Bot`
* `131072` indicates `Early Verified Bot Developer`

### Dependancies

* [axios](https://www.npmjs.com/package/axios)
