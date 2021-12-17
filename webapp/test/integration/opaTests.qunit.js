/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["AppFioriAluno01/appfiorialuno01/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
