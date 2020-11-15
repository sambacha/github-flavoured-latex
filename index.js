// SPDX-License-Identifier: ISC
'use strict';

import "bootswatch/dist/spacelab/bootstrap.min.css";

function toGithubRenderURL() {
	var input = document.getElementsByName("input")[0].value;
	var output =
		'<img src="https://render.githubusercontent.com/render/math?math=' +
		encodeURIComponent(input) +
		'">';
	document.getElementsByName("output")[0].value = output;
	document.getElementById("result").innerHTML = output;
}

