var block = 0;
function createScript() {
	block++;
	if (block == 9) return;
	var script = document.createElement("script");
	script.onload = createScript;
	script.src =
		"https://impragma.github.io/NeptunJS/blocks/block-" + block + ".js";
	document.head.appendChild(script);
}

//Load all 8 blocks as seperate .js files
(function () {
	createScript();
})();
