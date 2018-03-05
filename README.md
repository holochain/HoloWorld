# HoloWorld - React, Redux, Material-UI

1. Run the DNA Tests
```
  hcdev test
```
This will test the DNA using the "test/holoWorld.json" file.

1. Run Holochain
```
  hcdev web
```
This will run the DNA on http://localhost:4141
1. Run the UI
```
  yarn start
```
The UI will run on http://localhost:3000 and will proxy requests through to the backend.  See the package.json file   
```
  "proxy": "http://localhost:4141"
```
1. Type something into the text field and press "Submit".
  * The hash key generated will be shown in the other text field.
1. Now copy the hash key into the "Hash to Read from Holochain" field and press "Read"
  * The text you typed in will be retrieved from Holochain and shown in the text field.
1. To run the UI directly from the ```hcdev``` command Run
```
  yarn build
```
This builds the optimised build into the ```ui``` folder from the src
1. Now rerun
```
  Stop hcdev ctrl+c
  hcdev web
```
Now you can access the UI from http://localhost:4141

## View Chain & DHT Data
You can view the data in your local chain and DHT by executing the following.  Make sure you have jq installed to get the pretty colours.  If not just remove the | jq . part.

```
  HOLOPATH=/Users/philipbeadle/.holochaindev hcadmin dump HoloWorld --chain --json | jq .
  HOLOPATH=/Users/philipbeadle/.holochaindev hcadmin dump HoloWorld --dht --json | jq .
```

```
  hcdev --bridgeTo=../HoloWorldBridge test
```
