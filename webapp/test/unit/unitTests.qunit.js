/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"TestApp3/TestApp3/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});