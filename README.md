ag-Grid ColId issue
====================

## Description
As per ag-grid documentation. By default colId is taken equal to the field in ColDef. But, after upgrading to ag-grid 20.2.0. This fact is not holding up.

Because of which we can't sustain filter model between successive re-renders as filter model is based on colId which changes after the grid is re-rendered.

To fix it, we tried explicitly mentioning the colId in colDefs. But, this broke the order of the columns in view. (But, filtered started to work as expected.) 

Building
==============

To build:
- `npm install`
- `npm run large`
- navigate to localhost:8080

## Step to reproduce filter issue:
- Checkout commit `740309fe14743f20c5456dd96929114c07bad5af`
- Run `npm run large`
- navigate to localhost:8080
- Set filter for Header 1
- Click `Click to Toggle View` button
- The filter model is gone

## Step to reproduce: ag-grid rendering columns in wrong order issue (Coming after explicitly mentioning colId for Header 1)
- Checkout commit `563fe2b5e4b637ae0532b50f616cdbda599b8191`
- Run `npm run large`
- navigate to localhost:8080
- Set filter for Header 1
- Click `Click to Toggle View` button
- The filter model is maintained, but the order of column (Header 1) is changes.
