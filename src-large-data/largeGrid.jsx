import React, {Component} from 'react';

import {AgGridReact} from 'ag-grid-react';

// put this line in to use ag-Grid enterprise
import 'ag-grid-enterprise';

export default class MyApp extends Component {

    constructor() {
        super();
        this.gridApi = null;
        this.state = {
            dView: false,
            filterModel: null,
        };
        this.onFilterFinished = this.onFilterFinished.bind(this);
        this.onGridReady = this.onGridReady.bind(this);
    }


    onFilterFinished() {
        const filterModelFromGrid = this.gridApi.getFilterModel();
        this.setState({filterModel: filterModelFromGrid})
    }

    onGridReady(params) {
        this.gridApi = params.api;
    }

    createRowData() {
        if(this.state.dView){
            return [{"val1":30,"val2":6,"val3":1,"val4":0.5025,"val5":3029.7,"val6":6029.7,"val7":200.99,"val8":0.5025,"val9":3029.7,"val10":6029.7,"val11":30,"val12":200.99,"val13":37.6811,"val14":0.5025,"val15":0,"val16":0,"val17":3029.7,"val18":6029.7,"val19":0,"val20":0,"val21":30,"val22":200.99,"val23":0,"val24":0,"val25":true,"val26":168.83241,"val27":"name_1","val28":1549238400000,"val29":4,"message":"","status":"","lastUpdated":null,"11_val30":true,"11_val32":true,"11_val31":0.1,"11val33":200.99,"val34":0.2,"11val35":200.99,"11val36":3,"17_val30":true,"17_val32":false,"17_val31":0.1,"17val33":200.99,"17val36":3,"21_val30":true,"21_val32":false,"21_val31":0.1,"21val33":200.99,"21val36":3,"36_val30":true,"36_val32":false,"36_val31":0.1,"36val33":200.99,"36val36":3,"isChecked":false},{"val1":30,"val2":5,"val3":1,"val4":0.5025,"val5":3029.7,"val6":6029.7,"val7":200.99,"val8":0.5025,"val9":678.8649,"val10":1351.0749,"val11":6.7221,"val12":200.99,"val13":8.5848,"val14":0.5025,"val15":0,"val16":0,"val17":678.8649,"val18":1351.0749,"val19":-0.7759299965172396,"val20":0,"val21":6.7221,"val22":200.99,"val23":0,"val24":0,"val25":false,"val26":168.8316,"val27":"name_2","val28":1549238400000,"val29":4,"message":"","status":"","lastUpdated":null,"11_val30":false,"11_val32":true,"11_val31":0.1,"11val33":200.99,"val34":0.2,"11val35":200.99,"11val36":1,"17_val30":false,"17_val32":false,"17_val31":0.1,"17val33":200.99,"17val36":1,"21_val30":false,"21_val32":false,"21_val31":0.1,"21val33":200.99,"21val36":1,"36_val30":false,"36_val32":false,"36_val31":0.1,"36val33":200.99,"36val36":1,"isChecked":false}]
        }
        return [{"val1":30,"val2":6,"val3":1,"val4":0.5025,"val5":3029.7,"val6":6029.7,"val7":200.99,"val8":0.5025,"val9":3029.7,"val10":6029.7,"val11":30,"val12":200.99,"val13":37.6811,"val14":0.5025,"val15":0,"val16":0,"val17":3029.7,"val18":6029.7,"val19":0,"val20":0,"val21":30,"val22":200.99,"val23":0,"val24":0,"val25":true,"val26":168.83241,"val27":"name_1","val28":1549238400000,"val29":4,"message":"","status":"","lastUpdated":null,"isChecked":false},{"val1":30,"val2":5,"val3":1,"val4":0.5025,"val5":3029.7,"val6":6029.7,"val7":200.99,"val8":0.5025,"val9":678.8649,"val10":1351.0749,"val11":6.7221,"val12":200.99,"val13":8.5848,"val14":0.5025,"val15":0,"val16":0,"val17":678.8649,"val18":1351.0749,"val19":-0.7759299965172396,"val20":0,"val21":6.7221,"val22":200.99,"val23":0,"val24":0,"val25":false,"val26":168.8316,"val27":"name_2","val28":1549238400000,"val29":4,"message":"","status":"","lastUpdated":null,"isChecked":false}];
    }

    createColumnDefs() {
        if (this.state.dView) {
            return [{
                "field": "",
                "headerClass": "no-bottom-border",
                "suppressMenu": true,
                "includedInDetailView": true,
                "excludedFromSummaryView": false,
                "children": [{
                    "field": null,
                    "headerName": "",
                    "suppressMenu": true,
                    "headerClass": "no-right-border",
                    "cellClass": "no-right-border",
                    "width": 20,
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": false,
                    "pinned": "left"
                }, {
                    "field": "val27",
                    "headerName": "Header 1",
                    "suppressSizeToFit": true,
                    "width": 260,
                    "leftAlign": true,
                    "filter": "agSetColumnFilter",
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "headerClass": ["no-left-border", "no-right-border", "menu"],
                    "cellClass": ["no-left-border", "no-right-border"],
                    "hide": false,
                    "pinned": "left"
                }, {
                    "field": "status",
                    "headerName": "",
                    "headerClass": "no-left-border",
                    "cellClass": ["no-left-border", "status-sync"],
                    "width": 37,
                    "suppressMenu": true,
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": false,
                    "pinned": "left"
                }],
                "hide": false,
                "pinned": "left",
                "filterParams": {"selectAllOnMiniFilter": true}
            }, {
                "field": "",
                "headerName": "Header 2",
                "includedInDetailView": true,
                "excludedFromSummaryView": true,
                "suppressMenu": true,
                "children": [{
                    "field": "val26",
                    "headerName": "Header 3",
                    "cellClass": "ag-flex-align--right",
                    "includedInDetailView": true,
                    "width": 80,
                    "excludedFromSummaryView": true,
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": false,
                    "pinned": "left"
                }, {
                    "field": "val22",
                    "headerName": "Header 4",
                    "cellClass": ["ag-flex-align--right", "no-right-border"],
                    "headerClass": "no-right-border",
                    "width": 80,
                    "includedInDetailView": true,
                    "excludedFromSummaryView": true,
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": false,
                    "pinned": "left"
                }, {
                    "field": "val24",
                    "headerName": "Header 5",
                    "cellClass": ["ag-flex-align--right", "no-right-border"],
                    "headerClass": "no-right-border",
                    "width": 110,
                    "includedInDetailView": true,
                    "excludedFromSummaryView": true,
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": false,
                    "pinned": "left"
                }, {
                    "field": "val23",
                    "headerName": "Header 6",
                    "cellClass": "ag-flex-align--right",
                    "width": 110,
                    "includedInDetailView": true,
                    "excludedFromSummaryView": true,
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": false,
                    "pinned": "left"
                }],
                "hide": false,
                "pinned": "left",
                "filterParams": {"selectAllOnMiniFilter": true}
            }, {
                "field": "val100",
                "headerName": "Header 2",
                "children": [{
                    "field": "val22",
                    "headerName": "Header 4",
                    "cellClass": "ag-flex-align--right no-right-border",
                    "headerClass": "no-right-border",
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": true,
                    "pinned": null
                }, {
                    "field": "val24",
                    "headerName": "Header 5",
                    "cellClass": ["ag-flex-align--right", "no-right-border"],
                    "headerClass": "no-right-border",
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": true,
                    "pinned": null
                }, {
                    "field": "val23",
                    "headerName": "Header 6",
                    "cellClass": "ag-flex-align--right",
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": true,
                    "pinned": null
                }],
                "hide": true,
                "pinned": null,
                "filterParams": {"selectAllOnMiniFilter": true}
            }, {
                "field": "val101",
                "headerName": "Header 7",
                "children": [{
                    "field": "val18",
                    "headerName": "Header 4",
                    "cellClass": "ag-flex-align--right no-right-border",
                    "headerClass": "no-right-border",
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": true,
                    "pinned": null
                }, {
                    "field": "val20",
                    "headerName": "Header 5",
                    "headerClass": "no-right-border",
                    "cellClass": ["ag-flex-align--right", "no-right-border"],
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": true,
                    "pinned": null
                }, {
                    "field": "val19",
                    "headerName": "Header 6",
                    "cellClass": "ag-flex-align--right",
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": true,
                    "pinned": null
                }],
                "hide": true,
                "pinned": null,
                "filterParams": {"selectAllOnMiniFilter": true}
            }, {
                "field": "val103",
                "headerName": "Header 8",
                "children": [{
                    "field": "val14",
                    "headerName": "Header 4",
                    "cellClass": "ag-flex-align--right no-right-border",
                    "headerClass": "no-right-border",
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": true,
                    "pinned": null
                }, {
                    "field": "val16",
                    "headerName": "Header 9",
                    "width": 80,
                    "cellClass": ["ag-flex-align--right", "no-right-border"],
                    "headerClass": "no-right-border",
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": true,
                    "pinned": null
                }, {
                    "field": "val15",
                    "headerName": "Header 10",
                    "width": 80,
                    "cellClass": "ag-flex-align--right",
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "hide": true,
                    "pinned": null
                }],
                "hide": true,
                "pinned": null,
                "filterParams": {"selectAllOnMiniFilter": true}
            }, {
                "field": "Main",
                "hide": false,
                "children": [{
                    "field": "11val33",
                    "headerName": "Header 11",
                    "width": 90,
                    "cellClass": ["ag-flex-align--right", "no-right-border"],
                    "headerClass": "no-right-border",
                    "hide": false,
                    "filterParams": {"selectAllOnMiniFilter": true}
                }, {
                    "field": "11val36",
                    "cellClass": ["overflow-visible", "ag-flex-align--right", "no-right-border"],
                    "headerClass": "no-right-border",
                    "width": 110,
                    "headerName": "Header 12",
                    "hide": false,
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "cellRendererParams": {
                        "colData": {
                            "val110": 11,
                            "val111": "9954",
                            "val112": "Main",
                            "val29": 4,
                            "startDate": 1554076800000,
                            "endDate": 1556582400000,
                            "val113": true
                        },
                        "isDisabled": false,
                        "val114": [{
                            "val115": 1,
                            "val116": "val118",
                            "val25": false,
                            "val117": true,
                            "name": "PP",
                            "index": 1,
                            "key": 1
                        }, {
                            "val115": 2,
                            "val116": "val119",
                            "val25": false,
                            "val117": false,
                            "name": "val120",
                            "index": 2,
                            "key": 2
                        }, {
                            "val115": 3,
                            "val116": "val119",
                            "val25": true,
                            "val117": true,
                            "name": "val120",
                            "index": 3,
                            "key": 3
                        }]
                    }
                }, {
                    "field": "11val35",
                    "cellClass": ["overflow-visible", "ag-flex-align--right"],
                    "width": 110,
                    "headerName": "Header 20",
                    "hide": false,
                    "editable": true,
                    "cellRendererParams": {
                        "colData": {
                            "val110": 11,
                            "val111": "9954",
                            "val112": "Main",
                            "val29": 4,
                            "startDate": 1554076800000,
                            "endDate": 1556582400000,
                            "val113": true
                        },
                        "isDisabled": false,
                        "val114": [{
                            "val115": 1,
                            "val116": "val118",
                            "val25": false,
                            "val117": true,
                            "name": "PP",
                            "index": 1,
                            "key": 1
                        }, {
                            "val115": 2,
                            "val116": "val119",
                            "val25": false,
                            "val117": false,
                            "name": "val120",
                            "index": 2,
                            "key": 2
                        }, {
                            "val115": 3,
                            "val116": "val119",
                            "val25": true,
                            "val117": true,
                            "name": "val120",
                            "index": 3,
                            "key": 3
                        }]
                    },
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "cellEditorParams": {
                        "colData": {
                            "val110": 11,
                            "val111": "9954",
                            "val112": "Main",
                            "val29": 4,
                            "startDate": 1554076800000,
                            "endDate": 1556582400000,
                            "val113": true
                        },
                        "isDisabled": false,
                        "val114": [{
                            "val115": 1,
                            "val116": "val118",
                            "val25": false,
                            "val117": true,
                            "name": "PP",
                            "index": 1,
                            "key": 1
                        }, {
                            "val115": 2,
                            "val116": "val119",
                            "val25": false,
                            "val117": false,
                            "name": "val120",
                            "index": 2,
                            "key": 2
                        }, {
                            "val115": 3,
                            "val116": "val119",
                            "val25": true,
                            "val117": true,
                            "name": "val120",
                            "index": 3,
                            "key": 3
                        }]
                    }
                }],
                "filterParams": {"selectAllOnMiniFilter": true}
            }, {
                "field": "Header 21",
                "hide": false,
                "children": [{
                    "field": "17val33",
                    "headerName": "Header 11",
                    "width": 90,
                    "cellClass": ["ag-flex-align--right", "no-right-border"],
                    "headerClass": "no-right-border",
                    "hide": false,
                    "filterParams": {"selectAllOnMiniFilter": true}
                }, {
                    "field": "17val36",
                    "cellClass": ["overflow-visible", "ag-flex-align--right", "no-right-border"],
                    "headerClass": "no-right-border",
                    "width": 110,
                    "headerName": "Header 12",
                    "hide": false,
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "cellRendererParams": {
                        "colData": {
                            "val110": 17,
                            "val111": "99541",
                            "val112": "Header 21",
                            "val29": 4,
                            "startDate": 1554076800000,
                            "endDate": 1554422400000,
                            "val113": false
                        },
                        "isDisabled": false,
                        "val114": [{
                            "val115": 1,
                            "val116": "val118",
                            "val25": false,
                            "val117": true,
                            "name": "PP",
                            "index": 1,
                            "key": 1
                        }, {
                            "val115": 2,
                            "val116": "val119",
                            "val25": false,
                            "val117": false,
                            "name": "val120",
                            "index": 2,
                            "key": 2
                        }, {
                            "val115": 3,
                            "val116": "val119",
                            "val25": true,
                            "val117": true,
                            "name": "val120",
                            "index": 3,
                            "key": 3
                        }]
                    }
                }, {
                    "field": "17val35",
                    "cellClass": ["overflow-visible", "ag-flex-align--right"],
                    "width": 110,
                    "headerName": "Header 20",
                    "hide": false,
                    "editable": true,
                    "cellRendererParams": {
                        "colData": {
                            "val110": 17,
                            "val111": "99541",
                            "val112": "Header 21",
                            "val29": 4,
                            "startDate": 1554076800000,
                            "endDate": 1554422400000,
                            "val113": false
                        },
                        "isDisabled": false,
                        "val114": [{
                            "val115": 1,
                            "val116": "val118",
                            "val25": false,
                            "val117": true,
                            "name": "PP",
                            "index": 1,
                            "key": 1
                        }, {
                            "val115": 2,
                            "val116": "val119",
                            "val25": false,
                            "val117": false,
                            "name": "val120",
                            "index": 2,
                            "key": 2
                        }, {
                            "val115": 3,
                            "val116": "val119",
                            "val25": true,
                            "val117": true,
                            "name": "val120",
                            "index": 3,
                            "key": 3
                        }]
                    },
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "cellEditorParams": {
                        "colData": {
                            "val110": 17,
                            "val111": "99541",
                            "val112": "Header 21",
                            "val29": 4,
                            "startDate": 1554076800000,
                            "endDate": 1554422400000,
                            "val113": false
                        },
                        "isDisabled": false,
                        "val114": [{
                            "val115": 1,
                            "val116": "val118",
                            "val25": false,
                            "val117": true,
                            "name": "PP",
                            "index": 1,
                            "key": 1
                        }, {
                            "val115": 2,
                            "val116": "val119",
                            "val25": false,
                            "val117": false,
                            "name": "val120",
                            "index": 2,
                            "key": 2
                        }, {
                            "val115": 3,
                            "val116": "val119",
                            "val25": true,
                            "val117": true,
                            "name": "val120",
                            "index": 3,
                            "key": 3
                        }]
                    }
                }],
                "filterParams": {"selectAllOnMiniFilter": true}
            }, {
                "field": "val130",
                "hide": false,
                "children": [{
                    "field": "21val33",
                    "headerName": "Header 11",
                    "width": 90,
                    "cellClass": ["ag-flex-align--right", "no-right-border"],
                    "headerClass": "no-right-border",
                    "hide": false,
                    "filterParams": {"selectAllOnMiniFilter": true}
                }, {
                    "field": "21val36",
                    "cellClass": ["overflow-visible", "ag-flex-align--right", "no-right-border"],
                    "headerClass": "no-right-border",
                    "width": 110,
                    "headerName": "Header 12",
                    "hide": false,
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "cellRendererParams": {
                        "colData": {
                            "val110": 21,
                            "val111": "99542",
                            "val112": "val130",
                            "val29": 4,
                            "startDate": 1554076800000,
                            "endDate": 1555027200000,
                            "val113": false
                        },
                        "isDisabled": false,
                        "val114": [{
                            "val115": 1,
                            "val116": "val118",
                            "val25": false,
                            "val117": true,
                            "name": "PP",
                            "index": 1,
                            "key": 1
                        }, {
                            "val115": 2,
                            "val116": "val119",
                            "val25": false,
                            "val117": false,
                            "name": "val120",
                            "index": 2,
                            "key": 2
                        }, {
                            "val115": 3,
                            "val116": "val119",
                            "val25": true,
                            "val117": true,
                            "name": "val120",
                            "index": 3,
                            "key": 3
                        }]
                    }
                }, {
                    "field": "21val35",
                    "cellClass": ["overflow-visible", "ag-flex-align--right"],
                    "width": 110,
                    "headerName": "Header 20",
                    "hide": false,
                    "editable": true,
                    "cellRendererParams": {
                        "colData": {
                            "val110": 21,
                            "val111": "99542",
                            "val112": "val130",
                            "val29": 4,
                            "startDate": 1554076800000,
                            "endDate": 1555027200000,
                            "val113": false
                        },
                        "isDisabled": false,
                        "val114": [{
                            "val115": 1,
                            "val116": "val118",
                            "val25": false,
                            "val117": true,
                            "name": "PP",
                            "index": 1,
                            "key": 1
                        }, {
                            "val115": 2,
                            "val116": "val119",
                            "val25": false,
                            "val117": false,
                            "name": "val120",
                            "index": 2,
                            "key": 2
                        }, {
                            "val115": 3,
                            "val116": "val119",
                            "val25": true,
                            "val117": true,
                            "name": "val120",
                            "index": 3,
                            "key": 3
                        }]
                    },
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "cellEditorParams": {
                        "colData": {
                            "val110": 21,
                            "val111": "99542",
                            "val112": "val130",
                            "val29": 4,
                            "startDate": 1554076800000,
                            "endDate": 1555027200000,
                            "val113": false
                        },
                        "isDisabled": false,
                        "val114": [{
                            "val115": 1,
                            "val116": "val118",
                            "val25": false,
                            "val117": true,
                            "name": "PP",
                            "index": 1,
                            "key": 1
                        }, {
                            "val115": 2,
                            "val116": "val119",
                            "val25": false,
                            "val117": false,
                            "name": "val120",
                            "index": 2,
                            "key": 2
                        }, {
                            "val115": 3,
                            "val116": "val119",
                            "val25": true,
                            "val117": true,
                            "name": "val120",
                            "index": 3,
                            "key": 3
                        }]
                    }
                }],
                "filterParams": {"selectAllOnMiniFilter": true}
            }, {
                "field": "val131",
                "hide": false,
                "children": [{
                    "field": "36val33",
                    "headerName": "Header 11",
                    "width": 90,
                    "cellClass": ["ag-flex-align--right", "no-right-border"],
                    "headerClass": "no-right-border",
                    "hide": false,
                    "filterParams": {"selectAllOnMiniFilter": true}
                }, {
                    "field": "36val36",
                    "cellClass": ["overflow-visible", "ag-flex-align--right", "no-right-border"],
                    "headerClass": "no-right-border",
                    "width": 110,
                    "headerName": "Header 12",
                    "hide": false,
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "cellRendererParams": {
                        "colData": {
                            "val110": 36,
                            "val111": "99543",
                            "val112": "val131",
                            "val29": 4,
                            "startDate": 1554940800000,
                            "endDate": 1555286400000,
                            "val113": false
                        },
                        "isDisabled": false,
                        "val114": [{
                            "val115": 1,
                            "val116": "val118",
                            "val25": false,
                            "val117": true,
                            "name": "PP",
                            "index": 1,
                            "key": 1
                        }, {
                            "val115": 2,
                            "val116": "val119",
                            "val25": false,
                            "val117": false,
                            "name": "val120",
                            "index": 2,
                            "key": 2
                        }, {
                            "val115": 3,
                            "val116": "val119",
                            "val25": true,
                            "val117": true,
                            "name": "val120",
                            "index": 3,
                            "key": 3
                        }]
                    }
                }, {
                    "field": "36val35",
                    "cellClass": ["overflow-visible", "ag-flex-align--right"],
                    "width": 110,
                    "headerName": "Header 20",
                    "hide": false,
                    "editable": true,
                    "cellRendererParams": {
                        "colData": {
                            "val110": 36,
                            "val111": "99543",
                            "val112": "val131",
                            "val29": 4,
                            "startDate": 1554940800000,
                            "endDate": 1555286400000,
                            "val113": false
                        },
                        "isDisabled": false,
                        "val114": [{
                            "val115": 1,
                            "val116": "val118",
                            "val25": false,
                            "val117": true,
                            "name": "PP",
                            "index": 1,
                            "key": 1
                        }, {
                            "val115": 2,
                            "val116": "val119",
                            "val25": false,
                            "val117": false,
                            "name": "val120",
                            "index": 2,
                            "key": 2
                        }, {
                            "val115": 3,
                            "val116": "val119",
                            "val25": true,
                            "val117": true,
                            "name": "val120",
                            "index": 3,
                            "key": 3
                        }]
                    },
                    "filterParams": {"selectAllOnMiniFilter": true},
                    "cellEditorParams": {
                        "colData": {
                            "val110": 36,
                            "val111": "99543",
                            "val112": "val131",
                            "val29": 4,
                            "startDate": 1554940800000,
                            "endDate": 1555286400000,
                            "val113": false
                        },
                        "isDisabled": false,
                        "val114": [{
                            "val115": 1,
                            "val116": "val118",
                            "val25": false,
                            "val117": true,
                            "name": "PP",
                            "index": 1,
                            "key": 1
                        }, {
                            "val115": 2,
                            "val116": "val119",
                            "val25": false,
                            "val117": false,
                            "name": "val120",
                            "index": 2,
                            "key": 2
                        }, {
                            "val115": 3,
                            "val116": "val119",
                            "val25": true,
                            "val117": true,
                            "name": "val120",
                            "index": 3,
                            "key": 3
                        }]
                    }
                }],
                "filterParams": {"selectAllOnMiniFilter": true}
            }];
        }
        return [{
            "field": "",
            "headerClass": "no-bottom-border",
            "suppressMenu": true,
            "includedInDetailView": true,
            "excludedFromSummaryView": false,
            "children": [{
                "field": null,
                "headerName": "",
                "suppressMenu": true,
                "headerClass": "no-right-border",
                "cellClass": "no-right-border",
                "width": 20,
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": false,
                "pinned": null
            }, {
                "field": "val27",
                "headerName": "Header 1",
                "suppressSizeToFit": true,
                "width": 260,
                "leftAlign": true,
                "filter": "agSetColumnFilter",
                "filterParams": {"selectAllOnMiniFilter": true},
                "headerClass": ["no-left-border", "no-right-border", "menu"],
                "cellClass": ["no-left-border", "no-right-border"],
                "hide": false,
                "pinned": null
            }, {
                "field": "status",
                "headerName": "",
                "headerClass": "no-left-border",
                "cellClass": ["no-left-border", "status-sync"],
                "width": 37,
                "suppressMenu": true,
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": false,
                "pinned": null
            }],
            "hide": false,
            "pinned": null,
            "filterParams": {"selectAllOnMiniFilter": true}
        }, {
            "field": "",
            "headerName": "Header 2",
            "includedInDetailView": true,
            "excludedFromSummaryView": true,
            "suppressMenu": true,
            "children": [{
                "field": "val26",
                "headerName": "Header 3",
                "cellClass": "ag-flex-align--right",
                "includedInDetailView": true,
                "width": 80,
                "excludedFromSummaryView": true,
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": true,
                "pinned": null
            }, {
                "field": "val22",
                "headerName": "Header 4",
                "cellClass": ["ag-flex-align--right", "no-right-border"],
                "headerClass": "no-right-border",
                "width": 80,
                "includedInDetailView": true,
                "excludedFromSummaryView": true,
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": true,
                "pinned": null
            }, {
                "field": "val24",
                "headerName": "Header 5",
                "cellClass": ["ag-flex-align--right", "no-right-border"],
                "headerClass": "no-right-border",
                "width": 110,
                "includedInDetailView": true,
                "excludedFromSummaryView": true,
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": true,
                "pinned": null
            }, {
                "field": "val23",
                "headerName": "Header 6",
                "cellClass": "ag-flex-align--right",
                "width": 110,
                "includedInDetailView": true,
                "excludedFromSummaryView": true,
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": true,
                "pinned": null
            }],
            "hide": true,
            "pinned": null,
            "filterParams": {"selectAllOnMiniFilter": true}
        }, {
            "field": "val100",
            "headerName": "Header 2",
            "children": [{
                "field": "val22",
                "headerName": "Header 4",
                "cellClass": "ag-flex-align--right no-right-border",
                "headerClass": "no-right-border",
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": false,
                "pinned": null
            }, {
                "field": "val24",
                "headerName": "Header 5",
                "cellClass": ["ag-flex-align--right", "no-right-border"],
                "headerClass": "no-right-border",
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": false,
                "pinned": null
            }, {
                "field": "val23",
                "headerName": "Header 6",
                "cellClass": "ag-flex-align--right",
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": false,
                "pinned": null
            }],
            "hide": false,
            "pinned": null,
            "filterParams": {"selectAllOnMiniFilter": true}
        }, {
            "field": "val101",
            "headerName": "Header 7",
            "children": [{
                "field": "val18",
                "headerName": "Header 4",
                "cellClass": "ag-flex-align--right no-right-border",
                "headerClass": "no-right-border",
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": false,
                "pinned": null
            }, {
                "field": "val20",
                "headerName": "Header 5",
                "headerClass": "no-right-border",
                "cellClass": ["ag-flex-align--right", "no-right-border"],
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": false,
                "pinned": null
            }, {
                "field": "val19",
                "headerName": "Header 6",
                "cellClass": "ag-flex-align--right",
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": false,
                "pinned": null
            }],
            "hide": false,
            "pinned": null,
            "filterParams": {"selectAllOnMiniFilter": true}
        }, {
            "field": "val103",
            "headerName": "Header 8",
            "children": [{
                "field": "val14",
                "headerName": "Header 4",
                "cellClass": "ag-flex-align--right no-right-border",
                "headerClass": "no-right-border",
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": false,
                "pinned": null
            }, {
                "field": "val16",
                "headerName": "Header 9",
                "width": 80,
                "cellClass": ["ag-flex-align--right", "no-right-border"],
                "headerClass": "no-right-border",
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": false,
                "pinned": null
            }, {
                "field": "val15",
                "headerName": "Header 10",
                "width": 80,
                "cellClass": "ag-flex-align--right",
                "filterParams": {"selectAllOnMiniFilter": true},
                "hide": false,
                "pinned": null
            }],
            "hide": false,
            "pinned": null,
            "filterParams": {"selectAllOnMiniFilter": true}
        }, {
            "field": "Main",
            "hide": true,
            "children": [{
                "field": "11val33",
                "headerName": "Header 11",
                "width": 90,
                "cellClass": ["ag-flex-align--right", "no-right-border"],
                "headerClass": "no-right-border",
                "hide": true,
                "filterParams": {"selectAllOnMiniFilter": true}
            }, {
                "field": "11val36",
                "cellClass": ["overflow-visible", "ag-flex-align--right", "no-right-border"],
                "headerClass": "no-right-border",
                "width": 110,
                "headerName": "Header 12",
                "hide": true,
                "filterParams": {"selectAllOnMiniFilter": true},
                "cellRendererParams": {
                    "colData": {
                        "val110": 11,
                        "val111": "9954",
                        "val112": "Main",
                        "val29": 4,
                        "startDate": 1554076800000,
                        "endDate": 1556582400000,
                        "val113": true
                    },
                    "isDisabled": false,
                    "val114": [{
                        "val115": 1,
                        "val116": "val118",
                        "val25": false,
                        "val117": true,
                        "name": "PP",
                        "index": 1,
                        "key": 1
                    }, {
                        "val115": 2,
                        "val116": "val119",
                        "val25": false,
                        "val117": false,
                        "name": "val120",
                        "index": 2,
                        "key": 2
                    }, {
                        "val115": 3,
                        "val116": "val119",
                        "val25": true,
                        "val117": true,
                        "name": "val120",
                        "index": 3,
                        "key": 3
                    }]
                }
            }, {
                "field": "11val35",
                "cellClass": ["overflow-visible", "ag-flex-align--right"],
                "width": 110,
                "headerName": "Header 20",
                "hide": true,
                "editable": true,
                "cellRendererParams": {
                    "colData": {
                        "val110": 11,
                        "val111": "9954",
                        "val112": "Main",
                        "val29": 4,
                        "startDate": 1554076800000,
                        "endDate": 1556582400000,
                        "val113": true
                    },
                    "isDisabled": false,
                    "val114": [{
                        "val115": 1,
                        "val116": "val118",
                        "val25": false,
                        "val117": true,
                        "name": "PP",
                        "index": 1,
                        "key": 1
                    }, {
                        "val115": 2,
                        "val116": "val119",
                        "val25": false,
                        "val117": false,
                        "name": "val120",
                        "index": 2,
                        "key": 2
                    }, {
                        "val115": 3,
                        "val116": "val119",
                        "val25": true,
                        "val117": true,
                        "name": "val120",
                        "index": 3,
                        "key": 3
                    }]
                },
                "filterParams": {"selectAllOnMiniFilter": true},
                "cellEditorParams": {
                    "colData": {
                        "val110": 11,
                        "val111": "9954",
                        "val112": "Main",
                        "val29": 4,
                        "startDate": 1554076800000,
                        "endDate": 1556582400000,
                        "val113": true
                    },
                    "isDisabled": false,
                    "val114": [{
                        "val115": 1,
                        "val116": "val118",
                        "val25": false,
                        "val117": true,
                        "name": "PP",
                        "index": 1,
                        "key": 1
                    }, {
                        "val115": 2,
                        "val116": "val119",
                        "val25": false,
                        "val117": false,
                        "name": "val120",
                        "index": 2,
                        "key": 2
                    }, {
                        "val115": 3,
                        "val116": "val119",
                        "val25": true,
                        "val117": true,
                        "name": "val120",
                        "index": 3,
                        "key": 3
                    }]
                }
            }],
            "filterParams": {"selectAllOnMiniFilter": true}
        }, {
            "field": "Header 21",
            "hide": true,
            "children": [{
                "field": "17val33",
                "headerName": "Header 11",
                "width": 90,
                "cellClass": ["ag-flex-align--right", "no-right-border"],
                "headerClass": "no-right-border",
                "hide": true,
                "filterParams": {"selectAllOnMiniFilter": true}
            }, {
                "field": "17val36",
                "cellClass": ["overflow-visible", "ag-flex-align--right", "no-right-border"],
                "headerClass": "no-right-border",
                "width": 110,
                "headerName": "Header 12",
                "hide": true,
                "filterParams": {"selectAllOnMiniFilter": true},
                "cellRendererParams": {
                    "colData": {
                        "val110": 17,
                        "val111": "99541",
                        "val112": "Header 21",
                        "val29": 4,
                        "startDate": 1554076800000,
                        "endDate": 1554422400000,
                        "val113": false
                    },
                    "isDisabled": false,
                    "val114": [{
                        "val115": 1,
                        "val116": "val118",
                        "val25": false,
                        "val117": true,
                        "name": "PP",
                        "index": 1,
                        "key": 1
                    }, {
                        "val115": 2,
                        "val116": "val119",
                        "val25": false,
                        "val117": false,
                        "name": "val120",
                        "index": 2,
                        "key": 2
                    }, {
                        "val115": 3,
                        "val116": "val119",
                        "val25": true,
                        "val117": true,
                        "name": "val120",
                        "index": 3,
                        "key": 3
                    }]
                }
            }, {
                "field": "17val35",
                "cellClass": ["overflow-visible", "ag-flex-align--right"],
                "width": 110,
                "headerName": "Header 20",
                "hide": true,
                "editable": true,
                "cellRendererParams": {
                    "colData": {
                        "val110": 17,
                        "val111": "99541",
                        "val112": "Header 21",
                        "val29": 4,
                        "startDate": 1554076800000,
                        "endDate": 1554422400000,
                        "val113": false
                    },
                    "isDisabled": false,
                    "val114": [{
                        "val115": 1,
                        "val116": "val118",
                        "val25": false,
                        "val117": true,
                        "name": "PP",
                        "index": 1,
                        "key": 1
                    }, {
                        "val115": 2,
                        "val116": "val119",
                        "val25": false,
                        "val117": false,
                        "name": "val120",
                        "index": 2,
                        "key": 2
                    }, {
                        "val115": 3,
                        "val116": "val119",
                        "val25": true,
                        "val117": true,
                        "name": "val120",
                        "index": 3,
                        "key": 3
                    }]
                },
                "filterParams": {"selectAllOnMiniFilter": true},
                "cellEditorParams": {
                    "colData": {
                        "val110": 17,
                        "val111": "99541",
                        "val112": "Header 21",
                        "val29": 4,
                        "startDate": 1554076800000,
                        "endDate": 1554422400000,
                        "val113": false
                    },
                    "isDisabled": false,
                    "val114": [{
                        "val115": 1,
                        "val116": "val118",
                        "val25": false,
                        "val117": true,
                        "name": "PP",
                        "index": 1,
                        "key": 1
                    }, {
                        "val115": 2,
                        "val116": "val119",
                        "val25": false,
                        "val117": false,
                        "name": "val120",
                        "index": 2,
                        "key": 2
                    }, {
                        "val115": 3,
                        "val116": "val119",
                        "val25": true,
                        "val117": true,
                        "name": "val120",
                        "index": 3,
                        "key": 3
                    }]
                }
            }],
            "filterParams": {"selectAllOnMiniFilter": true}
        }, {
            "field": "val130",
            "hide": true,
            "children": [{
                "field": "21val33",
                "headerName": "Header 11",
                "width": 90,
                "cellClass": ["ag-flex-align--right", "no-right-border"],
                "headerClass": "no-right-border",
                "hide": true,
                "filterParams": {"selectAllOnMiniFilter": true}
            }, {
                "field": "21val36",
                "cellClass": ["overflow-visible", "ag-flex-align--right", "no-right-border"],
                "headerClass": "no-right-border",
                "width": 110,
                "headerName": "Header 12",
                "hide": true,
                "filterParams": {"selectAllOnMiniFilter": true},
                "cellRendererParams": {
                    "colData": {
                        "val110": 21,
                        "val111": "99542",
                        "val112": "val130",
                        "val29": 4,
                        "startDate": 1554076800000,
                        "endDate": 1555027200000,
                        "val113": false
                    },
                    "isDisabled": false,
                    "val114": [{
                        "val115": 1,
                        "val116": "val118",
                        "val25": false,
                        "val117": true,
                        "name": "PP",
                        "index": 1,
                        "key": 1
                    }, {
                        "val115": 2,
                        "val116": "val119",
                        "val25": false,
                        "val117": false,
                        "name": "val120",
                        "index": 2,
                        "key": 2
                    }, {
                        "val115": 3,
                        "val116": "val119",
                        "val25": true,
                        "val117": true,
                        "name": "val120",
                        "index": 3,
                        "key": 3
                    }]
                }
            }, {
                "field": "21val35",
                "cellClass": ["overflow-visible", "ag-flex-align--right"],
                "width": 110,
                "headerName": "Header 20",
                "hide": true,
                "editable": true,
                "cellRendererParams": {
                    "colData": {
                        "val110": 21,
                        "val111": "99542",
                        "val112": "val130",
                        "val29": 4,
                        "startDate": 1554076800000,
                        "endDate": 1555027200000,
                        "val113": false
                    },
                    "isDisabled": false,
                    "val114": [{
                        "val115": 1,
                        "val116": "val118",
                        "val25": false,
                        "val117": true,
                        "name": "PP",
                        "index": 1,
                        "key": 1
                    }, {
                        "val115": 2,
                        "val116": "val119",
                        "val25": false,
                        "val117": false,
                        "name": "val120",
                        "index": 2,
                        "key": 2
                    }, {
                        "val115": 3,
                        "val116": "val119",
                        "val25": true,
                        "val117": true,
                        "name": "val120",
                        "index": 3,
                        "key": 3
                    }]
                },
                "filterParams": {"selectAllOnMiniFilter": true},
                "cellEditorParams": {
                    "colData": {
                        "val110": 21,
                        "val111": "99542",
                        "val112": "val130",
                        "val29": 4,
                        "startDate": 1554076800000,
                        "endDate": 1555027200000,
                        "val113": false
                    },
                    "isDisabled": false,
                    "val114": [{
                        "val115": 1,
                        "val116": "val118",
                        "val25": false,
                        "val117": true,
                        "name": "PP",
                        "index": 1,
                        "key": 1
                    }, {
                        "val115": 2,
                        "val116": "val119",
                        "val25": false,
                        "val117": false,
                        "name": "val120",
                        "index": 2,
                        "key": 2
                    }, {
                        "val115": 3,
                        "val116": "val119",
                        "val25": true,
                        "val117": true,
                        "name": "val120",
                        "index": 3,
                        "key": 3
                    }]
                }
            }],
            "filterParams": {"selectAllOnMiniFilter": true}
        }, {
            "field": "val131",
            "hide": true,
            "children": [{
                "field": "36val33",
                "headerName": "Header 11",
                "width": 90,
                "cellClass": ["ag-flex-align--right", "no-right-border"],
                "headerClass": "no-right-border",
                "hide": true,
                "filterParams": {"selectAllOnMiniFilter": true}
            }, {
                "field": "36val36",
                "cellClass": ["overflow-visible", "ag-flex-align--right", "no-right-border"],
                "headerClass": "no-right-border",
                "width": 110,
                "headerName": "Header 12",
                "hide": true,
                "filterParams": {"selectAllOnMiniFilter": true},
                "cellRendererParams": {
                    "colData": {
                        "val110": 36,
                        "val111": "99543",
                        "val112": "val131",
                        "val29": 4,
                        "startDate": 1554940800000,
                        "endDate": 1555286400000,
                        "val113": false
                    },
                    "isDisabled": false,
                    "val114": [{
                        "val115": 1,
                        "val116": "val118",
                        "val25": false,
                        "val117": true,
                        "name": "PP",
                        "index": 1,
                        "key": 1
                    }, {
                        "val115": 2,
                        "val116": "val119",
                        "val25": false,
                        "val117": false,
                        "name": "val120",
                        "index": 2,
                        "key": 2
                    }, {
                        "val115": 3,
                        "val116": "val119",
                        "val25": true,
                        "val117": true,
                        "name": "val120",
                        "index": 3,
                        "key": 3
                    }]
                }
            }, {
                "field": "36val35",
                "cellClass": ["overflow-visible", "ag-flex-align--right"],
                "width": 110,
                "headerName": "Header 20",
                "hide": true,
                "editable": true,
                "cellRendererParams": {
                    "colData": {
                        "val110": 36,
                        "val111": "99543",
                        "val112": "val131",
                        "val29": 4,
                        "startDate": 1554940800000,
                        "endDate": 1555286400000,
                        "val113": false
                    },
                    "isDisabled": false,
                    "val114": [{
                        "val115": 1,
                        "val116": "val118",
                        "val25": false,
                        "val117": true,
                        "name": "PP",
                        "index": 1,
                        "key": 1
                    }, {
                        "val115": 2,
                        "val116": "val119",
                        "val25": false,
                        "val117": false,
                        "name": "val120",
                        "index": 2,
                        "key": 2
                    }, {
                        "val115": 3,
                        "val116": "val119",
                        "val25": true,
                        "val117": true,
                        "name": "val120",
                        "index": 3,
                        "key": 3
                    }]
                },
                "filterParams": {"selectAllOnMiniFilter": true},
                "cellEditorParams": {
                    "colData": {
                        "val110": 36,
                        "val111": "99543",
                        "val112": "val131",
                        "val29": 4,
                        "startDate": 1554940800000,
                        "endDate": 1555286400000,
                        "val113": false
                    },
                    "isDisabled": false,
                    "val114": [{
                        "val115": 1,
                        "val116": "val118",
                        "val25": false,
                        "val117": true,
                        "name": "PP",
                        "index": 1,
                        "key": 1
                    }, {
                        "val115": 2,
                        "val116": "val119",
                        "val25": false,
                        "val117": false,
                        "name": "val120",
                        "index": 2,
                        "key": 2
                    }, {
                        "val115": 3,
                        "val116": "val119",
                        "val25": true,
                        "val117": true,
                        "name": "val120",
                        "index": 3,
                        "key": 3
                    }]
                }
            }],
            "filterParams": {"selectAllOnMiniFilter": true}
        }];
    }

    componentDidUpdate(nextProps, nextState, nextContent){
        if (this.state.dView !== nextState.dView && this.gridApi) {
            this.gridApi.setFilterModel(this.state.filterModel);
        }
    }

    render() {
        const cols = this.createColumnDefs();
        const data = this.createRowData();
        return (
            <div style={{height: '100%'}} className="ag-theme-fresh">
                <button
                    type="button"
                    onClick={() => this.setState({dView: !this.state.dView})}
                >
                   Click to toggle View, Presently {this.state.dView? 'Detailed enabled' : 'Detailed disabled'}
                </button>
                <AgGridReact
                    columnDefs={cols}
                    rowData={data}
                    onFilterChanged={this.onFilterFinished}
                    onGridReady={this.onGridReady}
                />
            </div>
        );
    }
}
